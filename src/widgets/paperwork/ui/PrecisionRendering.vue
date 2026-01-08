<template>
  <section class="relative w-full min-h-screen">
    <!-- Фоновое изображение -->
    <div class="absolute inset-0">
      <img
        :src="papersImage"
        alt="Precision Rendering Engine"
        class="w-full h-full object-cover"
      />
      <!-- Оверлей для затемнения -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Контент: текст -->
    <div class="relative z-10 min-h-screen flex items-center justify-center p-8 lg:p-12 xl:p-16">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Заголовок -->
        <h2 class="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
          {{ $t('pages.paperwork.precisionRendering.title') }}
        </h2>

        <!-- Описание -->
        <p class="text-white text-base lg:text-lg xl:text-xl leading-relaxed">
          {{ $t('pages.paperwork.precisionRendering.description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import papersImage from '~/assets/images/papers.png'
</script>

