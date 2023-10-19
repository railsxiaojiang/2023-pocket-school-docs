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
    logo: '/electron-vite.png',
    nav: [
      { text: '解决方案', link: '/guide/why-electron-vite' },
      { text: '产品说明', link: '/guide/why-electron-vite' },
      { text: 'FAQ', link: '/faq/electron-forge' },
      { text: '产品日志', link: '/guide/why-electron-vite' },
    ],
    sidebar: [
      // {
      //   text: '解决方案',
      //   collapsed: false,
      //   items: [
      //     { text: '多国语家校互通', link: '/client/index' },
      //     { text: '学生评估', link: '/client/driver' },
      //     { text: '作业管理', link: '/client/index' },
      //     { text: '通知回执', link: '/client/conversation' },
      //     { text: '校车服务', link: '/client/chatroom' },
      //     { text: '课后班报名', link: '/client/chat-setting' },
      //     { text: '校餐管理', link: '/client/driver' },
      //     { text: '校友圈管理', link: '/client/driver' },
      //     { text: '办公OA', link: '/client/driver' },


      //   ],
      // },
      {
        text: '客户端说明',
        collapsed: false,
        items: [
          { text: '---客户端---', link: '/client/index' },
          { text: '0.登录模块', link: '/client/session' },
          { text: '1.会话管理', link: '/client/conversation' },
          { text: '2.聊天消息', link: '/client/chatroom' },
          { text: '3.聊天设置', link: '/client/chat-setting' },
          { text: '4.联系人管理', link: '/client/contact' },
          { text: '5.网盘模块 ⭐️', link: '/client/driver' },

        ],
      },

      {
        text: '后台文档',
        collapsed: false,
        items: [
          { text: '---后台模块规划---', link: '/admin/index' },
        ],
      },


      {
        text: '后端架构',
        collapsed: true,
        items: [
          { text: 'Api接口规划', link: '/backend/api' },

          { text: '1.Member Action的设计和使用', link: '/backend/member-action' },
          { text: '2. Socket 通讯', link: '/backend/socket' },

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
