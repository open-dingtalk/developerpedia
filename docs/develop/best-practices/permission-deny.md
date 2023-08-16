---
sidebar_position: 1
---

# “接口调用没有权限” 问题最佳实践

当你调用钉钉开放平台 REST API 时候，如果遇到下面错误返回，说明应用缺乏调用 API 的权限。

```json
{
  "code": "Forbidden.AccessDenied.AccessTokenPermissionDenied",
  "requestid": "e64a36ef-2fb4-4bc5-bbd8-80e0f54218f9",
  "message": "没有调用该接口的权限，接口权限申请参考：https://open.dingtalk.com/document/orgapp-server/add-api-permission",
  "accessdenieddetail": {
    "requiredScopes": [
      "Contact.User.Read"
    ]
  }
}
```

## 原因分析和问题解决

以上问题可能的原因和解决方案如下

### 原因一：应用未申请权限点

进入钉钉开发者后台，应用开发-权限管理中搜索权限点，并申请对应权限。以上错误返回中“requiredScopes”中有缺失的权限点列表（"Contact.User.Read"），搜索该权限点并申请即可。详细步骤参见[文档](https://open.dingtalk.com/document/orgapp-server/add-api-permission)。

### 原因二：已申请权限未获得授权

应用申请权限之后，必须获得组织或个人的授权才允许使用。

授权途径可以有多种：

1. **首次开通授权**：管理员首次开通应用时候需要点击同意完成授权。详见[授权说明](https://open.dingtalk.com/document/isvapp/applications-authorization)
2. **使用中授权**：如果应用开发者在企业开通之后，为应用添加新的权限点。那么，这个新的权限点就处于未授权状态，需要通过接入“统一授权套件”完成授权，详见[接入流程](https://open.dingtalk.com/document/personalapp/access-process)
3. **手动紧急授权**：如果应用未接入统一授权套件，出现无权限问题，这时候来不开发和发布情况下，可以通过这种方式联系企业管理员手动操作授权来应急：企业管理员点击工作台 - 进入管理员Tab页 - 点击应用管理 - 在已开通的应用列表中找到对应的应用，点击应用名称 - 弹出的选择框中，选择“设置” - 点击“授权管理” - 点击“授权”按钮完成授权

注意：手动紧急授权仅用于特殊情况下应急处理，所有应用必须正确接入[统一授权套件](https://open.dingtalk.com/document/personalapp/access-process)，才能彻底消除接口调用无权限问题。

## 常见问题解答

**1、为什么有时候有权限，有时无权限？**

有多种情况会出现这种问题

1. 不同场景下对应了同一个接口/权限点
2. 有的企业授权了，有的企业没授权
3. 有的企业授权了，但是后来又被管理员取消了

以上问题通过接入[统一授权套件](https://open.dingtalk.com/document/personalapp/access-process)都可以得到解决。

**2、是否一定要接入[统一授权套件](https://open.dingtalk.com/document/personalapp/access-process)**

是的，正规的应用原则上必须要要接入。否则会因为这些原因出现无权限问题

1. 企业管理员因为各种原因，包括误操作，取消了权限
2. 应用迭代升级，支持了新功能，背后调用了新的接口和新的权限点，这种情况下对于已开通的企业肯定会出现无权限问题

## 寻求帮助

当以上方法都无法解决你的问题时候，可以通过[技术支持](/docs/explore/support)提交你的问题反馈，以寻求帮助。

为了高效解决问题，提交反馈时候务必提供一下信息：

1. 应用 ClientID （对应 AppKey 或者 SuiteKey）
2. 调用接口的日期和时间
3. 调用的接口URL，或者对应的开放平台文档链接，或者调用 SDK 的相关代码 （推荐提供接口 URL ，或者接口对应的文档 URL）
4. 调用接口时候传入的参数，注意对敏感信息脱敏。脱敏时候尽量保留 json 数据的格式信息
5. 钉钉开放平台返回的错误信息
6. 接口的 RequestID


:::caution

为了保护的你应用安全，以及使用你应用的客户信息安全，请不要在问题反馈中携带隐私信息。例如 ClientSecret、用户AT聊天机器人的消息内容等。

如果你在问题沟通群中反馈问题时候，不小心提交了隐私信息，群管理员发现后将会立即撤回该消息，以避免你的应用和使用你应用的客户信息发生泄漏。

:::