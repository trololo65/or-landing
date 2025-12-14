// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'src/',
  
  // Отключаем виртуальный модуль манифеста, из-за которого падает импорт "#app-manifest"
  experimental: {
    appManifest: false
  },
  
  // Модули
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  // Настройка i18n
  i18n: {
    locales: [
      {
        code: 'ru',
        name: 'Русский',
        iso: 'ru-RU',
        file: 'ru.json'
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
      }
    ],
    // Используем абсолютный путь, чтобы избежать добавления префикса "i18n"
    langDir: resolve(__dirname, 'src/shared/libs/i18n/locales'),
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'ru'
    },
  },

  // Настройка CSS
  css: ['~/assets/css/main.css'],

  // Настройка приложения
  app: {
    head: {
      title: 'OR Landing',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'OR Landing Page' }
      ]
    }
  },

  // Настройка алиасов для FSD архитектуры
  alias: {
    '@': resolve(__dirname, 'src'),
    '@shared': resolve(__dirname, 'src/shared'),
    '@entities': resolve(__dirname, 'src/entities'),
    '@features': resolve(__dirname, 'src/features'),
    '@widgets': resolve(__dirname, 'src/widgets'),
    '@pages': resolve(__dirname, 'src/pages')
  },

  // Настройка TypeScript
  typescript: {
    strict: true,
    typeCheck: process.env.NODE_ENV === 'production'
  }
})
