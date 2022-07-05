module.exports = {
  title: '网站标题',
  // base: 网站域名前缀对应自己的GitHub仓库名称
  // 一定要以/开头结尾，不然会出现资源找不到
  base: '/document-notes/',
  dest: './dist',  // 打包文件夹
  description: 'description',
  markdown: {
    lineNumbers: true
  },
  // 默认语言
  locales: {
    '/': {
      // 将会被设置为 <html> 的 lang 属性 （博客文章底部更新时间也会修改为中文时间）
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    lastUpdated: '上次更新',  // 博客文章底部添加更新时间
    serviceWorker: {
      updatePopup: true,
      updatePopup: {
        message: '有新的内容',
        buttonText: '点击更新'
      }
    },
    sidebarDepth: 2, // 侧边栏深度
    displayAllHeaders: true,
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
    ],
    //  侧边栏
    sidebar: [
      // 数组配置第一个参数是路径 /home/ 指的是 docs 文件夹下的home文件夹下的README.md
      // 第二个参数是侧边栏标题
      // ['/JavaScript/', 'JavaScript'],

      // 对象配置： 是两级目录 title 是指侧边栏一级标题
      // collapsable: false会让这个二级侧边栏一直展开
      // children里的字段又是一个数组配置，参数含义如上
      {
        title: 'JavaScript',
        collapsable: false,
        children: [
          ['/JavaScript/type', '类型']
        ]
      },
      {
        title: 'mxGraph',
        collapsable: false,
        children: [
          //  路径  /mxGraph/mxGraph  指的是 docs 文件夹下的vue文件夹下的function-api.md
          ['/mxGraph/mxGraph', 'mxGraph']
        ]
      }
    ]
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico' // 网站的icon 已经放到public文件夹下
      }
    ]
  ]
}
