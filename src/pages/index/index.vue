<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: '#fff',
    backgroundColor: '#f8f8f8',
    enablePullDownRefresh: true,
  },
}
</route>
<template>
  <view
    class="bg-white overflow-hidden pt-2 px-4"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <wd-navbar title="首页" custom-style="background-color: transparent !important;"></wd-navbar>

    <view class="text-center text-3xl font-bold main-title-color">欢迎来到拾光清单</view>
  </view>
</template>

<script lang="ts" setup>
import { TestEnum } from '@/typings'
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log('🚀🚀🚀 ~ safeAreaInsets🚀🚀🚀', safeAreaInsets)
console.log('🚀🚀🚀 ~ PLATFORM.platform 🚀🚀🚀', PLATFORM.platform)

// 测试 uni API 自动引入
// onLoad(() => {
//   console.log(TestEnum.A, 'a')
// })
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
