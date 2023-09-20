---
sidebar_position: 5
---

# 如何写好技术教程

> A tutorial, in education, is a method of transferring knowledge and may be used as a part of a learning process. More interactive and specific than a book or a lecture, a tutorial seeks to teach by example and supply the information to complete a certain task. 
> -- From [Wikipedia](https://en.wikipedia.org/wiki/Tutorial)

教程是指为了向人们传授特定知识、技能或操作方法而设计的一种教学材料或资源。有别于手册和书籍，技术教程更侧重于互动性和具体性，通过示例进行教学帮助人们完成特定任务。

## 教程的特点

1. **具体性**：完成特定的具体任务。这一点有别于手册，手册更侧重于大而全的描述系统全部功能特性；
2. **互动性**：通过一系列存在先后依赖关系的动作，完成一项具体任务。因此，教程的文档可以直接用于视频或者面对面的授课和教学。这一点有别于 API 列表，API 列表中不同文档之间关系相对较独立；

## 教程编写指引

1. **让人兴奋**：教程的示例必须完成一项让人兴奋的目标，例如 5分中搭建一个钉钉 Stable Diffusion 机器人，或 5分钟接入钉钉事件订阅；
2. **简单的任务**：不追求大而全，让阅读者可以短时间内快速学习和使用，建议学习时长不超过 60 分钟，最好是在30分钟以内；
3. **示例导向**：通过示例来引导，而不是技术原理描述；
4. **清晰易懂**：好的示例要满足以下“双清单”，简单易懂的“双清单”可以增强阅读者信心，让读者快速得出“我也可以”的结论：
   1. **材料清单**：在教程开头写好依赖的准备工作，例如 钉钉账号、Go 开发环境、Python 3.10 环境等
   2. **步骤清单**：详细的步骤说明，从零开始到完成示例预期的目标
5. **完成一项任务，而不是多个**
6. **减轻读者负担**：每个步骤独立写成一个文档，多个步骤文档构成一篇教程。避免写长文，长文会给读者带来极大的阅读负担；

## 好的教程建议

1. 材料清单尽可能低门槛易获取
   1. 不好的案例：教程涉及服务部署，依赖云服务器、域名资源的话，很多人会因为缺乏这类资源而无法体验整个教程内容；
   2. 好的案例1：钉钉提供 Stream 模式接入事件推送、机器人收消息等，不依赖服务器、域名等资源，人人都可以快速接入；相关教程可以从[这里](/docs/explore/tutorials/stream/overview)获取
   3. 好的案例2：[Heroku](https://www.heroku.com/) 平台的产品设计中，为开发者提供了免费的低配服务器、二级域名、数据库，帮助开发者基于示例实现了 5 分钟从零构建应用到部署上线；因为它做到了极致的简单，在国外有不少非专业程序员入门编程开发是通过 Heroku 的教程完成的。
2. 步骤清单尽可能简短易执行
   1. 案例1：钉钉机器人教程中，开发者在接收到机器人消息后，普遍都需要回复消息。而无论是通过 Webhook 还是 OpenAPI 都需要非常多的步骤和外部代码依赖。通过在 SDK 中内置常用的 reply_text() 和 reply_markdown() 方法，开发者可以基于这些方法快速完成回复消息的任务；
   2. 案例2：静态语言中解析 JSON 数据需要一定的外部代码依赖，例如 Model 定义等，如果在 SDK 中预先定义好相关的 Model 定义，那么教程中示例代码就可以做到极致的简单；
3. 尽可能减少外部知识/信息依赖
   1. 案例1：钉钉应用开发依赖当前用户拥有开发者权限，为此在教程中描述了如何申请该权限；
   2. 案例2：尽可能多的添加链接，例如 Heroku 中，对于 Python、Node.js、JDK 等外部依赖项都添加了其官网链接，让非专业程序员可以零知识依赖逐渐学习开发到应用构建和部署；
   3. 案例3：Ubuntu 的 USB 启动盘制作教程中，对于磁盘烧录工具，提供了其下载链接和引导，而不是“假设”读者掌握了该信息，避免读者在该步骤受阻；

## 相关链接

* [Wikipedia: Tutorial](https://en.wikipedia.org/wiki/Tutorial)
* [教程示例：Getting Started on Heroku with Go](https://devcenter.heroku.com/articles/getting-started-with-go)
* [教程示例：Create a bootable USB stick on Ubuntu](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview)
* [教程示例：Build Java apps with Microsoft Graph](https://learn.microsoft.com/en-us/graph/tutorials/java)
* [钉钉 Stream 模式教程清单](/docs/explore/tutorials/stream/overview)