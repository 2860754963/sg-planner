<template>
  <view
    class="uni-calendar-item__weeks-box"
    :class="{
      'uni-calendar-item--disable': weeks.disable,
      'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
      'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
      'uni-calendar-item--before-checked': weeks.beforeMultiple,
      'uni-calendar-item--multiple': weeks.multiple,
      'uni-calendar-item--after-checked': weeks.afterMultiple,
    }"
    @click="choiceDate(weeks)"
  >
    <view class="uni-calendar-item__weeks-box-item">
      <text v-if="selected && weeks.extraInfo" class="uni-calendar-item__weeks-box-circle"></text>
      <uni-badge
        class="uni-badge-left-margin"
        :is-dot="true"
        :text="weeks.isChoose ? 1 : 0"
        absolute="rightTop"
        size="small"
      >
        <text
          class="uni-calendar-item__weeks-box-text"
          :class="{
            'uni-calendar-item--isDay-text': weeks.isDay,
            'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
            'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
            'uni-calendar-item--before-checked': weeks.beforeMultiple,
            'uni-calendar-item--multiple': weeks.multiple,
            'uni-calendar-item--after-checked': weeks.afterMultiple,
            'uni-calendar-item--disable': weeks.disable,
            'uni-calendar-item--zhoumo':
              (weeks.lunar.ncWeek === '星期六' || weeks.lunar.ncWeek === '星期日') &&
              !weeks.disable,
          }"
        >
          {{ weeks.date }}
        </text>
      </uni-badge>
      <text
        v-if="!lunar && !weeks.extraInfo && weeks.isDay"
        class="uni-calendar-item__weeks-lunar-text"
        :class="{
          'uni-calendar-item--isDay-text': weeks.isDay,
          'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'uni-calendar-item--before-checked': weeks.beforeMultiple,
          'uni-calendar-item--multiple': weeks.multiple,
          'uni-calendar-item--after-checked': weeks.afterMultiple,
        }"
      >
        {{ todayText }}
      </text>
      <text
        v-if="lunar && !weeks.extraInfo && weeks.lunar.Term"
        class="uni-calendar-item__weeks-lunar-text"
        :class="{
          'uni-calendar-item--isDay-text': weeks.isDay,
          'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'uni-calendar-item--before-checked': weeks.beforeMultiple,
          'uni-calendar-item--multiple': weeks.multiple,
          'uni-calendar-item--after-checked': weeks.afterMultiple,
          'uni-calendar-item--disable': weeks.disable,
          'uni-calendar-jieqi': !weeks.disable,
        }"
      >
        {{ weeks.lunar.Term }}
      </text>
      <text
        v-if="lunar && !weeks.extraInfo && !weeks.lunar.Term && weeks.festival"
        class="uni-calendar-item__weeks-lunar-text"
        :class="{
          'uni-calendar-item--isDay-text': weeks.isDay,
          'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'uni-calendar-item--before-checked': weeks.beforeMultiple,
          'uni-calendar-item--multiple': weeks.multiple,
          'uni-calendar-item--after-checked': weeks.afterMultiple,
          'uni-calendar-item--disable': weeks.disable,
          'uni-caldendar-festival': !weeks.disable,
        }"
      >
        {{ weeks.festival.length > 4 ? weeks.festival.substr(0, 4) : weeks.festival }}
      </text>
      <text
        v-if="lunar && !weeks.extraInfo && !weeks.lunar.Term && !weeks.festival"
        class="uni-calendar-item__weeks-lunar-text"
        :class="{
          'uni-calendar-item--isDay-text': weeks.isDay,
          'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'uni-calendar-item--before-checked': weeks.beforeMultiple,
          'uni-calendar-item--multiple': weeks.multiple,
          'uni-calendar-item--after-checked': weeks.afterMultiple,
          'uni-calendar-item--disable': weeks.disable,
        }"
      >
        {{ weeks.isDay ? todayText : weeks.lunar.IDayCn }}
      </text>
      <text
        v-if="weeks.extraInfo && weeks.extraInfo.info"
        class="uni-calendar-item__weeks-lunar-text"
        :class="{
          'uni-calendar-item--extra': weeks.extraInfo.info,
          'uni-calendar-item--isDay-text': weeks.isDay,
          'uni-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'uni-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'uni-calendar-item--before-checked': weeks.beforeMultiple,
          'uni-calendar-item--multiple': weeks.multiple,
          'uni-calendar-item--after-checked': weeks.afterMultiple,
          'uni-calendar-item--disable': weeks.disable,
        }"
      >
        {{ weeks.extraInfo.info }}
      </text>
    </view>
  </view>
</template>

<script>
import { initVueI18n } from '@dcloudio/uni-i18n'
import messages from './i18n/index.js'
const { t } = initVueI18n(messages)
export default {
  emits: ['change'],
  props: {
    weeks: {
      type: Object,
      default() {
        return {}
      },
    },
    calendar: {
      type: Object,
      default: () => {
        return {}
      },
    },
    selected: {
      type: Array,
      default: () => {
        return []
      },
    },
    lunar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    todayText() {
      return t('uni-calender.today')
    },
  },
  methods: {
    choiceDate(weeks) {
      this.$emit('change', weeks)
    },
  },
}
</script>

<style lang="scss" scoped>
$uni-font-size-base: 14px;
$uni-text-color: #333;
$uni-font-size-sm: 12px;
$uni-color-error: #e43d33;
$uni-opacity-disabled: 0.3;
$uni-text-color-disable: #c0c0c0;
$uni-color-primary: #2979ff;

.uni-calendar-item__weeks-box {
  /* #ifndef APP-NVUE */
  display: flex;
  flex: 1;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
}

.uni-calendar-item__weeks-box-text {
  font-size: 18px;
  font-weight: bold;
  // font-size: $uni-font-size-base;
  color: $uni-text-color;
}

.uni-calendar-item__weeks-lunar-text {
  // font-size: $uni-font-size-sm;
  // color: $uni-text-color;
  font-size: 11px;
  color: #999;
}

.uni-calendar-item__weeks-box-item {
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // width: 100rpx;
  // height: 100rpx;
  padding: 11rpx;
}

.uni-calendar-item__weeks-box-circle {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  background-color: $uni-color-error;
  border-radius: 8px;
}

.uni-calendar-item--disable {
  color: $uni-text-color-disable;
  background-color: rgba(249, 249, 249, $uni-opacity-disabled);
}

.uni-calendar-item--isDay-text {
  // color: $uni-color-primary;
}

view.uni-calendar-item--isDay {
  background: radial-gradient(circle, #6c96f8 60%, #90bffd 40%);
  background-color: #6a92fa;
  // background-color: $uni-color-primary;
  // opacity: 0.8;
  // color: #fff;

  border-radius: 50%;
  & text {
    color: #fff !important;
  }
}

.uni-calendar-item--extra {
  color: $uni-color-error;
  opacity: 0.8;
}

view.uni-calendar-item--checked {
  // background-color: $uni-color-primary;
  // color: #fff;
  // opacity: 0.8;
  border: 1px solid #6a92fa;
  border-radius: 50%;
}

.uni-calendar-item--multiple {
  color: #fff;
  background-color: $uni-color-primary;
  opacity: 0.8;
}

.uni-calendar-item--before-checked {
  color: #fff;
  background-color: #ff5a5f;
}

.uni-calendar-item--after-checked {
  color: #fff;
  background-color: #ff5a5f;
}

.uni-calendar-item--zhoumo {
  color: #ff84af;
}

.uni-calendar-jieqi {
  color: #3e9736;
}

.uni-caldendar-festival {
  color: #e43d33;
}
</style>
