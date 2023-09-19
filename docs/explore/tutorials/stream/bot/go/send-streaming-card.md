---
sidebar_position: 7
---

# 7. 进阶：打字机模式

在本章节中，将会学习如何通过发送和更新互动卡片（普通版）来实现打字机模式。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-go)中获取，本章节涉及的代码量较大，建议通过 GitHub 查看。

## 创建 Go 模块

```shell
mkdir bot_echo_streaming
cd bot_echo_streaming
go mod init bot_echo_streaming
```

## 安装依赖

```shell
go get github.com/open-dingtalk/dingtalk-stream-sdk-go
go get github.com/alibabacloud-go/dingtalk
go get github.com/alibabacloud-go/darabonba-openapi
```

## 开发机器人服务

在 go.mod 相同的目录下，创建 `echo_streaming.go` 文件，文件内容如下：

```go title="echo_streaming.go" showLineNumbers
package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	dingtalkim_1_0 "github.com/alibabacloud-go/dingtalk/im_1_0"
	dingtalkoauth2_1_0 "github.com/alibabacloud-go/dingtalk/oauth2_1_0"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/google/uuid"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/chatbot"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/client"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/logger"
	"strings"
	"time"
)

// doc: https://open-dingtalk.github.io/developerpedia/docs/learn/card/intro
const messageCardTemplate = `
{
  "config": {
    "autoLayout": true,
    "enableForward": true
  },
  "header": {
    "title": {
      "type": "text",
      "text": "打字机模式"
    },
    "logo": "@lALPDfJ6V_FPDmvNAfTNAfQ"
  },
  "contents": [
    {
      "type": "text",
      "text": "%s",
      "id": "text_1693929551595"
    },
    {
      "type": "divider",
      "id": "divider_1693929551595"
    },
    {
      "type": "markdown",
      "text": "%s",
      "id": "markdown_1693929674245"
    }
  ]
}
`

type DingTalkClient struct {
	ClientID     string
	clientSecret string
	accessToken  string
	imClient     *dingtalkim_1_0.Client
	oauthClient  *dingtalkoauth2_1_0.Client
}

var (
	dingtalkClient *DingTalkClient = nil
)

func NewDingTalkClient(clientId, clientSecret string) *DingTalkClient {
	config := &openapi.Config{}
	config.Protocol = tea.String("https")
	config.RegionId = tea.String("central")
	imClient, _ := dingtalkim_1_0.NewClient(config)
	oauthClient, _ := dingtalkoauth2_1_0.NewClient(config)
	return &DingTalkClient{
		ClientID:     clientId,
		clientSecret: clientSecret,
		imClient:     imClient,
		oauthClient:  oauthClient,
	}
}

func (c *DingTalkClient) GetAccessToken() (string, error) {
	request := &dingtalkoauth2_1_0.GetAccessTokenRequest{
		AppKey:    tea.String(c.ClientID),
		AppSecret: tea.String(c.clientSecret),
	}
	response, tryErr := func() (_resp *dingtalkoauth2_1_0.GetAccessTokenResponse, _e error) {
		defer func() {
			if r := tea.Recover(recover()); r != nil {
				_e = r
			}
		}()
		_resp, _err := c.oauthClient.GetAccessToken(request)
		if _err != nil {
			return nil, _err
		}

		return _resp, nil
	}()
	if tryErr != nil {
		return "", tryErr
	}
	return *response.Body.AccessToken, nil
}

func (c *DingTalkClient) SendInteractiveCard(request *dingtalkim_1_0.SendRobotInteractiveCardRequest) (*dingtalkim_1_0.SendRobotInteractiveCardResponse, error) {
	accessToken, err := c.GetAccessToken()
	if err != nil {
		return nil, err
	}

	headers := &dingtalkim_1_0.SendRobotInteractiveCardHeaders{
		XAcsDingtalkAccessToken: tea.String(accessToken),
	}
	response, tryErr := func() (_resp *dingtalkim_1_0.SendRobotInteractiveCardResponse, _e error) {
		defer func() {
			if r := tea.Recover(recover()); r != nil {
				_e = r
			}
		}()
		_resp, _e = c.imClient.SendRobotInteractiveCardWithOptions(request, headers, &util.RuntimeOptions{})
		if _e != nil {
			return
		}
		return
	}()
	if tryErr != nil {
		return nil, tryErr
	}
	return response, nil
}

func (c *DingTalkClient) UpdateInteractiveCard(request *dingtalkim_1_0.UpdateRobotInteractiveCardRequest) (*dingtalkim_1_0.UpdateRobotInteractiveCardResponse, error) {
	accessToken, err := c.GetAccessToken()
	if err != nil {
		return nil, err
	}

	headers := &dingtalkim_1_0.UpdateRobotInteractiveCardHeaders{
		XAcsDingtalkAccessToken: tea.String(accessToken),
	}
	response, tryErr := func() (_resp *dingtalkim_1_0.UpdateRobotInteractiveCardResponse, _e error) {
		defer func() {
			if r := tea.Recover(recover()); r != nil {
				_e = r
			}
		}()
		_resp, _e = c.imClient.UpdateRobotInteractiveCardWithOptions(request, headers, &util.RuntimeOptions{})
		if _e != nil {
			return
		}
		return
	}()
	if tryErr != nil {
		return nil, tryErr
	}
	return response, nil
}

func OnChatBotMessageReceived(ctx context.Context, data *chatbot.BotCallbackDataModel) ([]byte, error) {
	// create an uniq card id to identify a card instance while updating
	// see: https://open.dingtalk.com/document/orgapp/robots-send-interactive-cards (cardBizId)
	u, err := uuid.NewUUID()
	if err != nil {
		return nil, err
	}
	cardInstanceId := u.String()

	// send interactive card; 发送交互式卡片
	cardData := fmt.Sprintf(messageCardTemplate, "", "")
	sendOptions := &dingtalkim_1_0.SendRobotInteractiveCardRequestSendOptions{}
	request := &dingtalkim_1_0.SendRobotInteractiveCardRequest{
		CardTemplateId: tea.String("StandardCard"),
		CardBizId:      tea.String(cardInstanceId),
		CardData:       tea.String(cardData),
		RobotCode:      tea.String(dingtalkClient.ClientID),
		SendOptions:    sendOptions,
		PullStrategy:   tea.Bool(false),
	}
	if data.ConversationType == "2" {
		// group chat; 群聊
		request.SetOpenConversationId(data.ConversationId)
	} else {
		// ConversationType == "1": private chat; 单聊
		receiverBytes, err := json.Marshal(map[string]string{"userId": data.SenderStaffId})
		if err != nil {
			return nil, err
		}
		request.SetSingleChatReceiver(string(receiverBytes))
	}
	_, err = dingtalkClient.SendInteractiveCard(request)
	if err != nil {
		return nil, err
	}

	// 持续更新交互式卡片
	fullTitle := []string{"登", "鹳", "雀", "楼"}
	fullContent := []string{"* 白", "日", "依", "山", "尽，", "\n* 黄", "河", "入", "海", "流", "。", "\n* 欲", "穷", "千", "里", "目，", "\n* 更", "上", "一", "层", "楼。"}
	fmt.Println(len(fullTitle))
	for i := 1; i <= len(fullContent); i++ {
		if i > 1 {
			time.Sleep(time.Duration(100) * time.Millisecond)
		}
		title := strings.Join(fullTitle, "")
		if i <= len(fullTitle) {
			title = strings.Join(fullTitle[0:i], "")
		}
		content := strings.Join(fullContent[0:i], "")

		updateRequest := &dingtalkim_1_0.UpdateRobotInteractiveCardRequest{
			CardBizId: tea.String(cardInstanceId),
			CardData:  tea.String(fmt.Sprintf(messageCardTemplate, title, content)),
		}
		_, err = dingtalkClient.UpdateInteractiveCard(updateRequest)
		if err != nil {
			return nil, err
		}
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

	dingtalkClient = NewDingTalkClient(clientId, clientSecret)

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

以上代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，创建交互式卡片，并持续通过更新接口更新卡片内容，实现打字机效果

:::info
目前不支持流式更新接口，每次需要全量更新卡片内容。
:::

## 运行机器人服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `[INFO] connect success, sessionId=[...]`
”

```shell
go mod tidy
go run echo_streaming.go --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](/docs/explore/tutorials/stream/bot/go/create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

## 效果如下

![打字机模式效果](/img/explore/stream/bot/bot-streaming.gif)

## 最佳实践

1. 本文代码中，你可能会对`messageCardTemplate`对应的卡片 JSON 体存在疑惑，不清楚如何编写这段 JSON 代码。这是卡片消息普通版的 JSON 内容，可以通过[搭建平台](https://card.dingtalk.com/card-builder)可视化拖拽生成；
2. 你也可以不使用更新卡片接口，只用发送卡片接口。通过发送交互式卡片，展示比 Markdown 消息更丰富的互动体验；
3. 本文仅介绍了**互动卡片普通版**，如果需要更灵活的交互体验，可以通过[互动卡片相关技术文档汇总](/docs/learn/card/intro)了解如何使用**互动卡片高级版**。

## 相关链接

* [互动卡片相关技术文档汇总](/docs/learn/card/intro)
* [互动卡片普通版-搭建平台](https://card.dingtalk.com/card-builder)
* [另外一个示例：dingtalk-stable-diffusion](https://github.com/chzealot/dingtalk-stable-diffusion)，也通过相同方式实现了打字机模式，同样可以参考借鉴