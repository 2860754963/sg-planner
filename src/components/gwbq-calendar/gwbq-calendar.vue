<template>
  <view class="uni-calendar">
    <view
      v-if="!insert && show"
      class="uni-calendar__mask"
      :class="{ 'uni-calendar--mask-show': aniMaskShow }"
      @click="clean"
    ></view>
    <view
      v-if="insert || show"
      class="uni-calendar__content rounded-3xl overflow-hidden"
      :class="{ 'uni-calendar--fixed': !insert, 'uni-calendar--ani-show': aniMaskShow }"
    >
      <view v-if="!insert" class="uni-calendar__header uni-calendar--fixed-top">
        <view class="uni-calendar__header-btn-box" @click="close">
          <text class="uni-calendar__header-text uni-calendar--fixed-width">{{ cancelText }}</text>
        </view>
        <view class="uni-calendar__header-btn-box" @click="confirm">
          <text class="uni-calendar__header-text uni-calendar--fixed-width">{{ okText }}</text>
        </view>
      </view>
      <view class="uni-calendar__header flex justify-between items-center pl-xl pr-xl">
        <!-- <view class="uni-calendar__header-btn-box" @click.stop="pre">
          <view class="uni-calendar__header-btn uni-calendar--left"></view>
        </view> -->
        <picker mode="date" :value="date" fields="month" @change="bindDateChange">
          <view class="text-[#679bf9] flex justify-center items-center">
            <view class="text-6.4">{{ nowDate.month }}月</view>
            <view class="text-3.2 flex flex-col items-center justify-center">
              {{ nowDate.year }}
              <wd-icon name="arrow-down"></wd-icon>
            </view>
          </view>
          <!-- <text class="uni-calendar__header-text">
            {{ (nowDate.year || '') + ' / ' + (nowDate.month || '') }}
          </text> -->
        </picker>

        <view @click="backtoday">{{ todayText }}</view>

        <view
          class="bg-[#679bf9] rounded-lg w-10 h-7.5 color-white flex justify-between items-center pl-3 pr-3 text-3"
        >
          <wd-icon name="add" />
          <view class="color-white">备注</view>
        </view>
        <!-- <view class="uni-calendar__header-btn-box" @click.stop="next">
          <view class="uni-calendar__header-btn uni-calendar--right"></view>
        </view> -->
        <!-- <text class="uni-calendar__backtoday" @click="backtoday">{{ todayText }}</text> -->
      </view>
      <view class="uni-calendar__box">
        <view v-if="showMonth" class="uni-calendar__box-bg">
          <text class="uni-calendar__box-bg-text">{{ nowDate.month }}</text>
        </view>
        <view class="uni-calendar__weeks">
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ SUNText }}</text>
          </view>
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ monText }}</text>
          </view>
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ TUEText }}</text>
          </view>
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ WEDText }}</text>
          </view>
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ THUText }}</text>
          </view>
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ FRIText }}</text>
          </view>
          <view class="uni-calendar__weeks-day">
            <text class="uni-calendar__weeks-day-text">{{ SATText }}</text>
          </view>
        </view>
        <swiper :style="{ height: height + 'px' }" :circular="true" @change="changeSwipper">
          <swiper-item>
            <view id="calendarPanel">
              <view class="uni-calendar__weeks" v-for="(item, weekIndex) in weeks" :key="weekIndex">
                <view
                  class="uni-calendar__weeks-item"
                  v-for="(weeks, weeksIndex) in item"
                  :key="weeksIndex"
                >
                  <calendar-item
                    class="uni-calendar-item--hook"
                    :weeks="weeks"
                    :calendar="calendar"
                    :selected="selected"
                    :lunar="lunar"
                    @change="choiceDate"
                  ></calendar-item>
                </view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view id="calendarPanel">
              <view class="uni-calendar__weeks" v-for="(item, weekIndex) in weeks" :key="weekIndex">
                <view
                  class="uni-calendar__weeks-item"
                  v-for="(weeks, weeksIndex) in item"
                  :key="weeksIndex"
                >
                  <calendar-item
                    class="uni-calendar-item--hook"
                    :weeks="weeks"
                    :calendar="calendar"
                    :selected="selected"
                    :lunar="lunar"
                    @change="choiceDate"
                  ></calendar-item>
                </view>
              </view>
            </view>
          </swiper-item>
          <swiper-item>
            <view id="calendarPanel">
              <view class="uni-calendar__weeks" v-for="(item, weekIndex) in weeks" :key="weekIndex">
                <view
                  class="uni-calendar__weeks-item"
                  v-for="(weeks, weeksIndex) in item"
                  :key="weeksIndex"
                >
                  <calendar-item
                    class="uni-calendar-item--hook"
                    :weeks="weeks"
                    :calendar="calendar"
                    :selected="selected"
                    :lunar="lunar"
                    @change="choiceDate"
                  ></calendar-item>
                </view>
              </view>
            </view>
          </swiper-item>
        </swiper>
        <!-- <view class="uni-calendar__weeks" v-for="(item,weekIndex) in weeks" :key="weekIndex"
					@touchstart="touchStart" @touchend="touchEnd">
					<view class="uni-calendar__weeks-item" v-for="(weeks,weeksIndex) in item" :key="weeksIndex">
						<calendar-item class="uni-calendar-item--hook" :weeks="weeks" :calendar="calendar"
							:selected="selected" :lunar="lunar" @change="choiceDate"></calendar-item>
					</view>
				</view> -->
      </view>
    </view>
  </view>
</template>

<script>
import Calendar from './util.js'
import calendarItem from './gwbq-calendar-item.vue'
import { initVueI18n } from '@dcloudio/uni-i18n'
import messages from './i18n/index.js'
const { t } = initVueI18n(messages)
/**
 * Calendar 日历
 * @description 日历组件可以查看日期，选择任意范围内的日期，打点操作。常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 * @tutorial https://ext.dcloud.net.cn/plugin?id=56
 * @property {String} date 自定义当前时间，默认为今天
 * @property {Boolean} lunar 显示农历
 * @property {String} startDate 日期选择范围-开始日期
 * @property {String} endDate 日期选择范围-结束日期
 * @property {Boolean} range 范围选择
 * @property {Boolean} insert = [true|false] 插入模式,默认为false
 * 	@value true 弹窗模式
 * 	@value false 插入模式
 * @property {Boolean} clearDate = [true|false] 弹窗模式是否清空上次选择内容
 * @property {Array} selected 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]
 * @property {Boolean} showMonth 是否选择月份为背景
 * @event {Function} change 日期改变，`insert :ture` 时生效
 * @event {Function} confirm 确认选择`insert :false` 时生效
 * @event {Function} monthSwitch 切换月份时触发
 * @example <uni-calendar :insert="true":lunar="true" :start-date="'2019-3-2'":end-date="'2019-5-20'"@change="change" />
 */
export default {
  components: {
    calendarItem,
  },
  emits: ['close', 'confirm', 'change', 'monthSwitch'],
  props: {
    date: {
      type: String,
      default: '',
    },
    selected: {
      type: Array,
      default() {
        return []
      },
    },
    lunar: {
      type: Boolean,
      default: false,
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    range: {
      type: Boolean,
      default: false,
    },
    insert: {
      type: Boolean,
      default: true,
    },
    showMonth: {
      type: Boolean,
      default: true,
    },
    clearDate: {
      type: Boolean,
      default: true,
    },
    delta: {
      type: Number,
      default: 50,
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
      weeks: [],
      calendar: {},
      nowDate: '',
      aniMaskShow: false,
      touchStartX: 0, // 触屏起始点x
      touchStartY: 0, // 触屏起始点y
      height: 290,
      current: 0,
    }
  },
  computed: {
    /**
     * for i18n
     */

    okText() {
      return t('uni-calender.ok')
    },
    cancelText() {
      return t('uni-calender.cancel')
    },
    todayText() {
      return t('uni-calender.today')
    },
    monText() {
      return t('uni-calender.MON')
    },
    TUEText() {
      return t('uni-calender.TUE')
    },
    WEDText() {
      return t('uni-calender.WED')
    },
    THUText() {
      return t('uni-calender.THU')
    },
    FRIText() {
      return t('uni-calender.FRI')
    },
    SATText() {
      return t('uni-calender.SAT')
    },
    SUNText() {
      return t('uni-calender.SUN')
    },
  },
  watch: {
    date(newVal) {
      // this.cale.setDate(newVal)
      this.init(newVal)
    },
    type(newVal) {
      this.initChoose(newVal)
    },
    startDate(val) {
      this.cale.resetSatrtDate(val)
      this.cale.setDate(this.nowDate.fullDate)
      this.weeks = this.cale.weeks
    },
    endDate(val) {
      this.cale.resetEndDate(val)
      this.cale.setDate(this.nowDate.fullDate)
      this.weeks = this.cale.weeks
    },
    selected(newVal) {
      this.cale.setSelectInfo(this.nowDate.fullDate, newVal)
      this.weeks = this.cale.weeks
    },
    weeks() {
      setTimeout(() => {
        this.changeHeight()
        if (this.type != '') {
          this.initChoose(this.type)
        }
      }, 100)
    },
  },
  created() {
    // 获取日历方法实例
    this.cale = new Calendar({
      // date: new Date(),
      selected: this.selected,
      startDate: this.startDate,
      endDate: this.endDate,
      range: this.range,
    })
    // 选中某一天
    // this.cale.setDate(this.date)
    this.init(this.date)
    // this.setDay
  },
  methods: {
    // 取消穿透
    clean() {},
    bindDateChange(e) {
      const value = e.detail.value + '-1'
      this.init(value)
    },
    /**
     * 触摸开始
     **/
    touchStart(e) {
      this.touchStartX = e.touches[0].clientX
      this.touchStartY = e.touches[0].clientY
    },
    /**
     * 触摸结束
     **/
    touchEnd(e) {
      let deltaX = e.changedTouches[0].clientX - this.touchStartX
      let deltaY = e.changedTouches[0].clientY - this.touchStartY
      // X轴的滑动距离大于 delta，且此次事件是以X轴移动为主（左滑或者右滑）；
      if (Math.abs(deltaX) > this.delta && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX >= 0) {
          // console.log("右滑")
          this.pre()
          // this.$emit('fingerToR')
        } else {
          // console.log("左滑")
          this.next()
          // this.$emit('fingerToL')
        }
      }
    },
    changeSwipper(e) {
      let curr = e.detail.current
      if (curr - this.current == 1 || curr - this.current == -2) {
        this.next()
      } else {
        this.pre()
      }
      this.current = curr
    },
    /**
     * 初始化日期显示
     * @param {Object} date
     */
    init(date) {
      this.cale.setDate(date)
      this.weeks = this.cale.weeks
      this.nowDate = this.calendar = this.cale.getInfo(date)
    },
    initChoose(type) {
      for (var i in this.weeks) {
        var arr = this.weeks[i]
        arr.map((item) => {
          if (!item.disable) {
            delete item.isChoose
            switch (type) {
              case '结婚':
                if (item.date % 2 == 0) {
                  item.isChoose = true
                }
                break
              case '入伙':
                if (item.date % 3 == 0) {
                  item.isChoose = true
                }
                break
              case '领证':
                if (item.date % 4 == 0) {
                  item.isChoose = true
                }
                break
              case '开业':
                if (item.date % 5 == 0) {
                  item.isChoose = true
                }
                break
              case '搬家':
                if (item.date % 6 == 0) {
                  item.isChoose = true
                }
                break
              default:
                break
            }
          }
        })
      }
      this.weeks = {
        ...this.weeks,
      }
    },
    changeHeight() {
      var query = uni.createSelectorQuery().in(this)
      query
        .select('#calendarPanel')
        .boundingClientRect((rect) => {
          if (rect) {
            console.log('🚀🚀🚀 ~ .boundingClientRect ~ rect🚀🚀🚀', rect)
            this.height = rect.height + 14
          }
        })
        .exec()
    },
    /**
     * 打开日历弹窗
     */
    open() {
      // 弹窗模式并且清理数据
      if (this.clearDate && !this.insert) {
        this.cale.cleanMultipleStatus()
        // this.cale.setDate(this.date)
        this.init(this.date)
      }
      this.show = true
      this.$nextTick(() => {
        setTimeout(() => {
          this.aniMaskShow = true
        }, 50)
      })
    },
    /**
     * 关闭日历弹窗
     */
    close() {
      this.aniMaskShow = false
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = false
          this.$emit('close')
        }, 300)
      })
    },
    /**
     * 确认按钮
     */
    confirm() {
      this.setEmit('confirm')
      this.close()
    },
    /**
     * 变化触发
     */
    change() {
      if (!this.insert) return
      this.setEmit('change')
    },
    /**
     * 选择月份触发
     */
    monthSwitch() {
      let { year, month } = this.nowDate
      this.$emit('monthSwitch', {
        year,
        month: Number(month),
      })
    },
    /**
     * 派发事件
     * @param {Object} name
     */
    setEmit(name) {
      let { year, month, date, fullDate, lunar, extraInfo } = this.calendar
      this.$emit(name, {
        range: this.cale.multipleStatus,
        year,
        month,
        date,
        fulldate: fullDate,
        lunar,
        extraInfo: extraInfo || {},
      })
    },
    /**
     * 选择天触发
     * @param {Object} weeks
     */
    choiceDate(weeks) {
      if (weeks.disable) return
      this.calendar = weeks
      // 设置多选
      this.cale.setMultiple(this.calendar.fullDate)
      this.weeks = this.cale.weeks
      this.change()
    },
    /**
     * 回到今天
     */
    backtoday() {
      let date = this.cale.getDate(new Date()).fullDate
      // this.cale.setDate(date)
      this.init(date)
      this.change()
    },
    /**
     * 上个月
     */
    pre() {
      const preDate = this.cale.getDate(this.nowDate.fullDate, -1, 'month').fullDate
      this.setDate(preDate)
      this.monthSwitch()
    },
    /**
     * 下个月
     */
    next() {
      const nextDate = this.cale.getDate(this.nowDate.fullDate, +1, 'month').fullDate
      this.setDate(nextDate)
      this.monthSwitch()
    },
    /**
     * 设置日期
     * @param {Object} date
     */
    setDate(date) {
      this.cale.setDate(date)
      this.weeks = this.cale.weeks
      this.nowDate = this.cale.getInfo(date)
    },
  },
}
</script>

<style lang="scss" scoped>
$uni-bg-color-mask: rgba(
  $color: #000000,
  $alpha: 0.4,
);
$uni-border-color: #ededed;
$uni-text-color: #333;
$uni-bg-color-hover: #f1f1f1;
$uni-font-size-base: 14px;
$uni-text-color-placeholder: #808080;
$uni-color-subtitle: #555555;
$uni-text-color-grey: #999;

.uni-calendar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
}

.uni-calendar__mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* #ifndef APP-NVUE */
  z-index: 99;
  background-color: $uni-bg-color-mask;
  opacity: 0;
  transition-duration: 0.3s;
  transition-property: opacity;
  /* #endif */
}

.uni-calendar--mask-show {
  opacity: 1;
}

.uni-calendar--fixed {
  position: fixed;
  right: 0;
  /* #ifdef APP-NVUE */
  bottom: 0;
  /* #ifndef APP-NVUE */
  bottom: calc(var(--window-bottom));
  /* #endif */
  left: 0;
  z-index: 99;
  transition-duration: 0.3s;
  transition-property: transform;
  transform: translateY(460px);
  /* #endif */
}

.uni-calendar--ani-show {
  transform: translateY(0);
}

.uni-calendar__content {
  background-color: #fff;
}

.uni-calendar__header {
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  height: 50px;
  border-bottom-color: $uni-border-color;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.uni-calendar--fixed-top {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  justify-content: space-between;
  border-top-color: $uni-border-color;
  border-top-style: solid;
  border-top-width: 1px;
}

.uni-calendar--fixed-width {
  width: 50px;
  // padding: 0 15px;
}

.uni-calendar__backtoday {
  position: absolute;
  top: 25rpx;
  right: 0;
  height: 25px;
  padding: 0 5px;
  padding-left: 10px;
  font-size: 12px;
  line-height: 25px;
  color: $uni-text-color;
  background-color: $uni-bg-color-hover;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.uni-calendar__header-text {
  width: 100px;
  font-size: $uni-font-size-base;
  color: $uni-text-color;
  text-align: center;
}

.uni-calendar__header-btn-box {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.uni-calendar__header-btn {
  width: 10px;
  height: 10px;
  border-top-color: $uni-color-subtitle;
  border-top-style: solid;
  border-top-width: 2px;
  border-left-color: $uni-text-color-placeholder;
  border-left-style: solid;
  border-left-width: 2px;
}

.uni-calendar--left {
  transform: rotate(-45deg);
}

.uni-calendar--right {
  transform: rotate(135deg);
}

.uni-calendar__weeks {
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding-bottom: 12rpx;
}

.uni-calendar__weeks-item {
  flex: 1;
}

.uni-calendar__weeks-day {
  /* #ifndef APP-NVUE */
  display: flex;
  flex: 1;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  border-bottom-color: #f5f5f5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.uni-calendar__weeks-day-text {
  font-size: 12px;
}

.uni-calendar__box {
  position: relative;
}

.uni-calendar__box-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* #ifndef APP-NVUE */
  display: flex;
  align-items: center;
  /* #endif */
  justify-content: center;
}

.uni-calendar__box-bg-text {
  font-size: 200px;
  font-weight: bold;
  /* #ifndef APP-NVUE */
  line-height: 1;
  color: $uni-text-color-grey;
  text-align: center;
  opacity: 0.1;
  /* #endif */
}
</style>
