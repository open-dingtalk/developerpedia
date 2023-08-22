---
sidebar_position: 1
---

# 协议描述

钉钉 Stream 协议在官方文档库中有[详细说明](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)。
本文档予以补充和更新，对于本文中关键内容将会在完成内部审核之后，持续更新到官方文档中。

## 与 SDK 的关系

推荐采用[官方 SDK](/docs/develop/sdk/overview)接入钉钉 Stream 模式。但是对于缺乏 SDK 支持的场景，本文提供协议描述，帮助开发者使用非 SDK 方式接入 Stream 模式，或者直接参与 SDK 开发。

同时鼓励以下两种形式的社区贡献：

1. 提供非官方支持的语言，例如 C#、PHP等
2. 优化官方 SDK 不完善的地方，提交 PR 或者建立新的开源项目

通过以下两种方式提供对于社区贡献的支持：

1. 在官方文档库中予以推荐
2. 建立[钉钉沟通群](/docs/explore/support?via=moon-group)，帮助社区解决 SDK 开发中遇到的技术问题

## 协议接入步骤

### 介绍

### 步骤一：

### 步骤二：

## 消息类型

### 介绍

Stream 模式的通道上，支持多种类型的消息推送，主要类型如下表所示：

| 一级类型 | 二级类型             | Topic                         | 说明                                                                                                                                                                                                                                                                          |
|------|------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 回调推送 | 机器人消息回调          | /v1.0/im/bot/messages/get     | 通过单聊或群聊给机器人发送消息之后，通过该 Topic 可以接收机器人消息（在群里需要 AT 机器人的消息才能被接收，单聊机器人不用 AT）。                                                                                                                                                                                                     |
| 回调推送 | 卡片互动回调           | /v1.0/card/instances/callback | 用户在钉钉的互动卡片中，点击或者其他互动之后，可以通过该 Topic 接收到用户互动操作的回调。                                                                                                                                                                                                                            |
| 事件推送 |                  | *                             | 事件订阅推送包括钉钉平台各种类型的变更通知，例如员工入职、审批表单状态变化等。<br />由于事件订阅的类型目前在[开发者后台](https://open-dev.dingtalk.com)中，可以通过UI界面勾选主题来订阅，因此这里支持通过星号(\*)订阅所有勾选的事件。<br />当前不支持通过代码方式指定事件的类型来订阅，请在[开发者后台勾选需要订阅的事件](https://open.dingtalk.com/document/orgapp/stream#5db30bb0f5iia)。<br />注意：仅支持星号(\*)。 |
| 系统推送 |                  | ping<br />disconnect          | 主要提供 Stream 长连接相关的管理能力，开发者需要正确的处理对应的推送信息保证连接的稳定可靠。SDK 开发者需要关注该事件，使用 SDK 的开发者不用关注。                                                                                                                                                                                           |

### 回调推送

#### 回调推送一：机器人消息

#### 回调推送二：卡片回调

### 事件推送

### 系统推送

## 相关链接

* [Stream Mode SDK](/docs/develop/sdk/overview)
* [官方文档：Stream Mode 协议文档](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)
* [官方文档：服务端 Stream 模式介绍](https://open.dingtalk.com/document/resourcedownload/Introduction-to-stream-mode)

