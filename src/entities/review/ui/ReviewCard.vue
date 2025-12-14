<template>
  <div 
    class="p-6 flex flex-col h-full relative"
    :style="showVerticalLine ? 'border-right: 1px solid rgba(255, 255, 255, 0.1);' : ''"
  >
    <!-- Header с аватаром и именем -->
    <div class="flex items-center gap-3 mb-4">
      <!-- Аватар или квадратик с буквой -->
      <div class="flex-shrink-0">
        <img
          v-if="review.avatar"
          :src="review.avatar"
          :alt="review.name"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div
          v-else
          class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-sm"
        >
          {{ getInitial(review.name) }}
        </div>
      </div>
      
      <!-- Имя -->
      <div class="text-white font-medium">{{ review.name }}</div>
    </div>
    
    <!-- Текст отзыва -->
    <div class="mb-4 flex-1">
      <p class="text-gray-300 text-sm leading-relaxed line-clamp-3" ref="reviewTextRef">
        {{ displayText }}
      </p>
      <button
        v-if="shouldShowMore"
        @click="openDialog"
        class="text-orange-500 hover:text-orange-400 text-sm mt-1 focus:outline-none"
      >
        {{ $t('reviews.more') }}
      </button>
    </div>
    
    <!-- Скролл иконок из replays -->
    <div v-if="review.replays && review.replays.length > 0" class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <div
        v-for="replay in review.replays"
        :key="replay.id"
        class="flex-shrink-0"
      >
        <img
          v-if="replay.avatar"
          :src="replay.avatar"
          :alt="replay.name"
          class="w-8 h-8 rounded-full object-cover border-2 border-white/20"
        />
        <div
          v-else
          class="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-semibold border-2 border-white/20"
        >
          {{ getInitial(replay.name) }}
        </div>
      </div>
    </div>
    
    <!-- Диалог с полным текстом -->
    <Dialog v-model="showDialog">
      <div class="flex items-center gap-3 mb-4">
        <img
          v-if="review.avatar"
          :src="review.avatar"
          :alt="review.name"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div
          v-else
          class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold text-sm"
        >
          {{ getInitial(review.name) }}
        </div>
        <div class="text-white font-medium">{{ review.name }}</div>
      </div>
      <p class="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
        {{ review.review }}
      </p>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { Review } from '../model/types'
import { Dialog } from '@shared/ui'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  review: Review
  showVerticalLine?: boolean
}>(), {
  showVerticalLine: false
})

const showDialog = ref(false)
const reviewTextRef = ref<HTMLElement | null>(null)
const shouldShowMore = ref(false)

// Получить первую букву имени
const getInitial = (name: string): string => {
  return name.charAt(0).toUpperCase()
}

// Проверить, нужно ли показывать "More..."
onMounted(() => {
  // Даем время DOM отрендериться
  setTimeout(() => {
    checkTextOverflow()
  }, 100)
  window.addEventListener('resize', () => {
    setTimeout(() => {
      checkTextOverflow()
    }, 100)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkTextOverflow)
})

const checkTextOverflow = () => {
  if (reviewTextRef.value) {
    // Сохраняем исходные классы
    const originalClass = reviewTextRef.value.className
    
    // Временно убираем line-clamp класс для измерения полной высоты
    reviewTextRef.value.classList.remove('line-clamp-3')
    reviewTextRef.value.style.display = 'block'
    reviewTextRef.value.style.webkitBoxOrient = 'unset'
    reviewTextRef.value.style.overflow = 'visible'
    reviewTextRef.value.style.webkitLineClamp = 'none'
    
    // Измеряем полную высоту текста
    const fullHeight = reviewTextRef.value.scrollHeight
    
    // Возвращаем исходное состояние
    reviewTextRef.value.className = originalClass
    reviewTextRef.value.style.display = ''
    reviewTextRef.value.style.webkitBoxOrient = ''
    reviewTextRef.value.style.overflow = ''
    reviewTextRef.value.style.webkitLineClamp = ''
    
    // Вычисляем высоту 3 строк
    const styles = window.getComputedStyle(reviewTextRef.value)
    const lineHeight = parseFloat(styles.lineHeight) || (1.5 * parseFloat(styles.fontSize))
    const maxHeight = lineHeight * 3
    
    // Показываем "More..." если полная высота больше 3 строк
    shouldShowMore.value = fullHeight > maxHeight + 5 // +5 для небольшого запаса
  }
}

const displayText = computed(() => {
  return props.review.review
})

const openDialog = () => {
  showDialog.value = true
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

