---
sidebar_position: 3
---

# 3. 开发机器人服务

在本章节中，将会介绍如何用 Go 开发一个聊天机器人服务，实现基本的介绍和发送消息能力。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/stream-tutorial-go)中获取。

## 创建 Go 模块

```shell
mkdir stream-tutorial-go
cd stream-tutorial-go
go mod init bot_echo_text
```

## 安装依赖

```shell
go get github.com/open-dingtalk/dingtalk-stream-sdk-go
```

## 开发机器人服务

在 go.mod 相同的目录下，创建 `echo_text.go` 文件，文件内容如下：

```go title="echo_text.go" showLineNumbers
package main

import (
	"context"
	"flag"
	"fmt"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/chatbot"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/client"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/logger"
	"strings"
)

func OnChatBotMessageReceived(ctx context.Context, data *chatbot.BotCallbackDataModel) ([]byte, error) {
	replyMsg := []byte(fmt.Sprintf("echo received message: [%s]", strings.TrimSpace(data.Text.Content)))

	replier := chatbot.NewChatbotReplier()
	if err := replier.SimpleReplyText(ctx, data.SessionWebhook, replyMsg); err != nil {
		return nil, err
	}
	return []byte(""), nil
}

func main() {
	var clientId, clientSecret string
	flag.StringVar(&clientId, "client_id", "", "your-client-id")
	flag.StringVar(&clientSecret, "client_secret", "", "your-client-secret")
	flag.Parse()
	if len(clientId) == 0 || len(clientSecret) == 0 {
		panic("command line options --client_id and --client_secret required")
	}

	logger.SetLogger(logger.NewStdTestLogger())

	cli := client.NewStreamClient(client.WithAppCredential(client.NewAppCredentialConfig(clientId, clientSecret)))
	cli.RegisterChatBotCallbackRouter(OnChatBotMessageReceived)

	err := cli.Start(context.Background())
	if err != nil {
		panic(err)
	}

	defer cli.Close()

	select {}
}
```

以上不超过 50 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，简单 echo 机器人消息回去，实现消息发送(回复)能力

## 运行机器人服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `[INFO] connect success, sessionId=[...]`
”

```shell
go mod tidy
go run echo_text.go --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](/docs/explore/tutorials/stream/bot/golang/create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/stream-tutorial-go)