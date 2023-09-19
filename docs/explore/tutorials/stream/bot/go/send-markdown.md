---
sidebar_position: 6
---

# 6. 进阶：发送 Markdown

在本章节中，将会介绍如何回复/发送 Markdown 消息。相比前面介绍的发送文本消息来说，Markdown 消息支持更丰富的图文混排能力，以及富文本交互，可以用于各种场景中展示业务信息。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-go)中获取。

## 创建 Go 模块

```shell
mkdir bot_echo_markdown
cd bot_echo_markdown
go mod init bot_echo_markdown
```

## 安装依赖

```shell
go get github.com/open-dingtalk/dingtalk-stream-sdk-go
```

## 开发机器人服务

在 go.mod 相同的目录下，创建 `echo_markdown.go` 文件，文件内容如下：

```go title="echo_markdown.go" showLineNumbers
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
	replyMsg := "echo received message:\n"
	for _, line := range strings.Split(data.Text.Content, "\n") {
		replyMsg += fmt.Sprintf("\n> 1. %s", strings.TrimSpace(line))
	}
	replier := chatbot.NewChatbotReplier()
	if err := replier.SimpleReplyMarkdown(ctx, data.SessionWebhook, []byte("dingtalk-tutorial-go"), []byte(replyMsg)); err != nil {
		return nil, err
	}
	return []byte(""), nil
}

func main() {
	var clientId, clientSecret string
	flag.StringVar(&clientId, "client_id", "", "your-client-id")
	flag.StringVar(&clientSecret, "client_secret", "", "your-client-secret")
	flag.Parse()

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
4. 在消息回调方法中，简单 echo 机器人消息回去，采用 Markdown 类型，实现消息发送(回复)能力。相比文本消息，Markdown 支持更丰富的消息样式。

## 运行机器人服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `[INFO] connect success, sessionId=[...]`
”

```shell
go mod tidy
go run echo_markdown.go --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](/docs/explore/tutorials/stream/bot/go/create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。


## 效果如下

![发送 Markdown 消息](/img/explore/stream/bot/send-markdown.png)

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-go)