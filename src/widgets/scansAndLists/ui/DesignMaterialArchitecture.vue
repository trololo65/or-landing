<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6 text-center">
        {{ $t('pages.scansAndLists.designMaterialArchitecture.title') }}
      </h2>

      <!-- Описание -->
      <p class="text-white/80 text-base lg:text-lg leading-relaxed mb-12 max-w-4xl mx-auto text-center">
        {{ $t('pages.scansAndLists.designMaterialArchitecture.description') }}
      </p>

      <!-- Изображение tablet -->
      <div class="mb-12 lg:mb-16 flex justify-center">
        <div class="w-full max-w-4xl">
          <img
            :src="tabletImage"
            alt="Design & Material Architecture"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <!-- Сетка из 4 мини блоков -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(item, index) in items"
          :key="index"
          class=""
        >
          <h3 class="text-xl lg:text-2xl font-bold text-white mb-3">
            {{ $t(item.titleKey) }}
          </h3>
          <p class="text-white/80 text-base lg:text-lg leading-relaxed">
            {{ $t(item.descriptionKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import tabletImage from '~/assets/images/tablet.png'

const items = [
  {
    titleKey: 'pages.scansAndLists.designMaterialArchitecture.vectorCore.title',
    descriptionKey: 'pages.scansAndLists.designMaterialArchitecture.vectorCore.description'
  },
  {
    titleKey: 'pages.scansAndLists.designMaterialArchitecture.restrictedSubstrates.title',
    descriptionKey: 'pages.scansAndLists.designMaterialArchitecture.restrictedSubstrates.description'
  },
  {
    titleKey: 'pages.scansAndLists.designMaterialArchitecture.opticalSecurity.title',
    descriptionKey: 'pages.scansAndLists.designMaterialArchitecture.opticalSecurity.description'
  },
  {
    titleKey: 'pages.scansAndLists.designMaterialArchitecture.tactileVerification.title',
    descriptionKey: 'pages.scansAndLists.designMaterialArchitecture.tactileVerification.description'
  }
]
</script>

