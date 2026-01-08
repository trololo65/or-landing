<template>
  <section class="relative min-h-screen px-4 py-8 lg:py-16">
    <!-- Фоновое изображение на весь блок -->
    <div class="absolute inset-0">
      <img
        :src="artObjImage"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- Оверлей для затемнения -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Контент поверх фона -->
    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Табы -->
      <PaperworkTabsHeader
        :tabs="tabs"
        :selected-tab-id="selectedTabId"
        :progress="progress"
        @select-tab="selectTab"
      />

      <!-- Экран с контентом -->
      <PaperworkContentScreen
        :selected-tab-id="selectedTabId"
        :accordion-items="currentAccordionItems"
        :open-accordion-id="openAccordionId"
        :image="currentTabImage"
        :image-alt="currentTabLabel"
        @toggle-accordion="toggleAccordion"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import artObjImage from '~/assets/images/art-obj.png'
import pieceOfPaperImage from '~/assets/images/piece-of-paper.png'
import PaperworkTabsHeader from './PaperworkTabsHeader.vue'
import PaperworkContentScreen from './PaperworkContentScreen.vue'
import { accordionItems } from '../model/accordionData'
import type { Tab } from '../model/types'

const selectedTabId = ref('paystubs')
const openAccordionId = ref<string | null>(null)

const tabs: Tab[] = [
  { id: 'paystubs', labelKey: 'pages.paperwork.tabs.paystubs.label' },
  { id: 'statements', labelKey: 'pages.paperwork.tabs.statements.label' },
  { id: 'taxes', labelKey: 'pages.paperwork.tabs.taxes.label' },
  { id: 'bills', labelKey: 'pages.paperwork.tabs.bills.label' },
  { id: 'other', labelKey: 'pages.paperwork.tabs.other.label' }
]

const currentAccordionItems = computed(() => {
  return accordionItems[selectedTabId.value as keyof typeof accordionItems] || []
})

const currentTabImage = computed(() => {
  return pieceOfPaperImage
})

const currentTabLabel = computed(() => {
  const tab = tabs.find(t => t.id === selectedTabId.value)
  return tab ? tab.labelKey : ''
})

// Прогресс в зависимости от открытого аккордиона
const progress = computed(() => {
  if (!openAccordionId.value || !currentAccordionItems.value.length) return 0
  
  const openIndex = currentAccordionItems.value.findIndex(item => item.id === openAccordionId.value)
  if (openIndex === -1) return 0
  
  // Прогресс = (индекс + 1) / общее количество * 100
  return ((openIndex + 1) / currentAccordionItems.value.length) * 100
})

const selectTab = (tabId: string) => {
  selectedTabId.value = tabId
  // Сбрасываем аккордион до первого при смене таба
  if (currentAccordionItems.value.length > 0) {
    openAccordionId.value = currentAccordionItems.value[0].id
  } else {
    openAccordionId.value = null
  }
}

const toggleAccordion = (itemId: string) => {
  if (openAccordionId.value === itemId) {
    // Если уже открыт, не закрываем (по требованию - только один может быть открыт)
    return
  }
  openAccordionId.value = itemId
}

// Инициализация: открываем первый аккордион
watch(() => selectedTabId.value, () => {
  if (currentAccordionItems.value.length > 0) {
    openAccordionId.value = currentAccordionItems.value[0].id
  }
}, { immediate: true })

watch(() => currentAccordionItems.value, () => {
  if (currentAccordionItems.value.length > 0 && !openAccordionId.value) {
    openAccordionId.value = currentAccordionItems.value[0].id
  }
}, { immediate: true })
</script>

