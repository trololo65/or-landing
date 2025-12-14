// Хуки для работы с localStorage
import { ref, readonly } from 'vue'

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const stored = ref<T>(defaultValue)
  
  if (process.client) {
    const item = localStorage.getItem(key)
    if (item) {
      try {
        stored.value = JSON.parse(item)
      } catch {
        stored.value = defaultValue
      }
    }
  }

  const setValue = (value: T) => {
    stored.value = value
    if (process.client) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  return {
    value: readonly(stored),
    setValue
  }
}
