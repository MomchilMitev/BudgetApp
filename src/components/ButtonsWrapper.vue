<script setup lang="ts">
  import { ref } from 'vue';
  import ModeButton from './ModeButton.vue';
  const activeState = ref('bg-red text-black-light');
  const isFirstBtnActive = ref(true);
  const isSecondBtnActive = ref(false);
  const isThirdBtnActive = ref(false);
  const onModeButtonClick = (index: number) => {
    if (index === 1) {
      isFirstBtnActive.value = true;
      isSecondBtnActive.value = false;
      isThirdBtnActive.value = false;
    } else if (index === 2) {
      isFirstBtnActive.value = false;
      isSecondBtnActive.value = true;
      isThirdBtnActive.value = false;
    } else if (index === 3) {
      isFirstBtnActive.value = false;
      isSecondBtnActive.value = false;
      isThirdBtnActive.value = true;
    }
  }
</script>

<template>
  <section
    class="w-[373px] m-auto bg-black-dark p-2 rounded-[31.5px] flex justify-between"
  >
    <ModeButton
      :class="[isFirstBtnActive ? activeState : 'text-lila-light']"
      text="pomodoro"
      @click="onModeButtonClick(1)"
    />
    <ModeButton
      :class="[isSecondBtnActive ? activeState : 'text-lila-light']"
      text="short break"
      @click="onModeButtonClick(2)"
    />
    <ModeButton
      :class="[isThirdBtnActive ? activeState : 'text-lila-light']"
      text="long break"
      @click="onModeButtonClick(3)"
    />
  </section>
</template>
