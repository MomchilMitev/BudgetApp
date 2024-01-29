<script setup lang="ts">

</script>

<template>
  <section
    class="
      w-[410px]
      h-[410px]
      bg-gradient-to-br from-[#0E112A] to-[#2E325A]
      rounded-full
      shadow-[50px_50px_100px_0px_#121530,-50px_-50px_100px_0px_#272C5A]
      relative
      p-5
      -z-10
    "
  >
    <div
      class="
        w-full
        h-full
        bg-black-dark
        block
        p-3.5
        rounded-full
      "
    >
      <button
        class="absolute left-1/2 top-28 translate-x-[-50%] text-base text-lila-light tracking-[15px] uppercase hover:cursor-pointer"
      >
        start
      </button>
      <svg
        width="340"
        height="340"
        viewBox="0 0 340 340"
        class="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.5 170C0.5 76.3877 76.3877 0.5 170 0.5C263.612 0.5 339.5 76.3877 339.5 170C339.5 263.612 263.612 339.5 170 339.5C76.3877 339.5 0.5 263.612 0.5 170ZM328.5 170C328.5 82.4629 257.537 11.5 170 11.5C82.4629 11.5 11.5 82.4629 11.5 170C11.5 257.537 82.4629 328.5 170 328.5C257.537 328.5 328.5 257.537 328.5 170Z"
          fill="#F87070"
        />
      </svg>
      <span
        class="absolute left-1/2 bottom-40 translate-x-[-50%] block font-bold text-8xl text-lila-light"
      >
        00:00
      </span>
      <button
        class="absolute left-1/2 bottom-28 translate-x-[-50%] text-base text-lila-light tracking-[15px] uppercase hover:cursor-pointer"
      >
        restart
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>
