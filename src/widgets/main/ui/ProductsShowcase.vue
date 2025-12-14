<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-12">
        <div>
          <h2 class="text-white text-2xl lg:text-4xl font-bold">
            {{ $t('products.title') }}
          </h2>
        </div>

        <GlowButton @click="handleViewAllProducts">
          {{ $t('products.viewAll') }}
        </GlowButton>
      </div>

      <ProductsSlider :products="products" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { GlowButton, ProductsSlider } from '@shared/ui'
import { useProducts } from '../hook/useProducts'

const { products } = useProducts()

const handleViewAllProducts = () => {
  console.log('View all products clicked')
}
</script>

