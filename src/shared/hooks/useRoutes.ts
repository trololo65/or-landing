// Хуки для работы с роутами
import { readonly } from 'vue'
import { ROUTES, type RouteKey, getRoute } from '../config/routes'

export const useRoutes = () => {
  const { locale, locales, switchLocalePath } = useI18n()
  
  /**
   * Получает локализованный путь для указанного роута
   * @param routePath - путь роута (например, '/about') или ключ роута
   * @param targetLocale - целевая локаль (опционально, по умолчанию текущая)
   */
  const getLocalizedPath = (routePath: string | RouteKey, targetLocale?: string): string => {
    // Если передан ключ роута, получаем путь
    const finalPath = typeof routePath === 'string' && routePath in ROUTES 
      ? getRoute(routePath as RouteKey)
      : routePath

    // Если указана целевая локаль и она отличается от текущей
    if (targetLocale && targetLocale !== locale.value) {
      // Используем switchLocalePath для переключения локали
      // Это автоматически обработает префикс локали в URL
      return switchLocalePath(targetLocale) || finalPath as string
    }
    
    // Возвращаем роут как есть для текущей локали
    return finalPath as string
  }

  /**
   * Переходит на локализованный роут
   * @param route - путь роута или ключ роута из ROUTES
   * @param targetLocale - целевая локаль (опционально)
   */
  const navigateToLocalized = (route: string | RouteKey, targetLocale?: string) => {
    const path = getLocalizedPath(route, targetLocale)
    return navigateTo(path)
  }

  /**
   * Получает путь роута по ключу с учетом локализации
   * @param key - ключ роута из ROUTES
   * @param targetLocale - целевая локаль (опционально)
   */
  const getRoutePath = (key: RouteKey, targetLocale?: string): string => {
    const route = getRoute(key)
    return getLocalizedPath(route, targetLocale)
  }

  /**
   * Переходит на роут по ключу с учетом локализации
   * @param key - ключ роута из ROUTES
   * @param targetLocale - целевая локаль (опционально)
   */
  const navigateToRoute = (key: RouteKey, targetLocale?: string) => {
    return navigateToLocalized(key, targetLocale)
  }

  return {
    locale: readonly(locale),
    locales: readonly(locales),
    ROUTES: readonly(ROUTES),
    getLocalizedPath,
    navigateToLocalized,
    getRoutePath,
    navigateToRoute,
    switchLocalePath
  }
}

