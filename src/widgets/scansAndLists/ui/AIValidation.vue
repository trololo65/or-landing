<template>
  <section class="relative w-full min-h-screen">
    <!-- Фоновое изображение -->
    <div class="absolute inset-0">
      <img
        :src="resultAfterLaserImage"
        alt="AI-Driven Validation Logic"
        class="w-full h-full object-cover"
      />
      <!-- Оверлей для затемнения (опционально) -->
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Контент: текст снизу слева -->
    <div class="relative z-10 min-h-screen flex items-end justify-start p-8 lg:p-12 xl:p-16">
      <div class="max-w-2xl lg:max-w-3xl">
        <!-- Заголовок -->
        <h2 class="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
          {{ $t('pages.scansAndLists.aiValidation.title') }}
        </h2>

        <!-- Описание -->
        <p class="text-white text-base lg:text-lg xl:text-xl leading-relaxed mb-6">
          {{ $t('pages.scansAndLists.aiValidation.description') }}
        </p>

        <!-- Статус -->
        <p class="text-white/90 text-sm lg:text-base font-medium">
          {{ $t('pages.scansAndLists.aiValidation.status') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import resultAfterLaserImage from '~/assets/images/result-after-laser.png'
</script>

