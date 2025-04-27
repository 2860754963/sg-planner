<!-- <route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
  },
}
</route> -->

<template>
  <gwbqCalendar
    :selected="selectedDateInfo"
    :insert="true"
    :lunar="true"
    @change="calendarChange"
  />
</template>

<script lang="ts" setup name="sgCalendar">
import gwbqCalendar from '../gwbq-calendar/gwbq-calendar.vue'

const selectedDateInfo = [
  {
    date: '2025-04-26',
    info: '签到',
    data: { custom: '自定义信息', name: '自定义消息头', content: '自定义消息内容' },
  },
]

const calendarChange = (event: any) => {
  console.log('🚀🚀🚀 ~ calendarChange ~ event🚀🚀🚀', event)
}
</script>

<style lang="scss" scoped>
//
</style>
