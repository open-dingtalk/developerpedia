---
sidebar_position: 5
---

# 5. 体验事件通知

本文将介绍如何体验事件变更通知的接收效果。

## 触发一个变更通知

在[步骤 3：开发事件订阅服务](build-listener)中，我们在代码里记录了“群会话更换群名称”（Topic：chat_update_title）事件的消息数据。可以通过修改一个群名称，查看事件订阅的效果。

步骤如下：
1. 找到一个内部群，而且确认这个内部群归属的组织与[步骤 2：创建应用](create-app)所采用的是同一个组织；
2. 修改群名称，任意名称即可

## 查看日志

查看[步骤 3：开发事件订阅服务](build-listener)中 `event_handler.py` 服务运行的日志，可以看到这样一条日志表示成功接收到服务端推送的群名称变更事件。

```text wordWrap=true
received event, 
delay=173ms, 
eventType=chat_update_title, 
eventId=6ac9****8cc9, 
eventBornTime=1695724812670, 
eventCorpId=ding****6741, 
eventUnifiedAppId=fce3****6bad, 
data={'timeStamp': 1695724812667, 'chatId': 'chat****a45d', 'operatorUnionId': 'RCR***kiE', 'title': 'SDK 测试，请忽略', 'openConversationId': 'cid9****HQ==', 'operator': '042***297'}
```

备注：为了方便展示，手动对日志做了换行和格式优化。