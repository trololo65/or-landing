<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок и кнопка -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8 lg:mb-12">
        <div>
          <h2 class="text-white text-2xl lg:text-4xl font-bold mb-2">
            {{ $t('courses.title') }}
          </h2>
          <p class="text-gray-300 text-sm lg:text-base">
            {{ $t('courses.subtitle') }}
          </p>
        </div>
        
        <GlowButton @click="handleViewAllCourses">
          {{ $t('courses.viewAll') }}
        </GlowButton>
      </div>

      <!-- Сетка курсов -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CourseCard } from '@entities/course'
import { GlowButton } from '@shared/ui'
import { useCourses } from '../hook/useCourses'

const { courses } = useCourses()

const handleViewAllCourses = () => {
  console.log('View all courses clicked')
}
</script>

