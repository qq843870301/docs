module.exports = {
  // 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
  base: '/',
  // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  title: 'Lucky',
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  description: '',
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签，每个标签都可以以 [tagName, { attrName: attrValue }, innerHTML?] 的格式指定，举个例子，增加一个自定义的 favicon：
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico' // 网站的icon 已经放到public文件夹下
      }
    ],
  ],
  // 指定用于 dev server 的主机名。
  host: "0.0.0.0",
  // 指定 dev server 的端口。
  port: 8080,
  // 指定客户端文件的临时目录。
  // temp:"/path/to/@vuepress/core/.temp",
  // 打包文件夹
  dest: './dist',
  // 提供多语言支持的语言配置。具体细节请查看 https://vuepress.vuejs.org/zh/guide/i18n.html
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性 （博客文章底部更新时间也会修改为中文时间）
      lang: 'zh-CN'
    }
  },
  markdown: {
    // 是否在每个代码块的左侧显示行号。
    lineNumbers: true,
  },
  // 当你使用自定义主题的时候，需要指定它。https://vuepress.vuejs.org/zh/theme/using-a-theme.html
  theme: "",
  themeConfig: {
    logo: '/home.png',
    smoothScroll: true,
    lastUpdated: '上次更新',  // 博客文章底部添加更新时间
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: '有新的内容',
        buttonText: '点击更新'
      }
    },
    displayAllHeaders: true,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/client/' },
    ],
    sidebarDepth: 0, // 侧边栏深度
    //  侧边栏
    sidebar: {
      // fallback
      '/client/': [
        {
          title: "前端",
          path: '/client/',
          collapsable: false,
          children: [
            {
              title: "JavaScript",
              path: '/client/JavaScript/',
              children:[
                ["/client/JavaScript/type", 'type'],
              ]
            },
            {
              title: "mxGraph",
              path: '/client/mxGraph/',
              children:[
                ["/client/mxGraph/mxGraph", 'mxGraph'],
              ]
            },
          ]
        },
      ],
    }
  },

}
