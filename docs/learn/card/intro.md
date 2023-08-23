---
sidebar_position: 1
---

# 概述

钉钉互动卡片是一种即时交互、多人协同、数据驱动的轻量卡片，它能够将原本复杂的应用解构成一个个轻量级的卡片在钉钉的各个场域（场域的解释请参考下文名词解释部分）上运行。用户可以在卡片上完成互动协同，提高用户的沟通效率，同时帮助业务更好地触达用户。

## 卡片类型

钉钉互动卡片有多种类型，包括标准卡片、消息卡片、吊顶卡片、通讯录卡片等，详见[官方文档](https://open.dingtalk.com/document/orgapp/overview-card)。

本文重点介绍两种消息卡片

1. 消息卡片普通版：开发简单，满足基本的交互需求
2. 消息卡片高级版：开发过程需要的信息更多，可以满足更丰富的交互需求

## 消息卡片普通版

* 搭建平台：https://card.dingtalk.com/card-builder
* 开发文档：
  * 发送消息：https://open.dingtalk.com/document/orgapp/robots-send-interactive-cards
  * 更新消息/卡片（可以通过更新实现打字机效果）：https://open.dingtalk.com/document/orgapp/update-the-robot-to-send-interactive-cards

## 消息卡片高级版

* 搭建平台：https://open.dingtalk.com/document/orgapp/quick-start-2
* 开放文档：
  * 创建卡片（支持选择HTTP和Stream模式回调）：https://open.dingtalk.com/document/orgapp/interface-for-creating-a-card-instance
  * 投放卡片：https://open.dingtalk.com/document/orgapp/delivery-card-interface
  * 创建并投放卡片（支持选择HTTP和Stream模式回调）：https://open.dingtalk.com/document/orgapp/create-and-deliver-cards
  * 更新消息/卡片：https://open.dingtalk.com/document/orgapp/interactive-card-update-interface
  * 注册卡片回调地址：https://open.dingtalk.com/document/orgapp/register-card-callback-address

:::info

“消息卡片高级版”支持将卡片投放到IM会话、协作、文档等场域，因此术语上采用了“投放”而不是”发送“。当卡片投放到IM会话时，相当于发送消息卡片到IM会话。

:::

## 常见问题

### 我的应用设置了 Stream 模式，为什么在 Stream 通道上收不到卡片回调？

[Stream 模式](/docs/learn/stream/overview)支持多种类型消息推送，包括事件订阅、卡片回调、机器人收消息。每种类型的消息推送，设置HTTP和Stream的方式不一样：

1. 事件订阅：在[开发者后台](https://open-dev.dingtalk.com)选择 HTTP 模式和 Stream 模式之一
2. 卡片回调：在创建卡片的 OpenAPI 调用中，设置 callbackType 参数为 "HTTP" 或者 "STREAM" 之一
3. 机器人收消息：在[开发者后台](https://open-dev.dingtalk.com)选择 HTTP 模式和 Stream 模式之一

因此，在开发者后台的回调模式不会作用于卡片回调。需要在创建卡片回调的 API 中设置 callbackType 参数来选择 STREAM 模式。参考文档：

* [官方 API 文档：创建卡片（支持选择 HTTP 和 Stream 模式回调）](https://open.dingtalk.com/document/orgapp/interface-for-creating-a-card-instance)
* [官方 API 文档：创建并投放卡片（支持选择 HTTP 和 Stream 模式回调）](https://open.dingtalk.com/document/orgapp/create-and-deliver-cards)

### 消息卡片普通版是否支持 Stream 模式回调？

暂不支持，请用 HTTP 模式或者改用消息卡片高级版。 如果有非常强烈的 Stream 需求，可以通过[技术支持](/docs/explore/support)提交反馈。

### 为什么消息卡片高级版的 API 文档中，没有找到设置 Stream 模式的 callbackType 参数？

钉钉 API 有过一次重大升级，更多的新功能只在新版本 API 中提供。本文档给出的 API 都是新版本，以本文档中新版本文档为准。
参考：[新旧版本区别](https://open.dingtalk.com/document/orgapp/differences-between-server-apis-and-new-server-apis)。

* [官方 API 文档：创建卡片（支持选择 HTTP 和 Stream 模式回调）](https://open.dingtalk.com/document/orgapp/interface-for-creating-a-card-instance)
* [官方 API 文档：创建并投放卡片（支持选择 HTTP 和 Stream 模式回调）](https://open.dingtalk.com/document/orgapp/create-and-deliver-cards)

## 相关链接

* [钉钉互动卡片概述](https://open.dingtalk.com/document/orgapp/overview-card)
* [Stream 模式详细介绍](/docs/learn/stream/overview)