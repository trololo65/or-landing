<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="relative pr-4">
        <!-- Заголовок и иконка -->
        <div class="flex items-start justify-between mb-8">
          <h2 class="text-white text-2xl lg:text-4xl font-bold">
            {{ $t('keyMetrics.title') }}
          </h2>
          <div class="flex-shrink-0">
            <img 
              src="~/assets/svg/pumpkin.svg" 
              alt="Pumpkin icon" 
              class="w-6 h-6 lg:w-8 lg:h-8"
            />
          </div>
        </div>
        
        <!-- Метрики -->
        <div class="flex flex-wrap gap-6 lg:gap-16">
          <div class="flex flex-col">
            <div class="text-orange-500 text-2xl lg:text-3xl font-bold mb-2">
              {{ $t('keyMetrics.metrics.pages.value') }}
            </div>
            <div class="text-white text-xs lg:text-sm leading-relaxed whitespace-pre-line">
              {{ $t('keyMetrics.metrics.pages.description') }}
            </div>
          </div>
          <div class="flex flex-col">
            <div class="text-orange-500 text-2xl lg:text-3xl font-bold mb-2">
              {{ $t('keyMetrics.metrics.cards.value') }}
            </div>
            <div class="text-white text-xs lg:text-sm leading-relaxed whitespace-pre-line">
              {{ $t('keyMetrics.metrics.cards.description') }}
            </div>
          </div>
          <div class="flex flex-col">
            <div class="text-orange-500 text-2xl lg:text-3xl font-bold mb-2">
              {{ $t('keyMetrics.metrics.turnaround.value') }}
            </div>
            <div class="text-white text-xs lg:text-sm leading-relaxed whitespace-pre-line">
              {{ $t('keyMetrics.metrics.turnaround.description') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>