# Socket 聊天通讯


## Socket 使用步骤

```
1. 链接Socket
2. 订阅频道
3. 接受发送消息
4. 取消订阅
5. 关闭Socket /当然关闭Socket 也会自动取消所有频道
```

### 1. Socket 在聊天的使用

首先用户先链接Socket


Type Script 为例

```ts
...
import ActionCableVue from "actioncable-vue";


const actionCableVueOptions = {
  debug: true,
  debugLevel: "error",
  connectionUrl: "ws://localhost:5000/api/cable",
  connectImmediately: true,
};

createApp(App)
  .use(ActionCableVue, actionCableVueOptions)
  .mount("#app");
...
```

```ts
//实例中使用
new Vue({
  data() {
    return {
      message: "Hello world",
    };
  },
  channels: {
    ChatChannel: {
      connected() {},
      rejected() {},
      received(data) {
        //这里打印服务器传来的数据
      },
      disconnected() {},
    },
  },
  methods: {
    sendMessage: function () {
    //   this.$cable.perform({
    //     channel: "ChatChannel",
    //     action: "send_message",
    //     data: {
    //       content: this.message,
    //     },
    //   });
    },
  },
  mounted() {
    //订阅平道
    this.$cable.subscribe({
      channel: "ChatChannel",
      room: "public",
    });
  },
});
```



## Action Cable 原理


###  1 简介

Action Cable 将 WebSocket 与 Rails 应用的其余部分无缝集成。有了 Action Cable，我们就可以用 Ruby 语言，以 Rails 风格实现实时功能，并且保持高性能和可扩展性。Action Cable 为此提供了全栈支持，包括客户端 JavaScript 框架和服务器端 Ruby 框架。同时，我们也能够通过 Action Cable 访问使用 Active Record 或其他 ORM 编写的所有模型。


### 2 Pub/Sub 是什么

Pub/Sub，也就是发布/订阅，是指在消息队列中，信息发送者（发布者）把数据发送给某一类接收者（订阅者），而不必单独指定接收者。Action Cable 通过发布/订阅的方式在服务器和多个客户端之间通信。


### 3. Action Cable的工作原理

<img src='https://l.ruby-china.com/photo/2016/a33166d8ef88988ea64b6b489ba90ee5.jpeg!large' />


