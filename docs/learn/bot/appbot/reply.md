---
sidebar_position: 3
---

# 机器人回复/发送消息

机器人回复消息，本质上是通过机器人发送消息来实现。因此本文中，回复消息和发送消息是相同的含义。

机器人发送消息有多种方式：

1. Webhook，支持简单的文本、Markdown类型消息发送；
2. OpenAPI，支持上传图片、卡片消息等丰富的消息交互形式；

## 通过 Webhook 发送消息

如果存在可用的 Webhook，可以通过[官方文档](https://open.dingtalk.com/document/robots/custom-robot-access/#title-zob-eyu-qse)学习如何发送消息。
可用的 Webhook 来源有以下几种：

1. 通过创建[群自定义机器人](/docs/learn/bot/webhook/overview)，创建成功后的页面中可以获取到 Webhook url；
2. 通过机器人接收到消息后，在收取到的消息体 JSON 数据中，可以获得 SessionWebhook url，相关字段说明详见官方文档中的[接收消息](https://open.dingtalk.com/document/orgapp/receive-message)；

:::caution 注意事项
通过第二种方式获取的 SessionWebhook 是临时的，而不是永久的。过期时间对应消息体 JSON 中 sessionWebhookExpiredTime 字段；详见
:::

## 通过 OpenAPI 发送消息

应用机器人和群自定义机器人最大的区别是：应用机器人具备应用的所有能力，其中包括通过应用访问凭据（AccessToken）调用钉钉的 OpenAPI 发送消息。

简单消息的发送步骤如下：

1. 获取应用的访问凭据（AccessToken），参考[官方文档：获取访问凭证](https://open.dingtalk.com/document/orgapp/obtain-the-access_token-of-an-internal-app)；
2. 调用消息发送 API 实现发送消息能力，参考[官方文档：机器人概述](https://open.dingtalk.com/document/orgapp/robot-overview)中的“消息发送”部分；

如果文本和 Markdown 类型不能满足需求，可以发送具备丰富交互能力的互动卡片消息。详见[互动卡片相关文档](/docs/learn/card/intro)。

## 常见问题

### 有没有相关示例可以学习一下？

可以的。如果采用 Stream 模式[接收消息](/docs/learn/bot/appbot/receive)的话，可以参考钉钉开源的 [SDK 及其示例](/docs/develop/sdk/overview)。通过示例快速了解如何回复消息。

## 相关链接

1. [官方文档：自定义机器人接入](https://open.dingtalk.com/document/robots/custom-robot-access/)
2. [官方文档：接收消息](https://open.dingtalk.com/document/orgapp/receive-message)
3. [官方文档：获取访问凭证](https://open.dingtalk.com/document/orgapp/obtain-the-access_token-of-an-internal-app)
4. [互动卡片相关文档](/docs/learn/card/intro)