// Асинхронные хуки
import { ref, readonly } from 'vue'

export const useAsyncData = <T>(
  key: string,
  handler: () => Promise<T>,
  options: { default: () => T; server?: boolean } = { default: () => null as T }
) => {
  const data = ref<T>(options.default())
  const pending = ref(false)
  const error = ref<Error | null>(null)

  const execute = async () => {
    try {
      pending.value = true
      error.value = null
      data.value = await handler()
    } catch (err) {
      error.value = err as Error
    } finally {
      pending.value = false
    }
  }

  return {
    data: readonly(data),
    pending: readonly(pending),
    error: readonly(error),
    execute
  }
}
