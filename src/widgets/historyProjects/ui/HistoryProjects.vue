<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="block md:flex md:flex-wrap md:gap-6 space-y-6 md:space-y-0">
        <!-- Карточки проектов -->
        <div
          class="w-full backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 min-h-[50px]"
          :style="{ 
            width: isMobile ? '100%' : `${project.width}%`, 
            transform: isMobile ? 'none' : `translateY(${project.translateY}px)` 
          }"
          @click="handleProjectClick(project.id)"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="flex flex-col h-full">
            <!-- Placeholder изображения -->
            <div :class="clsx('flex-1 bg-gray-700/50 rounded-lg mb-4 relative', `min-h-[300px]`)">
              <Button
                variant="secondary"
                size="sm"
                class="absolute bottom-3 left-3"
              >
                {{ $t(project.tagKey) }}
              </Button>
            </div>
            
            <!-- Нижняя часть с названием -->
            <div class="space-y-2">
              <h3 class="text-white font-medium text-lg">
                {{ $t(project.nameKey) }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import clsx from 'clsx'
import { useHistoryProjects } from '../hook/useHistoryProjects'
import Button from '@/shared/ui/button/ui/Button.vue'

const { handleProjectClick, projects } = useHistoryProjects()

const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 768)
const isMobile = computed(() => windowWidth.value < 768)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowWidth)
    updateWindowWidth()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth)
  }
})
</script>

