---
sidebar_position: 2
---

# AI 助理技能访问用户授权的资源

AI 助理如果想要获取用户资源，比如用户的个人信息、手机号、日程、待办事项等，可以参考本文的流程，以实现 AI 助理在用户允许的情况下，合法地访问用户的资源。通过合理配置权限和获取用户授权，AI 助理能够为用户提供更加个性化和高效的服务。

## 前提条件

- 请确保开启规划推理强化：

![image.png](/img/develop/permission/enable_planning.png)

## 步骤一：AI 助理技能配置权限点

1.  进入 AI 助理编辑页面，点击技能列表中的添加按钮，进入技能配置。
    

![image.png](/img/develop/permission/add_action.png)

2.  点击自定义技能，配置你的自定义能力。
    

![image.png](/img/develop/permission/create_custom_action.png)

3.  点击获取我的应用信息，跳转进入 AI 助理开发者后台，配置技能所需的权限点。
    

![image.png](/img/develop/permission/get_aiassistant_application.png)

4.  点击权限管理，进入权限点列表。比如你想要获取通讯录个人信息和手机号，则可以点击申请权限，申请权限点 `Contact.User.Read` 和 `Contact.User.mobile`。
    

![image.png](/img/develop/permission/apply_permissions.png)

:::tip 开发者TIP
注意：AI 助理自定义技能上只能使用委托权限点。现在如果你想知道某个权限点属于委托，欢迎进群咨询：“钉钉权限系统交流群”，群号： 27520024199。
:::

## 步骤二：自定义技能配置权限点

1.  返回到自定义能力配置页面配置对应的权限点 Code。
    

![image.png](/img/develop/permission/add_permissions_scopes.png)

比如你想要获取通讯录个人信息和手机号，则可以把权限点 `Contact.User.Read` 和 `Contact.User.mobile`配置到技能上。配置示例：

```yaml title="权限点配置"
x-dingtalk-delegated-scopes:
  - Contact.User.Read
  - Contact.User.mobile
```

## 步骤三：自定义技能获取 OAuth 授权码

1.  配置获取 OAuthAuthCode 的助理上下文配置：
    

![image.png](/img/develop/permission/add_x_dingtalk_context.png)

配置示例：

```yaml title="oauthAuthCode配置"
- name: oauthAuthCode 
  in: query
  description: OAuth授权码
  schema:
    type: string
    x-dingtalk-context:
      property: currentUser
      format: oauthAuthCode
```

2.  点击保存，并发布助理。
    

## 步骤四：执行自定义技能

1.  在和 AI 助理对话过程中，如果你触发了配置有权限点的自定义技能，此时 AI 助理会按照配置，向用户申请相应的权限，等待用户授权。
    

![image.png](/img/develop/permission/allow_permissions.png)

2.  如果用户点击允许访问，开发者可在自定义技能接口的请求体中获取到相应的 OAuth 授权码。示例如下：
    

![image.png](/img/develop/permission/get_oauthauthcode.png)

3.  如果用户点击不允许访问，则自定义技能无法拿到 OAuth 授权码。
    

## 步骤五：获取 Access Token

根据获取到的 OAuth 授权码，参考[此文档](https://open.dingtalk.com/document/orgapp/obtain-user-token)用授权码兑换访问凭证（Access Token 和 Refresh Token）。

## 步骤六：使用 Access Token 调用 OpenAPI

恭喜你成功获得用户委托的访问凭证，你可以用它请求对应的 OpenAPI 。例如，可以通过[获取用户通讯录个人信息](https://open.dingtalk.com/document/isvapp/dingtalk-retrieve-user-information)接口，获取用户的ID、头像等信息。

如果 Refresh Token 过期，重复上述步骤。