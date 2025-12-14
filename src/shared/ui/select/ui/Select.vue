<template>
  <div class="relative inline-block" v-click-outside="closeDropdown">
    <button
      ref="buttonRef"
      type="button"
      @click="toggleDropdown"
      :disabled="disabled"
      class="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/30 rounded-full text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span class="text-sm font-medium">{{ selectedOption?.label || placeholder }}</span>
      <svg
        class="w-4 h-4 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen && !openUpward, 'rotate-0': isOpen && openUpward }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          ref="dropdownRef"
          data-select-dropdown
          class="fixed w-32 rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden z-[100]"
          :style="{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
          }"
        >
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            @click="selectOption(option)"
            :disabled="option.disabled"
            class="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/10 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="{
              'bg-white/5': option.value === modelValue,
            }"
          >
            {{ option.label }}
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSelect } from '../hook/useSelect'
import type { SelectProps } from '../model/types'

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select...',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const buttonRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const { isOpen, openUpward, dropdownPosition, selectedOption, toggleDropdown, closeDropdown, selectOption } = useSelect(
  computed(() => props.options),
  computed(() => props.modelValue),
  emit,
  buttonRef
)

// Директива для закрытия по клику вне элемента
interface ClickOutsideElement extends HTMLElement {
  clickOutsideEvent?: (event: Event) => void
}

const vClickOutside = {
  mounted(el: ClickOutsideElement, binding: any) {
    el.clickOutsideEvent = (event: Event) => {
      const target = event.target as HTMLElement
      // Проверяем, что клик не по кнопке или её дочерним элементам
      const isClickOnButton = el === target || el.contains(target)
      // Проверяем, что клик не по выпадающему списку (который в body через Teleport)
      const isClickOnDropdown = target.closest('[data-select-dropdown]')
      
      if (!isClickOnButton && !isClickOnDropdown) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: ClickOutsideElement) {
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  },
}
</script>

