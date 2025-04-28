<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <wd-navbar
      title="我的小世界"
      custom-style="background-color: transparent !important;"
    ></wd-navbar>
    <view>暂未开发哦</view>
    <sgTabBar />
  </view>
</template>

<script lang="ts" setup>
import sgTabBar from '@/components/sgTabBar/sgTabBar.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()
defineOptions({
  name: 'my',
})
</script>

<style lang="scss" scoped></style>
