---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 接收的消息类型

机器人接收消息包含多种类型，每种类型都是 JSON 格式，该文档描述各种类型的消息示例，帮助开发者了解各种消息类型的数据格式。

<Tabs>
<TabItem value="text" label="文本" default>

```json
{
  "conversationId": "cide****4g=",
  "chatbotCorpId": "ding****6741",
  "chatbotUserId": "$:LWC****ihY/",
  "msgId": "msgY****Pw==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042***297",
  "sessionWebhookExpiredTime": 1695289035996,
  "createAt": 1695283635765,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b48****4d4b",
  "robotCode": "ding****c6gk",
  "msgtype": "text",
  "text": {
    "content": "hello DingTalk!"
  }
}
```

</TabItem>
<TabItem value="picture" label="图片" default>

```json
{
  "conversationId": "cide****P4g=",
  "chatbotCorpId": "ding****6741",
  "chatbotUserId": "$:LWC****hY/",
  "msgId": "msgg*****fg==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042***297",
  "sessionWebhookExpiredTime": 1695289579622,
  "createAt": 1695284179371,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",
  "robotCode": "ding****c6gk",
  "msgtype": "picture",
  "content": {
    "pictureDownloadCode": "pWjA****ks=",
    "downloadCode": "mIof****JE0E"
  }
}
```

</TabItem>

<TabItem value="video" label="视频" default>

```json
{
  "conversationId": "cide****4g=",
  "chatbotCorpId": "ding****6741",
  "chatbotUserId": "$:LWC****hY/",
  "msgId": "msgu****nw==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042***297",
  "sessionWebhookExpiredTime": 1695290236983,
  "createAt": 1695284836804,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",
  "robotCode": "ding****c6gk",
  "msgtype": "video",
  "content": {
    "duration": "5",
    "videoType": "mp4",
    "downloadCode": "mIof****SaqP"
  }
}
```

</TabItem>
<TabItem value="audio" label="语音" default>

```json
{
  "conversationId": "cide****P4g=",
  "chatbotCorpId": "ding****6741",
  "chatbotUserId": "$:LWC****ihY/",
  "msgId": "msg8****SA==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042***297",
  "sessionWebhookExpiredTime": 1695290404201,
  "createAt": 1695284999360,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",
  "robotCode": "ding****c6gk",
  "msgtype": "audio",
  "content": {
    "downloadCode": "mIof****7g==",
    "recognition": "钉钉PaaS开放中心，致力为企业……"
  }
}
```

</TabItem>
<TabItem value="file" label="文件" default>

```json
{
  "conversationId": "cide****P4g=",
  "chatbotCorpId": "ding****6741",
  "chatbotUserId": "$:LWC****ihY/",
  "msgId": "msg2****kg==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042***297",
  "sessionWebhookExpiredTime": 1695290663444,
  "createAt": 1695285263144,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",
  "robotCode": "ding****c6gk",
  "msgtype": "file",
  "content": {
    "spaceId": "223***573",
    "fileName": "foobar.zip",
    "downloadCode": "LJYY****bw==",
    "fileId": "117***848"
  }
}
```

</TabItem>
<TabItem value="richText" label="富文本" default>

```json
{
  "conversationId": "cide****P4g=",
  "chatbotCorpId": "ding****6741",
  "chatbotUserId": "$:LWC****ihY/",
  "msgId": "msg4****cg==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042****297",
  "sessionWebhookExpiredTime": 1695291140392,
  "createAt": 1695285740173,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",
  "robotCode": "ding****c6gk",
  "msgtype": "richText",
  "content": {
    "richText": [
      {
        "text": "这个问题示例图如下："
      },
      {
        "pictureDownloadCode": "pWjA****SjIg",
        "downloadCode": "mIof****7A==",
        "type": "picture"
      },
      {
        "text": "通过以上示意图可以明白完整的交互流程"
      }
    ]
  }
}
```

</TabItem>
<TabItem value="unknown" label="暂不支持的类型" default>

```json
{
  "conversationId": "cide****P4g=",
  "chatbotCorpId": "ding*****6741",
  "chatbotUserId": "$:LWC****ihY/",
  "msgId": "msgN****Uw==",
  "senderNick": "张三",
  "isAdmin": true,
  "senderStaffId": "042***297",
  "sessionWebhookExpiredTime": 1695290850075,
  "createAt": 1695285449885,
  "senderCorpId": "ding****6741",
  "conversationType": "1",
  "senderId": "$:LWC****PA==",
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b48****4d4b",
  "ai_robot_sessionid": "",
  "robotCode": "ding****c6gk",
  "msgtype": "unknownMsgType",
  "content": {
    "unknownMsgType": "用户发送了一条消息，机器人暂不支持接收。"
  }
}
```

</TabItem>

</Tabs>

## 相关链接

* [官方文档：机器人接收消息](https://open.dingtalk.com/document/orgapp/receive-message)