---
sidebar_position: 8
---

# 8. 进阶：卡片回调

在本章节中，将会学习如何发送、更新[互动卡片高级版](https://open.dingtalk.com/document/orgapp/overview-card)，以及通过 Stream 方式接收和处理卡片回调。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-go)中获取，本章节涉及的代码量较大，建议通过 GitHub 查看。

## 创建 Go 模块

```shell
mkdir bot_card_callback
cd bot_card_callback
go mod init bot_card_callback
```

## 安装依赖

```shell
go get github.com/open-dingtalk/dingtalk-stream-sdk-go
go get github.com/alibabacloud-go/dingtalk
go get github.com/alibabacloud-go/darabonba-openapi
```

## 搭建卡片模版

**1、进入卡片平台**

可以通过以下任意一种方式进入卡片平台：
* [卡片平台链接](https://open-dev.dingtalk.com/fe/card)
* 从[开发者后台首页](https://open-dev.dingtalk.com/)进入，顶部菜单点击「开放能力」-「卡片平台」

**2、新建卡片模板**

在卡片平台中，点击「新建模板」按钮，填写“模板名称”、关联应用，并点击「创建」按钮，示意图如下：
![创建卡片模板](/img/explore/stream/bot/create-card-template.jpg)

**3、编辑模板内容**

3.1 从「预设模板」中创建卡片模板
本教程基于预设模板快速搭建消息卡片，你也可以在熟练掌握卡片搭建平台后，自定义自己的模板。
步骤为：在卡片编辑页面中，点击左侧「预设模板」对应的图标，找到「审批模板」，点击「使用」按钮，弹出的对话框中点击「确认」。
示意图如下：
![使用预制卡片](/img/explore/stream/bot/use-exists-template.jpg)

3.2 添加变量「status」用于描述审批状态
点击左侧「变量」对应的图标之后，依次点「编辑」链接、「新增变量」按钮，创建一个字符串类型的「status」变量，**并点击「保存」按钮**，变量描述可以自由填写，示意图如下：
![添加变量](/img/explore/stream/bot/create-card-status-param.jpg)

**3.3 添加按钮，用于展示审批结果**

在这个步骤中，我们将创建一个新的按钮，用于展示审批结果。当用户点击「拒绝」或「同意」按钮之后，通过第三个按钮展示审批结果，同时隐藏「拒绝」和「审批」按钮。

点击左侧「组件库」对应的图标之后，进入卡片编辑状态，依次点击卡片中「横排按钮」、「添加新按钮」，从而添加一个新的按钮，示意图如下：

![添加按钮](/img/explore/stream/bot/card-add-button.jpg)

**3.4 设置三个按钮的显示规则**

在「横排按钮」属性编辑中，可以设置按钮的显示规则，其中「拒绝」按钮的一个示意图如下，其他按钮可以参照文字指示来设置。
![拒绝按钮设置1](/img/explore/stream/bot/card-reject-step1.jpg)
![拒绝按钮设置2](/img/explore/stream/bot/card-reject-step2.jpg)
针对「拒绝」按钮：
* 「按钮点击事件类型」设置为「回传请求」，并在弹出的回传参数中设置为：
  * 参数名：action。说明：参数名可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。
  * 参数类型：常量
  * 参数值：reject。说明：参数值可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。
* 「当前按钮是否显示」设置为「条件计算」，并在「创建新条件」的下拉框中选择「变量」，弹出的条件中设置为
  * 变量：选择「status」
  * 条件：选择「等于」
  * 值类型：选择「常量」
  * 值内容：填写「待处理」。说明：该处内容可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。

针对「同意」按钮（跟「拒绝」按钮唯一区别是将「action」参数的值从「reject」改成「accept」）：
* 「按钮点击事件类型」设置为「回传请求」，并在弹出的回传参数中设置为：
  * 参数名：action。说明：参数名可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。
  * 参数类型：常量
  * 参数值：accept。说明：参数值可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。
* 「当前按钮是否显示」设置为「条件计算」，并在「创建新条件」的下拉框中选择「变量」，弹出的条件中设置为
  * 变量：选择「status」
  * 条件：选择「等于」
  * 值类型：选择「常量」
  * 值内容：填写「待处理」。说明：该处内容可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。


针对新增的第三个按钮（名称初始化时候为「按钮」）
* 「按钮文案」修改为：${status}
  * 说明：${status} 表示将「status」变量展示为按钮文案
* 「按钮状态」设置为：「禁用」。说明：仅视觉效果考虑，非必须
* 「按钮颜色」设置为：「黑色」。说明：仅视觉效果考虑，非必须
* 「图标类型」设置为：「IconFont图标」。说明：仅视觉效果考虑，非必须
* 「图标」设置为：选择任意一个图标即可。说明：上一个步骤中设置了「图标类型」后，则该属性必须选择一个。
* 「当前按钮是否显示」设置为「条件计算」，并在「创建新条件」的下拉框中选择「变量」。“选择「变量」”这个步骤点击两次，以创建两个条件，并将关系从“且”切换成“或”，两个条件分别设置为：
  * 变量「status」「等于」「常量」「被拒绝」
  * 变量「status」「等于」「常量」「已同意」
  * 说明：「被拒绝」「已同意」可以自由设置，跟卡片回调处理的代码保持一致即可，详见本教程后续步骤中的示例代码。

**3.5 保存**

点击右上角「保存」按钮，即可保存，并使用该模板。

关于保存和发布说明如下：
* 无论是「保存」还是「发布」都可以使用该模板
* 「发布」之后无法再次编辑
* 「保存」之后可以继续编辑

基于以上考虑，如果不确定是否还需要编辑，建议不要点击「发布」按钮，点击「保存」即可。

特别说明：卡片在客户端上有缓存，编辑之后再次发送的卡片如果在客户端上未生效依旧是旧版本卡片样式的话，可以尝试重启客户端来刷新卡片缓存。

**3.6 获取卡片模板 ID**

在上一步骤中，点击「保存」按钮之后，可以点击左上角「返回」按钮，回到卡片管理页面中。
点击「模板列表」进入模板列表页面。

找到刚刚创建的模板，复制「模板 ID」，即可获得类似这种格式的模板ID：「dac1dbec-55af-40c3-be91-6d6882ef3b66.schema」。

至此，你已完成模板 ID，可以在下一个步骤的代码中使用该模板 ID来发送互动卡片消息，并处理卡片上回调事件。

## 开发代码

在 go.mod 相同的目录下，创建 `card_callback.go` 文件，文件内容如下：

:::caution
需要将代码中这个模板ID更换成你自己创建的模板ID：

`CARD_TEMPLATE_ID   string = "dac1dbec-55af-40c3-be91-6d6882ef3b66.schema"`

备注：模板目前可以公开使用，因此你也可以不做修改直接使用示例中的模版，但是不保证未来是否可以使用，推荐更换成自定义的模板ID。
:::

```go title="card_callback.go" showLineNumbers
package main

import (
	"context"
	"flag"
	"fmt"
	openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
	dingtalkcard_1_0 "github.com/alibabacloud-go/dingtalk/card_1_0"
	dingtalkim_1_0 "github.com/alibabacloud-go/dingtalk/im_1_0"
	dingtalkoauth2_1_0 "github.com/alibabacloud-go/dingtalk/oauth2_1_0"
	util "github.com/alibabacloud-go/tea-utils/v2/service"
	"github.com/alibabacloud-go/tea/tea"
	"github.com/google/uuid"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/card"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/chatbot"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/client"
	"github.com/open-dingtalk/dingtalk-stream-sdk-go/logger"
)

type DingTalkClient struct {
	ClientID     string
	clientSecret string
	accessToken  string
	imClient     *dingtalkim_1_0.Client
	oauthClient  *dingtalkoauth2_1_0.Client
	cardClient   *dingtalkcard_1_0.Client
}

var (
	dingtalkClient *DingTalkClient = nil
)

const (
	CARD_TEMPLATE_ID   string = "dac1dbec-55af-40c3-be91-6d6882ef3b66.schema"
	CARD_TITLE                = "张三提交的财务报销"
	CARD_TYPE                 = "差旅费"
	CARD_AMOUNT               = "1000.0"
	CARD_REASON               = "出差费用"
	CARD_STATUS_TODO          = "待处理"
	CARD_STATUS_ACCEPT        = "已同意"
	CARD_STATUS_REJECT        = "被拒绝"
)

func NewDingTalkClient(clientId, clientSecret string) *DingTalkClient {
	config := &openapi.Config{}
	config.Protocol = tea.String("https")
	config.RegionId = tea.String("central")
	oauthClient, _ := dingtalkoauth2_1_0.NewClient(config)
	imClient, _ := dingtalkim_1_0.NewClient(config)
	cardClient, _ := dingtalkcard_1_0.NewClient(config)
	return &DingTalkClient{
		ClientID:     clientId,
		clientSecret: clientSecret,
		oauthClient:  oauthClient,
		imClient:     imClient,
		cardClient:   cardClient,
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

func (c *DingTalkClient) SendCard(request *dingtalkcard_1_0.CreateAndDeliverRequest) (*dingtalkcard_1_0.CreateAndDeliverResponse, error) {
	accessToken, err := c.GetAccessToken()
	if err != nil {
		return nil, err
	}
	headers := &dingtalkcard_1_0.CreateAndDeliverHeaders{}
	headers.XAcsDingtalkAccessToken = tea.String(accessToken)

	resp, tryErr := func() (resp *dingtalkcard_1_0.CreateAndDeliverResponse, _e error) {
		defer func() {
			if r := tea.Recover(recover()); r != nil {
				_e = r
			}
		}()
		result, _err := c.cardClient.CreateAndDeliverWithOptions(request, headers, &util.RuntimeOptions{})
		if _err != nil {
			return nil, _err
		}

		return result, nil
	}()
	if tryErr != nil {
		var sdkError = &tea.SDKError{}
		if _t, ok := tryErr.(*tea.SDKError); ok {
			sdkError = _t
		} else {
			sdkError.Message = tea.String(tryErr.Error())
		}
		if !tea.BoolValue(util.Empty(sdkError.Code)) && !tea.BoolValue(util.Empty(sdkError.Message)) {
			logger.GetLogger().Errorf("CreateAndDeliverWithOptions failed, clientId=%s, err=%+v", c.ClientID, sdkError)
		}
		return nil, tryErr
	}

	return resp, nil
}

func OnCardCallback(ctx context.Context, request *card.CardRequest) (*card.CardResponse, error) {
	logger.GetLogger().Infof("receive card data: %v", request)
	action := request.GetActionString("action")
	status := CARD_STATUS_TODO
	if action == "accept" {
		status = CARD_STATUS_ACCEPT
	} else if action == "reject" {
		status = CARD_STATUS_REJECT
	}
	response := &card.CardResponse{
		CardData: &card.CardDataDto{
			CardParamMap: map[string]string{
				"title":  CARD_TITLE,
				"type":   CARD_TYPE,
				"amount": CARD_AMOUNT,
				"reason": CARD_REASON,
				"status": status,
			},
		},
	}
	return response, nil
}

func OnChatBotMessageReceived(ctx context.Context, data *chatbot.BotCallbackDataModel) ([]byte, error) {
	cardData := &dingtalkcard_1_0.CreateAndDeliverRequestCardData{
		CardParamMap: make(map[string]*string),
	}
	cardData.CardParamMap["title"] = tea.String(CARD_TITLE)
	cardData.CardParamMap["type"] = tea.String(CARD_TYPE)
	cardData.CardParamMap["reason"] = tea.String(CARD_REASON)
	cardData.CardParamMap["amount"] = tea.String(CARD_AMOUNT)
	cardData.CardParamMap["status"] = tea.String(CARD_STATUS_TODO)
	imGroupOpenSpaceModel := &dingtalkcard_1_0.CreateAndDeliverRequestImGroupOpenSpaceModel{
		SupportForward: tea.Bool(true),
	}
	imGroupOpenDeliverModel := &dingtalkcard_1_0.CreateAndDeliverRequestImGroupOpenDeliverModel{
		Extension: make(map[string]*string),
		RobotCode: tea.String(dingtalkClient.ClientID),
	}
	imRobotOpenSpaceModel := &dingtalkcard_1_0.CreateAndDeliverRequestImRobotOpenSpaceModel{
		SupportForward: tea.Bool(true),
	}
	imRobotOpenDeliverModel := &dingtalkcard_1_0.CreateAndDeliverRequestImRobotOpenDeliverModel{
		Extension: make(map[string]*string),
		RobotCode: tea.String(dingtalkClient.ClientID),
		SpaceType: tea.String("IM_ROBOT"),
	}
	u, _ := uuid.NewUUID()
	outTrackId := u.String()
	var openSpaceId string = ""
	if data.ConversationType == "2" { // 群聊
		openSpaceId = fmt.Sprintf("dtv1.card//IM_GROUP.%s", data.ConversationId)
	} else {
		openSpaceId = fmt.Sprintf("dtv1.card//IM_ROBOT.%s", data.SenderStaffId)
	}
	sendCardRequest := &dingtalkcard_1_0.CreateAndDeliverRequest{
		UserIdType:     tea.Int32(1), // 1（默认）：userid模式；2：unionId模式;
		CardTemplateId: tea.String(CARD_TEMPLATE_ID),
		OutTrackId:     tea.String(outTrackId),
		CallbackType:   tea.String("STREAM"), // 采用 Stream 模式接收回调事件
		CardData:       cardData,
		OpenSpaceId:    tea.String(openSpaceId),
	}
	if data.ConversationType == "2" { // 群聊
		sendCardRequest.ImGroupOpenSpaceModel = imGroupOpenSpaceModel
		sendCardRequest.ImGroupOpenDeliverModel = imGroupOpenDeliverModel
	} else {
		sendCardRequest.ImRobotOpenSpaceModel = imRobotOpenSpaceModel
		sendCardRequest.ImRobotOpenDeliverModel = imRobotOpenDeliverModel
	}
	sendCardResponse, err := dingtalkClient.SendCard(sendCardRequest)
	if err != nil {
		return nil, err
	}
	logger.GetLogger().Infof("response=%+v", sendCardResponse)
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
	cli.RegisterCardCallbackRouter(OnCardCallback)

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
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力，并发送卡片消息
4. 在 Stream Client 中注册卡片回调方法，处理卡片互动互动的事件，并更新卡片

## 运行机器人服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `[INFO] connect success, sessionId=[...]`

```shell
go mod tidy
go run card_callback.go --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](/docs/explore/tutorials/stream/bot/go/create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

## 效果如下

以下的示例图中，三次交互分别演示了：
1. 发送任意消息，收到卡片消息
2. 发送任意消息，收到卡片消息，点击「同意」
3. 发送任意消息，收到卡片消息，点击「拒绝」

![卡片示例](/img/explore/stream/bot/card-demo.jpg)

## 最佳实践

1. 本文代码中，你可能会对`messageCardTemplate`对应的卡片 JSON 体存在疑惑，不清楚如何编写这段 JSON 代码。这是卡片消息普通版的 JSON 内容，可以通过[搭建平台](https://card.dingtalk.com/card-builder)可视化拖拽生成；
2. 你也可以不使用更新卡片接口，只用发送卡片接口。通过发送交互式卡片，展示比 Markdown 消息更丰富的互动体验；
3. 本文仅介绍了**互动卡片普通版**，如果需要更灵活的交互体验，可以通过[互动卡片相关技术文档汇总](/docs/learn/card/intro)了解如何使用**互动卡片高级版**。

## 相关链接

* [互动卡片相关技术文档汇总](/docs/learn/card/intro)
* [互动卡片高级版](https://open.dingtalk.com/document/orgapp/overview-card)