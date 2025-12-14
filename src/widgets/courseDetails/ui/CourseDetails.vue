<template>
  <div class="mt-16 lg:mt-24">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Табы по центру -->
      <div class="flex justify-center mb-12 lg:mb-16">
        <div class="flex items-center gap-2 bg-[#1a1a1a] rounded-full px-2 py-2 border border-white/20">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="selectedTab = tab.id"
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all',
              selectedTab === tab.id
                ? 'bg-white text-black'
                : 'text-white/70 hover:text-white'
            ]"
          >
            {{ $t(tab.labelKey) }}
          </button>
        </div>
      </div>

      <!-- Блок "What you'll learn" с галочками -->
      <section class="mb-12 lg:mb-16">
        <h2 class="text-white font-bold text-2xl lg:text-3xl mb-6 lg:mb-8">
          {{ $t('pages.coaching.course.whatYoullLearn') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="(item, index) in learningItems"
            :key="index"
            class="flex items-start gap-3"
          >
            <svg
              class="w-6 h-6 text-white flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-white/80 text-sm lg:text-base">
              {{ $t(item) }}
            </span>
          </div>
        </div>
      </section>

      <!-- Блок "Skills you'll gain" -->
      <section class="mb-12 lg:mb-16">
        <h2 class="text-white font-bold text-2xl lg:text-3xl mb-6 lg:mb-8">
          {{ $t('pages.coaching.course.skillsYoullGain') }}
        </h2>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="(skill, index) in skills"
            :key="index"
            class="bg-[#1a1a1a] border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
          >
            {{ $t(skill) }}
          </span>
        </div>
      </section>

      <!-- Текст в две колонки -->
      <section>
        <h2 class="text-white font-bold text-2xl lg:text-3xl mb-6 lg:mb-8">
          {{ $t('pages.coaching.course.specialization') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div class="text-white/80 text-base lg:text-lg leading-relaxed">
            <p class="mb-4">
              {{ $t('pages.coaching.course.specializationText1') }}
            </p>
            <p>
              {{ $t('pages.coaching.course.specializationText2') }}
            </p>
          </div>
          <div class="text-white/80 text-base lg:text-lg leading-relaxed">
            <p class="mb-4">
              {{ $t('pages.coaching.course.specializationText3') }}
            </p>
            <p>
              {{ $t('pages.coaching.course.specializationText4') }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  inheritAttrs: false
})

const selectedTab = ref('overview')

const tabs = [
  { id: 'overview', labelKey: 'pages.coaching.course.tabs.overview' },
  { id: 'about', labelKey: 'pages.coaching.course.tabs.about' },
  { id: 'courses', labelKey: 'pages.coaching.course.tabs.courses' }
]

const learningItems = [
  'pages.coaching.course.learning.buildSoftware',
  'pages.coaching.course.learning.promptEngineering',
  'pages.coaching.course.learning.deployApps',
  'pages.coaching.course.learning.aiTools',
  'pages.coaching.course.learning.webDevelopment',
  'pages.coaching.course.learning.versionControl',
  'pages.coaching.course.learning.testing',
  'pages.coaching.course.learning.uiDesign',
  'pages.coaching.course.learning.apiIntegration'
]

const skills = [
  'pages.coaching.course.skills.buildSoftware',
  'pages.coaching.course.skills.promptEngineering',
  'pages.coaching.course.skills.deployApps',
  'pages.coaching.course.skills.aiTools',
  'pages.coaching.course.skills.webDevelopment'
]
</script>

