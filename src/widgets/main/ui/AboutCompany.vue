<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
        <!-- Левая часть: эмодзи и кнопка -->
        <div class="flex flex-col items-center lg:items-start w-full lg:w-auto">
          <div class="text-6xl lg:text-5xl mb-6">🎃</div>
          <Button
            variant="secondary"
            size="sm"
            class="!bg-orange-500 !text-white hover:!bg-orange-600 !border-0 w-full lg:w-auto"
            @click="handleAboutCompany"
          >
            {{ $t('about.title') }}
          </Button>
        </div>
        
        <!-- Правая часть: текст -->
         <div class="flex-1 flex flex-col gap-2 items-end">
             <div class="text-white text-base lg:text-3xl leading-relaxed max-w-2xl text-left">
               {{ $t('about.description') }}
             </div>
             <div class="flex flex-wrap gap-2">
             <Chip v-for="i in 4" :key="i" :variant="ChipVariant.FILLED" :color="ChipColor.DARK" :size="ChipSize.MD">
                 {{ $t('about.title') }}
               </Chip>
             </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button, Chip, ChipColor, ChipSize, ChipVariant } from '@shared/ui'
import { useAboutCompany } from '../hook/useAboutCompany'

const { handleAboutCompany } = useAboutCompany()
</script>

