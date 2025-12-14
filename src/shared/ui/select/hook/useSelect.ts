import { ref, computed, watch, onMounted, onUnmounted, type Ref, type MaybeRefOrGetter } from 'vue'
import { toValue } from 'vue'
import type { SelectOption } from '../model/types'

export interface DropdownPosition {
  top: number
  left: number
  openUpward: boolean
}

export const useSelect = (
  options: MaybeRefOrGetter<SelectOption[]>,
  modelValue: MaybeRefOrGetter<string>,
  emit: (event: 'update:modelValue', value: string) => void,
  buttonRef?: Ref<HTMLElement | null>
) => {
  const isOpen = ref(false)
  const openUpward = ref(false)
  const dropdownPosition = ref<DropdownPosition>({ top: 0, left: 0, openUpward: false })
  
  const selectedOption = computed(() => {
    const opts = toValue(options)
    const value = toValue(modelValue)
    return opts.find(opt => opt.value === value)
  })
  
  const calculateDropdownPosition = () => {
    if (!buttonRef?.value) return
    
    const buttonRect = buttonRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth
    const opts = toValue(options)
    
    // Примерная высота дропдауна (можно настроить)
    const dropdownHeight = opts.length * 48 + 16 // 48px на опцию + отступы
    const dropdownWidth = 128 // w-32 = 128px
    
    const spaceBelow = viewportHeight - buttonRect.bottom
    const spaceAbove = buttonRect.top
    
    // Открываем вверх, если снизу недостаточно места и сверху больше
    const shouldOpenUpward = spaceBelow < dropdownHeight && spaceAbove > spaceBelow
    openUpward.value = shouldOpenUpward
    
    // Вычисляем позицию относительно viewport
    const left = buttonRect.right - dropdownWidth // Выравнивание по правому краю
    const top = shouldOpenUpward
      ? buttonRect.top - dropdownHeight - 8 // 8px = mt-2 или mb-2
      : buttonRect.bottom + 8
    
    dropdownPosition.value = {
      top: Math.max(8, Math.min(top, viewportHeight - dropdownHeight - 8)), // Ограничиваем границами viewport
      left: Math.max(8, Math.min(left, viewportWidth - dropdownWidth - 8)), // Ограничиваем границами viewport
      openUpward: shouldOpenUpward,
    }
  }
  
  const toggleDropdown = () => {
    if (!isOpen.value) {
      calculateDropdownPosition()
    }
    isOpen.value = !isOpen.value
  }
  
  const closeDropdown = () => {
    isOpen.value = false
  }
  
  const selectOption = (option: SelectOption) => {
    if (!option.disabled) {
      emit('update:modelValue', option.value)
      closeDropdown()
    }
  }
  
  // Обновляем позицию при скролле и изменении размера окна
  const updatePosition = () => {
    if (isOpen.value) {
      calculateDropdownPosition()
    }
  }
  
  // Следим за открытием/закрытием и обновляем позицию
  watch(isOpen, (newValue) => {
    if (newValue) {
      calculateDropdownPosition()
      // Добавляем обработчики событий при открытии
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', updatePosition, true)
        window.addEventListener('resize', updatePosition)
      }
    } else {
      // Удаляем обработчики событий при закрытии
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', updatePosition, true)
        window.removeEventListener('resize', updatePosition)
      }
    }
  })
  
  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  })
  
  return {
    isOpen,
    openUpward,
    dropdownPosition,
    selectedOption,
    toggleDropdown,
    closeDropdown,
    selectOption,
  }
}

