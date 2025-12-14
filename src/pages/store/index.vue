<template>
    <div class="min-h-screen pt-24 lg:pt-32 px-4 py-8 lg:py-16">
      <div class="max-w-7xl mx-auto">
        <div class="store-header">
          <div class="store-header-filters">
            <!-- Desktop filters -->
            <div class="store-filters-desktop">
              <FilterButton @click="openFilterModal" />
  
              <FilterTabs
                :tabs="tabs.slice(0, 4)"
                :selected-tab-id="selectedTab"
                @update:selected-tab-id="handleTabUpdate"
              />
            </div>
  
            <!-- Mobile filters -->
            <div class="store-filters-mobile">
              <div class="store-filters-mobile-row">
                <FilterButton mobile @click="openFilterModal" />
              </div>
  
              <div class="store-filters-tabs-scroll">
                <FilterTabs
                  :tabs="tabs"
                  :selected-tab-id="selectedTab"
                  :scrollable="true"
                  @update:selected-tab-id="handleTabUpdate"
                />
              </div>
            </div>
          </div>
  
          <div class="store-header-title">
            <h1 class="store-title">
              {{ $t('store.title') }}
            </h1>
            <p class="store-subtitle">
              {{ $t('store.subtitle') }}
            </p>
          </div>
        </div>
  
        <div class="store-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
  
      <StoreFilterModal
        :model-value="isFilterModalOpen"
        :filter-questions="filterQuestions"
        :default-selected-options="selectedFilterOptions"
        @update:model-value="isFilterModalOpen = $event"
        @update:selected-options="handleFilterOptionsUpdate"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, getCurrentInstance, reactive } from 'vue'
  import { ProductCard } from '@entities/product'
  import { FilterTabs, FilterButton, StoreFilterModal } from '@shared/ui'
  import type { FilterTab } from '@shared/ui/filterTabs'
  import type { FilterQuestion } from '@shared/ui/storeFilterModal'
  import { useProducts } from '@widgets/main'
  
  useHead({
    title: 'Store - KOZMAP'
  })
  
  const instance = getCurrentInstance()
  const { products } = useProducts()
  
  const selectedTab = ref('all')
  const isFilterModalOpen = ref(false)
  const selectedFilterOptions = reactive<Record<number, string>>({
    0: 'all',
    1: 'all',
    2: 'all'
  })
  
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
  ] as const
  
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
  
  // Данные для фильтров в модальном окне
  const filterQuestions = computed<FilterQuestion[]>(() => {
    const t = instance?.appContext.config.globalProperties.$t
    if (!t) return []
    
    return [
      {
        id: 'question-1',
        options: [
          { id: 'all', label: t('tutorials.tabs.all') as string },
          { id: 'product-type-1', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-2', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-3', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-4', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-5', label: t('tutorials.tabs.productType') as string }
        ]
      },
      {
        id: 'question-2',
        options: [
          { id: 'all', label: t('tutorials.tabs.all') as string },
          { id: 'product-type-6', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-7', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-8', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-9', label: t('tutorials.tabs.productType') as string }
        ]
      },
      {
        id: 'question-3',
        options: [
          { id: 'all', label: t('tutorials.tabs.all') as string },
          { id: 'product-type-10', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-11', label: t('tutorials.tabs.productType') as string },
          { id: 'product-type-12', label: t('tutorials.tabs.productType') as string }
        ]
      }
    ]
  })
  
  const filteredProducts = computed(() => {
    // Пока фильтрация условная, позже можно связать табы с типами продуктов
    return products.value
  })
  
  const openFilterModal = () => {
    isFilterModalOpen.value = true
  }
  
  const handleTabUpdate = (tabId: string) => {
    selectedTab.value = tabId
  }
  
  const handleFilterOptionsUpdate = (options: Record<number, string>) => {
    Object.assign(selectedFilterOptions, options)
    // Здесь можно добавить логику фильтрации продуктов на основе выбранных опций
  }
  </script>
  
  <style scoped>
  .store-header {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .store-header-filters {
    order: 2;
  }
  
  .store-header-title {
    order: 1;
    text-align: left;
  }
  
  .store-title {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 8px;
  }
  
  .store-subtitle {
    font-size: 18px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .store-filters-desktop {
    display: none;
  }
  
  .store-filters-mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .store-filters-mobile-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .store-filters-tabs-scroll {
    overflow-x: auto;
    padding-bottom: 4px;
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .store-filters-tabs-scroll::-webkit-scrollbar {
    display: none;
  }
  
  .store-filters-tabs-scroll {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .store-grid {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  @media (min-width: 640px) {
    .store-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  
  @media (min-width: 1024px) {
    .store-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  
  @media (min-width: 768px) {
    .store-header {
      gap: 32px;
    }
  }
  
  @media (min-width: 1024px) {
    .store-header {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  
    .store-header-filters {
      order: 1;
    }
  
    .store-header-title {
      order: 2;
      max-width: 520px;
    }
  
    .store-filters-desktop {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  
    .store-filters-mobile {
      display: none;
    }
  }
  </style>
  
  
  