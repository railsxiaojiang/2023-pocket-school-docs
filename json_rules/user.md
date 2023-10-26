# 用户，档案，公司体系

## 用户 User

这里的用户指的是一个账号。用户不做太多约束

```json
//表 user

 {
    "id": 1,
    "token": "f921621e94c4fe548ea9b0bc",
    "phone": "1850164904", //也是外键，如果用户更改手机号。需要通知学校去同步。这一步可以优化下。
 }

```


## 公司表 Company


```json
// company
 {
    "id": 1,
    "token": "f921621e94c4fe548ea9b0bc",
    "chinese_name": "秋炉(上海)国际民办学校",
    "english_name": "ABC",
    "avatar_thumb_url": "url", //图片缩略图 一般是256x256
    "avatar_url": "url", //原图,
    "avatar_preview_url": "", //2K图片
    "description": "描述"

 }
```
## 档案表 Member

```json
// company

{
    "id": 1,
    "chinese_name": "李四",
    "english_name": "Li Si",
    "avatar_thumb_url": "url", //图片缩略图 一般是256x256
    "avatar_url": "url", //原图,
    "avatar_preview_url": "", //2K图片

    //关联
    "classroom_ids": [1,2,3,4],
    "user_member_ids": [3,4],

    //外键
    "company_id": 1,
}


```
## 身份表 UserMember

```json
// user_member

```
