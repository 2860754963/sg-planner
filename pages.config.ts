import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'sg-planner',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    custom: true, // 自定义tabBar
    color: '#bfbfbf',
    selectedColor: '#815226',
    backgroundColor: '#fef2db',
    borderStyle: 'black',
    height: '50px',
    fontSize: '10px',
    iconWidth: '32px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/homeHL.png',
        pagePath: 'pages/index/index',
        text: '首页',
        icon: 'home',
      },
      {
        iconPath: 'static/tabbar/add.png',
        selectedIconPath: 'static/tabbar/addHL.png',
        pagePath: 'pages/add/add',
        text: '新增',
        icon: 'add',
      },
      {
        iconPath: 'static/tabbar/personal.png',
        selectedIconPath: 'static/tabbar/personalHL.png',
        pagePath: 'pages/my/my',
        text: '我的',
        icon: 'user',
      },
    ],
  },
})
