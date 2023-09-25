import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '跟新云产品介绍',
      children: ['/zh/guide/gengxinyun/introduce.md','/zh/guide/gengxinyun/start.md']
    },
    {
      text: '更新云使用指南',
      children: ['/zh/guide/communicate/gengxin.md', '/zh/guide/communicate/contacts.md', '/zh/guide/communicate/school_friend.md',
       '/zh/guide/teaching/teaching_center.md', '/zh/guide/teaching/resources.md',
       '/zh/guide/school/school_center.md', 
       '/zh/guide/educational/todo_list.md', '/zh/guide/educational/todo_list.md',
       '/zh/guide/my/account_management.md','/zh/guide/my/file_management.md']
    },
    // {
    //   text: '介绍',
    //   children: ['/zh/guide/getting-started.md', '/zh/guide/index.md']
    // }
    
  ]
}
