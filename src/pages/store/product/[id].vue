<template>
  <div class="min-h-screen pt-24 lg:pt-32 px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto space-y-12 lg:space-y-16">
      <!-- Кнопка назад -->
      <button
        @click="goBack"
        class="mb-6 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <!-- Контент: фото и описание (50/50 flex) -->
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Блок с фото -->
        <div class="w-full lg:w-1/2">
          <div class="bg-[#242424] rounded-3xl p-8 lg:p-12 pb-0 lg:pb-0 flex items-end justify-center min-h-[400px] lg:min-h-[600px]">
            <img
              :src="productImage"
              :alt="product.title"
              class="w-full h-full object-contain max-h-[500px]"
            />
          </div>
        </div>

        <!-- Блок с описанием -->
        <div class="w-full lg:w-1/2 flex flex-col justify-around">
          <!-- Заголовок -->
          <div>
            <h1 class="text-3xl lg:text-5xl font-bold text-white mb-6">
              {{ product.title }}
            </h1>

            <!-- Описание -->
            <p class="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
              {{ productDescription }}
            </p>
          </div>

          <!-- Кнопки -->
          <div class="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="md"
              class="flex-1"
            >
              {{ $t('store.product.submitRequest') }}
            </Button>
            <Button
              variant="primary"
              size="md"
              class="flex-1"
            >
              {{ $t('store.product.orderTerms') }}
            </Button>
          </div>
        </div>
      </div>

      <!-- Преимущества -->
      <section v-if="advantagesToShow.length" class="bg-[#161616] border border-white/10 rounded-3xl p-6 lg:p-8 space-y-4">
        <h2 class="text-white text-xl lg:text-2xl font-semibold">
          {{ $t('store.product.advantages') }}
        </h2>
        <div class="grid grid-cols-1 gap-3">
          <div
            v-for="adv in advantagesToShow"
            :key="adv.id"
            class="flex items-start gap-3 text-white/90 px-4 py-3"
          >
            <div class="text-2xl leading-none">{{ getEmoji(adv.icon) }}</div>
            <p class="text-sm lg:text-base leading-relaxed">
              {{ $t(adv.text) }}
            </p>
          </div>
        </div>
      </section>

      <!-- Похожие продукты -->
      <section class="space-y-4 lg:space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-white text-xl lg:text-2xl font-semibold">
            {{ $t('store.product.otherProducts') }}
          </h2>
        </div>
        <ProductsSlider :products="similarProducts" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProducts } from '@widgets/main'
import { Button, ProductsSlider } from '@shared/ui'
import type { Product, ProductAdvantage } from '@entities/product'

const route = useRoute()
const router = useRouter()

useHead({
  title: 'Product - KOZMAP'
})

const { products } = useProducts()

const product = computed<Product>(() => {
  const foundProduct = products.value.find(p => p.id === route.params.id as string)
  
  if (!foundProduct) {
    return {
      id: route.params.id as string,
      title: 'Product not found',
      description: '',
      status: null,
      image: null
    }
  }

  return foundProduct
})

const productImage = computed(() => {
  return product.value.image || '~/assets/images/card_placeholder.png'
})

const productDescription = computed(() => {
  if (product.value.description) {
    return product.value.description
  }
  
  // Дефолтное описание, если его нет
  return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
})

const defaultAdvantages: ProductAdvantage[] = [
  { id: '1', icon: 'shield-check', text: 'advantages.regulatorTrusted' },
  { id: '2', icon: 'lock', text: 'advantages.tamperProof' },
  { id: '3', icon: 'lightning', text: 'advantages.lightningTurnaround' },
  { id: '4', icon: 'wrench', text: 'advantages.encryption' },
  { id: '5', icon: 'satellite', text: 'advantages.realTimeTracking' },
  { id: '6', icon: 'headphones', text: 'advantages.prioritySupport' }
]

const advantagesToShow = computed(() => {
  return product.value.advantages?.length ? product.value.advantages : defaultAdvantages
})

const similarProducts = computed(() => {
  return products.value.filter(p => p.id !== product.value.id)
})

const getEmoji = (icon: string) => {
  switch (icon) {
    case 'shield-check':
      return '🛡️'
    case 'lock':
      return '🔒'
    case 'lightning':
      return '⚡'
    case 'wrench':
      return '🛠️'
    case 'satellite':
      return '📡'
    case 'headphones':
      return '🎧'
    default:
      return '•'
  }
}

const goBack = () => {
  router.back()
}
</script>

