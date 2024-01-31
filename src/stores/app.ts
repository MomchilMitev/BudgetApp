import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const systemColor = ref('bg-red text-black-light')
  function setSystemColor(newColor: string) {
    systemColor.value = newColor;
  }

  return { systemColor, setSystemColor }
})
