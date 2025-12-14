<template>
  <section class="px-4 py-8 lg:py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок и подзаголовок -->
      <div class="mb-8 lg:mb-12">
        <h2 class="text-white text-2xl lg:text-4xl font-bold mb-4">
          {{ $t('flagshipSolutions.title') }}
        </h2>
        <p class="text-gray-300 text-sm lg:text-lg max-w-3xl">
          {{ $t('flagshipSolutions.subtitle') }}
        </p>
      </div>

      <!-- Три блока решений -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        <!-- Блок 1: Scans & LIDs (Оранжевый) -->
        <div 
          class="relative rounded-3xl overflow-hidden"
          style="background-color: #FF7300;"
        >
          <div class="flex flex-col h-full min-h-[350px] max-h-[400px] lg:max-h-auto lg:min-h-[400px]">
            <!-- Изображение прибито к правому краю -->
            <div class="relative flex-1 flex items-center justify-end pl-4 lg:pl-8 pt-4 lg:pt-8">
              <img
                src="~/assets/images/ID-card.png"
                alt="ID Card"
                class="h-full max-h-[250px] w-auto object-contain object-right"
              />
            </div>
            
            <!-- Текст внизу -->
            <div class="p-6 lg:p-8 text-white relative z-10">
              <h3 class="text-xl lg:text-2xl font-bold mb-3">
                {{ $t('flagshipSolutions.scans.title') }}
              </h3>
              <p class="text-sm lg:text-base leading-relaxed opacity-90">
                {{ $t('flagshipSolutions.scans.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Блок 2: KYC Packs (Зеленый) -->
        <div 
          class="relative rounded-3xl overflow-hidden pt-6"
          style="background-color: #2ECB16;"
        >
          <div class="relative flex flex-col h-full min-h-[350px] max-h-[400px] lg:max-h-auto lg:min-h-[400px]">
            <!-- Изображение с середины вниз с градиентом -->
            <div 
              class="absolute bottom-0 left-0 right-0 h-1/2 sm:h-1/3 pointer-events-none z-10"
              style="background: linear-gradient(to top, #2ECB16, rgba(46, 203, 22, 1), rgba(46, 203, 22, 0.4), rgba(46, 203, 22, 0));"
            ></div>
            <div class="relative flex-1 flex items-end justify-center">
              <!-- Градиент снизу вверх для растворения изображения -->
              
              <img
                src="~/assets/images/face-ID.png"
                alt="Face ID"
                class="absolute z-0 top-0 w-[80%] object-contain mb-8 lg:mb-12"
              />
            </div>
            
            <!-- Текст внизу -->
            <div class="p-6 lg:p-8 text-white relative z-10">
              <h3 class="text-xl lg:text-2xl font-bold mb-3">
                {{ $t('flagshipSolutions.kyc.title') }}
              </h3>
              <p class="text-sm lg:text-base leading-relaxed opacity-90">
                {{ $t('flagshipSolutions.kyc.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Блок 3: Paperwork (Синий) -->
        <div 
          class="relative rounded-3xl overflow-hidden pt-6"
          style="background-color: #0554FF;"
        >
          <div class="relative flex flex-col h-full min-h-[350px] max-h-[400px] lg:max-h-auto lg:min-h-[400px]">
            <!-- Изображение с середины вниз с градиентом -->
            <div 
              class="absolute bottom-0 left-0 right-0 h-1/2 sm:h-1/3 pointer-events-none z-10"
              style="background: linear-gradient(to top, #0554FF, rgba(5, 84, 255, 1), rgba(5, 84, 255, 0.4), rgba(5, 84, 255, 0));"
            ></div>
            <div class="relative flex-1 flex items-end justify-center">
              <!-- Градиент снизу вверх для растворения изображения -->
              
              <img
                src="~/assets/images/green-сard.png"
                alt="Green Card"
                class="absolute z-0 top-2 w-[80%] object-contain mb-8 lg:mb-12"
              />
            </div>
            
            <!-- Текст внизу -->
            <div class="p-6 lg:p-8 text-white relative z-10">
              <h3 class="text-xl lg:text-2xl font-bold mb-3">
                {{ $t('flagshipSolutions.paperwork.title') }}
              </h3>
              <p class="text-sm lg:text-base leading-relaxed opacity-90">
                {{ $t('flagshipSolutions.paperwork.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

