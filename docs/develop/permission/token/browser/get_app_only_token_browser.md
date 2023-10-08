---
sidebar_position: 2
---

# 浏览器内获取应用的访问凭证
应用以应用的身份访问资源时（[应用访问](/docs/learn/permission/intro/application_permission)），可参考本文流程获取应用访问凭证。在钉钉开放平台上，应用想要获取应用访问的权限，必须经过组织管理员的同意。
:::info Note
本文中描述的流程，目前只适用于企业三方应用。
:::

## 步骤一：应用配置
1. 登录钉钉开发者后台
2. 进入已创建的应用，在“凭证与基础信息”里可以看到应用的 ClientId 和 ClientSecret 。

![应用的ClientId和ClientSecret](/img/develop/permission/client_id_secret.png)

3. 在“安全设置”的“重定向URL”中配置重定向地址。为便于调试，测试阶段可以使用 http://127.0.0.1:8000 ，测试通过后换成公网可访问地址即可。

![配置回调地址](/img/develop/permission/redirect_uri_config.png)


4. 给你的应用勾选需要调用的 OpenAPI 对应的权限点。比如勾选宜搭表单数据读权限 `Yida.Form.Read` 。

![配置开发态权限点](/img/develop/permission/dev_scope_config.png)

:::info Note 
* 目前，权限管理中的“个人权限"类目下的权限点是**委托权限点**，需要使用委托授权，请移步[获取用户委托的访问凭证](/docs/learn/permission/token/user_app_token)。
* 其他类目下的权限点均为**应用权限点**，请继续参考本文获取应用的访问凭证。
* 权限点的类别，即权限点是委托权限点还是应用权限点，将在开发者后台的权限管理中透出，敬请期待。
:::

## 步骤二：获取 Access Token
钉钉开放平台提供的应用访问授权，遵循OAuth2.0标准的凭证模式 [RFC 6749 Client Credentials Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4)。
![凭证模式时序图](/img/learn/permission/client_credential_flow_sequence.png)

### 建议：首先让用户登录应用
如果让用户先登录应用，可以提前让你的应用知道用户登录的是什么组织，以便于后续获取这个组织的授权。而且用户先登录时，可以先让用户完成委托权限的授权，便于展示用户头像、昵称等基本信息，这样可以保证基础的用户使用体验；后续如果用到必须由管理员授权的功能时，应用再向管理员获取授权。
“首先让用户登录应用”不是必需的，只是一个建议，但它可以让应用有更好的用户使用体验。

### 步骤 2-1：获取管理员授权
按照下方教程构建授权链接。
:::info 开发者Tip
把拼接好的链接贴到浏览器里，即可预览钉钉提供的授权服务。
:::

```http
https://account.dingtalk.com/{corpId}/adminConsent?
client_id={your_client_id}
&redirect_uri={your_redirect_uri}
&state={your_string}
```

| 参数           | 是否必填 | 说明                                                       |
|:-------------|:-----|:---------------------------------------------------------|
| corpId       | 是    | 组织ID，应用向此组织的管理员申请权限。                                     |
| client_id    | 是    | 钉钉开放平台上应用的唯一凭证标识。                                        |
| redirect_uri | 是    | 钉钉处理完请求后会把响应发送到此重定向地址。此重定向地址必须注册在对应的应用里。请求中的地址必须是URL编码的。 |
| state        | 推荐使用 | 这个值会在响应中原样返回，它可以是您想要的任何内容的字符串。                           |

* 管理员会经历登录和授权：
  * 管理员点击“允许”后，钉钉授权服务器会把信息回调给应用配置的重定向URL地址。 
  * 授权页上展示的是你在开发者后台给应用勾选的所有应用权限点，详见步骤一的第4点。 
  * 如果所有的权限点均已被授，即应用没有待授权的权限点，授权服务器会直接回调成功。

![浏览器内管理员授权UI](/img/learn/permission/client_credential_flow_browser_ui.png)

```http title="成功的响应"
GET http://127.0.0.1:8000?corp_id=ding123&admin_consent=True&state=dddd
```

| 参数            | 说明                             |
|:--------------|:-------------------------------|
| corp_id       | 组织ID，此组织同意授予权限给当前应用。           |
| admin_consent | 授权成功，返回True。                   |
| state         | 这个值会在响应中原样返回，它可以是您想要的任何内容的字符串。 |


```http title="失败的响应"
GET http://127.0.0.1:8000?corp_id=ding123&admin_consent=True&state=dddd
```

| 参数                | 说明                        |
|:------------------|:--------------------------|
| error             | 错误代码字符串，可用于对错误类型进行分类。     |
| error_description | 详细的错误原因描述，可以帮助您确定错误的根本原因。 |



### 步骤 2-2：使用 ClientId 和 ClientSecret 获取 Access Token
参考官方文档：[获取应用的访问凭证 Access Token](https://open.dingtalk.com/document/isvapp/obtain-the-access_token-of-the-authorized-enterprise)
```http
POST /v1.0/oauth2/corpAccessToken HTTP/1.1
Host:api.dingtalk.com
Content-Type:application/json

{
  "suiteKey" : "suite123",
  "suiteSecret" : "*******",
  "authCorpId" : "ding123",
  "suiteTicket" : "*******"
}
```

## 步骤三：使用 Access Token 调用 OpenAPI
到目前为止您的应用已经成功获取了应用访问的 Access Token ，你可以用它请求对应的 OpenAPI 。如果 Access Token 过期，重复步骤：使用 ClientId 和 ClientSecret 获取 Access Token 。


## 错误码

| 错误码    | 错误原因                                                                                        |
|--------|---------------------------------------------------------------------------------------------|
| 400009 | corpId 参数错误。                                                                                |
| 500101 | client_id 参数错误。                                                                             |
| 400010 | redirect_uri 参数错误，和开发者后台配置的重定向URL要匹配。                                                       |
| 500407 | 当前登录用户不是管理员，要联系管理员进行授权管理。                                                                   |
| 500408 | 当前登录用户不是该组织的成员，无法进行授权管理。                                                                    |
| 70003  | 当前组织没有开通过此应用，需要通过应用市场查找并开通应用。详见[应用市场开通授权](/docs/learn/permission/manage/app_store_consent)。 |
