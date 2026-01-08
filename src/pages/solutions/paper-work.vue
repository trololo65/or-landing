<template>
  <div class="min-h-screen">
    <!-- Hero секция с рамкой -->
    <div class="px-4 pt-4">
      <section class="relative min-h-[calc(100vh-1rem)] flex items-end overflow-hidden rounded-3xl border border-white/30">
        <!-- Фоновое изображение -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="~/assets/images/hero.png"
            alt="Paperwork"
            class="w-full h-full object-cover opacity-60"
          />
          <!-- Оверлей для затемнения -->
          <div class="absolute inset-0"></div>
        </div>
        
        <!-- Дополнительные градиенты для эффекта -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <!-- Контент: текст слева, кнопки справа -->
        <div class="relative z-10 w-full flex flex-col lg:flex-row items-end justify-between gap-8 p-6 lg:p-12 xl:p-16">
          <!-- Левая часть: текст -->
          <div class="flex-1 max-w-2xl lg:max-w-3xl">
            <h1 class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              {{ $t('pages.paperwork.hero.title') }}
            </h1>
            <p class="text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed">
              {{ $t('pages.paperwork.hero.description') }}
            </p>
          </div>

          <!-- Правая часть: кнопки -->
          <div class="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[200px]">
            <Button
              variant="secondary"
              size="lg"
              class="!bg-orange-500 !text-white hover:!bg-orange-600 !border-0 w-full lg:w-auto"
              @click="handleOrderDocuments"
            >
              {{ $t('pages.paperwork.hero.orderDocuments') }}
            </Button>
            <Button
              variant="primary"
              size="lg"
              class="w-full lg:w-auto"
              @click="handleViewSolutions"
            >
              {{ $t('pages.paperwork.hero.viewSolutions') }}
            </Button>
          </div>
        </div>
      </section>
    </div>

    <!-- Блок с табами и аккордионом -->
    <PaperworkTabs />

    <!-- Блок Precision Rendering Engine -->
    <PrecisionRendering />

    <!-- Блок Fast Track -->
    <FastTrack />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@shared/ui'
import { PaperworkTabs, PrecisionRendering, FastTrack } from '@widgets/paperwork'

// Мета-данные страницы
useHead({
  title: 'Paperwork - KOZMAP'
})

const handleOrderDocuments = () => {
  console.log('Order documents clicked')
}

const handleViewSolutions = () => {
  console.log('View solutions clicked')
}
</script>

