<template>
  <div class="min-h-screen">
    <!-- History блок -->
    <History />
    
    <!-- Text Content блок -->
    <TextContent />
    
    <!-- History Projects блок -->
    <HistoryProjects />
    
    <!-- History Key Metrics блок -->
    <HistoryKeyMetrics />

    <Reviews />
  </div>
</template>

<script setup lang="ts">
import { History } from '@widgets/history'
import { TextContent } from '@widgets/textContent'
import { HistoryProjects } from '@widgets/historyProjects'
import { HistoryKeyMetrics } from '@widgets/historyKeyMetrics'
import { Reviews } from '@widgets/main'

// Мета-данные страницы
useHead({
  title: 'History - KOZMAP'
})
</script>

