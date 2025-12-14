# OR Landing

Современная лендинговая страница, созданная с использованием Nuxt 3, TypeScript и TailwindCSS.

## Технологии

- **Nuxt 3** - Vue.js фреймворк
- **TypeScript** - типизированный JavaScript
- **TailwindCSS** - utility-first CSS фреймворк
- **i18n** - интернационализация (русский/английский)

## Установка

Установите зависимости:

```bash
# yarn (рекомендуется)
yarn install

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

## Разработка

Запустите сервер разработки на `http://localhost:3000`:

```bash
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev

# bun
bun run dev
```

## Сборка для продакшена

Соберите приложение для продакшена:

```bash
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build

# bun
bun run build
```

## Предварительный просмотр продакшен сборки

```bash
# yarn
yarn preview

# npm
npm run preview

# pnpm
pnpm preview

# bun
bun run preview
```

## Структура проекта

Проект использует архитектуру Feature-Sliced Design (FSD):

```
├── src/                    # Исходный код приложения
│   ├── apps/              # Приложения (высший уровень)
│   ├── pages/             # Страницы приложения
│   ├── widgets/           # Виджеты (крупные UI блоки)
│   ├── features/          # Фичи (функциональность)
│   ├── entities/          # Сущности (бизнес-логика)
│   └── shared/            # Общие ресурсы
│       ├── config/        # Константы и конфигурации (index только для экспорта)
│       ├── hooks/         # Композиционные функции
│       ├── libs/          # Модули и их настройки (index только для экспорта)
│       ├── types/         # TypeScript типы
│       └── utils/         # Утилиты
├── assets/                # Статические ресурсы (CSS, изображения)
├── locales/               # Файлы локализации
├── types/                 # Глобальные типы TypeScript
├── app.vue                # Главный компонент приложения
├── nuxt.config.ts         # Конфигурация Nuxt
└── tailwind.config.js     # Конфигурация TailwindCSS
```

## Особенности

- ✅ TypeScript поддержка с строгой типизацией
- ✅ TailwindCSS для стилизации
- ✅ Интернационализация (i18n)
- ✅ Адаптивный дизайн
- ✅ Современная архитектура Nuxt 3
- ✅ Feature-Sliced Design (FSD) архитектура
- ✅ Алиасы для удобного импорта
- ✅ Готовые утилиты и хуки

## Алиасы

Проект настроен с удобными алиасами для импорта:

```typescript
import { LOCALES } from '@shared/config'
import { useLocalStorage } from '@shared/hooks'
import { formatDate } from '@shared/utils'
```

## Документация

- [Nuxt 3](https://nuxt.com/docs)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Vue 3](https://vuejs.org/guide/)
