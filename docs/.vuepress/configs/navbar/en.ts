import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Guide',
    link: '/zh/guide/communicate/gengxin.md'
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'CHANGELOG',
        link: 'http://www.website.mazihub.com/'
      }
    ]
  }
]
