<template>
  <div class="min-h-screen pt-24 lg:pt-32 px-4 py-8 lg:py-16">
    <div class="max-w-4xl mx-auto">
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
          v-for="tag in tutorial.tags"
          :key="tag"
          class="bg-white/90 text-black text-sm font-medium px-4 py-2 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Заголовок -->
      <h1 class="text-3xl lg:text-5xl font-bold text-white mb-4">
        {{ tutorial.title }}
      </h1>

      <!-- Дата -->
      <p class="text-white/60 text-base mb-8">
        {{ tutorial.date }}
      </p>

      <!-- Главное изображение -->
      <div
        v-if="tutorial.image"
        class="w-full aspect-video bg-[#1a1a1a] rounded-3xl mb-8 overflow-hidden"
      >
        <img
          :src="tutorial.image"
          :alt="tutorial.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        v-else
        class="w-full aspect-video bg-[#1a1a1a] rounded-3xl mb-8 flex items-center justify-center"
      >
        <span class="text-white/40">Image placeholder</span>
      </div>

      <!-- Описание -->
      <div class="mb-8">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-4">
          {{ tutorial.title }}
        </h2>
        <p class="text-white/80 text-base lg:text-lg leading-relaxed">
          {{ tutorial.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' }}
        </p>
      </div>

      <!-- Дополнительный контент -->
      <div class="space-y-8">
        <!-- Текстовый блок -->
        <div>
          <p class="text-white/80 text-base lg:text-lg leading-relaxed mb-4">
            {{ tutorial.content || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' }}
          </p>
          <p class="text-white/80 text-base lg:text-lg leading-relaxed">
            {{ tutorial.content2 || 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }}
          </p>
        </div>

        <!-- Место под фото -->
        <div class="w-full aspect-video bg-[#1a1a1a] rounded-3xl overflow-hidden">
          <div class="w-full h-full flex items-center justify-center">
            <span class="text-white/40">Image placeholder</span>
          </div>
        </div>

        <!-- Дополнительный текст -->
        <div>
          <p class="text-white/80 text-base lg:text-lg leading-relaxed">
            {{ tutorial.content3 || 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useArticles } from '@widgets/main'
import type { Article } from '@entities/article'

const route = useRoute()
const router = useRouter()

useHead({
  title: 'Tutorial - KOZMAP'
})

const { articles } = useArticles()

const tutorial = computed<Article & { content?: string; content2?: string; content3?: string }>(() => {
  const article = articles.value.find(a => a.id === route.params.id as string)
  
  if (!article) {
    // Возвращаем дефолтный объект, если статья не найдена
    return {
      id: route.params.id as string,
      title: 'Tutorial not found',
      tags: [],
      date: '',
      description: '',
      content: '',
      content2: '',
      content3: ''
    }
  }

  return {
    ...article,
    description: article.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    content2: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    content3: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
  }
})

const goBack = () => {
  router.back()
}
</script>

