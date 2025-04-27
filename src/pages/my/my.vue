<route lang="json5" type="page">
{
  style: {
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="bg-[#98bcff]" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <wd-navbar title="我的" custom-style="background-color: transparent !important;"></wd-navbar>

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
