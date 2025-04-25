<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="flex flex-col h-full">
    <view
      class="bg-white overflow-hidden pt-2 px-4"
      :style="{ marginTop: safeAreaInsets?.top + 'px' }"
    >
      这是首页
    </view>
    <sgTabBar></sgTabBar>
  </view>
</template>

<script lang="ts" setup>
import sgTabBar from '@/components/tabBar/sgTabBar.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style></style>
