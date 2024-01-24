<script setup lang="ts">
  import ModeButton from './ModeButton.vue';

  const btnTexts = ['pomodoro', 'short break', 'long break'];

</script>

<template>
  <section
    class="bg-black-dark p-2 rounded-[31.5px] space-x-2"
  >
    <ModeButton v-for="(text, index) in btnTexts" :key="index" :text="text" />
  </section>
</template>