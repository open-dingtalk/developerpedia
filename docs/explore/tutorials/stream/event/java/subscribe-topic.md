---
sidebar_position: 4
---

# 4. 订阅事件类型

本文将介绍如何找到想要订阅的事件类型（Topic），并开启相应类型的事件订阅。

## 步骤说明

1. **进入应用**：进入钉钉[开发者后台](https://open-dev.dingtalk.com)，找到[步骤2：创建应用](create-app)中创建的应用，然后点击进入应用详情页
2. **通道验证**：依次点击【事件与回调】-【已完成接入，验证连接通道】-【保存】，即可完成通道验证<br />
   ![通道验证](/img/explore/stream/event/stream-validate.png)<br />
   :::caution 注意事项
   在操作通道验证之前，务必完成[步骤3：开发事件订阅服务](build-listener)，并成功启动事件订阅的服务，否则会导致“验证连接通道”异常。
   :::
3. **选择类型**：继续保持在当前页面，下拉到页面底部，可以找到所有的事件列表。根据需要勾选以开启对应的事件类型（Topic）变更通知。<br />
   在当前教程中，我们选择了“群会话更换群名称”，请勾选以顺利进行下一步功能体验。<br />
   你可以在[官方文档：配置事件订阅的推送](https://open.dingtalk.com/document/orgapp/stream)文档中，点击左侧导航栏找到所有的事件类型。例如通过[群会话更换群名称](https://open.dingtalk.com/document/orgapp/group-session-change-group-name-stream)文档，可以知道“群会话更换群名称”事件对应的英文名称（Topic）是“chat_update_title”。<br />
   示意图如下：<br />
   ![选择 Topic](/img/explore/stream/event/select-topic.png)

至此，已完成代码开发以及事件订阅的配置，接下来可以体验一下订阅变更通知的实际效果。

## 相关链接

* [官方文档：配置事件订阅的推送](https://open.dingtalk.com/document/orgapp/stream)