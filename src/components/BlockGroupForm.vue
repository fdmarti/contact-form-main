<template>
  <div class="block-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.block-group {
  width: 100%;
  display: flex;
  gap: 1rem;
  margin: 20px 0;
}
</style>
