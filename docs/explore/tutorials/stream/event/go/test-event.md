---
sidebar_position: 5
---

# 5. 体验事件通知

本文将介绍如何体验事件变更通知的接收效果。

## 触发一个变更通知

在[步骤3：开发事件订阅服务](build-listener)中，我们在代码里记录了“群会话更换群名称”（Topic：chat_update_title）事件的消息数据。可以通过修改一个群名称，查看事件订阅的效果。

步骤如下：
1. 找到一个内部群，而且确认这个内部群归属的组织与[步骤2：创建应用](create-app)所采用的是同一个组织；
2. 修改群名称，任意名称即可

## 查看日志

查看[步骤3：开发事件订阅服务](build-listener)中 `event_handler.go` 服务运行的日志，可以看到这样一条日志表示成功接收到服务端推送的群名称变更事件。

```text wordWrap=true
2023-09-14 10:36:09.037655 +0800 CST m=+13.649590335 [INFO] 
received event, delay=86ms, eventType=chat_update_title, 
eventId=3b65568637c5457cad561604d51f9e34, 
eventBornTime=1694658968951, 
eventCorpId=ding9f50b15bccd16741, 
eventUnifiedAppId=fce39de1-77be-4a52-8a8a-950a55916bad, 
data={
  "timeStamp": 1694658968949,
  "chatId": "chat7924d****5ca45d",
  "operatorUnionId": "RC****iE",
  "title": "SDK 测试，请忽略",
  "openConversationId": "cid9****==",
  "operator": "042****97"
}
```

备注：为了方便展示，手动对日志做了换行和格式优化。