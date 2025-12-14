<template>
  <div class="rounded-3xl overflow-hidden bg-[#161616] flex">
    <!-- Оранжевая плашка слева -->
    <div class="w-2 bg-[#FF7300] flex-shrink-0"></div>
    
    <!-- Контент -->
    <div class="flex-1">
      <!-- Заголовок с кнопкой -->
      <button
        @click="toggle"
        class="w-full flex items-center justify-between p-6 text-left"
      >
        <h3 class="text-white font-medium text-lg pr-4">
          {{ item.question }}
        </h3>
        <div class="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white transition-transform duration-300 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            :class="{ 'rotate-45': isOpen }"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      
      <!-- Ответ (показывается при открытии) -->
      <div
        ref="answerRef"
        class="overflow-hidden transition-all duration-300 ease-in-out"
        :style="{
          maxHeight: isOpen ? `${answerHeight}px` : '0px',
          opacity: isOpen ? 1 : 0
        }"
      >
        <div ref="contentRef" class="px-6 pb-6">
          <p class="text-white/60 text-base leading-relaxed">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'
import type { FAQItem } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  item: FAQItem
  defaultOpen?: boolean
}>()

const isOpen = ref(props.defaultOpen || false)
const answerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const answerHeight = ref(0)

const updateHeight = async () => {
  await nextTick()
  if (contentRef.value) {
    answerHeight.value = contentRef.value.scrollHeight
  }
}

onMounted(() => {
  updateHeight()
})

watch(() => props.item.answer, () => {
  updateHeight()
})

watch(isOpen, async () => {
  if (isOpen.value) {
    await nextTick()
    updateHeight()
  }
})

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
</style>

