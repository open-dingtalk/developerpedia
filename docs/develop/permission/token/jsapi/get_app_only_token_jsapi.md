---
sidebar_position: 3
---

# 钉钉端内获取应用的访问凭证

本文介绍了如何使用[授权组件SDK](/docs/develop/permission/token/jsapi/auth_module.md)在钉钉端内获取应用的访问凭证。

## 时序图
![凭证模式jsapi时序图](/img/develop/permission/client_credential_flow_sequence_jsapi.png)


## 步骤一：应用配置
1. 确认你的应用想要调用的 OpenAPI 。例如你的应用希望获取离职员工列表，想要调用 OpenAPI [获取离职员工列表](https://open.dingtalk.com/document/isvapp/obtain-the-list-of-employees-who-have-left)。
2. 申请权限。在开发者后台为你的应用申请 OpenAPI 对应的权限点。例如 `Pro.HrmDismission.ReadWrite`。

## 步骤二：调用授权组件获取管理员授权
SDK详情：[授权组件SDK](/docs/develop/permission/token/jsapi/auth_module.md)
### 请求
```js
openAuth({
    clientId:'suitexxx', // 应用的 ClientID
    corpId:'dingxxx', // 授权组织的 CorpId
    rpcScope:'Mock.Scope.Code', // 权限点 Code
    fieldScope:'', // 特殊权限点 Code, 在应用访问场景为空
    type:1 // 0 标识授委托授权；1 标识应用授权
}).then((res)=>{
    // 处理返回数据
})
```

| 参数         | 类型     | 是否必填 | 示例                          | 说明                                                                 |
|:-----------|:-------|:-----|:----------------------------|:-------------------------------------------------------------------|
| clientId   | string | 是    | suitexxx                    | 应用的 ClientID。                                                      |
| corpId     | string | 是    | dingxxxx                    | 授权组织的 CorpId。                                                      |
| rpcScope   | string | 是    | Pro.HrmDismission.ReadWrite | 权限点 Code 列表，使用英文逗号分隔。<br/>你也可以填写*.default*，即默认填写所有应用申请的应用权限点 Code。 |
| fieldScope | string | 不填   |                             | 字段 Code, 在应用访问场景为空。                                                |
| type       | string | 是    | 1                           | 0：申请委托授权 <br/>1：申请应用授权<br/> 应用授权填1。                                |


### 响应
* 用户同意委托授权
```js
{
    status: 'ok', 
    result: null
}
```

* 管理员拒绝授权
```js
{
    status: 'cancel', 
    result: null
}
```

* 用户向管理员发送了授权申请，等待授权
```js
{
    status: 'toAdmin', 
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

| 参数     | 类型     | 示例  | 说明                                                                            |
|:-------|:-------|:----|:------------------------------------------------------------------------------|
| status | string | ok  | 授权结果：<br/>ok：授权成功<br/>failed：授权异常<br/>cancel：拒绝授权<br/>toAdmin：向管理员发送授权申请，等待授权 |
| result | object |     | 返回结果。                                                                         |


## 步骤三：获取应用的访问凭证
参考官方文档：[获取应用的访问凭证 Access Token](https://open.dingtalk.com/document/isvapp/obtain-the-access_token-of-the-authorized-enterprise)
```http request
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

## 步骤四：使用 Access Token 调用 OpenAPI
恭喜你成功获得应用的访问凭证，你可以用它请求对应的 OpenAPI 。如果 Refresh Token 过期，重复上述步骤。


## 贴心示例
### 示例一
假设你的应用想要调用 OpenAPI [获取离职员工列表](https://open.dingtalk.com/document/isvapp/obtain-the-list-of-employees-who-have-left)。

* Step 1: 在开发者后台为你的应用申请权限点：`Pro.HrmDismission.ReadWrite`。
* Step 2: 请求
```js title="请求"
openAuth({
    clientId:'suitexxx', // 应用的 ClientID
    corpId:'dingxxx', // 授权组织的 CorpId
    rpcScope:'Pro.HrmDismission.ReadWrite',
    fieldScope:'',
    type:1
}).then((res)=>{
    // 处理返回数据
})
```
* Step 3：获取应用的访问凭证。
* Step 4：用应用的访问凭证调用[获取离职员工列表](https://open.dingtalk.com/document/isvapp/obtain-the-list-of-employees-who-have-left)。

### 示例二
假设你不想一个一个填写rpcScope字段中的应用权限点code，你可以填写*.default*，如下。 授权组件将把你的应用上申请的所有应用权限点展示给管理员授权。
```js title="请求"
openAuth({
    clientId:'suitexxx', // 应用的 ClientID
    corpId:'dingxxx', // 授权组织的 CorpId
    rpcScope:'.default', // 应用申请的所有应用权限点都会展示在授权组件上
    fieldScope:'',
    type:1
}).then((res)=>{
    // 处理返回数据
})
```