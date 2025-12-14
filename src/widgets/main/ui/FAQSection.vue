<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-white text-2xl lg:text-4xl font-bold mb-8 lg:mb-12">
        {{ $t('faq.title') }}
      </h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FAQ :items="leftColumnItems" :default-open-id="leftColumnItems[0]?.id" />
        <FAQ :items="rightColumnItems" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FAQ } from '@entities/faq'
import { useFAQ } from '../hook/useFAQ'

const { faqItems } = useFAQ()

const leftColumnItems = computed(() => {
  const mid = Math.ceil(faqItems.value.length / 2)
  return faqItems.value.slice(0, mid)
})

const rightColumnItems = computed(() => {
  const mid = Math.ceil(faqItems.value.length / 2)
  return faqItems.value.slice(mid)
})
</script>

<style scoped>
</style>

