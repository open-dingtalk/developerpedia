---
sidebar_position: 3
---

# 3. 开发机器人服务

在本章节中，将会介绍如何用 Node.js 开发一个聊天机器人服务，实现基本的介绍和发送消息能力。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-nodejs)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Node.js 应用

```shell
mkdir bot_echo_text
cd bot_echo_text
npm init -y
```

## 安装依赖

```shell
npm install dingtalk-stream commander
npm install --save-dev typescript ts-node
```

提醒：对于精通 TypeScript 和 JavaScript 的开发者来说，以上依赖项中，仅 dingtalk-stream 是必须的。其他依赖项可以根据实际项目需要决定是否引入。

## 开发机器人服务

一、修改 bot_echo_text 目录下的 `package.json` 文件：

1. 将 index.js 修改为 index.ts
2. 在 scripts 中添加命令：`"start": "npx ts-node --esm ./index.ts"`

相关代码如下：
```text {2,4} title="package.json"
...
  "main": "index.ts",
  "scripts": {
    "start": "npx ts-node --esm ./index.ts",
...
```

二、在 bot_echo_text 目录下，创建 `index.ts` 文件，文件内容如下：

```typescript title="index.ts" {16-49} showLineNumbers
import {DWClient, DWClientDownStream, EventAck, TOPIC_ROBOT} from 'dingtalk-stream';
const { program } = require('commander');
const https = require('node:https');

program
    .requiredOption('--clientId <Client ID>', 'your client id, AppKey or SuiteKey')
    .requiredOption('--clientSecret <Client Secret>', 'your client secret, AppSecret or SuiteSecret')
    .parse();
const options = program.opts();

const client = new DWClient({
    clientId: options.clientId,
    clientSecret: options.clientSecret,
});

client.registerCallbackListener(TOPIC_ROBOT, async (res) => {
  // const {messageId} = res.headers;
  const { text, senderStaffId, sessionWebhook } = JSON.parse(
    res.data
  ) as RobotMessage;
  const body = {
    at: {
      atUserIds: [senderStaffId],
      isAtAll: false,
    },
    text: {
      content:
        "nodejs-getting-started say : 收到，" + text?.content ||
        "钉钉,让进步发生",
    },
    msgtype: "text",
  };

  const accessToken = await client.getAccessToken();
  const result = await axios({
    url: sessionWebhook,
    method: "POST",
    responseType: "json",
    data: body,
    headers: {
      "x-acs-dingtalk-access-token": accessToken,
    },
  });

  // stream模式下，服务端推送消息到client后，会监听client响应，如果消息长时间未响应会在一定时间内(60s)重试推消息，可以通过此方法返回消息响应，避免多次接收服务端消息。
  // 机器人topic，可以通过socketCallBackResponse方法返回消息响应
  if(result?.data){
    client.socketCallBackResponse(res.headers.messageId, result.data);
  }
}).connect();
```

以上不超过 60 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，简单 echo 机器人消息回去，实现消息发送(回复)能力

## 运行机器人服务

通过以下命令可以运行你的事件订阅服务，当看到这样的日志输出时候表示运行成功 `Socket open`

```shell
npm run start -- --clientId="your-client-id" --clientSecret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-nodejs)