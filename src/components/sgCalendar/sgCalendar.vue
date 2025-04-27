<!-- <route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
  },
}
</route> -->

<template>
  <gwbqCalendar :insert="true" :lunar="true" @change="calendarChange" />
</template>

<script lang="ts" setup name="sgCalendar">
import gwbqCalendar from '../gwbq-calendar/gwbq-calendar.vue'

const calendarChange = (event: any) => {
  console.log('🚀🚀🚀 ~ calendarChange ~ event🚀🚀🚀', event)
}
</script>

<style lang="scss" scoped>
//
</style>
