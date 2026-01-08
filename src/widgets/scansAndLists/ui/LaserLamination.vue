<template>
  <section class="relative w-full min-h-screen">
    <!-- Фоновое изображение -->
    <div class="absolute inset-0">
      <img
        :src="laserImage"
        alt="Laser & Lamination"
        class="w-full h-full object-cover"
      />
      <!-- Оверлей для затемнения (опционально) -->
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Контент: текст справа сверху -->
    <div class="relative z-10 min-h-screen flex items-start justify-end p-8 lg:p-12 xl:p-16">
      <div class="max-w-2xl lg:max-w-3xl">
        <!-- Заголовок -->
        <h2 class="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
          {{ $t('pages.scansAndLists.laserLamination.title') }}
        </h2>

        <!-- Описание -->
        <p class="text-white text-base lg:text-lg xl:text-xl leading-relaxed mb-12">
          {{ $t('pages.scansAndLists.laserLamination.description') }}
        </p>

        <!-- Список возможностей -->
        <ul class="space-y-3">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="text-white/80 text-base lg:text-lg xl:text-xl"
          >
            {{ $t(feature) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import laserImage from '~/assets/images/laser.png'

const features = [
  'pages.scansAndLists.laserLamination.feature1',
  'pages.scansAndLists.laserLamination.feature2',
  'pages.scansAndLists.laserLamination.feature3'
]
</script>

