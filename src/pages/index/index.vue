<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="bg-[#98bcff] h-screen">
    <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <wd-navbar custom-style="background-color: transparent !important;color: #fff !important ;">
        <template #title>
          <view class="text-white">首页</view>
        </template>
        <template #left>
          <wd-icon name="search" size="18" />
        </template>
      </wd-navbar>
    </view>
    <view>
      <view class="h-sm pl-2 pr-2">
        <sgCalendar></sgCalendar>
      </view>
    </view>
    <sgTabBar />
  </view>
</template>

<script lang="ts" setup>
import sgTabBar from '@/components/sgTabBar/sgTabBar.vue'
import sgCalendar from '@/components/sgCalendar/sgCalendar.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()

const currentYearMonth = new Date().toLocaleString('zh-CN', { month: 'long', year: 'numeric' })
</script>

<style></style>
