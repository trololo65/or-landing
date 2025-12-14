<template>
  <div class="min-h-screen flex items-center justify-center px-6 pt-20 lg:pt-24">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-white mb-6">{{ $t('pages.products.title') }}</h1>
      <p class="text-xl text-gray-400">{{ $t('common.comingSoon') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Products - KOZMAP'
})
</script>

