<template>
  <div
    :class="[
      'flex items-center gap-2 bg-[#1a1a1a] rounded-full px-2 py-2 border border-white/20',
      scrollable ? 'overflow-x-auto min-w-max' : ''
    ]"
  >
    <button
      v-for="tab in tabs"
      :key="tab.id"
      @click="handleTabClick(tab.id)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-all',
        scrollable ? 'whitespace-nowrap' : '',
        selectedTabId === tab.id
          ? 'bg-white text-black'
          : 'text-white/70 hover:text-white'
      ]"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { FilterTabsProps } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<FilterTabsProps>()

const emit = defineEmits<{
  'update:selectedTabId': [value: string]
}>()

const handleTabClick = (tabId: string) => {
  emit('update:selectedTabId', tabId)
}
</script>

