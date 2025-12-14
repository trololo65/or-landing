<template>
  <section class="px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок секции -->
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-10">
        {{ $t('pages.coaching.coursesTitle') || 'All Courses' }}
      </h2>

      <!-- Сетка карточек курсов -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
import { useCourses } from '@widgets/main'

const { courses } = useCourses()
</script>


