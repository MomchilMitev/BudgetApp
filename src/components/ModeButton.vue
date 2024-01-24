<script setup lang="ts">
  defineProps({
    text: { type: String, required: true }
  })
</script>

<template>
  <button
    class="
      active:bg-red 
      active:text-black-light 
      focus:bg-red 
      focus:text-black-light
      focus:outline-none
      bg-transparent 
      border-0 
      rounded-[26.5px] 
      cursor-pointer 
      text-sm 
      text-lila-light 
      px-6 
      py-4 
      transition-all 
      duration-300
    "
  >
    {{ text }}
  </button>
</template>