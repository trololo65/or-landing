<template>
  <div class="space-y-4">
    <FAQItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :default-open="item.id === defaultOpenId"
    />
  </div>
</template>

<script setup lang="ts">
import FAQItem from './FAQItem.vue'
import type { FAQItem as FAQItemType } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  items: FAQItemType[]
  defaultOpenId?: string
}>()
</script>

<style scoped>
</style>

