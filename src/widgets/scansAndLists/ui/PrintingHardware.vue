<template>
  <section class="w-full border-t border-b border-white/30">
    <div class="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
      <!-- Левая часть: текст -->
      <div class="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
        <!-- Заголовок -->
        <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6">
          {{ $t('pages.scansAndLists.printingHardware.title') }}
        </h2>

        <!-- Описание -->
        <p class="text-white text-base lg:text-lg leading-relaxed mb-6 flex-1">
          {{ $t('pages.scansAndLists.printingHardware.description') }}
        </p>

        <!-- Список возможностей -->
        <ul class="space-y-3">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="text-white/80 text-base lg:text-lg"
          >
            {{ $t(feature) }}
          </li>
        </ul>
      </div>

      <!-- Правая часть: изображение -->
      <div class="relative w-full h-full border-l border-white/30">
        <img
          :src="machineImage"
          alt="Printing Hardware"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import machineImage from '~/assets/images/machine.png'

const features = [
  'pages.scansAndLists.printingHardware.feature1',
  'pages.scansAndLists.printingHardware.feature2',
  'pages.scansAndLists.printingHardware.feature3'
]
</script>

