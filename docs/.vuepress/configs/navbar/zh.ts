import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarZh: NavbarConfig = [
  {
    text: '首页',
    link: '/zh/'
  },
  {
    text: '指南',
    link: '/zh/guide/communicate/gengxin.md'
  },
  {
    text: `v${version}`,
    children: [
      {
        text: '更新日志',
        link: 'http://www.website.mazihub.com'
      }
    ]
  }
]
