module.exports = {
    lang: 'zh-CN',
    title: 'Charlie 的菜地',
    description: '这是我的第一个 VuePress 站点',
    base : '/charliechen/',
    plugins: [ 'vuepress-plugin-latex', 'vuepress-plugin-auto-sidebar' ],
    themeConfig: {
      sidebar: 'auto',
      logo: '/logo.png',
    }
  }