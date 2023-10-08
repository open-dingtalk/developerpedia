---
sidebar_position: 2
---

# 应用的访问凭证

如果你的应用选择使用应用访问，那么你的应用需要使用"应用的访问凭证"调用 OpenAPI 访问资源。

由于应用再获取管理员授权后，就可以直接以应用的身份直接调用 OpenAPI，没有指定用户的限制，因此应用的访问凭证也被称为 "App-Only" Access Token。

* 如果你的应用需要获取用户的委托许可，然后调用钉钉 OpenAPI 访问资源，可以参考[用户委托的访问凭证](/docs/learn/permission/token/user_app_token)。
* 如果您想了解更多，什么是“委托访问”和“应用访问”，可移步[委托访问](/docs/learn/permission/intro/delegated_permission)和[应用访问](/docs/learn/permission/intro/application_permission)。


## 获取和使用访问凭证

### 时序图
钉钉开放平台提供的应用访问授权，遵循 OAuth 2.0 标准的凭证模式 [RFC 6749 Client Credentials Grant](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4)。
![凭证模式时序图](/img/learn/permission/client_credential_flow_sequence.png)

### 建议：首先让用户登录应用
如果让用户先登录应用，可以提前让你的应用知道用户登录的是什么组织，以便于后续获取这个组织的授权。而且用户先登录时，可以先让用户完成委托权限的授权，便于展示用户头像、昵称等基本信息，这样可以保证基础的用户使用体验；后续如果用到必须由管理员授权的功能时，应用再向管理员获取授权。
“首先让用户登录应用”不是必需的，只是一个建议，但它可以让应用有更好的用户使用体验。

## 选择获取授权同意的交互形式
* **选择一**：如果您希望管理员在浏览器上完成授权操作，效果如下图，可以参考文档：[浏览器内获取应用的访问凭证](/docs/develop/permission/token/get_app_only_token_browser)。由于浏览器不持有管理员身份，因此管理员需要先登录再授权。
![浏览器内管理员授权UI](/img/learn/permission/client_credential_flow_browser_ui.png)

* **选择二**：如果您希望用户在钉钉端内完成授权操作，效果如下图，可以参考文档：[钉钉端内获取应用的访问凭证](/docs/develop/permission/token/get_app_only_token_jsapi)。由于钉钉客户端已持有管理员身份，因此管理员不需要登录，可以直接授权。

|                                       移动端                                        |                                 PC端                                  |
|:--------------------------------------------------------------------------------:|:--------------------------------------------------------------------:|
| ![移动端内管理员授权UI](/img/learn/permission/client_credential_flow_jsapi_mobile_ui.png) | ![PC端内管理员授权UI](/img/learn/permission/auth_code_flow_jsapi_pc_ui.png) |

