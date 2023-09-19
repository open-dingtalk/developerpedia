---
sidebar_position: 3
---

# 3. 开发事件订阅服务

在本章节中，将会介绍如何用 Node.js 开发一个事件订阅服务，接收钉钉平台推送的变更通知。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-nodejs)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Node.js 应用

```shell
mkdir event_chat_update
cd event_chat_update
npm init -y
```

## 安装依赖

```shell
npm install dingtalk-stream-sdk-nodejs commander
npm install --save-dev typescript ts-node
npm install
```

提醒：对于精通 TypeScript 和 JavaScript 的开发者来说，以上依赖项中，仅 dingtalk-stream-sdk-nodejs 是必须的。其他依赖项可以根据实际项目需要决定是否引入。

## 开发事件订阅服务

一、修改 event_chat_update 目录下的 `package.json` 文件：

1. 将 index.js 修改为 index.ts
2. 在 scripts 中添加命令：`"start": "npx ts-node --esm ./index.ts"`

相关代码如下：
```text {2,4}
...
  "main": "index.ts",
  "scripts": {
    "start": "npx ts-node --esm ./index.ts",
...
```

二、在 event_chat_update 目录下，创建 `index.ts` 文件，文件内容如下：

```typescript title="index.ts" {15-31} showLineNumbers
import {DWClient, DWClientDownStream, EventAck} from 'dingtalk-stream-sdk-nodejs';
const { program } = require('commander');

program
    .requiredOption('--clientId <Client ID>', 'your client id, AppKey or SuiteKey')
    .requiredOption('--clientSecret <Client Secret>', 'your client secret, AppSecret or SuiteSecret')
    .parse();
const options = program.opts();

const client = new DWClient({
    clientId: options.clientId,
    clientSecret: options.clientSecret,
});

const onEventReceived = (event: DWClientDownStream) => {
    if (event.headers?.eventType !== 'chat_update_title') {
        // ignore events not equals `chat_update_title`; 忽略`chat_update_title`之外的其他事件；
        // 该示例仅演示 chat_update_title 类型的事件订阅；
        return {status: EventAck.SUCCESS};
    }
    const now = new Date();
    console.log(`received event, 
  delay=${now.getTime() - parseInt(event.headers?.eventBornTime || '0')}ms, 
  eventType=${event.headers?.eventType}, 
  eventId=${event.headers?.eventId}, 
  eventBornTime=${event.headers?.eventBornTime},  
  eventCorpId=${event.headers?.eventCorpId},
  eventUnifiedAppId=${event.headers?.eventUnifiedAppId}, 
  data=${event.data}`)
    return {status: EventAck.SUCCESS, message: 'OK'}; // message 属性可以是任意字符串；
}

client
    .registerAllEventListener(onEventReceived)
    .connect();
```

以上不超过 40 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client (DWClient)
3. 在 Stream Client 中注册事件推送的监听服务，实现变更通知的接收能力
4. 在事件回调方法中，通过日志记录变更通知的消息内容，你可以可以改造这段代码，将变更通知写入自己的数据库中

## 运行事件订阅服务

通过以下命令可以运行你的事件订阅服务，当看到这样的日志输出时候表示运行成功 `Socket open`
”

```shell
npm run start -- --clientId="your-client-id" --clientSecret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-app)获取。
:::

至此，你已成功完成事件订阅服务开发和部署。接下来可以在[钉钉开发者后台](https://open-dev.dingtalk.com)勾选需要订阅的事件类型，然后体验整个接收流程。

:::info 说明
如果你开发过钉钉聊天机器人的消息接收，就可以知道在聊天机器人代码中，需要指定订阅的 Topic，而事件订阅的代码中没有指定 Topic。原因是钉钉事件订阅平台的事件类型（Topic）是通过网页形式（在开发者后台）勾选，而不是通过代码方式指定 Topic。
接下来的文档会提供指引，介绍如何在开发者后台勾选需要订阅的事件类型（Topic）。
:::

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-nodejs)