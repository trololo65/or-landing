<template>
  <div class="mb-8 lg:mb-12">
    <!-- Desktop: все в одной строке -->
    <div class="hidden md:flex items-center gap-4">
      <SearchInput
        :model-value="searchQuery"
        @update:model-value="handleSearchUpdate"
        :placeholder="$t('tutorials.searchPlaceholder')"
      />

      <FilterTabs
        :tabs="tabs"
        :selected-tab-id="selectedTabId"
        @update:selected-tab-id="handleTabUpdate"
      />

      <FilterButton @click="handleFilterClick" />
    </div>

    <!-- Mobile: инпут и кнопка на одной строке, табы снизу -->
    <div class="md:hidden space-y-4">
      <div class="flex items-center gap-3">
        <SearchInput
          :model-value="searchQuery"
          @update:model-value="handleSearchUpdate"
          :placeholder="$t('tutorials.searchPlaceholder')"
        />

        <FilterButton mobile @click="handleFilterClick" />
      </div>

      <!-- Табы (скроллируемые) -->
      <div class="overflow-x-auto -mx-4 px-4">
        <FilterTabs
          :tabs="tabs"
          :selected-tab-id="selectedTabId"
          :scrollable="true"
          @update:selected-tab-id="handleTabUpdate"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchInput, FilterTabs, FilterButton } from '@shared/ui'
import type { FilterTab } from '@shared/ui/filterTabs'

defineOptions({
  inheritAttrs: false
})

interface Props {
  searchQuery: string
  tabs: FilterTab[]
  selectedTabId: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:searchQuery': [value: string]
  'update:selectedTabId': [value: string]
  'openFilter': []
}>()

const handleSearchUpdate = (value: string) => {
  emit('update:searchQuery', value)
}

const handleTabUpdate = (tabId: string) => {
  emit('update:selectedTabId', tabId)
}

const handleFilterClick = () => {
  emit('openFilter')
}
</script>

<style scoped>
/* Скрытие скроллбара для табов на мобилке */
.overflow-x-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>

