---
sidebar_position: 1
---

# 浏览器内获取用户委托的访问凭证

应用受用户的委托访问用户资源时（[委托访问](/docs/learn/permission/intro/delegated_permission)），可参考本文流程获取用户委托的访问凭证。


## 步骤一：应用配置
1. 登录钉钉开发者后台
2. 进入已创建的应用，在“凭证与基础信息”里可以看到应用的 ClientId 和 ClientSecret 。
![应用的ClientId和ClientSecret](/img/develop/permission/client_id_secret.png)
3. 在“安全设置”的“重定向URL”中配置重定向地址。为便于调试，测试阶段可以使用 http://127.0.0.1:8000 ，测试通过后换成公网可访问地址即可。
![配置回调地址](/img/develop/permission/redirect_uri_config.png)
4. 给你的应用勾选需要调用的 OpenAPI 对应的委托类型权限点。比如 `Contact.User.Read` 。

:::info Note
* 目前，权限管理中的“个人权限"类目下的权限点是**委托权限点**。
* 其他类目下的权限点均为**应用权限点**，如果需要使用应用授权，请移步[应用的访问凭证](/docs/learn/permission/token/app_only_token)。
* 权限点的类别，即权限点是委托权限点还是应用权限点，将在开发者后台的权限管理中透出，敬请期待。
:::

## 步骤二：获取 Access Token
钉钉开放平台提供的委托访问授权，遵循 OAuth 2.0 标准的授权码模式 [RFC 6749 Authorization Code Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1)。
![授权码模式时序图](/img/learn/permission/auth_code_flow_sequence.png)


### 步骤2-1：获取授权码
按照下方教程构建授权链接。

:::info 开发者Tip
把拼接好的链接贴到浏览器里，即可预览钉钉提供的授权服务。
:::

```http
https://login.dingtalk.com/oauth2/auth?
client_id={your_client_id}
&redirect_uri={your_redirect_uri}
&state={your_string}
&response_type=code
&prompt=consent
&scope=openid
```

| 参数            | 是否必填 | 说明                                                                                                                                                                     |
|:--------------|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| client_id     | 是    | 应用的 ClientID。                                                                                                                                                          |
| redirect_uri  | 是    | 钉钉处理完请求后会把响应发送到此重定向地址。此重定向地址必须注册在对应的应用里。请求中的地址必须是URL编码的。                                                                                                               |
| state         | 推荐使用 | 这个值会在响应中原样返回，它可以是您想要的任何内容的字符串。                                                                                                                                         |
| response_type | 是    | 请固定填写code。目前钉钉只提供了授权码一种授权响应模式。                                                                                                                                         |
| prompt        | 是    | 固定填写consent，会进入授权确认页。                                                                                                                                                  |
| scope         | 是    | 授权范围，默认展示应用上申请的所有委托类型的权限点。<br/>如填写openid，授权后调用相应 OpenAPI [获取用户通讯录个人信息](https://open.dingtalk.com/document/isvapp/dingtalk-retrieve-user-information#)，获取用户userId。<br/> |

* 用户会经历登录和授权：
  ![浏览器内用户授权UI](/img/learn/permission/auth_code_flow_browser_ui.png)

```http title="成功的响应"
GET http://127.0.0.1:8000?authCode=xxxx&state={your_string}
```

| 参数            | 说明                             |
|:--------------|:-------------------------------|
| authCode      | 授权码                            |
| state         | 这个值会在响应中原样返回，它可以是您想要的任何内容的字符串。 |


```http title="失败的响应"
GET http://127.0.0.1:8000?error=xxxx&state={your_string}
```

| 参数    | 说明                             |
|:------|:-------------------------------|
| error | 错误原因                           |
| state | 这个值会在响应中原样返回，它可以是您想要的任何内容的字符串。 |


### 步骤2-2：用授权码兑换访问凭证 Access Token
参考官方文档：[获取用户委托的访问凭证 Access Token](https://open.dingtalk.com/document/isvapp/obtain-user-token#)
```http request
POST /v1.0/oauth2/userAccessToken HTTP/1.1
Host:api.dingtalk.com
Content-Type:application/json

{
  "clientId" : "suitexxx",
  "clientSecret" : "dingxxx",
  "code" : "mrtjjwdmxxx",
  "refreshToken" : "",
  "grantType" : "authorization_code"
}
```

## 步骤三：使用 Access Token 调用 OpenAPI
恭喜你成功获得用户委托的访问凭证，你可以用它请求对应的 OpenAPI 。如果 Refresh Token 过期，重复上述步骤。
