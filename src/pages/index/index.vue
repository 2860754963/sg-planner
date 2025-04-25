<route lang="json5" type="home">
{
  style: {
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="flex flex-col h-full">
    <view class="bg-white overflow-hidden px-4" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
      <wd-navbar title="今日" custom-style="background-color: transparent !important;"></wd-navbar>
      <view>
        <view>
          <view>{{ currentYearMonth }}</view>
          <view class="h-sm w-full">
            <sgCalendar></sgCalendar>
          </view>
        </view>
      </view>
    </view>
    <sgTabBar></sgTabBar>
  </view>
</template>

<script lang="ts" setup>
import sgTabBar from '@/components/sgTabBar/sgTabBar.vue'
import sgCalendar from '@/components/sgCalendar/sgCalendar.vue'
const { safeAreaInsets } = uni.getSystemInfoSync()

const currentYearMonth = new Date().toLocaleString('zh-CN', { month: 'long', year: 'numeric' })
</script>

<style></style>
