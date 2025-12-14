<template>
  <NuxtLink :to="coursePath" class="block">
    <ResourceCard
      :title="course.title"
      :description="course.description"
      :tags="course.tags"
      :meta="course.price"
      :image="course.image"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { ResourceCard } from '@shared/ui'
import type { Course } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  course: Course
}>()

const instance = getCurrentInstance()
const { locale } = useI18n()

const coursePath = computed(() => {
  const basePath = `/coaching/course/${props.course.id}`
  const localePath = instance?.appContext.config.globalProperties.$localePath
  
  if (localePath && typeof localePath === 'function') {
    return localePath(basePath)
  }
  
  // Fallback: добавляем префикс локали, если это не дефолтная локаль
  // В конфиге strategy: 'prefix_except_default', defaultLocale: 'ru'
  if (locale.value !== 'ru') {
    return `/${locale.value}${basePath}`
  }
  
  return basePath
})
</script>

