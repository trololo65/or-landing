/**
 * Роуты приложения
 * Константы роутов для типизации и удобства работы с роутами
 * Используются совместно с i18n для локализации путей
 */
export const ROUTES = {
  index: '/',
  home: '/home',
  about: '/about',
  contact: '/contact',
  history: '/history'
} as const

export type RouteKey = keyof typeof ROUTES

/**
 * Получает путь роута по ключу
 * @param key - ключ роута
 * @returns путь роута
 */
export const getRoute = (key: RouteKey): string => {
  return ROUTES[key]
}

export default ROUTES