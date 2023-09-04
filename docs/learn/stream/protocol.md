---
sidebar_position: 1
---

# 协议描述

钉钉 Stream 协议在官方文档库中有[详细说明](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)。
本文档予以补充和更新，对于本文中关键内容将会在完成内部审核之后，持续更新到官方文档中。

## 与 SDK 的关系

推荐采用[官方 SDK](/docs/develop/sdk/overview)接入钉钉 Stream 模式。但是对于缺乏 SDK 支持的场景，本文提供协议描述，帮助开发者使用非 SDK 方式接入 Stream 模式，或者直接参与 SDK 开发。

同时鼓励以下两种形式的社区贡献：

1. 提供非官方支持的语言，例如 .NET、PHP等
2. 优化官方 SDK 不完善的地方，提交 PR 或者建立新的开源项目

通过以下两种方式提供对于社区贡献的支持：

1. 在官方文档库中予以推荐
2. 建立[钉钉沟通群](/docs/explore/support?via=moon-group)，帮助社区解决 SDK 开发中遇到的技术问题

## 协议接入步骤

### 介绍

钉钉 Stream 协议接入主要包括两个步骤：

1. 注册连接凭证：通过 HTTP POST 方法，获取 WebSocket 通道的 endpoint（协议域名和Path信息） 和 ticket（URL 中的 Ticket 参数）；
2. 建立 WebSocket 连接：通过步骤一中获取的 endpoint 和 ticket 信息，建立 WebSocket 通道，开始订阅；

### 步骤一：注册连接凭证

调用以下接口注册 Stream 连接凭证：

请求方法(HTTP)示例：
```text
POST /v1.0/gateway/connections/open HTTP/1.1
Host: api.dingtalk.com
Content-Type:application/json
Accept: application/json

{
  "clientId" : "${ClientID}", 
  "clientSecret" : "${ClientSecret}",
  "subscriptions" : [
    {
      "type" : "EVENT",
      "topic" : "*"
    },
    {
      "type" : "CALLBACK",
      "topic" : "/v1.0/im/bot/messages/get"
    }
  ],
  ua : dingtalk-sdk-java/1.0.2
  localIp : "10.34.22.11"
}
```

Body参数

| 名称            | 类型     | 是否必填 | 描述                                                                       |
|---------------|--------|---|--------------------------------------------------------------------------|
| clientId      | String | 是 | 钉钉应用的 OAuth ClientID<br />三方应用: 旧称 SuiteKey<br />企业自建：旧称 Appkey          |
| clientSecret  | String | 是 | 钉钉应用的 OAuth ClientSecret<br />三方应用：旧称SuiteSecret<br />企业自建：旧称AppSecret   |
| subscriptions | Array  | 是 | 订阅信息，平台将根据此信息判断是否通过stream方式推送给当前客户端                                      |
| - type        | String | 是 | 订阅事件类型                                                                   |EVENT : 事件类型<br />CALLBACK : 回调类型<br />
| - topic       | String | 是 | 订阅的具体业务 Topic，Topic列表及详细解释可以参考本文中下一章节“[消息类型](#消息类型)”中介绍部分                |
| ua            | String | 否 | 标记客户端类型，格式为name-sdk-lang/version，例如java版本的sdk可命名为dingtalk-sdk-java/1.0.0 |
| localIp       | String | 否 | 运行SDK服务的当前本地IP，方便定位排查连接问题。多个IP采用英文逗号（,）分隔                                |

返回参数，用于建立 WebSocket 所需要的域名、Path、凭证信息，具体用法详见步骤二中的描述：

| 名称 | 类型      | 描述信息                                                                                    |
|---|---------|-----------------------------------------------------------------------------------------|
| endpoint | String  | 钉钉服务端的地址信息，用于建立WebSocket连接的域名和Path                                                      |
| ticket | String  | 服务端颁发的身份信息，客户端需凭此信息和钉钉服务端建连连接。<br />重要：<br />ticket的有效期为90秒且只能用来建立一条连接，请勿存储ticket或重复使用。 |

响应示例：
```text
200 OK
Content-Type: application/json;charset=utf-8

{
  "endpoint": "wss://wss-open-connection.dingtalk.com:443/connect",
  "ticket": "7724109a-ea43-4aa2-b803-87d82c5aaee6"
}
```

### 步骤二：建立 WebSocket 连接

注册长连接信息成功后，客户端将获取长连的身份标识ticket和钉钉开放平台的地址信息，通过此信息客户端和钉钉服务端建立一条WebSocket连接，握手请求的路径和参数信息如下所示

```text
GET /connect?ticket=${ticket} HTTP/1.1
Host: wss-open-connection.dingtalk.com
Upgrade: websocket
```

:::caution 注意事项
以上示例中 Host、Path 信息仅用于示例展示，请用步骤一中返回的 endpoint 信息作为 Host 和 Path 构建 WebSocket 请求。
:::

钉钉服务端收到 WebSocket 握手信息后会通过 ticket 校验客户端身份信息，校验成功后会返回正确的握手信息。

:::success
至此，已经完成了推送订阅通道建立，可以实时接收到订阅的消息列表。下一章节将介绍各种类型的消息，以及如何响应（用于通知钉钉服务端已经成功接收，请勿重复推送）。
:::

## 消息类型

### 介绍

Stream 模式的通道上，支持多种类型的消息推送，主要类型如下表所示：

| 一级类型 | 二级类型             | Topic                         | 说明                                                                                                                                                                                                                                                                          |
|------|------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 回调推送 | 机器人消息回调          | /v1.0/im/bot/messages/get     | 通过单聊或群聊给机器人发送消息之后，通过该 Topic 可以接收机器人消息（在群里需要 AT 机器人的消息才能被接收，单聊机器人不用 AT）。                                                                                                                                                                                                     |
| 回调推送 | 卡片互动回调           | /v1.0/card/instances/callback | 用户在钉钉的互动卡片中，点击或者其他互动之后，可以通过该 Topic 接收到用户互动操作的回调。                                                                                                                                                                                                                            |
| 事件推送 |                  | *                             | 事件订阅推送包括钉钉平台各种类型的变更通知，例如员工入职、审批表单状态变化等。<br />由于事件订阅的类型目前在[开发者后台](https://open-dev.dingtalk.com)中，可以通过UI界面勾选主题来订阅，因此这里支持通过星号(\*)订阅所有勾选的事件。<br />当前不支持通过代码方式指定事件的类型来订阅，请在[开发者后台勾选需要订阅的事件](https://open.dingtalk.com/document/orgapp/stream#5db30bb0f5iia)。<br />注意：仅支持星号(\*)。 |
| 系统推送 |                  | ping<br />disconnect          | 主要提供 Stream 长连接相关的管理能力，开发者需要正确的处理对应的推送信息保证连接的稳定可靠。SDK 开发者需要关注该事件，使用 SDK 的开发者不用关注。                                                                                                                                                                                           |

:::info

为了帮助自定义 SDK 的开发者更快完成接入，以上消息类型中，可以仅实现机器人消息回调或者事件推送其中之一即可，系统推送可以暂不实现。

如果没有时间开发完善的系统推送处理流程，可以在[Stream共创群](/docs/explore/support?via=moon-group)中，联系群主协助。

:::


### 通用字段说明

客户端完成 WebSocket 连接后即可接受来自钉钉平台的推送数据，客户端需要正确处理来自钉钉的推送数据并返回正确格式的响应才能保证运行逻辑的正确性。

服务端推送的请求数据如下：

| 名称 | 类型 | 说明                                           | 示例                                                                |
|---|---|----------------------------------------------|-------------------------------------------------------------------|
| specVersion | String | 协议版本号                                        | 1.0                                                               |
| type | String | 推送数据类型，当前支持三种：<br />SYSTEM: 系统数据<br />EVENT：事件推送<br />CALLBACK：回调推送                         | CALLBACK                                                          |
| headers | Object | 协议元数据，内部包含本次推送的消息ID, 推送数据topic, 数据类型,推送时间等信息 | 详见解下来的 header 字段描述和示例                                             |
| data | String | 推送数据的 json 字符串                               | ```"{\"suiteTicket\" : \"123df-sdfd\", \"action\": \"suite\"}"``` |

Headers 中必填的字段如下

| 名称 | 类型 | 说明                                                                    | 示例                            |
|---|---|-----------------------------------------------------------------------|-------------------------------|
| topic | String | 本次推送的业务 Topic，详见本文档消息类型章节给出的 Topic 列表                                 | /v1.0/im/bot/messages/get     |
| contentType | String | 标记推送数据的格式，默认为application/json，代表推送的数据为一个json字符串；<br />该字段预留将来支持二进制数据； | application/json              |
| messageId | String | 推送消息ID，标记一次推送，客户端需要关注此信息并且在响应的时候将此信息回传给服务端 | 213d841d_972_1898bb26334_70a7 |
| time | Number | 推送时间,为unix时间戳，单位：毫秒  | 1690106592000                              | 

示例：

```json
{
  "specVersion" : "1.0",
  "type" : "EVENT",
  "headers" : {
    "topic" : "dingTalk",
    "messageId" : "213d841d_972_1898bb26334_70a7",
    "contentType" : "application/json",
    "time" : "1693221579964",
    "eventType" : "user_add_org",
    "eventId" : "c7c7120f2c07419***ebdba0318c8",
    "eventCorpId" : "ding9f50b15b***16741",
    "eventBornTime" : "1683533823336",
    "eventUnifiedAppId" : "bbb381b6-f01xxxxx58daac"  
   },
   "data" : "{\"timestamp\" : \"1685501863357\", \"userId\" : [\"015xxxx227\"]}"
}
```

客户端响应的字段解释如下：

| 名称 | 类型 | 说明 | 示例                                                            |
|---|---|---|---------------------------------------------------------------|
| code | Number | 响应码 | 200：成功<br />404：topic不存在<br />500：内部错误                        |
| headers | Object | 响应头 | 详见接下来的Header字段说明                                              |
| message | String | 响应消息 | 返回响应信息，例如code=200时返回OK，<br />code=500时返回 internal error<br /> |
| data | String | 返回数据的json字符串 | ```"{\"result\" : "error"}"``` |

推送响应中 headers 必填字段如下：

| 名称 | 类型 | 说明 | 示例                                                            |
|---|---|---|---------------------------------------------------------------|
| messageId | String | 消息ID, 和推送请求headers中的messageId保持一致 |
| contentType | String | 返回数据的类型，目前只支持application/json | application/json |

响应示例：

```json
{
  "code" : 200,
  "message" : "OK",
  "headers" : {
    "messageId" : "213d841d_972_1898bb26334_70a7",
    "contentType" : "application/json"  
  },
  "data" : "{\"response\": {}}"
}
```


### 回调推送

#### 回调推送一：机器人消息

机器人回调的服务端推送请求示例如下，data 字段说明详见[文档](https://open.dingtalk.com/document/orgapp/receive-message)：
```json
{
	"specVersion": "1.0",
	"type": "CALLBACK",
	"headers": {
		"appId": "1305d5f5-**-484f-***-97d9****ef67",
		"contentType": "application/json",
		"messageId": "212ca9d7_974_1898c159aa6_1783b",
		"time": "1690362102194",
		"topic": "/v1.0/im/bot/messages/get"
	},
	"data": "{\"conversationId\":\"cidAsXSBLnA==\",\"atUsers\":[{\"dingtalkId\":\"$:LWCP_v1:$4*****TgHFUDZ8Qi8qr3\"}],\"chatbotCorpId\":\"ding9f*****cd16741\",\"chatbotUserId\":\"$:LWCP_v1:$*****x3vTgHFUDZ8Qi8qr3\",\"msgId\":\"msgLICYe****HgY4JtMQw==\",\"senderNick\":\"用户\",\"isAdmin\":true,\"senderStaffId\":\"16650***698\",\"sessionWebhookExpiredTime\":1690367502152,\"createA\": 1690362101894,\"senderCorpId\":\"ding9*****d16741\",\"conversationType\":\"2\",\"senderId\":\"$:LWCP_v1:***jqTgIfhRX9Q==\",\"conversationTitle\":\"测试群\",\"isInAtList\":trnWebhook\":\"https://oapi.dingtalk.com/robot/sendBySession?session=76da36b4**********8f59e8\",\"text\":{\"content\":\" 测试数据\"},\"robotCode\":\"ding*****r3xc0b\",\"msgtype\":\"text\"}"
}
```

响应示例如下：

:::tip

机器人消息的响应中，只需要标识成功失败即可，钉钉服务端暂时不用该 data 字段，因此 data 字段可以采用固定的内容：```{"response": null}```

:::

```json
{
  "code" : 200,
  "headers" : {
    "contentType" : "application/json",
    "messageId" : "213d841d_972_1898bb26334_70a7"
  },
  "message" : "OK",
  "data" : "{\"response\": null}"
}
```

#### 回调推送二：卡片回调

待完善，正在加速编写中，敬请期待。

### 事件推送

钉钉近百种事件推送，包括通讯录、群会话、考勤、审批、日程、签到等，订阅流程以及每一种事件的字段格式说明详见[官方文档](https://open.dingtalk.com/document/orgapp/stream)左侧导航目录中可以查看全部事件。

示例：以企业新增日程为例，推送的格式如下：

```json
{
  "specVersion" : "1.0",
  "type" : "EVENT",
  "header" : {
    "messageId" : "213d841d_972_1898bb26334_70a7",
    "contentType" : "application/json",
    "time" : "1683533823336",
    "topic" : "*",
    "eventId" : "c7c7120f2c07419**ebdba0318c8",
    "eventBornTime" : "1683533823336",
    "eventCorpId" : "ding9f50b15bxxxx16741",
    "eventType" : "user_add_org",
    "eventUnifiedAppId" : "bbb381b6-f01xxxxx58daac"
  },
  "data" : "{\"timeStamp\" : \"1685501863357\",\"userId\" : [\"015xxxx227\"]}"
}
```

响应的 data 中必须包含 status 和 message 字段。字段说明：

| 名称 | 类型 | 必填 |  说明 |
|---|---|---|---|
| status | String | 是 | SUCCESS：标识消费成功<br />LATER：表示消费失败 |
| message | String | 否 |  自定义的返回字段，辅助诊断 |

完整的响应体示例如下：

```json
{
  "code" : 200,
  "headers" : {
    "contentType" : "application/json",
    "messageId" : "213d841d_972_1898bb26334_70a7"
  },
  "message" : "OK",
  "data" : "{\"status\" : \"SUCCESS\", \"message\" : \"success\"}"
}
```

### 系统推送

系统类型的推送主要提供和 Stream 长连接相关的管理能力，开发者需要正确的处理对应的推送信息保证连接的稳定可靠。

目前支持两种 topic：

1. ping: 用于 WebSocket 长连接健康检查
2. disconnect: 用于网络连接优雅断开，避免直接断连接影响业务连续性

#### ping 请求处理

ping 请求用于 WebSocket 长连接健康检查，data 中唯一包含的字段是 opaque（全局唯一的 ID 标识），详见示例：

```json
{
  "type" : "SYSTEM",
  "headers" : {
    "topic" : "ping",
  	"messageId" : "213d841d_972_1898bb26334_70a7",  
  	"contentType" : "application/json", 
  },
  "data" : "{\"opaque\" : \"123-dsfs\"}" 
}
```

收到 ping 请求后不需要做本地处理，直接响应即可。响应数据的 data 中携带请求的 opaque 即可，示例如下：

```json
{
  "code" : 200,
  "headers" : {
    "contentType" : "application/json",
    "messageId" : "213d841d_972_1898bb26334_70a7"
  },
  "message" : "OK",
   "data" : "{\"opaque\" : \"123-dsfs\"}"
}
```

#### disconnect 请求处理

为了保证长连接的健康和服务端的负载均衡，服务端会定时断开长连接，并在断开连接前推送断连信息。

disconnect 请求中当前仅包含 reason 字段，描述连接断开的原因。
请求示例如下：

```json
{
  "type" : "SYSTEM",
  "headers" : {
    "topic" : "disconnect",
  	"contentType" : "application/json"  
  },
  "data" : "{\"reason\" : \"connection is expired\"}"
}
```

响应：客户端不需要对此推送信息做任何响应， 服务端在静默10s之后会主动断开 tcp 连接。

## 常见问题

### Stream 客户端收到来自钉钉服务端推送的请求之后，是否需要回复ACK？

补充问题：如果处理时间比较长导致响应回复时间过长，会不会发生中断【非业务消息(ping)除外】

建议按照本文档中协议描述来回复ACK。ACK主要用途

1. "事件订阅"支持相对可靠的推送，因此如果不回复 ACK，会触发服务端的超时重新推送，以及客户端对相同事件的重复处理，造成处理资源的浪费；
2. "事件订阅"之外的推送，ACK仅用于问题诊断和分析，建议回复ACK，但是不回复也不影响正常业务处理；

目前官方SDK会自动处理ACK，例如Python的消息回调中返回 OK 之后(```return AckMessage.STATUS_OK, 'OK'```)，会在SDK底层按照协议转成对应格式的ACK发送到钉钉服务端。

总结：不回复ACK不会造成业务中断，只会造成部分场景（事件订阅）的重复推送，带来资源的浪费。

### 如果收到事件推送后，正确的回复 ACK 响应，是否就不会出现重复推送了？

依然可能出现重复推送，只是概率会降到很低。原因是网络延迟不可控，如果因为互联网的正常抖动导致推送延迟，触发超时重新推送的话，就会出现重复事件。因此无论是否正确的ACK了，都需要考虑到收到重复事件的可能性。

备注：机器人消息当前是fire-forgot模式，不会因为网络超时而重复推送。

### 响应回复消息中的 code 针对 404 的topic 不存在这个状态目前是预留的吗？

补充问题：客户端目前应该无法进行topic 是否存在进行识别

当前是预留的，从协议完备性上考虑保留了404状态码。钉钉服务端只会推送 Stream Client 注册的 Topic，不会推送未注册的 Topic 下的消息。

但是考虑到复杂的系统环境下，可能出现的缓存一致性、代码Bug等问题，在协议上预留了 404 状态码表示客户端不支持该 Topic，以用作问题诊断。

### 响应消息处理是否支持负载均衡方式处理？

补充问题：启动多个程序订阅相同事件进行数据处理，担心将来推送数据量大时可能出现无法及时响应的情况；可能需要考虑方案提供给客户端侧进行参考

支持的。如果事件量较大的话，可以采用多进程，或者单进程下多Stream Client实例方式，建立多个 Stream 通道，也即多个 WebSocket 长连接。钉钉服务端每次推送消息时候，通过随机策略选取一个Stream通道推送。如果需要支持更多的负载均衡策略，可以通过[技术支持](/docs/explore/support)提交反馈。

### 注册连接凭证中的 localIp 是否可以标记多个IP？

补充问题：或增加自定义的客户端标识参数【可选】

可以支持多个IP，采用英文逗号分隔。

## 相关链接

* [Stream Mode SDK](/docs/develop/sdk/overview)
* [官方文档：Stream Mode 协议文档](https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description)
* [官方文档：服务端 Stream 模式介绍](https://open.dingtalk.com/document/resourcedownload/Introduction-to-stream-mode)
* [官方文档：接收机器人消息的描述文档](https://open.dingtalk.com/document/orgapp/receive-message)

