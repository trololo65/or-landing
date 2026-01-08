<template>
  <div class="mb-8">
    <div class="flex flex-wrap gap-4 lg:gap-6 justify-between">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        @click="$emit('selectTab', tab.id)"
        :class="[
          'relative text-left px-4 py-2 text-lg lg:text-xl font-medium transition-all flex-1',
          selectedTabId === tab.id
            ? 'text-white'
            : 'text-white/60 hover:text-white/80'
        ]"
      >
        {{ index + 1 }} {{ $t(tab.labelKey) }}
        
        <!-- Прогресс-бар под активным табом -->
        <div
          v-if="selectedTabId === tab.id"
          class="absolute -bottom-3 left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <div
            class="h-full bg-white transition-all duration-300 ease-out"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tab } from '../model/types'

interface Props {
  tabs: Tab[]
  selectedTabId: string
  progress: number
}

defineProps<Props>()

defineEmits<{
  selectTab: [tabId: string]
}>()
</script>

