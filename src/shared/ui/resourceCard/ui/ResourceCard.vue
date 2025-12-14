<template>
  <div class="rounded-3xl overflow-hidden flex flex-col h-full bg-transparent">
    <div
      class="w-full relative aspect-[16/12] md:aspect-[16/14] bg-[#161616]"
    >
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />

      <div
        v-if="hasTags"
        class="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2"
      >
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-white text-black text-xs font-medium px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="flex-1 flex flex-col p-6 bg-transparent">
      <h3 class="text-white font-bold text-lg mb-3 line-clamp-2">
        {{ title }}
      </h3>

      <p v-if="description" class="text-white/80 text-sm mb-4 line-clamp-2 flex-1">
        {{ description }}
      </p>

      <div class="text-white/60 font-semibold text-base mt-auto">
        {{ meta }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import type { ResourceCardContent } from '../model/types'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<ResourceCardContent>()

const hasTags = computed(() => props.tags && props.tags.length > 0)

const { title, tags, description, meta, image } = toRefs(props)
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>


