<template>
  <div class="space-y-4">
    <div
      v-for="item in items"
      :key="item.id"
      class="rounded-lg overflow-hidden bg-[#1a1a1a]/50 border border-white/10"
    >
      <button
        @click="$emit('toggle', item.id)"
        class="w-full flex items-center justify-between p-4 lg:p-6 text-left"
      >
        <span class="text-white font-medium text-base lg:text-lg">
          {{ $t(item.labelKey) }}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-white transition-transform duration-300 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          :class="{ 'rotate-180': openItemId === item.id }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      <div
        class="overflow-hidden transition-all duration-300 ease-in-out"
        :style="{
          maxHeight: openItemId === item.id ? `${itemHeights[item.id] || 0}px` : '0px',
          opacity: openItemId === item.id ? 1 : 0
        }"
      >
        <div
          :ref="el => setItemRef(item.id, el)"
          :data-accordion-item="item.id"
          class="px-4 lg:px-6 pb-4 lg:pb-6"
        >
          <p class="text-white/80 text-sm lg:text-base leading-relaxed">
            {{ $t(item.descriptionKey) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import type { AccordionItem } from '../model/types'

interface Props {
  items: AccordionItem[]
  openItemId: string | null
}

const props = defineProps<Props>()

defineEmits<{
  toggle: [itemId: string]
}>()

const itemHeights = ref<Record<string, number>>({})

const setItemRef = (itemId: string, el: Element | ComponentPublicInstance | null) => {
  if (el && el instanceof HTMLElement) {
    nextTick(() => {
      itemHeights.value[itemId] = el.scrollHeight
    })
  }
}

const updateItemHeights = () => {
  props.items.forEach(item => {
    const element = document.querySelector(`[data-accordion-item="${item.id}"]`) as HTMLElement
    if (element) {
      itemHeights.value[item.id] = element.scrollHeight
    }
  })
}

watch(() => props.items, () => {
  nextTick(() => {
    updateItemHeights()
  })
}, { immediate: true })
</script>

