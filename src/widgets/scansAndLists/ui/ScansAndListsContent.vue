<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Левая часть: изображение карты в зависимости от таба -->
        <div class="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
          <Transition
            name="fade"
            mode="out-in"
          >
            <img
              :key="currentMapImage"
              :src="currentMapImage"
              alt="Map"
              class="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </Transition>
        </div>

        <!-- Правая часть: табы, текст и ID карты -->
        <div class="flex flex-col gap-6 lg:gap-8">
          <!-- Табы -->
          <div class="flex justify-end">
            <div class="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-2 py-2 border border-white/20">
              <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="selectedTab = tab.id"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  selectedTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-white/70 hover:text-white'
                ]"
              >
                {{ $t(tab.labelKey) }}
              </button>
            </div>
          </div>

          <!-- Заголовок -->
          <h2 class="text-3xl lg:text-5xl font-bold text-white">
            {{ $t('pages.scansAndLists.title') }}
          </h2>

          <!-- Текст -->
          <div class="text-white/80 text-base lg:text-lg leading-relaxed space-y-4">
            <p>{{ $t('pages.scansAndLists.lidsDescription') }}</p>
            <p>{{ $t('pages.scansAndLists.scansDescription') }}</p>
            <p>{{ $t('pages.scansAndLists.sharedDescription') }}</p>
          </div>

          <!-- ID карты -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <!-- Lid карта -->
            <div class="flex flex-col gap-3">
              <h3 class="text-xl font-semibold text-white uppercase">
                {{ $t('pages.scansAndLists.lid') }}
              </h3>
              <div class="relative">
                <img
                  :src="getCurrentIdCardImage"
                  alt="ID Card"
                  class="w-full h-auto rounded-lg border border-white/20"
                />
              </div>
            </div>

            <!-- Scan карта -->
            <div class="flex flex-col gap-3">
              <h3 class="text-xl font-semibold text-white uppercase">
                {{ $t('pages.scansAndLists.scan') }}
              </h3>
              <div class="relative">
                <img
                  :src="getCurrentIdCardImage"
                  alt="ID Card Scan"
                  class="w-full h-auto rounded-lg border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import mapAmerica from '~/assets/images/map-america.png'
import europeAsia from '~/assets/images/europe-asia.png'
import idCard from '~/assets/images/example-ID-card.jpg'

const selectedTab = ref('north-america')

const tabs = [
  { id: 'north-america', labelKey: 'pages.scansAndLists.tabs.northAmerica' },
  { id: 'europe-union', labelKey: 'pages.scansAndLists.tabs.europeUnion' }
]

// Маппинг изображений карт для разных табов
const mapImages = {
  'north-america': mapAmerica,
  'europe-union': europeAsia
}

// Текущее изображение карты в зависимости от выбранного таба
const currentMapImage = computed(() => {
  return mapImages[selectedTab.value as keyof typeof mapImages] || mapAmerica
})

// Изображение ID карты (можно менять в зависимости от таба в будущем)
const getCurrentIdCardImage = computed(() => {
  return idCard
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

