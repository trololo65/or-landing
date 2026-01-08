<template>
  <div class="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
    <Transition
      name="fade"
      mode="out-in"
    >
      <img
        :key="currentImageIndex"
        :src="currentImage"
        :alt="`Image ${currentImageIndex + 1}`"
        class="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  images: string[]
  interval?: number
}

const props = withDefaults(defineProps<Props>(), {
  interval: 5000
})

const currentImageIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

const currentImage = computed(() => props.images[currentImageIndex.value])

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
}

onMounted(() => {
  if (props.images.length > 1) {
    intervalId = setInterval(nextImage, props.interval)
  }
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

