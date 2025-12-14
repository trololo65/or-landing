// Типы для локализации
export type Locale = 'ru' | 'en'

export interface LocaleConfig {
  code: Locale
  name: string
  file: string
}

export interface LocaleMessages {
  welcome: {
    title: string
    description: string
    cta: string
  }
}
