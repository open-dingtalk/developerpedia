---
sidebar_position: 1
---

# 权限概述

权限分为两类：委托权限和应用权限

## 访问场景

作为一个应用开发者，你必须明确你的应用将如何访问资源。应用可以采用委托访问的方式，代表已登录的用户，访问他们的数据；或者采用仅应用访问的方式，用应用的身份访问数据。


### 委托访问（代表用户访问）
● 在这种场景下，用户需要登录应用，应用代表用户访问资源。委托访问需要委托权限（Delegated Permission）。应用和用户都需要被分开授权才能发起请求。更多有关委托权限访问的场景，详见https://alidocs.dingtalk.com/i/nodes/93NwLYZXWy6pzqnesmdnGYKGVkyEqBQm。
● 对于一个应用，必须被授予正确的委托权限。权限是给定资源的权限，是应用可以代表用户访问的内容。更多权限的介绍，详见https://alidocs.dingtalk.com/i/nodes/dpYLaezmVNd76KezT63BnLPo8rMqPxX6。
