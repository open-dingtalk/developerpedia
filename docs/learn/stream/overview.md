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

## 优点

钉钉机器人收发消息支持 Webhook 和 Stream 两种模式，强烈推荐采用 Stream 模式，主要优点有：

* **零公网IP**：不需要依赖公网IP或域名，也不需要暴露公网IP，减少了公网暴露服务的安全风险并降低了开发门槛。
* **零加解密/签名/TLS证书管理**：使用应用身份对连接进行鉴权，通过反向连接的方式与钉钉开放平台建立TLS加密连接，提供了快速、安全的通信体验。
* **零防火墙白名单**：Stream 模式下开发者无需向公网开放提供任何服务端口，无需部署防火墙和配置白名单。
* **零网关部署**：通过反向连接的方式建立通道，开发者只需保证运行环境具备公网访问能力即可，无需部署网关。
* **零内网穿透**：开发者无需在本地搭建内网穿透工具，通过 Stream 模式在本地开发环境中即可接收卡片回调。

## 功能

当前 Stream 模式已经支持这些功能

1. 机器人收消息：创建聊天机器人，通过 Stream 模式来接收发送给机器人的消息，[点此链接](https://open.dingtalk.com/document/orgapp/the-creation-and-installation-of-the-application-robot-in-the)
2. 事件订阅：各类事件变更通知，例如员工入职离职、审批任务状态变化等，[点此链接](https://open.dingtalk.com/document/orgapp/stream)
3. 互动卡片回调：创建并发送互动卡片到聊天会话中，当用户在互动卡片点击或其他交互时候，可以通过 Stream 模式接收到这个互动操作内容，[点此链接](https://open.dingtalk.com/document/orgapp/create-and-deliver-cards)

其他场景后续会持续支持上，包括[链接增强](https://open.dingtalk.com/document/orgapp/guide-for-enhancing-the-access-link-of-enterprise-internal-applications)的回调等，可以通过[技术支持](/docs/explore/support)的方式提交反馈。

## 相关链接

* [Stream Mode SDK](/docs/develop/sdk/overview)
* [Stream Mode 协议文档](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)