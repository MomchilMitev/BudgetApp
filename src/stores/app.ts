import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const systemColor = ref('bg-red text-black-light')
  // const doubleCount = computed(() => count.value * 2)
  function setSystemColor(newColor: string) {
    systemColor.value = newColor;
  }

  return { systemColor, setSystemColor }
})
