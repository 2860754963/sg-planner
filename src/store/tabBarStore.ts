import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const initState = { selectedIndex: 0 } // 默认选中的 tab 索引为 0

export const useTabBarStore = defineStore(
  'tabBarStore',
  () => {
    // 当前选中的 tab 索引
    const selectedIndex = ref(initState.selectedIndex)

    // 设置选中的 tab 索引
    const setSelectedIndex = (index: number) => {
      selectedIndex.value = index
    }

    // 清空选中的 tab 索引
    const clearSelectedIndex = () => {
      selectedIndex.value = initState.selectedIndex
    }

    // 获取当前选中的 tab 索引
    const getSelectedIndex = computed(() => selectedIndex.value)

    return {
      selectedIndex,
      setSelectedIndex,
      clearSelectedIndex,
      getSelectedIndex,
    }
  },
  {
    persist: true, // 启用持久化
  },
)
