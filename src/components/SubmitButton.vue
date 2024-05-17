<template>
  <button>Submit</button>
</template>

<script setup lang="ts"></script>
<style scoped>
button {
  background-color: var(--green);
  color: var(--white);
  border: none;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  cursor: pointer;
  filter: brightness(60%);
}
</style>
