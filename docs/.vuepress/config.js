module.exports = {
    lang: 'zh-CN',
    title: 'Charlie 的菜地',
    description: '这是我的第一个 VuePress 站点',
    base : '/charliechen/',
    plugins: [ 'vuepress-plugin-latex', 'vuepress-plugin-auto-sidebar' ],

    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: 'Charlie 的菜地',
        description: '这是我的第一个 VuePress 站点',
      },
      '/en/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: 'Charlie\'s Backyard',
        description: 'My First VuePress Site'
      },
    },

    themeConfig: {
      sidebar: 'auto',
      logo: '/logo.png',
      locales: {
        '/': {
          selectText: '选择语言',
          label: '中文🇨🇳',
          nav: [
            { text: '刷题', link: '/leetcode_solutions/' },
            { text: '迁移至VuePress', link: '/to_vuepress/' },
            { text: '杂记', link: '/misc/' },
            { text: 'Git Repo', link: 'https://github.com/bsmsnd/charliechen'},
          ]
        },
        '/en/': {
          selectText: 'Languages',
          label: 'English🇺🇸',
          nav: [
            { text: 'LeetCode Solutions', link: '/leetcode_solutions/' },
            { text: 'GitHub Repo', link: 'https://github.com/bsmsnd/charliechen'},
          ]
        }
      }
    }
  }
