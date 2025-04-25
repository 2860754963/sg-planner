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
    <wd-navbar title="新增" custom-style="background-color: transparent !important;"></wd-navbar>
  </view>
</template>

<script lang="ts" setup>
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
