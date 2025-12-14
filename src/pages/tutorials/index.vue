<template>
  <div class="min-h-screen pt-24 lg:pt-32 px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h1 class="text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-12">
        {{ $t('pages.tutorials.title') }}
      </h1>

      <!-- Фильтры -->
      <TutorialsFilters
        :search-query="searchQuery"
        :tabs="tabs.slice(0, 4)"
        :selected-tab-id="selectedTab"
        @update:search-query="searchQuery = $event"
        @update:selected-tab-id="selectedTab = $event"
        @open-filter="isFilterModalOpen = true"
      />

      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCard
          v-for="article in filteredArticles"
          :key="article.id"
          :article="article"
        />
      </div>

      <!-- Пустое состояние -->
      <div
        v-if="filteredArticles.length === 0"
        class="text-center py-16"
      >
        <p class="text-white/60 text-lg">
          {{ $t('tutorials.noResults') }}
        </p>
      </div>
    </div>

    <!-- Попап фильтров -->
    <FilterModal
      :model-value="isFilterModalOpen"
      :tabs="tabs"
      :selected-tab-id="selectedTab"
      @update:model-value="isFilterModalOpen = $event"
      @update:selected-tab-id="selectedTab = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance } from 'vue'
import { ArticleCard } from '@entities/article'
import { FilterModal } from '@shared/ui'
import { TutorialsFilters } from '@widgets/tutorialsFilters'
import { useArticles } from '@widgets/main'
import type { FilterTab } from '@shared/ui/filterTabs'

useHead({
  title: 'Tutorials - KOZMAP'
})

const { articles } = useArticles()
const instance = getCurrentInstance()

const searchQuery = ref('')
const selectedTab = ref('all')
const isFilterModalOpen = ref(false)

// Статический массив табов - локализация происходит через $t
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
  'product-type-15',
]

const tabs = computed<FilterTab[]>(() => {
  const t = instance?.appContext.config.globalProperties.$t
  if (!t) return []
  
  return tabIds.map(id => ({
    id,
    label: id === 'all' 
      ? (t('tutorials.tabs.all') as string)
      : (t('tutorials.tabs.productType') as string)
  }))
})

const filteredArticles = computed(() => {
  let result = [...articles.value]

  // Фильтрация по поисковому запросу
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Фильтрация по выбранному табу
  if (selectedTab.value !== 'all') {
    // Здесь можно добавить логику фильтрации по типу продукта
    // Пока оставляем как есть
  }

  return result
})
</script>
