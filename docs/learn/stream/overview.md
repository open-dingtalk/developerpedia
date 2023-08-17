---
sidebar_position: 1
---

# 概述

钉钉与开发者的应用的服务端之间有两种方向调用

1. **开发者应用调用钉钉**，通过 REST API 方式。例如：通过部门 ID 查询成员列表，通过用户 ID 查询日程忙闲
2. **钉钉调用开发者应用**，通过 Webhook 或者 Stream 模式。例如[事件订阅](https://open.dingtalk.com/document/orgapp/stream)、[机器人收消息](https://open.dingtalk.com/document/orgapp/the-creation-and-installation-of-the-application-robot-in-the)、[卡片回调](https://open.dingtalk.com/document/orgapp/create-and-deliver-cards)等

补充说明：

1. 在极少部分“*开发者应用调用钉钉*”的场景，也支持 Webhook 方式，例如 [群自定义机器人](/docs/learn/bot/webhook/overview) 支持通过 Webhook 方式发送消息到钉钉聊天群中
2. Stream 模式当前仅支持”*钉钉调用开发者应用*“，开发者有一定的需求希望通过 Stream 模式实现”*开发者应用调用钉钉*“，未来根据需要评估是否支持该特性

## Stream Mode 当前已经支持的场景

1. 事件订阅，[点此链接](https://open.dingtalk.com/document/orgapp/stream)
2. 机器人收消息，[点此链接](https://open.dingtalk.com/document/orgapp/the-creation-and-installation-of-the-application-robot-in-the)
3. 互动卡片回调，[点此链接](https://open.dingtalk.com/document/orgapp/create-and-deliver-cards)

其他场景后续会持续支持上，包括[链接增强](https://open.dingtalk.com/document/orgapp/guide-for-enhancing-the-access-link-of-enterprise-internal-applications)的回调等，可以通过[技术支持](/docs/explore/support)的方式提交反馈。

## 相关链接

* [Stream Mode SDK](/docs/develop/sdk/overview)
* [Stream Mode 协议文档](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)