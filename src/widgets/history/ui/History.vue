<template>
  <section class="px-4 pt-24 lg:pt-32 pb-8 lg:pb-16">
    <div class="max-w-7xl mx-auto">
      <div class="md:flex gap-8 lg:gap-12 items-center">
        <!-- Левая часть: текст и блоки -->
        <div class="space-y-6 flex-1 flex-basis-[45%]">
          <!-- Заголовок и подзаголовок -->
          <div class="space-y-3 mb-[10rem]">
            <h2 class="text-white text-2xl lg:text-4xl font-bold">
              {{ $t('history.title') }}
            </h2>
            <p class="text-white text-base lg:text-lg leading-relaxed">
              {{ $t('history.subtitle') }}
            </p>
          </div>

          <!-- Блоки с датами в горизонтальном флексе -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div
              v-for="(milestone, index) in milestones"
              :key="index"
              class="space-y-2 flex-1"
            >
              <div class="flex items-center gap-2">
                <span class="text-orange-500 text-xl lg:text-2xl font-bold">
                  {{ milestone.year }}
                </span>
                <span class="text-white text-lg lg:text-xl font-medium">
                  {{ $t(milestone.labelKey) }}
                </span>
              </div>
              <p class="text-white text-sm lg:text-base leading-relaxed">
                {{ $t(milestone.descriptionKey) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Правая часть: изображение -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-full max-w-">
            <img
              src="~/assets/images/witch.png"
              alt="History"
              class="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const milestones = [
  {
    year: '2017',
    labelKey: 'history.milestones.2017.label',
    descriptionKey: 'history.milestones.2017.description',
  },
  {
    year: '2017',
    labelKey: 'history.milestones.2017.label',
    descriptionKey: 'history.milestones.2017.description',
  },
]
</script>

