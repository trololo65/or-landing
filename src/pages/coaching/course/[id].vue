<template>
  <div class="min-h-screen pt-24 lg:pt-32 px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Desktop Layout: фото справа -->
      <div class="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Левая часть: контент (2/3 ширины) -->
        <div class="col-span-2">
          <!-- Кнопка назад -->
          <button
            @click="goBack"
            class="mb-6 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
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

          <!-- Теги -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in course.tags"
              :key="tag"
              class="bg-white/90 text-black text-sm font-medium px-4 py-2 rounded-full"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Заголовок -->
          <h1 class="text-3xl lg:text-5xl font-bold text-white mb-6">
            {{ course.title }}
          </h1>

          <!-- Описание -->
          <p class="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
            {{ course.description }}
          </p>

          <!-- Цена, тег и кнопка -->
          <div class="flex items-center gap-4 flex-wrap">
            <span class="text-white font-bold text-xl lg:text-2xl">
              {{ course.price }}
            </span>
            <button
              class="bg-white/90 text-black text-sm font-medium px-6 py-2 rounded-full hover:bg-white transition-colors"
            >
              {{ $t('pages.coaching.course.enroll') }}
            </button>
          </div>
        </div>

        <!-- Правая часть: фото (1/3 ширины) -->
        <div class="col-span-1">
          <div
            v-if="course.image"
            class="w-full aspect-[4/5] bg-[#1a1a1a] rounded-3xl overflow-hidden"
          >
            <img
              :src="course.image"
              :alt="course.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            v-else
            class="w-full aspect-[4/5] bg-[#1a1a1a] rounded-3xl flex items-center justify-center"
          >
            <span class="text-white/40">Image placeholder</span>
          </div>
        </div>
      </div>

      <!-- Mobile Layout: фото сверху -->
      <div class="md:hidden">
        <!-- Фото сверху -->
        <div
          v-if="course.image"
          class="w-full aspect-[4/5] bg-[#1a1a1a] rounded-3xl overflow-hidden mb-8"
        >
          <img
            :src="course.image"
            :alt="course.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          v-else
          class="w-full aspect-[4/5] bg-[#1a1a1a] rounded-3xl flex items-center justify-center mb-8"
        >
          <span class="text-white/40">Image placeholder</span>
        </div>

        <!-- Кнопка назад -->
        <button
          @click="goBack"
          class="mb-6 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
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

        <!-- Теги -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tag in course.tags"
            :key="tag"
            class="bg-white/90 text-black text-sm font-medium px-4 py-2 rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Заголовок -->
        <h1 class="text-3xl font-bold text-white mb-6">
          {{ course.title }}
        </h1>

        <!-- Описание -->
        <p class="text-white/80 text-base leading-relaxed mb-8">
          {{ course.description }}
        </p>

        <!-- Цена, тег и кнопка с justify-between -->
        <div class="flex items-center justify-between gap-4 flex-wrap">
          <span class="text-white font-bold text-xl">
            {{ course.price }}
          </span>
          <div class="flex items-center gap-4">
            <button
              class="bg-white/90 text-black text-sm font-medium px-6 py-2 rounded-full hover:bg-white transition-colors"
            >
              {{ $t('pages.coaching.course.enroll') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Блок с табами, обучением, скиллами и описанием -->
      <CourseDetails />

      <!-- Блок похожих курсов -->
      <SimilarCourses :courses="similarCourses" :exclude-course-id="course.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCourses } from '@widgets/main'
import { CourseDetails, SimilarCourses } from '@widgets/courseDetails'
import type { Course } from '@entities/course'

const route = useRoute()
const router = useRouter()

useHead({
  title: 'Course - KOZMAP'
})

const { courses } = useCourses()

const course = computed<Course>(() => {
  const foundCourse = courses.value.find(c => c.id === route.params.id as string)
  
  if (!foundCourse) {
    // Возвращаем дефолтный объект, если курс не найден
    return {
      id: route.params.id as string,
      title: 'Course not found',
      description: '',
      tags: [],
      price: ''
    }
  }

  return foundCourse
})

const similarCourses = computed<Course[]>(() => {
  // Возвращаем все курсы кроме текущего
  return courses.value.filter(c => c.id !== route.params.id as string)
})

const goBack = () => {
  router.back()
}
</script>

