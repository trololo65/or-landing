// Утилитарные хуки
import { ref, watch, type Ref } from 'vue'

export const useDebounce = <T>(value: Ref<T>, delay = 300) => {
  const debouncedValue = ref(value.value) as Ref<T>

  let timeoutId: NodeJS.Timeout

  watch(value, (newValue: T) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      debouncedValue.value = newValue
    }, delay)
  })

  return debouncedValue
}
