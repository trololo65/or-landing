<template>
  <Dialog
    :model-value="modelValue"
    @update:model-value="handleUpdate"
    class="!max-w-2xl"
  >
    <div class="p-6">
      <h2 class="text-white text-2xl font-bold mb-6">
        {{ $t('tutorials.filterModal.title') }}
      </h2>
      <div class="space-y-6">
        <div class="grid grid-cols-5 gap-3">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="handleTabChange(tab.id)"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all text-center whitespace-nowrap',
              selectedTabId === tab.id
                ? 'bg-white text-black'
                : 'bg-transparent text-white/70 hover:text-white'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog } from '@shared/ui'
import type { FilterModalProps } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<FilterModalProps>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'update:selectedTabId': [value: string]
}>()

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}

const handleTabChange = (tabId: string) => {
  emit('update:selectedTabId', tabId)
}
</script>

