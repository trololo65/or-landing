// Глобальные типы для Nuxt
declare module '#app' {
  interface NuxtApp {
    // Здесь можно добавить кастомные свойства для NuxtApp
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    // Здесь можно добавить глобальные свойства Vue
  }
}

// Расширение типов для process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_PUBLIC_API_URL?: string
      NUXT_PUBLIC_APP_NAME?: string
      NUXT_PUBLIC_APP_VERSION?: string
    }
  }

  // Глобальные функции Nuxt
  function useI18n(): {
    locale: Ref<string>
    locales: Ref<any[]>
    setLocale: (locale: string) => void
    switchLocalePath: (locale: string) => string
  }

  function useRouter(): {
    currentRoute: Ref<{
      path: string
      params: Record<string, any>
      query: Record<string, any>
    }>
    push: (path: string) => Promise<void>
    replace: (path: string) => Promise<void>
    go: (delta: number) => void
    back: () => void
    forward: () => void
  }

  function useRoute(): {
    path: string
    params: Record<string, any>
    query: Record<string, any>
    name: string | null
    fullPath: string
  }

  function useNuxtApp(): {
    navigateTo: (path: string) => void
  }

  function navigateTo(path: string): void
}

export {}
