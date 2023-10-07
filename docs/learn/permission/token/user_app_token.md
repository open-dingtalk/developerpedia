---
sidebar_position: 1
---

# 获取用户委托的访问凭证
如果你的应用需要获取用户的委托许可，然后调用钉钉 OpenAPI 访问用户的资源，请参考下文获取用户委托的访问凭证。
* 如果你的应用需要获取应用访问许可，然后调用钉钉 OpenAPI 访问资源，可以参考[获取应用的访问凭证](/docs/learn/permission/token/app_only_token)。 
* 如果您想了解更多，什么是“委托访问”和“应用访问”，可移步[委托访问](/docs/learn/permission/intro/delegated_permission)和[应用访问](/docs/learn/permission/intro/application_permission)。

## 获取和使用访问凭证（Access Token）的时序图
钉钉开放平台提供的委托访问授权，遵循 OAuth 2.0 标准的授权码模式 [RFC 6749 Authorization Code Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1)。
![授权码模式时序图](/img/learn/permission/auth_code_flow_sequence.png)

## 选择应用获取授权的交互形式
* **选择一**：如果您希望用户在浏览器上完成授权操作，效果如下图，可以参考文档：[浏览器内获取用户委托的委托访问凭证](/docs/develop/permission/token/get_user_app_token_browser)。由于浏览器不持有用户身份，因此用户需要先登录再授权。
![浏览器内用户授权UI](/img/learn/permission/auth_code_flow_browser_ui.png)

* **选择二**：如果您希望用户在钉钉端内完成授权操作，效果如下图，可以参考文档：[钉钉端内获取用户委托的访问凭证](/docs/develop/permission/token/get_user_app_token_jsapi)。由于钉钉客户端已持有用户身份，因此用户不需要登录，可以直接授权。

|                                   移动端                                   |                                 PC端                                 |
|:-----------------------------------------------------------------------:|:-------------------------------------------------------------------:|
| ![移动端内用户授权UI](/img/learn/permission/auth_code_flow_jsapi_mobile_ui.png) | ![PC端内用户授权UI](/img/learn/permission/auth_code_flow_jsapi_pc_ui.png) |

