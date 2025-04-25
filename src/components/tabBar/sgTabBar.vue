<template>
  <wd-tabbar
    v-model="selectedIndex"
    shape="round"
    fixed
    placeholder
    safeAreaInsetBottom
    @change="handleTabbarChange"
  >
    <wd-tabbar-item
      v-for="item in tabbarList"
      :key="item.icon"
      :title="item.text"
      :icon="item.icon"
    ></wd-tabbar-item>
  </wd-tabbar>
</template>

<script lang="ts" setup name="SgTabBar">
import { useTabBarStore } from '@/store'
import { tabBarPages } from '@/utils/index'

const tabBarStore = useTabBarStore()
const selectedIndex = tabBarStore.getSelectedIndex

const tabbarList = tabBarPages().list.map((item) => {
  return {
    ...item,
    icon: item.icon,
    url: item.pagePath,
  }
})

const handleTabbarChange = ({ value }) => {
  tabBarStore.setSelectedIndex(value)
  handleSwitchTab(tabbarList[value].url)
}

const handleSwitchTab = (url: string) => {
  uni.switchTab({ url })
}
</script>

<style lang="scss" scoped></style>
