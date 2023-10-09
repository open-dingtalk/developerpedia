---
sidebar_position: 4
---

# 权限术语
本文介绍了权限相关术语，一部分术语是钉钉开放平台特有的，一部分是权限中心使用到的技术和协议（例如 OAuth 等）的术语。您在浏览开发者文档的过程中会遇到以下术语。

## 应用凭证 ClientID/ClientSecret
在开发者后台创建新的应用时，开放平台会为你的应用生成一对 ClientID/ClientSecret，作为你的应用在开放平台的凭证。
* [ClientID](https://datatracker.ietf.org/doc/html/rfc6749#section-2.2) 是应用唯一的凭证ID，是全局唯一标识（GUID），也是公开的ID。
* [ClientSecret](https://datatracker.ietf.org/doc/html/rfc6749#section-2.3.1) 是应用的凭证密码，是需要保密的。请妥善保管你的 ClientSecret，ClientSecret 泄露会给你的应用带来致命的安全危机。

## 访问凭证 Access Token
访问凭证 Access Token 是授权服务器颁发给应用的用于访问资源的凭证。
* 钉钉开放平台授权服务器颁发的 Access Token 为"引用" Token，即 Access Token 本身是随机的字符串，没有含义。只有通过调用开放平台接口，才能查询 Access Token 中包含的信息，比如颁发时间等。
* 在钉钉开放平台，Access Token 可分类为 "User + App" Token 和 "App-Only" Token。 
  * 当应用使用[委托访问](/docs/learn/permission/intro/delegated_permission)时，使用的是"User + App" Token，因为应用访问资源同时需要用户的权限和应用调用的权限。 
  * 当应用使用[应用访问](/docs/learn/permission/intro/application_permission)时，使用的是"App-Only" Token，因为应用只需要以应用自己的身份发起调用。
* Access Token只在一段时间内有效。授权服务器在颁发 Access Token 的同时会颁发相对过期时间更长的 Refresh Token。

## 授权码 Authorization Code
OAuth 2.0 的[授权码流程](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3)中的授权服务器颁发给应用的一个中间值，过期时间很短。
* 主要用于记录和传递用户授予委托权限给应用的上下文信息。出现在应用需要委托访问时，要获取[用户委托的访问凭证](/docs/learn/permission/token/user_app_token)的流程中。
* 常被简称为 Auth Code 。

## 刷新令牌 Refresh Token
授权服务器在颁发 Access Token 的同时会颁发相对过期时间更长的 Refresh Token。和 Access Token 一样，Refresh Token 也是"引用" Token，本身是随机的字符串，没有含义。

## 权限点 Scopes
权限点是控制应用访问资源范围的机制。只有获取了特定资源的权限点授权，应用才能访问这块资源。
* 权限点是根据对应资源命名的字符串，例如 `Contact.User.Read`，`Todo.Personal.Write`。 权限点命名的最佳实践是采用"资源.操作.限制"（"resource.operation.constraint"）的格式。

## 登录 Authentication
在授权之前，授权服务器需要准确知道资源所有人的身份，知道是"谁"把访问资源的权限授予了应用。因此授权之前，用户（资源所有人）需要先完成登录操作。

## 授权 Authorization
授权指已经明确身份（已登录）的资源所有人允许应用对资源进行访问。

## 授权服务器 Authorization Server
根据 OAuth 2.0 的定义，[授权服务器](https://datatracker.ietf.org/doc/html/rfc6749#page-6)负责在资源所有人成功登录和授权后，颁发访问凭证给应用。在钉钉开放平台场景下，权限中心为 OpenAPI 提供了授权服务器的能力。

## 资源所有人 Resource Owner
根据OAuth 2.0 中定义，[资源所有人](https://datatracker.ietf.org/doc/html/rfc6749#page-6)是能够授予对受保护资源的访问权限的实体。
* 例如，某应用想要通过 OpenAPI 访问一个人的文件，它就需要获取文件所有人的许可。
* 再比如，某应用想要通过 OpenAPI 访问某组织的离职人员列表，它就需要获取组织的许可，组织管理员负责管理组织的资源。

## 访问 Access
应用通过 OpenAPI 对资源进行增删改查的操作在开发者文档中被统称为访问。