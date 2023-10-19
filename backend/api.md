# 接口规划

## 客户端


uuid 常量ID
token 令牌

## 文件接口
- 获取直传令牌
- 七牛云直传

## 登录接口

- 发送验证码
- 验证码登录
- 账号密码登录
- 修改密码
- 获取所有身份

## 聊天接口

- 获取会话列表
- 创建会话
- 置顶会话
- 会话免打扰
- 退出会话

- 获取聊天室
- 修改聊天室信息

- 获取聊天室成员
- 添加聊天成员
- 删除聊天成员

- 获取聊天消息
- 发送聊天消息
- 发送文本消息
- 撤回消息 revoke

聊天消息返回格式定义

```json
{
    "id": 1,
    "kype": "text", # text, video, voice, file, image, location, custom, forward, quote, system, chatgpt,
    "creator": "usermember",
    "chatroom": {},
    "client_uuid": "20230123-655555",
    "is_revoked": false,
    "content": "你今天真傻呀？",
    "video": {
        "avatar_url": "",
        "source_url": ""
    },
    "image": {
        "thumbnail_url": "",
        "url": ""
    },
    "file": {
        "size": 121,
        "url": "",
    },
    "voice": {
        "url": ""
    },
    "custom": {
        "kype": "",
        "title": "",

    },
    //转发
    "forword": [{
        // 储存 Json

    }],
    //引用
    "quote": {
    // 储存Json

    },
    "location": {
    }


}

```

## 成员列表

- 账号成员列表 User Member
- 身份成员 Member

## 校友圈

- 校友圈列表
- 新增校友圈
- 校友圈详情
- 删除校友圈
- 修改校友圈
- 校友圈点赞
- 回复列表 多态

## 回复模块
- 回复新增
- 回复删除
- 回复修改
- 回复列表
- 回复详情





## 后台接口规划

## 登录

## 成员管理
