---
sidebar_position: 1
---

# 钉钉 SDK 概述

钉钉开放平台提供丰富的 SDK，但是无法做到全语言覆盖，平台鼓励社区参与贡献。该文档描述钉钉平台提供的 SDK，以及社区贡献的 SDK 聚合，方便开发者选择。

## 官方 SDK

### Stream 模式 SDK 和示例

钉钉 [Stream 模式](/docs/learn/stream/overview)支持事件订阅、机器人收消息、卡片回调等能力。

* Java（示例，而不是SDK）：https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start
* Node.js（SDK+示例）：https://github.com/open-dingtalk/dingtalk-stream-sdk-nodejs
* Python（SDK+示例）：https://github.com/open-dingtalk/dingtalk-stream-sdk-python
* Golang（SDK+示例）：https://github.com/open-dingtalk/dingtalk-stream-sdk-go

更多语言 SDK 欢迎社区参与贡献，将在此页面中予以推荐展示，目前测试验证通过的生态 SDK 如下：

* C# （SDK+示例）：[Yancy1028/Jusoft.DingtalkStream](https://github.com/Yancy1028/Jusoft.DingtalkStream)，感谢[@Yancy1028](https://github.com/Yancy1028)贡献。 

开发时候，可以参考[Stream Mode 协议文档](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)，或者以上其他语言的 SDK，过程中有问题也可以通过[技术支持](/docs/explore/support)提交反馈和问题交流。

### OpenAPI SDK

服务端 API 分为新旧版本，相关 SDK 如下：

1. 新版本 SDK [说明文档](https://open.dingtalk.com/document/orgapp/sdk-download)
2. 旧版本 SDK [说明文档](https://open.dingtalk.com/document/orgapp/download-the-server-side-sdk)

[新旧版本区别](https://open.dingtalk.com/document/orgapp/differences-between-server-apis-and-new-server-apis)

## 社区贡献 SDK

更多开源项目参考：https://github.com/weir-cloud/awesome-dingtalk

## SDK 常见问题

### 为什么 Stream SDK 中没有互动卡片高级版的方法？

通过本文档可以知道，钉钉目前开放了 Stream SDK 和 OpenAPI SDK。Stream SDK 仅提供 Stream 模式的推送事件订阅能力，为了方便开发者，在 Stream SDK 里也封装了一部分常用的 OpenAPI 调用。
但是为了避免两个 SDK 关系混乱，完整的 API 调用方法仅在 OpenAPI SDK 中提供，而不会将大量的 API 方法在两个 SDK 中都提供出来。如果需要访问互动卡片高级版、通讯录、考勤、审批等方法，请使用 OpenAPI SDK。

## 相关链接

* [Stream Mode 协议文档](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)