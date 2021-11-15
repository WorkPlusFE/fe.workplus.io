import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'WorkPlusFE',
  description: '深圳恒拓高科信息技术有限公司 - 前端技术部',

  themeConfig: {
    logo: '/images/icon.png',
    navbar: [
      { text: '项目', link: '/start/' },
      { text: '规范', link: '/guide/' },
      { text: '进阶', link: '/advanced' },
      { text: '博客', link: 'https://fe-blog.workplus.io' },
      {
        text: '其他',
        children: [
          { text: '开放平台', link: 'https://open.workplus.io/' },
          { text: 'Cordova 文档', link: 'https://open.workplus.io/cordova/' },
          { text: 'GitHub', link: 'https://github.com/WorkPlusFE/' },
          { text: '加入我们', link: '/job' },
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '项目规范',
          children: [
            'code-guide',
            'branch-guide',
            'git-guide',
            'multiple-remote',
            'file-comment',
          ]
        }
      ], 
    },
    lastUpdatedText: '最后更新时间',
    contributorsText: '编辑者',
    editLinks: true,
    editLinkText: '帮助 WorkPlusFE 改善此页面！'
  },
})