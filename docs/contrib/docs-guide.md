---
sidebar_position: 4
---

# 如何写好文档（持续更新中）

为了持续改善文档质量，特编写相关指引，通过简单易懂的规则，让每个参与钉钉开发者百科的开发者都可以持续输出高质量文档。

## 术语规范

专业术语，需要保持其大小写正确性：

* **DingTalk**：钉钉。避免使用 dingTalk、Dingtalk

常用英文单词，或者总所周知的术语，按照一个单词来使用，避免拆成两个单词：

* **Timestamp**，而不是 timeStamp、time-stamp
* **Callback**，而不是 callBack、call_back
* **Input**，而不是 InPut、inPut
* **Output**，而不是 OutPut、outPut
* **Endpoint**，而不是 EndPoint、endPoint

有特定大小写规则的术语，不要混淆代码规范和文档规范

* **OpenAPI**，在文档中不要写成了 openApi、OpenApi、OAPI
* **App ID**
  * 在文档中，一律使用“App ID”，两个单词中间有空格。不是 appId、AppID、AppId、Appid、appid
  * 在代码中，遵守相应编程语言的规范，例如 Java 代码中的 appId 和 Python 代码中的 app_id 都是推荐的用法
* **User ID**，同上，在文档中不要写成 userId、UserID
* **Corp ID**，同上，在文档中不要写成 corpId、CorpID

特定产品/功能术语

* **Private Chat**：IM 中的单聊在钉钉中翻译为 Private Chat，不要用 Single Chat 

## 排版规范

* 中英文之间要有空格
  * 正确：钉钉 OpenAPI 使用规范
  * 错误：钉钉OpenAPI使用规范
* 中文和数字之间要有空格
  * 正确：已开放超过 3000 个接口
  * 错误：已开放超过3000个接口
* 数字和单位之间不需要空格
  * 正确：10MB
  * 错误：10 MB
* 全角标点和其他字符之间不加空格
  * 正确：已经成功接入钉钉 OpenAPI，开始业务功能集成
  * 错误：已经成功接入钉钉 OpenAPI ，开始业务功能集成

## 相关链接

* [中英文排版指南](https://www.ifeegoo.com/chinese-and-english-typesetting-guidelines.html)