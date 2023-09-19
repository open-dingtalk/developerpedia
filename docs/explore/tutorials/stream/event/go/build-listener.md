---
sidebar_position: 3
---

# 3. 开发事件订阅服务

在本章节中，将会介绍如何用 Go 开发一个事件订阅服务，接收钉钉平台推送的变更通知。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-go)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Go 模块

```shell
mkdir event_chat_update
cd event_chat_update
go mod init event_chat_update
```

## 安装依赖

```shell
go get github.com/open-dingtalk/dingtalk-stream-sdk-go
```

## 开发事件订阅服务

在 go.mod 相同的目录下，创建 `event_handler.go` 文件，文件内容如下：

```go title="event_handler.go" {13-32} showLineNumbers
package main

import (
	"context"
	"flag"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/client"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/event"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/logger"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/payload"
	"time"
)

func OnEventReceived(_ context.Context, df *payload.DataFrame) (*payload.DataFrameResponse, error) {
	eventHeader := event.NewEventHeaderFromDataFrame(df)
	if eventHeader.EventType != "chat_update_title" {
		// ignore events not equals `chat_update_title`; 忽略`chat_update_title`之外的其他事件；
		// 该示例仅演示 chat_update_title 类型的事件订阅；
		return event.NewSuccessResponse()
	}

	logger.GetLogger().Infof("received event, delay=%s, eventType=%s, eventId=%s, eventBornTime=%d, eventCorpId=%s, eventUnifiedAppId=%s, data=%s",
		time.Duration(time.Now().UnixMilli()-eventHeader.EventBornTime)*time.Millisecond,
		eventHeader.EventType,
		eventHeader.EventId,
		eventHeader.EventBornTime,
		eventHeader.EventCorpId,
		eventHeader.EventUnifiedAppId,
		df.Data)
	// put your code here; 可以在这里添加你的业务代码，处理事件订阅的业务逻辑；

	return event.NewSuccessResponse()
}

func main() {
	var clientId, clientSecret string
	flag.StringVar(&clientId, "client_id", "", "your-client-id, AppKey or SuiteKey")
	flag.StringVar(&clientSecret, "client_secret", "", "your-client-secret, AppSecret or SuiteSecret")
	flag.Parse()
	if len(clientId) == 0 || len(clientSecret) == 0 {
		panic("command line options --client_id and --client_secret required")
	}

	logger.SetLogger(logger.NewStdTestLogger())

	cli := client.NewStreamClient(client.WithAppCredential(client.NewAppCredentialConfig(clientId, clientSecret)))
	cli.RegisterAllEventRouter(OnEventReceived)

	err := cli.Start(context.Background())
	if err != nil {
		panic(err)
	}

	defer cli.Close()

	select {}
}
```

以上不超过 60 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册事件推送的监听服务，实现变更通知的接收能力
4. 在事件回调方法中，通过日志记录变更通知的消息内容，你可以可以改造这段代码，将变更通知写入自己的数据库中

## 运行事件订阅服务

通过以下命令可以运行你的事件订阅服务，当看到这样的日志输出时候表示运行成功 `[INFO] connect success, sessionId=[...]`
”

```shell
go mod tidy
go run event_handler.go --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-app)获取。
:::

至此，你已成功完成事件订阅服务开发和部署。接下来可以在[钉钉开发者后台](https://open-dev.dingtalk.com)勾选需要订阅的事件类型，然后体验整个接收流程。

:::info 说明
如果你开发过钉钉聊天机器人的消息接收，就可以知道在聊天机器人代码中，需要指定订阅的 Topic，而事件订阅的代码中没有指定 Topic。原因是钉钉事件订阅平台的事件类型（Topic）是通过网页形式（在开发者后台）勾选，而不是通过代码方式指定 Topic。
接下来的文档会提供指引，介绍如何在开发者后台勾选需要订阅的事件类型（Topic）。
:::

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-go)