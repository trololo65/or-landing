<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="block md:flex md:flex-wrap md:gap-6 space-y-6 md:space-y-0">
        <!-- Верхняя левая карточка - широкая -->
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
                {{ project.tag }}
              </Button>
            </div>
            
            <!-- Нижняя часть с чипом и названием -->
            <div class="space-y-2">
              
              <h3 class="text-white font-medium text-lg">
                {{ project.name }}
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
import { Chip, ChipColor, ChipSize, ChipVariant } from '@shared/ui'
import clsx from 'clsx'
import { useProjects } from '../hook/useProjects'
import Button from '@/shared/ui/button/ui/Button.vue'

const { handleProjectClick } = useProjects()

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

// Временные данные проектов, в будущем можно получать из API или i18n
const projects = [
  { 
    id: '1', 
    name: 'Name of Project', 
    tag: 'Project Tag',
    width: 55, // percentage
    translateY: -20,
  },
  { 
    id: '2', 
    name: 'Name of Project', 
    tag: 'Project Tag',
    width: 40, // percentage
    translateY: 0,
  },
  { 
    id: '3', 
    name: 'Name of Project', 
    tag: 'Project Tag',
    width: 40, // percentage
    translateY: 0,
  },
  { 
    id: '4', 
    name: 'Name of Project', 
    tag: 'Project Tag',
    width: 55, // percentage
    translateY: -20,
  },
]
</script>
