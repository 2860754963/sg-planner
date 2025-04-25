<!-- <route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
  },
}
</route> -->

<template>
  <view class="w-full h-full bg-blue">
    sgCalendar

    <gwbqCalendar></gwbqCalendar>
  </view>
</template>

<script lang="ts" setup name="sgCalendar">
import gwbqCalendar from '../gwbq-calendar/gwbq-calendar.vue'
</script>

<style lang="scss" scoped>
//
</style>
