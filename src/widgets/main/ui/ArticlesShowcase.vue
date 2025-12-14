<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-12">
        <div>
          <h2 class="text-white text-2xl lg:text-4xl font-bold">
            {{ $t('articlesHighlight.subtitle') }}
          </h2>
        </div>

        <GlowButton @click="handleViewAllArticles">
          {{ $t('articlesHighlight.viewAll') }}
        </GlowButton>
      </div>

      <div class="relative overflow-hidden">
        <!-- Desktop Swiper -->
        <div class="hidden sm:block">
          <Swiper
            v-if="articles.length"
            :modules="desktopModules"
            :slides-per-view="3.2"
            :space-between="24"
            :free-mode="true"
            :grab-cursor="true"
            :mousewheel="false"
            :watch-slides-progress="true"
            :watch-overflow="true"
            :loop-additional-slides="2"
            :breakpoints="{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24
              }
            }"
            class="articles-swiper-desktop"
          >
            <SwiperSlide v-for="article in articles" :key="article.id">
              <ArticleCard :article="article" />
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Mobile Swiper -->
        <div class="sm:hidden">
          <Swiper
            v-if="articles.length && isPaginationReady"
            :modules="mobileModules"
            :slides-per-view="1"
            :space-between="10"
            :grab-cursor="false"
            :loop="false"
            :pagination="mobilePagination"
            @swiper="onMobileSwiperInit"
            @slide-change="onSlideChange"
            class="articles-swiper-mobile"
          >
            <SwiperSlide v-for="article in articles" :key="article.id">
              <ArticleCard :article="article" />
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Mobile Navigation -->
        <div class="mt-6 flex flex-col gap-4 sm:hidden">
          <div class="flex items-center justify-between">
            <button
              class="p-3 rounded-full border border-white/20 text-white/70 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              :disabled="currentSlide <= 0"
              @click="slidePrev"
            >
              <span class="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              class="p-3 rounded-full border border-white/20 text-white/70 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              :disabled="currentSlide >= totalSlides - 1"
              @click="slideNext"
            >
              <span class="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          <div ref="paginationEl" class="articles-swiper-mobile-pagination flex items-center justify-center gap-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { ArticleCard } from '@entities/article'
import { GlowButton } from '@shared/ui'
import { useArticles } from '../hook/useArticles'

const desktopModules = [FreeMode]
const mobileModules = [Pagination]

const { articles } = useArticles()

const mobileSwiperRef = ref<SwiperType | null>(null)
const paginationEl = ref<HTMLElement | null>(null)
const isPaginationReady = ref(false)
const currentSlide = ref(0)
const totalSlides = computed(() => articles.value.length)

const mobilePagination = computed(() => {
  if (!paginationEl.value) {
    return false
  }
  return {
    el: paginationEl.value,
    clickable: true,
    type: 'bullets' as const
  }
})

onMounted(async () => {
  await nextTick()
  isPaginationReady.value = true
})

const onMobileSwiperInit = (swiper: SwiperType) => {
  mobileSwiperRef.value = swiper
}

const slidePrev = () => {
  mobileSwiperRef.value?.slidePrev()
}

const slideNext = () => {
  mobileSwiperRef.value?.slideNext()
}

const onSlideChange = (swiper: SwiperType) => {
  currentSlide.value = swiper.activeIndex
}

const handleViewAllArticles = () => {
  console.log('View all articles clicked')
}
</script>

<style>
.articles-swiper-desktop :deep(.swiper) {
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

.articles-swiper-desktop :deep(.swiper-wrapper) {
  cursor: grab;
  display: flex;
  align-items: stretch;
}

.articles-swiper-desktop :deep(.swiper-wrapper:active) {
  cursor: grabbing;
}

.articles-swiper-desktop :deep(.swiper-slide) {
  height: auto;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
}

.articles-swiper-mobile :deep(.swiper) {
  overflow: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

.articles-swiper-mobile :deep(.swiper-slide) {
  height: auto;
  width: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
}

.articles-swiper-mobile-pagination {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  margin-bottom: 5px;
}

.articles-swiper-mobile-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0) !important;
  border: 1px solid #d5d5d5;
  opacity: 1;
  margin: 0;
  transition: all 0.2s;
}

.articles-swiper-mobile-pagination .swiper-pagination-bullet-active {
  background: #F3983E !important;
  transform: scale(1.25);
  border: 1px solid #F3983E;
  box-shadow: 0 0 10px rgba(243, 152, 62, 0.6) !important;
}
</style>
