<template>
  <section class="mt-16 lg:mt-24">
    <div class="max-w-7xl mx-auto px-4">
      <div class="border border-white/20 rounded-3xl overflow-hidden">
        <div
          v-for="(course, index) in courses"
          :key="course.id"
          :class="[
            index !== courses.length - 1 ? 'border-b border-white/10' : ''
          ]"
        >
          <!-- Заголовок курса с кнопкой раскрытия -->
          <button
            @click="toggleCourse(course.id)"
            class="w-full flex items-center gap-4 p-4 lg:p-6 text-left"
          >
            <!-- Изображение курса -->
            <div
              v-if="course.image"
              class="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#161616]"
            >
              <img
                :src="course.image"
                :alt="course.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              v-else
              class="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-xl bg-[#161616] flex items-center justify-center"
            >
              <span class="text-white/40 text-xs">Image</span>
            </div>

            <!-- Название курса -->
            <div class="flex-1 min-w-0">
              <h3 class="text-white font-medium text-base lg:text-lg mb-1">
                {{ course.title }}
              </h3>
              <p class="text-white/60 text-sm">
                {{ $t('pages.coaching.course.courseNumber', { number: course.id }) }}
              </p>
            </div>

            <!-- Стрелка -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 lg:h-6 lg:w-6 text-white transition-transform duration-300 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :class="{ 'rotate-180': openCourses.includes(course.id) }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Раскрывающийся контент -->
          <div
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="{
              maxHeight: openCourses.includes(course.id) ? `${contentHeights[course.id] || 0}px` : '0px',
              opacity: openCourses.includes(course.id) ? 1 : 0
            }"
          >
            <div
              :ref="el => setContentRef(course.id, el)"
              class="px-4 lg:px-6 pb-4 lg:pb-6"
            >

              <!-- Блок "What you'll learn" -->
              <div class="mb-6 mt-2">
                <h4 class="text-white font-semibold text-sm lg:text-base mb-4">
                  {{ $t('pages.coaching.course.whatYoullLearn') }}
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div
                    v-for="(item, index) in learningItems"
                    :key="index"
                    class="flex items-start gap-2"
                  >
                    <svg
                      class="w-4 h-4 text-white flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-white/80 text-xs lg:text-sm">
                      {{ $t(item) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Блок "Skills you'll gain" -->
              <div>
                <h4 class="text-white font-semibold text-sm lg:text-base mb-4">
                  {{ $t('pages.coaching.course.skillsYoullGain') }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(skill, index) in skills"
                    :key="index"
                    class="bg-[#161616] border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {{ $t(skill) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, type ComponentPublicInstance } from 'vue'
import type { Course } from '@entities/course'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  courses: Course[]
  excludeCourseId?: string
}>()

const openCourses = ref<string[]>([])
const contentHeights = ref<Record<string, number>>({})
const contentRefs = ref<Record<string, HTMLElement | null>>({})

const selectedTab = ref('overview')

const tabs = [
  { id: 'overview', labelKey: 'pages.coaching.course.tabs.overview' },
  { id: 'about', labelKey: 'pages.coaching.course.tabs.about' },
  { id: 'courses', labelKey: 'pages.coaching.course.tabs.courses' }
]

const learningItems = [
  'pages.coaching.course.learning.buildSoftware',
  'pages.coaching.course.learning.promptEngineering',
  'pages.coaching.course.learning.deployApps',
  'pages.coaching.course.learning.aiTools',
  'pages.coaching.course.learning.webDevelopment',
  'pages.coaching.course.learning.versionControl',
  'pages.coaching.course.learning.testing',
  'pages.coaching.course.learning.uiDesign',
  'pages.coaching.course.learning.apiIntegration'
]

const skills = [
  'pages.coaching.course.skills.buildSoftware',
  'pages.coaching.course.skills.promptEngineering',
  'pages.coaching.course.skills.deployApps',
  'pages.coaching.course.skills.aiTools',
  'pages.coaching.course.skills.webDevelopment'
]

const setContentRef = (courseId: string, el: Element | ComponentPublicInstance | null) => {
  if (el && el instanceof HTMLElement) {
    contentRefs.value[courseId] = el
  }
}

const updateHeight = async (courseId: string) => {
  await nextTick()
  const element = contentRefs.value[courseId]
  if (element) {
    contentHeights.value[courseId] = element.scrollHeight
  }
}

const toggleCourse = async (courseId: string) => {
  const index = openCourses.value.indexOf(courseId)
  if (index > -1) {
    openCourses.value.splice(index, 1)
  } else {
    openCourses.value.push(courseId)
    await nextTick()
    await updateHeight(courseId)
  }
}

onMounted(async () => {
  // Обновляем высоты для всех открытых курсов после монтирования
  await nextTick()
  openCourses.value.forEach(courseId => {
    updateHeight(courseId)
  })
})
</script>

