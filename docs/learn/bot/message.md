---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 接收的消息类型

机器人接收消息包含多种类型，每种类型都是 JSON 格式，该文档描述各种类型的消息示例，帮助开发者了解各种消息类型的数据格式。

## 各类型消息体描述

以下消息体中字段描述可以参考[官方文档：机器人接收消息](https://open.dingtalk.com/document/orgapp/receive-message)。

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

:::tip 温馨提示
语音消息体中 `content.recognition` 字段对应了语音转文字的识别结果，为文字处理提供了极大的便利。支持中文和英文，可以根据实际场景需要使用该信息。
:::

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

## 下载消息中的文件

对于非文本类型的消息，可以通过以上消息体 content 字段拿到文件的标识，通过 OpenAPI 可以下载文件。具体方法如下所示。

### 通过 DownloadCode 下载

包括 downloadCode 和 pictureDownloadCode。

可以通过[下载机器人接收消息的文件内容](https://open.dingtalk.com/document/orgapp/download-the-file-content-of-the-robot-receiving-message)获得文件下载链接。

### 通过 fileId 下载

可以通过[获取文件下载信息](https://open.dingtalk.com/document/orgapp/obtains-the-download-information-about-a-file)接口获取文件下载链接。

注意：
* 该接口中的 dentryId 对应消息体中的 fileId

## 相关链接

* [官方文档：机器人接收消息](https://open.dingtalk.com/document/orgapp/receive-message)
* [官方文档：下载机器人接收消息的文件内容](https://open.dingtalk.com/document/orgapp/download-the-file-content-of-the-robot-receiving-message)
* [官方文档：获取企业存储中文件的下载信息](https://open.dingtalk.com/document/orgapp/obtains-the-download-information-about-a-file)