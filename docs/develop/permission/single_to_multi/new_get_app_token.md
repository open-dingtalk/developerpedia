---
sidebar_position: 3
---

# 获取应用的Access Token [新🔥]

企业内部应用推荐使用此文档获取Access Token，原文档[获取企业内部应用的accessToken](https://open.dingtalk.com/document/orgapp/obtain-the-access_token-of-an-internal-app)由于一些局限性，比如不能满足应用从单组织到多组织的切换等，将逐步下线。


## 一、获取应用的 ClientId 和 ClientSecret
1. 登录钉钉开发者后台
2. 进入已创建的应用，在“凭证与基础信息”里可以看到应用的 ClientId 和 ClientSecret 。
   ![应用的ClientId和ClientSecret](/img/develop/permission/client_id_secret.png)


## 二、请求方法
```http request
POST /oauth2/{corpId}/token HTTP/1.1
Host:api.dingtalk.com
Content-Type:application/json

{
  "client_id" : "ding123",
  "client_secret" : "*******",
  "grant_type" : "client_credentials"
}
```

| 参数            | 是否必填 | 说明                            |
|:--------------|:-----|:------------------------------|
| corpId        | 是    | 组织ID，应用运行在哪个组织就填写哪个组织的corpId。 |
| client_id     | 是    | 应用的 ClientID。                 |
| client_secret | 是    | 应用的 ClientSecret。             |
| grant_type    | 是    | 必须是client_credentials。        |


```http title="成功的响应"
{
  "access_token": "0a7*********657",
  "expires_in": 7200
}
```

| 参数           | 说明                             |
|:-------------|:-------------------------------|
| access_token | 访问凭证                           |
| expires_in   | 访问凭证有效的时长，单位秒。                 |


## 错误码

| 状态码 | 错误码                    | 错误原因                      |
|-----|------------------------|---------------------------|
| 400 | invalid.client         | 无效的ClientID或ClientSecret。 |
| 400 | unsupported.grant.type | 不支持此授权类型，请检查授权类型参数。       |
| 400 | unauthorized.client    | 应用未被授权。                   |
| 500 | server.error           | 服务器意外错误。                  |




