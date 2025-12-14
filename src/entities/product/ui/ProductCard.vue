<template>
  <NuxtLink :to="productPath" class="block h-full">
    <div class="rounded-3xl overflow-hidden flex flex-col h-full bg-[#161616] cursor-pointer hover:opacity-90 transition-opacity">
    <!-- Верхняя часть с изображением -->
    <div
      class="w-full relative bg-[#242424] rounded-t-3xl flex items-center justify-center overflow-hidden"
      :class="product.image ? 'aspect-[16/12] md:aspect-[16/14]' : 'aspect-[16/12] md:aspect-[16/14]'"
    >
      <img
        v-if="product.image"
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-contain"
      />
      
      <!-- Чип Popular -->
      <div
        v-if="product.status"
        class="absolute bottom-4 left-4"
      >
        <span :class="getStatusColor(product.status)" class="text-xs font-medium px-4 py-2 rounded-full">
          {{ $t(`products.status.${product.status}`) }}
        </span>
      </div>
    </div>
    
    <!-- Контент карточки -->
    <div class="flex-1 flex flex-col p-6 bg-[#161616]">
      <!-- Заголовок -->
      <h3 class="text-white font-bold text-lg mb-2 line-clamp-2">
        {{ product.title }}
      </h3>
      
      <!-- Описание -->
      <p class="text-white/60 text-sm line-clamp-2 flex-1">
        {{ product.description }}
      </p>
    </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import type { Product } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  product: Product
}>()

const instance = getCurrentInstance()
const { locale } = useI18n()

const productPath = computed(() => {
  const basePath = `/store/product/${props.product.id}`
  const localePath = instance?.appContext.config.globalProperties.$localePath
  
  if (localePath && typeof localePath === 'function') {
    return localePath(basePath)
  }
  
  // Fallback: добавляем префикс локали, если это не дефолтная локаль
  if (locale.value !== 'ru') {
    return `/${locale.value}${basePath}`
  }
  
  return basePath
})

const getStatusColor = (status: string) => {
  switch (status) {
    case 'popular':
      return 'bg-[#FF8C00] text-white'
    case 'new':
      return 'bg-[#FFFFFF] text-black'
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

