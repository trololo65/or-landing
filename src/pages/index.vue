<template>
  <div class="min-h-screen">
    <!-- Hero секция с рамкой -->
    <div class="px-4 pt-4">
      <section class="relative min-h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden rounded-3xl border border-white/30">
        <!-- Фоновое изображение -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="~/assets/images/hero.png"
            alt="Documents"
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
        
        <!-- Контент -->
        <div class="relative z-10 max-w-6xl mx-auto text-center px-6 lg:px-12">
          <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {{ $t('hero.title') }}
          </h1>
          <p class="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            {{ $t('hero.subtitle') }}
          </p>
          <p class="text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            {{ $t('hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              class="!bg-orange-500 !text-white hover:!bg-orange-600 !border-0"
              @click="handleOrderDocuments"
            >
              {{ $t('hero.orderDocuments') }}
            </Button>
            <Button
              variant="primary"
              size="lg"
              @click="handleViewSolutions"
            >
              {{ $t('hero.viewSolutions') }}
            </Button>
          </div>
        </div>
      </section>
    </div>
    
    <!-- About Company блок -->
    <AboutCompany />
    
    <!-- Projects блок -->
    <Projects />
    
    <!-- Key Metrics блок -->
    <KeyMetrics />
    
    <!-- Flagship Solutions блок -->
    <FlagshipSolutions />
    
    <!-- Reviews блок -->
    <Reviews />
    
    <!-- Courses блок -->
    <Courses />
    
    <!-- Fast Track блок -->
    <FastTrack />
    
    <!-- Articles Showcase блок -->
    <ArticlesShowcase />
    
    <!-- Products Showcase блок -->
    <ProductsShowcase />
    
    <!-- FAQ Section блок -->
    <FAQSection />
    
  </div>
</template>

<script setup lang="ts">
import { Button } from '@shared/ui'
import { AboutCompany, Projects, KeyMetrics, FlagshipSolutions, ArticlesShowcase, ProductsShowcase, FAQSection, Reviews, Courses, FastTrack } from '@widgets/main'

// Мета-данные страницы
useHead({
  title: 'KOZMAP - OR Landing'
})

const handleOrderDocuments = () => {
  console.log('Order documents clicked')
}

const handleViewSolutions = () => {
  console.log('View solutions clicked')
}
</script>

