---
sidebar_position: 2
---

# 钉钉端内获取用户委托的访问凭证

本文介绍了如何使用[授权组件SDK](/docs/develop/permission/token/jsapi/auth_module.md)在钉钉端内获取用户委托的访问凭证。

## 时序图
![授权码模式jsapi时序图](/img/develop/permission/auth_code_flow_sequence_jsapi.png)


## 步骤一：应用配置
1. 确认你的应用想要调用的 OpenAPI 。例如你的应用希望获取用户个人信息，想要通过调用 OpenAPI [获取用户通讯录个人信息](https://open.dingtalk.com/document/isvapp/dingtalk-retrieve-user-information#)获取。
2. 申请权限。在开发者后台为你的应用申请 OpenAPI 对应的权限点。例如 `Contact.User.Read`。

## 步骤二：调用授权组件获取授权码
SDK详情：[授权组件SDK](/docs/develop/permission/token/jsapi/auth_module.md)
### 请求
```js
openAuth({
    clientId:'suitexxx', // 应用的 ClientID
    corpId:'dingxxx', // 授权组织的 CorpId
    rpcScope:'Mock.Scope.Code', // 权限点 Code
    fieldScope:'Mock.Scope.Code', // 特殊权限点 Code, 使用场景较少，常为空
    type:0 // 0 标识授委托授权；1 标识应用授权
}).then((res)=>{
    // 处理返回数据
})
```

| 参数          | 类型      | 是否必填                      | 示例                                | 说明                                  |
|:------------|:--------|:--------------------------|:----------------------------------|:------------------------------------|
| clientId    | string  | 是                         | suitexxx                          | 应用的 ClientID。                       |
| corpId      | string  | 是                         | dingxxxx                          | 授权组织的 CorpId。                       |
| rpcScope    | string  | rpcScope与fieldScope至少传一项  | Contact.User.Read,Todo.Todo.Read  | 权限点 Code 列表，使用英文逗号分隔。               |
| fieldScope  | string  | rpcScope与fieldScope至少传一项  | Contact.User.mobile               | 字段 Code 列表，使用场景较少。                  |
| type        | string  | 是                         | 0                                 | 0：申请委托授权 <br/>1：申请应用授权<br/> 委托授权填0。 |


### 响应
* 用户同意委托授权
```js
{
    status: 'ok', 
    result: { 
        authCode:'xxxxxxx'
    }
}
```

* 用户拒绝授权
```js
{
    status: 'cancel', 
    result: null
}
```

* 授权异常
```js
{
    status: 'failed',
    result: null
}
```
#### 响应参数

| 参数               | 类型      | 示例           | 说明                                                 |
|:-----------------|:--------|:-------------|:---------------------------------------------------|
| status           | string  | ok           | 授权结果：<br/>ok：授权成功<br/>failed：授权异常<br/>cancel：拒绝授权  |
| result           | object  |              | 返回结果。                                              |
| result.authCode  | string  | mrtjjwdmxxx  | 授权码。授权成功时返回，用于后续兑换access token。                    |


### 错误码
#### 参数错误

| 错误码code | 错误原因            |
|---------|-----------------|
| 400001  | 空请求。            |
| 400006  | clientId 参数必填。  |
| 400007  | corpId参数必填。     |
| 400008  | 用户身份ID为空，请联系钉钉。 |

#### 权限点相关错误

| 错误码code | 错误原因                         |
|---------|------------------------------|
| 500201  | 权限点code错误。                   |
| 500202  | rpcScope参数需要填写rpc类型的权限点。     |
| 500203  | fieldScope参数需要填写field类型的权限点。 |
| 500204  | 应用授权需要填写应用类型的权限点。            |
| 500205  | 委托授权需要填写委托类型的权限点             |


#### 应用配置相关错误

| 错误码code | 错误原因                 |
|---------|----------------------|
| 500101  | 应用不存在。               |
| 500102  | 应用未添加任何权限点。          |
| 500103  | 获取应用信息失败。            |
| 500104  | 应用未添加该权限点，请在开发者后台添加。 |

#### 授权相关错误
| 错误码code | 错误原因      |
|---------|-----------|
| 500404  | 更新授权记录失败。 |



## 步骤三：用授权码兑换委托访问凭证
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

## 步骤四：用用户委托的访问凭证调用 OpenAPI
恭喜你成功获得用户委托的访问凭证，请调用相应的 OpenAPI 吧！


## 贴心示例
### 示例一
获取用户个人手机号和个人信息是应用的常见操作。假设你的应用想要调用 OpenAPI [获取用户通讯录个人信息](https://open.dingtalk.com/document/isvapp/dingtalk-retrieve-user-information#)。

* Step 1: 在开发者后台为你的应用申请权限点：`Contact.User.Read` 和 `Contact.User.mobile`。
![申请权限点Contact.User.Read](/img/develop/permission/contact_user_jsapi_example.png)
* Step 2: 请求
```js title="请求"
openAuth({
    clientId:'suitexxx', // 应用的 ClientID
    corpId:'dingxxx', // 授权组织的 CorpId
    rpcScope:'Contact.User.Read',
    fieldScope:'Contact.User.mobile',
    type:0
}).then((res)=>{
    // 处理返回数据
})
```
* Step 3：用授权码兑换用户委托的访问凭证。
* Step 4：用用户委托的访问凭证调用[获取用户通讯录个人信息](https://open.dingtalk.com/document/isvapp/dingtalk-retrieve-user-information#)。

### 示例二
为用户创建待办是应用的常见操作。假设你的应用想要调用 OpenAPI [创建钉钉待办任务](https://open.dingtalk.com/document/isvapp/add-dingtalk-to-do-task)。

* Step 1：在开发者后台为你的应用申请权限点：`Todo.Todo.Write`。
* Step 2: 请求
```js title="请求"
openAuth({
    clientId:'suitexxx', // 应用的 ClientID
    corpId:'dingxxx', // 授权组织的 CorpId
    rpcScope:'Todo.Todo.Write',
    fieldScope:'',
    type:0
}).then((res)=>{
    // 处理返回数据
})
```
* Step 3：用授权码兑换用户委托的访问凭证。
* Step 4：用用户委托的访问凭证调用 [创建钉钉待办任务](https://open.dingtalk.com/document/isvapp/add-dingtalk-to-do-task)。
