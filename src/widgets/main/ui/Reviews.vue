<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto rounded-3xl p-6 lg:p-8" style="background-color: #161616;">
      <!-- Заголовок с количеством отзывов -->
      <div class="flex items-center gap-4 mb-8 lg:mb-12">
        <h2 class="text-white text-2xl lg:text-4xl font-bold">
          {{ $t('reviews.title') }}
        </h2>
        <span class="text-gray-400 text-lg lg:text-xl">
          {{ totalReviewsCount }}
        </span>
      </div>

      <!-- Сетка отзывов -->
      <div 
        class="grid gap-4 lg:gap-6 mb-8"
        :class="gridClasses"
      >
        <ReviewCard
          v-for="(review, index) in displayedReviews"
          :key="review.id"
          :review="review"
          :show-vertical-line="shouldShowVerticalLine(index)"
        />
      </div>

      <!-- Кнопка Load More -->
      <div v-if="hasMoreReviews" class="flex justify-center">
        <Button
          variant="ghost"
          size="md"
          class="!text-white hover:!bg-white/10 !border !border-1 !border-white/50 !bg-transparent"
          @click="handleLoadMore"
        >
          {{ $t('reviews.loadMore') }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ReviewCard } from '@entities/review'
import type { Review } from '@entities/review'
import { Button } from '@shared/ui'
import { useReviews } from '../hook/useReviews'

const { reviews } = useReviews()

const screenSize = ref<'mobile' | 'tablet' | 'desktop'>('desktop')
const rowsToShow = ref(2) // Начальное количество строк

// Определяем размер экрана
const updateScreenSize = () => {
  if (typeof window === 'undefined') return
  
  const width = window.innerWidth
  if (width < 640) {
    screenSize.value = 'mobile'
  } else if (width < 1024) {
    screenSize.value = 'tablet'
  } else {
    screenSize.value = 'desktop'
  }
}

// Классы для сетки в зависимости от размера экрана
const gridClasses = computed(() => {
  switch (screenSize.value) {
    case 'mobile':
      return 'grid-cols-1' // 1 колонка
    case 'tablet':
      return 'grid-cols-2' // 2 колонки
    case 'desktop':
      return 'grid-cols-3' // 3 колонки
    default:
      return 'grid-cols-3'
  }
})

// Количество отзывов на строку
const reviewsPerRow = computed(() => {
  switch (screenSize.value) {
    case 'mobile':
      return 1
    case 'tablet':
      return 2
    case 'desktop':
      return 3
    default:
      return 3
  }
})

// Отображаемые отзывы
const displayedReviews = computed(() => {
  const totalCount = rowsToShow.value * reviewsPerRow.value
  return reviews.value.slice(0, totalCount)
})

// Общее количество отзывов
const totalReviewsCount = computed(() => {
  return reviews.value.length
})

// Проверка, есть ли еще отзывы для загрузки
const hasMoreReviews = computed(() => {
  const totalDisplayed = rowsToShow.value * reviewsPerRow.value
  return totalDisplayed < reviews.value.length
})

// Показывать вертикальную линию (кроме последнего в ряду)
const shouldShowVerticalLine = (index: number): boolean => {
  const itemsPerRow = reviewsPerRow.value
  const colIndex = index % itemsPerRow
  
  // Не показывать на последнем элементе в ряду
  return colIndex < itemsPerRow - 1
}

// Загрузить еще (добавить 2 строки)
const handleLoadMore = () => {
  rowsToShow.value += 2
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateScreenSize)
  }
})
</script>

