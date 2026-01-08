<template>
  <div class="min-h-screen">
    <!-- Hero секция с рамкой -->
    <div class="px-4 pt-4">
      <section class="relative min-h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden rounded-3xl border border-white/30">
        <!-- Фоновое изображение -->
        <div class="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            src="~/assets/images/hero.png"
            alt="Scans and Lists"
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
        
        <!-- Контент - название страницы по центру -->
        <div class="relative z-10 max-w-6xl mx-auto text-center px-6 lg:px-12">
          <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight uppercase">
            Scans and Lists
          </h1>
        </div>
      </section>
    </div>

    <!-- Контентный блок -->
    <ScansAndListsContent />

    <!-- Блок Printing Hardware -->
    <PrintingHardware />

    <!-- Блок Laser & Lamination -->
    <LaserLamination />

    <!-- Блок Design & Material Architecture -->
    <DesignMaterialArchitecture />

    <!-- Блок AI-Driven Validation Logic -->
    <AIValidation />
  </div>
</template>

<script setup lang="ts">
import { ScansAndListsContent, PrintingHardware, LaserLamination, DesignMaterialArchitecture, AIValidation } from '@widgets/scansAndLists'

// Мета-данные страницы
useHead({
  title: 'Scans and Lists - KOZMAP'
})
</script>

