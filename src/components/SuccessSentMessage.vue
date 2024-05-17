<template>
  <div class="message-sent">
    <h4>Message Sent!</h4>
    <p>Thanks for completing the form. We'll be in touch soon!</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.message-sent {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%);
  color: var(--white);
  background: var(--dark-grey);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 var(--dark-grey);
  transition: all ease-in-out 0.2s;
  transition: top 0.5s ease;
}

h4{
    margin-bottom: 10px;
    font-weight: 800;
}

p{
    font-size: 14px;
    font-weight: 100;
}

</style>
