<template>
  <Dialog :model-value="modelValue" @update:model-value="handleUpdate" class="!max-w-3xl">
    <div class="relative p-4 max-w-[1440px] w-full">
      <!-- Контент формы -->
      <div class="space-y-8">
        <!-- Текст сверху -->
        <p class="text-white text-lg leading-relaxed pr-8">
          {{ $t('contactModal.text') }}
        </p>

        <!-- Форма -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Поле Full Name -->
          <div class="space-y-2">
            <label for="fullName" class="block text-white text-sm font-medium">
              {{ $t('contactModal.fullName') }}
            </label>
            <input
              id="fullName"
              v-model="form.fullName"
              type="text"
              required
              class="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:outline-none focus:border-white/60 transition-colors pb-2"
              :placeholder="$t('contactModal.fullNamePlaceholder')"
            />
          </div>

          <!-- Поле Email -->
          <div class="space-y-2">
            <label for="email" class="block text-white text-sm font-medium">
              {{ $t('contactModal.email') }}
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full bg-transparent text-white placeholder-white/50 border-0 border-b border-white/30 focus:outline-none focus:border-white/60 transition-colors pb-2"
              :placeholder="$t('contactModal.emailPlaceholder')"
            />
          </div>

          <!-- Кнопка отправки -->
           <div class="text-center">
             <Button
               type="submit"
               variant="secondary"
               class="w-[50%]"
             >
               {{ $t('contactModal.send') }}
             </Button>

           </div>
        </form>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@shared/ui'
import { Button } from '@shared/ui'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const form = ref({
  fullName: '',
  email: '',
})

const handleUpdate = (value: boolean) => {
  emit('update:modelValue', value)
}

const handleSubmit = () => {
  // Здесь можно добавить логику отправки формы
  console.log('Form submitted:', form.value)
  // После отправки можно закрыть модальное окно
  emit('update:modelValue', false)
  // Сброс формы
  form.value = {
    fullName: '',
    email: '',
  }
}
</script>

