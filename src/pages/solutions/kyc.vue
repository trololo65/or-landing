<template>
  <div class="min-h-screen pt-24 lg:pt-32 px-4 py-8 lg:py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Кнопка назад -->
      <button
        @click="goBack"
        class="mb-8 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <!-- Контент -->
      <div class="flex flex-col items-center">
        <!-- Изображение смартфона -->
        <div class="-mb-2 max-w-xs lg:max-w-sm w-full">
          <img
            src="~/assets/images/kyc.png"
            alt="KYC Features"
            class="w-full h-auto object-contain"
          />
        </div>

        <!-- Заголовок -->
        <h1 class="text-xl lg:text-3xl font-bold text-white text-center mb-3">
          {{ $t('kyc.title') }}
        </h1>

        <!-- Подзаголовок -->
        <p class="text-white/80 text-xs lg:text-sm text-center max-w-3xl mb-10 lg:mb-14">
          {{ $t('kyc.subtitle') }}
        </p>

        <!-- Список функций -->
        <div class="w-full max-w-4xl space-y-6 lg:space-y-8">
          <div
            v-for="feature in features"
            :key="feature"
            class="text-white text-lg lg:text-xl leading-relaxed"
          >
            {{ $t(`kyc.features.${feature}`) }}
          </div>
        </div>

        <!-- Преимущества -->
        <section class="w-full max-w-5xl mt-12 lg:mt-16">
          <div class="flex flex-col md:flex-row md:items-start gap-6">
            <h2 class="text-2xl lg:text-3xl font-semibold text-white md:min-w-[220px] whitespace-pre">
              {{ $t('kyc.advantages.title') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
              <div
                v-for="item in advantages"
                :key="item.key"
                class="items-start gap-3 text-white/90"
              >
                <div class="flex-shrink-0 pt-1">
                  <img
                    :src="item.image"
                    :alt="item.key"
                    class="w-8 h-8 lg:w-9 lg:h-9 object-contain"
                  />
                </div>
                <p class="text-sm lg:text-base leading-relaxed">
                  {{ $t(`kyc.advantages.${item.key}`) }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Hero placeholder section -->
        <section class="w-[100vw] h-[100vh] bg-[#272727] mt-12 lg:mt-16">
          
        </section>

        <!-- FAQ Section -->
        <FAQSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import success from '~/assets/images/success.png'
import xbox from '~/assets/images/xbox.png'
import watch from '~/assets/images/watch.png'
import { FAQSection } from '@widgets/main'
const router = useRouter()

useHead({
  title: 'KYC Features - KOZMAP'
})

const features = [
  'feature1',
  'feature2',
  'feature3',
  'feature4'
]

const advantages = [
  { key: 'item1', image: success },
  { key: 'item2', image: xbox },
  { key: 'item3', image: watch }
]

const goBack = () => {
  router.back()
}
</script>

