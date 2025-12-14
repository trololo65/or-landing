<template>
  <section class="px-4 py-8 lg:py-16 relative overflow-hidden">
    <div ref="containerRef" class="max-w-7xl mx-auto">
      <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start rounded-xl overflow-hidden min-h-[700px]">
        <!-- Анимированный фон с точками -->
        <div class="animated-background"></div>
        
        <!-- Черные размытые круги для эффекта переливания -->
        <div class="blurred-circle blurred-circle--top"></div>
        <div class="blurred-circle blurred-circle--bottom"></div>
        
        <!-- Левая часть: текст, кнопка, описание -->
        <div class="relative flex flex-col items-start h-full justify-around z-10 p-4 sm:ml-16">
          <!-- 3 больших жирных слова -->
          <h2 class="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span style="color: #FF8C00;">{{ $t('fastTrack.title.ready') }}</span><br>
            <span style="color: #FF8C00;">{{ $t('fastTrack.title.set') }}</span><br>
            <span style="color: #FF8C00;">{{ $t('fastTrack.title.delivered') }}</span>
          </h2>
          
          <!-- Кнопка с рефом для позиционирования луча -->
          <div ref="buttonRef" class="mb-12 relative z-20 inline-block">
            <Button
              variant="secondary"
              size="lg"
              class="!bg-white !text-gray-900 hover:!bg-gray-100"
              @click="handleLearnMore"
            >
              {{ $t('fastTrack.button') }}
            </Button>
          </div>
          
          <!-- Текст под кнопкой -->
          <p class="text-white text-base lg:text-lg leading-relaxed max-w-lg opacity-90">
            {{ $t('fastTrack.description') }}
          </p>
        </div>
        
        <!-- Правая часть: окно Finder -->
        <div ref="finderRef" class="relative z-10 flex flex-col h-full min-h-[400px] lg:min-h-[500px]">
          <!-- Окно Finder прибито к низу -->
          <div class="flex-1 flex items-end">
            <div class="w-full h-[90%]">
              <FinderWindow>
                <!-- Контент окна можно добавить здесь -->
              </FinderWindow>
            </div>
          </div>
        </div>
        
        <!-- Луч от кнопки к окну (позиционируется абсолютно) -->
        <div ref="lightBeamRef" class="light-beam lg:visible hidden">
          <img
            src="~/assets/images/light.png"
            alt="Light beam"
            class="light-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Button } from '@shared/ui'
import { FinderWindow } from '@shared/ui'

const containerRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLElement | null>(null)
const finderRef = ref<HTMLElement | null>(null)
const lightBeamRef = ref<HTMLElement | null>(null)

const handleLearnMore = () => {
  console.log('Learn More clicked')
}

const updateLightBeamPosition = () => {
  if (!buttonRef.value || !finderRef.value || !lightBeamRef.value || !containerRef.value) return
  
  const buttonRect = buttonRef.value.getBoundingClientRect()
  const finderRect = finderRef.value.getBoundingClientRect()
  const containerRect = containerRef.value.getBoundingClientRect()
  const lightBeamRect = lightBeamRef.value.getBoundingClientRect()
  
  // Позиция начала луча (центр кнопки по вертикали, правая сторона по горизонтали)
  let startX = buttonRect.right - containerRect.left
  let startY = buttonRect.top + buttonRect.height / 2 - containerRect.top
  
  // Позиция конца луча (левая сторона окна Finder, центр по вертикали)
  const endX = finderRect.left - containerRect.left
  const endY = finderRect.top + finderRect.height / 2 - containerRect.top
  
  // Вычисляем длину и угол
  const deltaX = endX - startX
  const deltaY = endY - startY
  // погрешность на пустые поля картинки луча
  const error = 100
  const length = Math.sqrt((deltaX + error) * (deltaX + error) + (deltaY + error) * (deltaY + error))
  
  // учитываем высоту луча
  const lightBeamHeight = lightBeamRect.height
  startY -= lightBeamHeight / 2
  startX -= error / 1.2

  // Устанавливаем позицию и размер
  lightBeamRef.value.style.left = `${startX}px`
  lightBeamRef.value.style.top = `${startY}px`
  lightBeamRef.value.style.width = `${length}px`
  lightBeamRef.value.style.transformOrigin = 'left center'
  lightBeamRef.value.style.zIndex = `5`
}

onMounted(async () => {
  await nextTick()
  updateLightBeamPosition()
  window.addEventListener('resize', updateLightBeamPosition)
  
  // Обновляем позицию после небольшой задержки для корректного рендеринга
  setTimeout(() => {
    updateLightBeamPosition()
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLightBeamPosition)
})
</script>

<style scoped>
.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(86deg, rgba(255, 140, 0, 0.06) 0%, rgba(255, 140, 0, 0.2) 10%, rgba(255, 140, 0, 0) 100%);
  z-index: 0;
  overflow: hidden;
}

.animated-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(255, 140, 0, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 60% 50%, rgba(255, 140, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 80% 70%, rgba(255, 140, 0, 0.25) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(255, 140, 0, 0.15) 1px, transparent 1px),
    radial-gradient(circle at 10% 60%, rgba(255, 140, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 90% 20%, rgba(255, 140, 0, 0.25) 1px, transparent 1px),
    radial-gradient(circle at 50% 10%, rgba(255, 140, 0, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 30% 90%, rgba(255, 140, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 70% 40%, rgba(255, 140, 0, 0.15) 1px, transparent 1px);
  background-size: 
    200px 200px,
    150px 150px,
    180px 180px,
    220px 220px,
    160px 160px,
    190px 190px,
    210px 210px,
    170px 170px,
    200px 200px;
  background-position: 
    0% 0%,
    20% 30%,
    40% 60%,
    60% 10%,
    80% 80%,
    10% 50%,
    30% 20%,
    50% 70%,
    70% 40%;
  animation: dotsFloat 20s ease-in-out infinite;
  opacity: 0.6;
}

.animated-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 15% 25%, rgba(255, 140, 0, 0.2) 2px, transparent 2px),
    radial-gradient(circle at 65% 45%, rgba(255, 140, 0, 0.15) 1.5px, transparent 1.5px),
    radial-gradient(circle at 85% 65%, rgba(255, 140, 0, 0.25) 1px, transparent 1px),
    radial-gradient(circle at 35% 85%, rgba(255, 140, 0, 0.18) 2px, transparent 2px),
    radial-gradient(circle at 5% 55%, rgba(255, 140, 0, 0.22) 1.5px, transparent 1.5px),
    radial-gradient(circle at 95% 15%, rgba(255, 140, 0, 0.2) 1px, transparent 1px),
    radial-gradient(circle at 55% 5%, rgba(255, 140, 0, 0.25) 2px, transparent 2px),
    radial-gradient(circle at 25% 95%, rgba(255, 140, 0, 0.15) 1.5px, transparent 1.5px),
    radial-gradient(circle at 75% 35%, rgba(255, 140, 0, 0.2) 1px, transparent 1px);
  background-size: 
    180px 180px,
    140px 140px,
    200px 200px,
    160px 160px,
    190px 190px,
    170px 170px,
    210px 210px,
    150px 150px,
    185px 185px;
  background-position: 
    5% 5%,
    25% 35%,
    45% 65%,
    65% 15%,
    85% 85%,
    15% 55%,
    35% 25%,
    55% 75%,
    75% 45%;
  animation: dotsFloat 25s ease-in-out infinite reverse;
  opacity: 0.4;
}

@keyframes dotsFloat {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  25% {
    transform: translate(10px, -15px) scale(1.05);
    opacity: 0.8;
  }
  50% {
    transform: translate(-5px, 10px) scale(0.95);
    opacity: 0.5;
  }
  75% {
    transform: translate(15px, 5px) scale(1.02);
    opacity: 0.7;
  }
}

.light-beam {
  position: absolute;
  z-index: 15;
  pointer-events: none;
  overflow: visible;
  display: none;
}

@media (min-width: 1024px) {
  .light-beam {
    display: block;
  }
}

.light-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 0.9;
  filter: brightness(1.3);
  mix-blend-mode: screen;
}

.blurred-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 0, 0, 1);
  filter: blur(40px);
  z-index: 2;
  pointer-events: none;
  mix-blend-mode: multiply;
}

.blurred-circle--top {
  width: 400px;
  height: 400px;
  top: -30%;
  left: 20%;
  animation: circleFloatTop 35s ease-in-out infinite;
}

.blurred-circle--bottom {
  width: 350px;
  height: 350px;
  bottom: -20%;
  left: 0%;
  animation: circleFloatBottom 40s ease-in-out infinite;
}

@keyframes circleFloatTop {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(30px, -20px) scale(1.1);
    opacity: 0.4;
  }
  50% {
    transform: translate(-20px, 15px) scale(0.9);
    opacity: 0.25;
  }
  75% {
    transform: translate(15px, 25px) scale(1.05);
    opacity: 0.35;
  }
}

@keyframes circleFloatBottom {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(-25px, 20px) scale(0.95);
    opacity: 0.35;
  }
  50% {
    transform: translate(20px, -15px) scale(1.1);
    opacity: 0.4;
  }
  75% {
    transform: translate(-15px, -25px) scale(0.9);
    opacity: 0.25;
  }
}
</style>

