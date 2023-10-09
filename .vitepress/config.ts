import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "更新云",
  description: "Creating desktop programs using Electron and vite",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/electron-vite.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'electron-vite.png' }],

    [
      'meta',
      { name: 'electron-vite', content: 'Creating desktop programs using Electron and vite' },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/electron-vite.png',
    nav: [
      { text: '产品文档', link: '/guide/why-electron-vite' },
      { text: '技术文档', link: '/faq/electron-forge' },
      { text: 'FAQ', link: '/faq/electron-forge' },
      { text: '产品日志', link: '/guide/why-electron-vite' },
    ],
    sidebar: [
      {
        text: '产品文档',
        collapsed: false,
        items: [
          { text: 'Why Electron⚡️Vite', link: '/guide/why-electron-vite' },
        ],
      },

      {
        text: '架构文档',
        collapsed: true,
        items: [
          { text: 'Why Electron⚡️Vite', link: '/guide/why-electron-vite' },
        ],
      },

      {
        text: '开发文档',
        collapsed: true,
        items: [
          { text: 'Why Electron⚡️Vite', link: '/guide/why-electron-vite' },
        ],
      },
      {
        text: '设计文档',
        collapsed: true,
        items: [
          { text: 'Why Electron⚡️Vite', link: '/guide/why-electron-vite' },
        ],
      },


      {
        text: 'FAQ',
        collapsed: true,
        items: [
          { text: 'Electron Forge', link: '/faq/electron-forge' },

        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/railsxiaojiang' }
    ],

  },
})
