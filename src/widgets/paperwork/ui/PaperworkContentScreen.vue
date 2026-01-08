<template>
  <div class="relative backdrop-blur-xl bg-white/5 rounded-3xl overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
      <!-- Левая часть: аккордион -->
      <div class="flex flex-col p-6 lg:p-12 pr-0 lg:pr-0">
        <h3 class="text-2xl lg:text-3xl font-bold text-white mb-6">
          {{ $t(`pages.paperwork.tabs.${selectedTabId}.title`) }}
        </h3>
        
        <PaperworkAccordion
          :items="accordionItems"
          :open-item-id="openAccordionId"
          @toggle="$emit('toggleAccordion', $event)"
        />
      </div>

      <!-- Правая часть: фото -->
      <div class="relative pr-6 lg:pr-12 pl-6 lg:pl-0 flex items-end justify-center lg:justify-end">
        <img
          :src="image"
          :alt="imageAlt"
          class="w-full max-w-md h-auto object-contain rounded-xl rounded-b-none"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PaperworkAccordion from './PaperworkAccordion.vue'
import type { AccordionItem } from '../model/types'

interface Props {
  selectedTabId: string
  accordionItems: AccordionItem[]
  openAccordionId: string | null
  image: string
  imageAlt: string
}

defineProps<Props>()

defineEmits<{
  toggleAccordion: [itemId: string]
}>()
</script>

