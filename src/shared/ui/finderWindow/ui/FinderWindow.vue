<template>
  <div class="finder-window">
    <!-- Верхняя плашка с кнопками -->
    <div class="finder-header">
      <div class="finder-buttons">
        <button class="finder-button finder-button--close" />
        <button class="finder-button finder-button--minimize" />
        <button class="finder-button finder-button--maximize" />
      </div>
    </div>
    
    <!-- Линия -->
    <div class="finder-divider" />
    
    <!-- Окно контента -->
    <div class="finder-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>

<style scoped>
.finder-window {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: #090909;
}

.finder-header {
  height: 48px;
  background-color: #0C0C0C;
  display: flex;
  align-items: center;
  padding-left: 12px;
  flex-shrink: 0;
}

.finder-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.finder-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.finder-button--close {
  background-color: #EE6A5F;
}

.finder-button--minimize {
  background-color: #F5BD4F;
}

.finder-button--maximize {
  background-color: #61C454;
}

.finder-divider {
  height: 5px;
  width: 100%;
  background-color: #212121;
  flex-shrink: 0;
}

.finder-content {
  flex: 1;
  background-color: #090909;
  overflow: auto;
  min-height: 0;
}
</style>

