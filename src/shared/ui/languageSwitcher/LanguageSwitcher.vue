<template>
  <div class="relative">
    <select 
      :value="currentLocale" 
      @change="handleLanguageChange"
      class="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code">
        {{ loc.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useLanguageSwitcher } from '@shared/hooks'
import { defineComponent } from 'vue'

const { currentLocale, availableLocales, switchLanguageWithNavigation } = useLanguageSwitcher()

const handleLanguageChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  if (target) {
    switchLanguageWithNavigation(target.value)
  }
}
defineComponent({
  name: 'LanguageSwitcher'
})
</script>

