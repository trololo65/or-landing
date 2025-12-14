<template>
  <div class="relative flex items-end justify-between mt-8">
    <template v-for="(bar, index) in chartBars" :key="index">
    <div
      class="relative"
      :style="{
        width: '1px',
        height: `${bar.height}px`,
        background: `linear-gradient(to bottom, 
          rgba(255, 165, 0, 1) 0%, 
          rgba(255, 140, 0, 0.9) 30%, 
          rgba(255, 115, 0, 0.7) 60%, 
          rgba(255, 115, 0, 0.3) 80%, 
          transparent 100%)`
      }"
    >
      <!-- Иконка pumpkin на самой высокой линии -->
    </div>
    <div
      v-if="index === chartBars.length - 1"
      class="absolute top-0 right-0 -translate-y-full translate-x-1/2 z-10"
    >
      <img 
        src="~/assets/svg/pumpkin.svg" 
        alt="Pumpkin icon" 
        class="w-6 h-6 lg:w-8 lg:h-8"
      />
    </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Генерируем данные для графика
const generateChartBars = () => {
  const bars = []
  const count = 28 // Количество линий
  const baseHeight = 5 // Минимальная высота
  const maxHeight = 560 // Максимальная высота
  const step = (maxHeight - baseHeight) / count
  
  let currentHeight = baseHeight
  
  for (let i = 0; i < count; i++) {
    // Основной тренд - увеличение высоты
    const targetHeight = baseHeight + (step * (i + 1))
    
    // Добавляем случайные колебания для эффекта волны (иногда чуть меньше)
    // 30% вероятность уменьшения, 70% - небольшое увеличение
    const randomVariation = Math.random() > 0.7 
      ? -Math.random() * 12 
      : Math.random() * 8
    
    // Вычисляем высоту с учетом вариаций
    let height = targetHeight + randomVariation
    
    // Убеждаемся, что высота не становится меньше предыдущей слишком сильно
    // Но допускаем небольшие уменьшения для эффекта волны
    if (i > 0 && height < currentHeight - 20) {
      height = currentHeight - 10 // Максимальное уменьшение
    }
    
    // Ограничиваем минимальную и максимальную высоту
    height = Math.max(baseHeight, Math.min(maxHeight, height))
    
    bars.push({
      height: Math.round(height)
    })
    
    // Обновляем текущую высоту для следующей итерации
    currentHeight = height
  }
  
  return bars
}

const chartBars = computed(() => generateChartBars())
</script>

