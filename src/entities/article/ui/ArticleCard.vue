<template>
  <NuxtLink :to="tutorialPath" class="block">
    <ResourceCard
      :title="article.title"
      :tags="article.tags"
      :meta="article.date"
      :image="article.image"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from 'vue'
import { ResourceCard } from '@shared/ui'
import type { Article } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  article: Article
}>()

const instance = getCurrentInstance()
const { locale } = useI18n()

const tutorialPath = computed(() => {
  const basePath = `/tutorials/tutorial/${props.article.id}`
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


