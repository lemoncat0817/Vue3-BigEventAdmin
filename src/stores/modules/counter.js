import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('big-counte', () => {
  const count = ref(100)
  const add = (n) => {
    count.value += n
  }

  return {
    count,
    add
  }
})
