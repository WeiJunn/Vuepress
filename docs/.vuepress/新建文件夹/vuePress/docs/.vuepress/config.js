module.exports = {
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  base: '/vuePress/',
  title: 'Create magicw',
  description: 'blog',
  themeConfig: {
    displayAllHeaders: false,
    searchMaxSuggestions: 10, //调整默认搜索框显示的搜索结果数量
    nav: [ // 导航栏配置
      {
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
        link: '/web/'
      },

      {
        text: '友情链接',
        ariaLabel: 'Language Menu',
        items: [{
          text: '小炮',
          link: 'http://www.xxppp.top/'
        }, ]
      }
    ],
    // sidebar: require("./sidebar.js"),
    sidebar: require("./sidebar.js"),
  },
  extraWatchFiles: [
    // '.vuepress/foo.js', // 使用相对路径
    // '/path/to/bar.js'   // 使用绝对路径
    './sidebar.js',
    './web/sidebar.js',
    './config.js',
  ]

  // "plugins": {
  //   "vuepress-plugin-auto-sidebar": {}
  // }//自动生成侧边栏
}