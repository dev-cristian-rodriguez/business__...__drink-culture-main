import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('useStore', () => {
  const info = ref('Hello, Pinia!')

  function updateInfo(newInfo: string) {
    info.value = newInfo
  }

  return { info, updateInfo }
})
