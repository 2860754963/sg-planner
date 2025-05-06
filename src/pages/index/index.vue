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
      <wd-navbar
        placeholder
        custom-style="background-color: transparent !important;color: #fff !important ; border-bottom-color: none !important;"
        :bordered="false"
      >
        <template #title>
          <view class="text-white">时光慢慢走</view>
        </template>
        <template #left>
          <wd-icon name="search" size="18" />
        </template>
      </wd-navbar>
    </view>
    <view>
      <view class="pl-2 pr-2">
        <sgCalendar></sgCalendar>
      </view>
      <view class="mt-10 w-full flex flex-col flex-items-center gap-4 color-[#f8f8ff]">
        <view>时光像奔跑的火车</view>
        <view>记忆它是乘客</view>
        <view>载着悲伤快乐</view>
        <view>....</view>
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
// .is-border::after
</script>

<style lang="scss" scoped></style>
