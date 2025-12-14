<template>
    <div class="min-h-screen">
      <!-- Desktop / Tablet hero (с фоном и оформлением как на главной) -->
      <div class="hidden md:block px-4 pt-4">
        <section
          class="relative min-h-[calc(100vh-1rem)] flex items-center justify-center overflow-hidden rounded-3xl border border-white/30"
        >
          <!-- Фоновое изображение -->
          <div class="absolute inset-0 rounded-3xl overflow-hidden">
            <img
              src="~/assets/images/coaching.png"
              alt="Coaching"
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
          <div class="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-12">
            <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight uppercase">
              coaching
            </h1>
          </div>
        </section>
      </div>
  
      <!-- Мобильная версия: только текст без изображений и дополнительных элементов -->
      <div class="md:hidden min-h-[60vh] flex items-center justify-center px-6 pt-20 pb-10 bg-gradient-to-b from-black to-[#050816]">
        <h1 class="text-4xl font-bold text-white text-center uppercase">
          coaching
        </h1>
      </div>
  
      <!-- Блок с фильтрами -->
      <CoachingFilters />
  
      <!-- Блок с курсами -->
      <CoachingCourses />
    </div>
  </template>
  
  <script setup lang="ts">
  import { CoachingFilters, CoachingCourses } from '@widgets/coaching'
  
  useHead({
    title: 'Coaching - KOZMAP'
  })
  </script>
  
  