---
sidebar_position: 99
---

# 常见问题

## 是否支持打字机模式？

类似问题：是否支持编辑已发送的消息？

当前不支持，敬请期待。

在此之前，你也可以通过[互动卡片（普通版）](https://card.dingtalk.com/card-builder)的更新接口，来实现打字机模式。

备注：[互动卡片（普通版）](https://card.dingtalk.com/card-builder) 有开发文档可以了解详情。

常用的接口为：

* 发送消息卡片：https://card.dingtalk.com/card-builder/docs/sendCard 和 https://open.dingtalk.com/document/orgapp/robots-send-interactive-cards
* 更新消息卡片：https://open.dingtalk.com/document/orgapp/update-the-robot-to-send-interactive-cards

你也可以在这里找到一个 Python 的使用示例：https://github.com/chzealot/dingtalk-stable-diffusion

## 是否支持 .NET、PHP？

当前官方 SDK 支持 Java、Python、Node.js、Go，其他针对其他语言我们提供了协议文档，便于开发者自行实现。

详见：[钉钉 SDK 概述](/docs/develop/sdk/overview)

## Markdown 中插入的图片无法显示问题

如果 Markdown 中图片链接托管网站不符合当地法律法规允许，则可能无法访问，请更换图片链接。

推荐采用钉钉[上传媒体文件](https://open.dingtalk.com/document/orgapp/upload-media-files)接口，上传图片，获得图片的 MediaId。钉钉 Markdown 中，支持传入图片 MediaId 当作 URL 使用。

例如
```markdown

# 在钉钉发送 Markdown 消息的接口中，这两种方式都是允许的

![这是一张图片](media-id-from-dingtalk-api)
![这是一张图片](https://example.com/path-to-image.jpg)
```

## HTTP 机器人的接口什么时候会下线不让用？

不会下线。钉钉开放平台将会长期支持 Webhook 和 Stream 两种模式，开发者可以自由选择。

## Stream 模式下，是连的钉钉的哪个域名？

补充问题：部署的服务器外网访问受限，需要按域名 开通外网访问权限

目前使用了两个域名

```text
api.dingtalk.com
wss-open-connection.dingtalk.com
```

## Stream 模式可以主动发消息吗

可以的，用钉钉的机器人发消息接口，参考[文档](https://open.dingtalk.com/document/orgapp/robot-overview)

## 机器人能接收图片吗？

类似问题：机器人能接收语音、视频等富文本内容吗

可以的。

图片在消息中有图片消息和富文本消息两种形态，通过[这篇文档](https://open.dingtalk.com/document/orgapp/receive-message)可以了解机器人能接收的所有消息类型，以及对应的数据结构描述。
包含图片内容的富文本消息示例：
```json
{
  "richText": [
    {
      "text": "@SDK示例"
    },
    {
      "pictureDownloadCode": "1lOlaJWGsEAMhw******EAO",
      "downloadCode": "mIofN681YE3f*****3madCkipB",
      "type": "picture"
    }
  ]
}
```