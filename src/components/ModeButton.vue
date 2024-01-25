<script setup lang="ts">
  defineProps({
    text: { type: String, required: true },
  })
</script>

<template>
  <button
    class="
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
