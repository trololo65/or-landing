<template>
  <button
    @click="handleClick"
    :class="[
      'rounded-full bg-[#1a1a1a] border border-white/20 flex flex-col gap-1 items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors',
      mobile ? 'w-12 h-12 flex-shrink-0 p-3' : 'w-12 h-12 p-4'
    ]"
    :aria-label="ariaLabel"
  >
    <div class="w-5 bg-white h-[1px] inline-block" />
    <div class="w-4 bg-white h-[1px] inline-block" />
    <div class="w-3 bg-white h-[1px] inline-block" />
  </button>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

interface Props {
  mobile?: boolean
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  mobile: false,
  ariaLabel: 'Open filters'
})

const emit = defineEmits<{
  click: []
}>()

const handleClick = () => {
  emit('click')
}
</script>

