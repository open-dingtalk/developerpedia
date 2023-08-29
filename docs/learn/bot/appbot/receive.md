---
sidebar_position: 2
---

# 机器人接收消息

机器人可以通过 Webhook 和 Stream 两种方式接收消息。

:::caution 注意事项
人与机器人的单聊中，直接发送消息的话，机器人就可以接收到；但是在群聊中，只有 AT 机器人的消息可以被机器人接收到。
:::

## Stream（推荐）

如果在开发者后台中，设置机器人接收方式为 Stream 的话，对应的就是 Stream 模式。可以参考[Stream 模式介绍](/docs/learn/stream/overview)了解如何通过 Stream 模式接收消息。

## Webhook

如果在开发者后台中，设置机器人接收方式为 HTTP 的话，对应的就是 Webhook 模式。可以参考[官方文档：接收消息](https://open.dingtalk.com/document/orgapp/receive-message)了解如何通过 Webhook 模式接收消息。


## 常见问题

### 如何下载消息体中的文件？

消息体中的文件对应了 downloadCode，可以通过[官方文档：下载机器人接收消息的文件内容](https://open.dingtalk.com/document/orgapp/download-the-file-content-of-the-robot-receiving-message)学习如何下载消息中的文件；

## 相关链接

1. [官方文档：接收消息](https://open.dingtalk.com/document/orgapp/receive-message)