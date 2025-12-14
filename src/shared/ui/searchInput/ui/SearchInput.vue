<template>
  <div class="flex-1 relative">
    <div class="absolute left-4 top-1/2 -translate-y-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      :value="modelValue"
      @input="handleInput"
      type="text"
      :placeholder="placeholder"
      class="w-full bg-[#1a1a1a] text-white placeholder-white/50 rounded-full pl-12 pr-4 py-3 border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
    />
  </div>
</template>

<script setup lang="ts">
import type { SearchInputProps } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<SearchInputProps>(), {
  placeholder: 'Search'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

