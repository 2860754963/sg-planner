<route lang="json5" type="page">
{
  layout: 'default',
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
      placeholder
      custom-style="background-color: transparent !important;color: #fff !important ; border-bottom-color: none !important;"
      :bordered="false"
    >
      <template #title>
        <view class="text-black">清单幸福记</view>
      </template>
      <template #left>
        <wd-icon name="search" size="18" />
      </template>
    </wd-navbar>
    <view>敬请期待！</view>
    <sgTabBar />
  </view>
</template>

<script lang="ts" setup>
import sgTabBar from '@/components/sgTabBar/sgTabBar.vue'

import { TestEnum } from '@/typings'
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'add',
})

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
//
</style>
