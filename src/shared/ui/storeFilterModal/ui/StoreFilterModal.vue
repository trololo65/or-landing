<template>
  <Dialog
    :model-value="modelValue"
    @update:model-value="handleUpdate"
    class="!max-w-4xl !overflow-visible"
  >
    <template #close-button>
      <div></div>
    </template>

    <div class="relative max-h-[80vh]">
      <!-- Кнопка закрытия слева вверху -->
      <button
        @click="handleClose"
        class="absolute -top-2 translate-y-[-100%] -left-2 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors z-10"
        aria-label="Close"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <!-- Заголовок и кнопка Enroll -->
      <div class="flex items-start justify-between mb-8">
        <div class="flex-1">
          <h2 class="text-white text-3xl lg:text-4xl font-bold mb-2">
            {{ $t('store.filterModal.title') }}
          </h2>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-white text-lg font-medium">
            {{ $t('store.filterModal.price') }}
          </span>
          <button
            class="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            @click="handleEnroll"
          >
            {{ $t('store.filterModal.enroll') }}
          </button>
        </div>
      </div>

      <!-- Секции с фильтрами -->
      <div class="space-y-8">
        <div
          v-for="(question, questionIndex) in filterQuestions"
          :key="questionIndex"
          class="space-y-4"
        >
          <h3 class="text-white text-lg font-medium">
            {{ $t('store.filterModal.questionOnOption') }}
          </h3>
          
          <div class="flex flex-wrap gap-3">
            <button
              v-for="option in question.options"
              :key="option.id"
              @click="handleOptionSelect(questionIndex, option.id)"
              :class="[
                'px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap',
                selectedOptions[questionIndex] === option.id
                  ? 'bg-[#ffffff] text-black'
                  : 'bg-transparent text-white/70 hover:text-white'
              ]"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Dialog } from '@shared/ui'
import type { StoreFilterModalProps } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<StoreFilterModalProps>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:selectedOptions': [value: Record<number, string>]
}>()

const selectedOptions = reactive<Record<number, string>>({})

// Инициализация выбранных опций
if (props.defaultSelectedOptions) {
  Object.assign(selectedOptions, props.defaultSelectedOptions)
} else {
  // По умолчанию выбираем "All" для каждой секции
  props.filterQuestions.forEach((_, index) => {
    const allOption = props.filterQuestions[index].options.find(opt => opt.id === 'all')
    if (allOption) {
      selectedOptions[index] = 'all'
    }
  })
}

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}

const handleClose = () => {
  emit('update:modelValue', false)
}

const handleOptionSelect = (questionIndex: number, optionId: string) => {
  selectedOptions[questionIndex] = optionId
  emit('update:selectedOptions', { ...selectedOptions })
}

const handleEnroll = () => {
  // Логика для кнопки Enroll
  console.log('Enroll clicked', selectedOptions)
  emit('update:modelValue', false)
}
</script>

