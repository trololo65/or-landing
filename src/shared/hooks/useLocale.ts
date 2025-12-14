// Хуки для работы с локализацией
import { computed, readonly } from 'vue'

export const useLocale = () => {
  const { locale, locales, setLocale } = useI18n()
  
  const availableLocales = computed(() => {
    return (locales.value as any[]).filter((loc: any) => 
      typeof loc === 'object' && 'code' in loc && 'name' in loc
    )
  })

  const switchLanguage = (newLocale: string) => {
    setLocale(newLocale)
  }

  const switchLanguageWithNavigation = async (newLocale: string) => {
    await setLocale(newLocale)
  }

  return {
    locale: readonly(locale),
    locales: availableLocales,
    switchLanguage,
    switchLanguageWithNavigation
  }
}

export const useLanguageSwitcher = () => {
  const { locale, locales, switchLanguage, switchLanguageWithNavigation } = useLocale()
  
  const currentLocale = computed(() => locale.value)
  const availableLocales = computed(() => locales.value)

  return {
    currentLocale,
    availableLocales,
    switchLanguage,
    switchLanguageWithNavigation
  }
}
