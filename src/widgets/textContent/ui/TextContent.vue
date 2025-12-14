<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-6xl mx-auto">
      <div class="space-y-6">
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="text-white text-lg lg:text-3xl leading-relaxed"
        >
          {{ $t(paragraph.key) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const paragraphs = [
  { key: 'textContent.paragraph1' },
  { key: 'textContent.paragraph2' },
  { key: 'textContent.paragraph3' },
  { key: 'textContent.paragraph4' },
  { key: 'textContent.paragraph5' },
]
</script>

