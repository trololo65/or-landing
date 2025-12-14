<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed w-screen h-screen inset-0 z-[100] lg:hidden"
      >
        <!-- Фон меню -->
        <div class="absolute inset-0 bg-gray-900/95 backdrop-blur-xl">
          <div class="flex flex-col h-full">
            <!-- Хедер меню -->
            <div class="flex items-center justify-between p-6 border-b border-white/10">
              <img src="~/assets/images/logo.svg" alt="KOZMAP" class="h-8 w-auto" />
              <button
                @click="$emit('close')"
                class="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <!-- Навигация -->
            <nav class="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
              <NuxtLink
                v-for="item in navItems"
                :key="item.href"
                :to="localePath(item.href)"
                :target="item.external ? '_blank' : undefined"
                class="block px-4 py-3 text-lg text-white hover:bg-white/10 rounded-xl transition-colors"
                @click="$emit('close')"
              >
                {{ $t(item.labelKey) }}
              </NuxtLink>
            </nav>
            
            <!-- Футер меню -->
            <div class="p-6 space-y-4 border-t border-white/10">
              <div>
                  <Select
                    v-model="currentLocale"
                    :options="languageOptions"
                  />
              </div>
              <Button
                variant="primary"
                size="lg"
                full-width
                @click="handleContactClick"
              >
                {{ $t('header.contact') }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Button, Select } from '@shared/ui'
import type { NavItem } from '../model/types'

interface Props {
  isOpen: boolean
  navItems: NavItem[]
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
  'open-contact': []
}>()

const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const currentLocale = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
})

const languageOptions = computed(() => [
  { value: 'ru', label: 'RU' },
  { value: 'en', label: 'EN' },
])

const handleContactClick = () => {
  emit('close')
  emit('open-contact')
}
</script>

