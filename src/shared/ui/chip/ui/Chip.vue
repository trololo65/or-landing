<template>
  <span
    :class="chipClasses"
    v-bind="otherAttrs"
  >
    <slot />
    <button
      v-if="closable"
      type="button"
      :class="closeButtonClasses"
      :disabled="disabled"
      @click="handleClose"
      aria-label="Close"
    >
      <svg
        class="w-3 h-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </span>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import clsx from 'clsx'
import type { ChipProps } from '../model/types'
import { chipVariants, chipCloseButtonVariants, getChipVariantColorClasses } from '../model/variants'
import { ChipVariant, ChipSize, ChipColor } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<ChipProps>(), {
  variant: ChipVariant.FILLED,
  size: ChipSize.MD,
  color: ChipColor.PRIMARY,
  disabled: false,
  closable: false,
})

const emit = defineEmits<{
  close: []
}>()

const attrs = useAttrs()

const otherAttrs = computed(() => {
  const { class: _, ...rest } = attrs
  return rest
})

const chipClasses = computed(() => {
  return clsx(
    chipVariants({
      variant: props.variant,
      size: props.size,
    }),
    getChipVariantColorClasses(props.variant, props.color),
    attrs.class as string | undefined
  )
})

const closeButtonClasses = computed(() => {
  return chipCloseButtonVariants({
    variant: props.variant,
  })
})

const handleClose = (event: MouseEvent) => {
  event.stopPropagation()
  if (!props.disabled) {
    emit('close')
  }
}
</script>
