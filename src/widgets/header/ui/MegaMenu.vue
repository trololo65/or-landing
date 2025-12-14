<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-2"
  >
    <div
      v-if="isOpen"
      @mouseenter="$emit('keep-open')"
      @mouseleave="$emit('close')"
    >
      <div class="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 py-8">
        <!-- Solutions: 3 колонки с вертикальными разделителями -->
        <div
          v-if="isSolutionsMenu"
          class="grid grid-cols-3 gap-0"
        >
          <NuxtLink
            v-for="(section, index) in content.sections"
            :key="section.title"
            :to="localePath(section.href)"
            class="px-8 py-6 hover:bg-white/5 transition-colors group relative"
            :class="{ 'border-r border-gray-400/30': index < content.sections.length - 1 }"
          >
            <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
              {{ $t(section.title) }}
            </h3>
            <p class="text-sm text-white leading-relaxed">
              {{ $t(section.description || '') }}
            </p>
          </NuxtLink>
        </div>
        
        <!-- Остальные меню: стандартный формат -->
        <div
          v-else
          class="grid grid-cols-12 gap-8"
        >
          <!-- Секции -->
          <div class="col-span-8">
            <div class="grid grid-cols-2 gap-8">
              <div
                v-for="section in content.sections"
                :key="section.title"
                class="space-y-4"
              >
                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {{ $t(section.title) }}
                </h3>
                <ul v-if="section.items" class="space-y-3">
                  <li v-for="item in section.items" :key="item.href">
                    <NuxtLink
                      :to="localePath(item.href)"
                      class="flex items-center gap-3 text-white hover:text-gray-300 transition-colors group"
                    >
                      <span
                        v-if="item.icon"
                        class="text-2xl group-hover:scale-110 transition-transform"
                      >
                        {{ item.icon }}
                      </span>
                      <span class="text-base">{{ $t(item.label) }}</span>
                      <svg
                        class="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Featured контент -->
          <div
            v-if="content.featured"
            class="col-span-4"
          >
            <div class="h-full rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div class="flex flex-col h-full justify-between">
                <div>
                  <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <span class="text-3xl">🎃</span>
                  </div>
                  <h4 class="text-xl font-bold text-white mb-3">
                    {{ $t(content.featured.title) }}
                  </h4>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    {{ $t(content.featured.description) }}
                  </p>
                </div>
                <button class="mt-6 text-sm text-white hover:text-gray-300 flex items-center gap-2 group">
                  <span>{{ $t('common.learnMore') }}</span>
                  <svg
                    class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MegaMenuContent } from '../model/types'

interface Props {
  isOpen: boolean
  content: MegaMenuContent
}

const props = defineProps<Props>()

const localePath = useLocalePath()

defineEmits<{
  'keep-open': []
  close: []
}>()

// Проверяем, является ли это меню solutions (у секций есть href и description, но нет items)
const isSolutionsMenu = computed(() => {
  return props.content.sections.length > 0 && 
         props.content.sections.every(section => section.href && section.description && !section.items)
})
</script>

