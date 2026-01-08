<template>
  <section class="relative w-full min-h-screen">
    <!-- Фоновое изображение -->
    <div class="absolute inset-0">
      <img
        :src="waterLaserImage"
        alt="Fast Track"
        class="w-full h-full object-cover"
      />
      <!-- Оверлей для затемнения -->
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Контент: текст слева -->
    <div class="relative z-10 min-h-screen flex items-center justify-start p-8 lg:p-12 xl:p-16">
      <div class="max-w-2xl lg:max-w-3xl">
        <!-- Заголовок: Ready. Set. Delivered. -->
        <h2 class="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
          <span class="text-white">{{ $t('fastTrack.title.ready') }}</span><br>
          <span class="text-white">{{ $t('fastTrack.title.set') }}</span><br>
          <span class="text-white">{{ $t('fastTrack.title.delivered') }}</span>
        </h2>

        <!-- Описание -->
        <p class="text-white text-base max-w-lg lg:text-lg xl:text-xl leading-relaxed mb-8">
          {{ $t('fastTrack.description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@shared/ui'
import waterLaserImage from '~/assets/images/water-laser.png'

const handleLearnMore = () => {
  console.log('Learn More clicked')
}
</script>

