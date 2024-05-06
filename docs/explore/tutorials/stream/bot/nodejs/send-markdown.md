---
sidebar_position: 6
---

# 6. 进阶：发送 Markdown

在本章节中，将会介绍如何回复/发送 Markdown 消息。相比前面介绍的发送文本消息来说，Markdown 消息支持更丰富的图文混排能力，以及富文本交互，可以用于各种场景中展示业务信息。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-nodejs)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Node.js 应用

```shell
mkdir bot_echo_markdown
cd bot_echo_markdown
go mod init bot_echo_markdown
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

```typescript title="index.ts" {16-54} showLineNumbers
import {DWClient, DWClientDownStreaimport {DWClient, DWClientDownStream, EventAck, TOPIC_ROBOT} from 'dingtalk-stream';
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

const onBotMessage = (event: DWClientDownStream) => {
    let message = JSON.parse(event.data);
    let content = (message?.text?.content || '').trim();
    let webhook = message?.sessionWebhook || '';
    let text = 'echo received message:\n' +
        content.split('\n').map((item: string) => {
            return '>1. ' + item.trim();
        }).join('\n');

    // 回复消息
    const data = JSON.stringify({
        'msgtype': 'markdown',
        'markdown': {
            'title': 'dingtalk-tutorial-java',
            'text': text,
        },
        'at': {
            'atUserIds': [message?.senderStaffId || '']
        }
    })
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const req = https.request(webhook, options, (res: any) => {
        console.log(`状态码: ${res.statusCode}`)
        res.on('data', (d: any) => {
            console.log('data:', d)
        })
    });
    req.on('error', (error: any) => {
        console.error(error);
    })
    req.write(data);
    req.end();
    return {status: EventAck.SUCCESS, message: 'OK'}; // message 属性可以是任意字符串；
}

client
    .registerCallbackListener(TOPIC_ROBOT, onBotMessage)
    .connect();
```

以上不超过 60 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，生产 Markdown 消息回去，实现消息发送(回复)能力

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