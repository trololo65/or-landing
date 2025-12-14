<template>
  <header
    class="fixed left-0 right-0 z-40 overflow-hidden transition-all duration-500 ease-in-out"
    :class="[headerClasses, responsiveClasses]"
    :style="{ height: headerHeight }"
    @mouseenter="handleHeaderHover"
    @mouseleave="handleHeaderLeave"
  >
    <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- Лого -->
        <NuxtLink :to="localePath('/')" class="flex items-center">
          <img src="~/assets/images/logo.svg" alt="KOZMAP" class="h-8 w-auto" />
        </NuxtLink>
        
        <!-- Десктопная навигация -->
        <nav class="hidden lg:flex items-center space-x-1">
          <button
            v-for="item in navItems"
            :key="item.href"
            @mouseenter="() => handleNavItemHover(item)"
            @click="() => navigateToItem(item)"
            class="px-5 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-full transition-all duration-300"
            :class="{ 'bg-white/10': activeMegaMenu === item.key.toLowerCase() }"
          >
            {{ $t(item.labelKey) }}
          </button>
        </nav>
        
        <!-- Действия -->
        <div class="flex items-center gap-4">
          <!-- Селект языка (только десктоп) -->
          <Select
            v-model="currentLocale"
            :options="languageOptions"
            class="hidden lg:block"
          />
          
          <!-- Кнопка контакта (только десктоп) -->
          <Button
            variant="primary"
            size="md"
            class="hidden lg:inline-flex"
            @click="handleContactClick"
          >
            {{ $t('header.contact') }}
          </Button>
          
          <!-- Кнопка мобильного меню -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-90': isMobileMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Мега-меню -->
    <div
      ref="megaMenuContainer"
      class="overflow-hidden transition-all duration-500 ease-in-out"
      :style="{ maxHeight: activeMegaMenu && megaMenuContent ? megaMenuHeight : '0px' }"
    >
      <MegaMenu
        v-if="activeMegaMenu && megaMenuContent"
        :is-open="!!activeMegaMenu"
        :content="megaMenuContent"
        @keep-open="keepMegaMenuOpen"
        @close="closeMegaMenu"
      />
    </div>
    
    <!-- Мобильное меню -->
    <MobileMenu
      :is-open="isMobileMenuOpen"
      :nav-items="navItems"
      @close="closeMobileMenu"
      @open-contact="isContactModalOpen = true"
    />
    
    <!-- Модальное окно контактов -->
    <ContactModal v-model="isContactModalOpen" />
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { Button, Select, ContactModal } from '@shared/ui'
import { useHeader } from '../hook/useHeader'
import MobileMenu from './MobileMenu.vue'
import MegaMenu from './MegaMenu.vue'
import type { NavItem } from '../model/types'
import { megaMenuData } from '../model/megaMenuData'

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const { isScrolled, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useHeader()

const isHeaderHovered = ref(false)
const activeMegaMenu = ref<string | null>(null)
const megaMenuContainer = ref<HTMLElement | null>(null)
const megaMenuHeight = ref('0px')
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const isContactModalOpen = ref(false)
let megaMenuCloseTimeout: NodeJS.Timeout | null = null

const baseHeaderHeight = '80px' // h-20
const baseHeaderHeightLg = '96px' // h-24

const headerHeight = computed(() => {
  if (activeMegaMenu.value && megaMenuContent.value) {
    const baseHeight = windowWidth.value >= 1024 ? baseHeaderHeightLg : baseHeaderHeight
    const menuHeight = megaMenuHeight.value === '0px' ? '0px' : megaMenuHeight.value
    return `calc(${baseHeight} + ${menuHeight})`
  }
  return windowWidth.value >= 1024 ? baseHeaderHeightLg : baseHeaderHeight
})

const updateMegaMenuHeight = async () => {
  if (!megaMenuContainer.value) return
  
  await nextTick()
  await nextTick() // Дополнительный nextTick для гарантии рендеринга Transition
  
  if (activeMegaMenu.value && megaMenuContent.value) {
    // Ищем первый дочерний div внутри контейнера (это будет Transition > div)
    const megaMenuElement = megaMenuContainer.value.querySelector('div > div')
    if (megaMenuElement) {
      const height = megaMenuElement.scrollHeight
      megaMenuHeight.value = `${height}px`
    } else {
      // Fallback: используем высоту самого контейнера
      const height = megaMenuContainer.value.scrollHeight
      if (height > 0) {
        megaMenuHeight.value = `${height}px`
      }
    }
  } else {
    megaMenuHeight.value = '0px'
  }
}

const handleResize = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
    updateMegaMenuHeight()
  }
}

const navItems = computed<NavItem[]>(() => [
  { key: 'home', labelKey: 'header.nav.home', href: '/', hasMegaMenu: false },
  { key: 'solutions', labelKey: 'header.nav.solutions', href: '/solutions', hasMegaMenu: true },
  { key: 'coaching', labelKey: 'header.nav.coaching', href: '/coaching', hasMegaMenu: true },
  { key: 'articles', labelKey: 'header.nav.articles', href: '/articles', hasMegaMenu: true },
  { key: 'products', labelKey: 'header.nav.products', href: '/products', hasMegaMenu: true },
])

const megaMenuContent = computed(() => {
  if (!activeMegaMenu.value) return null
  return megaMenuData[activeMegaMenu.value] || null
})

watch([activeMegaMenu, megaMenuContent], () => {
  updateMegaMenuHeight()
})

onMounted(() => {
  updateMegaMenuHeight()
  
  // Обновляем высоту при изменении размера окна
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }
  if (megaMenuCloseTimeout) {
    clearTimeout(megaMenuCloseTimeout)
  }
})

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
})

const languageOptions = computed(() => [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
])

const headerClasses = computed(() => {
  const shouldShowBackground = isScrolled.value || isHeaderHovered.value || !!activeMegaMenu.value
  return shouldShowBackground
    ? 'bg-white/10 backdrop-blur-2xl shadow-lg'
    : 'bg-white/5 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none'
})

const responsiveClasses = computed(() => {
  return 'top-0 lg:top-4 lg:mx-4 lg:rounded-t-3xl'
})

const handleHeaderHover = () => {
  isHeaderHovered.value = true
  if (megaMenuCloseTimeout) {
    clearTimeout(megaMenuCloseTimeout)
    megaMenuCloseTimeout = null
  }
}

const handleHeaderLeave = () => {
  isHeaderHovered.value = false
  megaMenuCloseTimeout = setTimeout(() => {
    activeMegaMenu.value = null
  }, 150)
}

const handleNavItemHover = (item: NavItem) => {
  if (megaMenuCloseTimeout) {
    clearTimeout(megaMenuCloseTimeout)
    megaMenuCloseTimeout = null
  }
  
  if (item.hasMegaMenu) {
    activeMegaMenu.value = item.key.toLowerCase()
  } else {
    activeMegaMenu.value = null
  }
}

const navigateToItem = (item: NavItem) => {
  if (!item.hasMegaMenu) {
    router.push(localePath(item.href))
  }
}

const closeMegaMenu = () => {
  megaMenuCloseTimeout = setTimeout(() => {
    activeMegaMenu.value = null
  }, 150)
}

const keepMegaMenuOpen = () => {
  if (megaMenuCloseTimeout) {
    clearTimeout(megaMenuCloseTimeout)
    megaMenuCloseTimeout = null
  }
}

const handleContactClick = () => {
  isContactModalOpen.value = true
}
</script>

