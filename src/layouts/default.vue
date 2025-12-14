<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header } from '../widgets/header'
import { Footer } from '../widgets/footer'
</script>

