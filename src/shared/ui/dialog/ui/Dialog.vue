<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xl"
      @click="handleOverlayClick"
    >
      <div
        class="relative p-6 max-w-lg mx-4 max-h-[80vh] overflow-y-auto"
        :class="$attrs.class || ''"
        @click.stop
      >
        <!-- Кнопка закрытия -->
        <div class="absolute top-6 right-6 z-10">
          <slot name="close-button">
            <button
              @click="handleClose"
              class="text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </slot>
        </div>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import type { DialogProps } from '../model/types'

defineOptions({
  inheritAttrs: true
})

const props = withDefaults(defineProps<DialogProps>(), {
  modelValue: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleOverlayClick = () => {
  emit('update:modelValue', false)
}

const handleClose = () => {
  emit('update:modelValue', false)
}

// Управление overflow при открытии/закрытии диалога
watch(() => props.modelValue, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Очистка при размонтировании
onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

