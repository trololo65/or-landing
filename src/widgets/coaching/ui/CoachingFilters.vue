<template>
  <div class="pt-10 lg:pt-16 px-4">
    <div class="max-w-7xl mx-auto">

      <TutorialsFilters
        :search-query="searchQuery"
        :tabs="tabs.slice(0, 4)"
        :selected-tab-id="selectedTab"
        @update:search-query="searchQuery = $event"
        @update:selected-tab-id="selectedTab = $event"
        @open-filter="isFilterModalOpen = true"
      />

      <FilterModal
        :model-value="isFilterModalOpen"
        :tabs="tabs"
        :selected-tab-id="selectedTab"
        @update:model-value="isFilterModalOpen = $event"
        @update:selected-tab-id="selectedTab = $event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance } from 'vue'
import { TutorialsFilters } from '@widgets/tutorialsFilters'
import { FilterModal } from '@shared/ui'
import type { FilterTab } from '@shared/ui/filterTabs'

const searchQuery = ref('')
const selectedTab = ref('all')
const isFilterModalOpen = ref(false)
const instance = getCurrentInstance()

// Табы аналогичны tutorials
const tabIds = [
  'all',
  'product-type-1',
  'product-type-2',
  'product-type-3',
  'product-type-4',
  'product-type-5',
  'product-type-6',
  'product-type-7',
  'product-type-8',
  'product-type-9',
  'product-type-10',
  'product-type-11',
  'product-type-12',
  'product-type-13',
  'product-type-14',
  'product-type-15'
]

const tabs = computed<FilterTab[]>(() => {
  const t = instance?.appContext.config.globalProperties.$t
  if (!t) return []

  return tabIds.map(id => ({
    id,
    label:
      id === 'all'
        ? (t('tutorials.tabs.all') as string)
        : (t('tutorials.tabs.productType') as string)
  }))
})
</script>


