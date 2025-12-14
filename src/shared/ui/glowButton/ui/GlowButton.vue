<template>
  <button
    :type="type"
    class="px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap bg-white text-[#FF8C00] shadow-[0px_0px_10px_0px_rgba(255,149,0,0.6),2px_-2px_20px_0px_rgba(239,169,29,0.6)_inset] hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-50 disabled:cursor-not-allowed"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    type: 'button',
    disabled: false
  }
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>


