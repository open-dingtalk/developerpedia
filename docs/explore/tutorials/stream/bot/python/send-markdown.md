---
sidebar_position: 6
---

# 6. 进阶：发送 Markdown

在本章节中，将会介绍如何回复/发送 Markdown 消息。相比前面介绍的发送文本消息来说，Markdown 消息支持更丰富的图文混排能力，以及富文本交互，可以用于各种场景中展示业务信息。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-go)中获取。

## 创建 Go 模块

```shell
mkdir bot_echo_markdown
cd bot_echo_markdown
```

## 安装依赖

```shell
python3 -m pip install dingtalk-stream
```

## 开发机器人服务

在 bot_echo_markdown 目录下，创建 `echo_markdown.py` 文件，文件内容如下：

```go title="echo_markdown.py" {38-43} showLineNumbers
# !/usr/bin/env python

import argparse
import logging
from dingtalk_stream import AckMessage
import dingtalk_stream

def setup_logger():
    logger = logging.getLogger()
    handler = logging.StreamHandler()
    handler.setFormatter(
        logging.Formatter('%(asctime)s %(name)-8s %(levelname)-8s %(message)s [%(filename)s:%(lineno)d]'))
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)
    return logger


def define_options():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '--client_id', dest='client_id', required=True,
        help='app_key or suite_key from https://open-dev.digntalk.com'
    )
    parser.add_argument(
        '--client_secret', dest='client_secret', required=True,
        help='app_secret or suite_secret from https://open-dev.digntalk.com'
    )
    options = parser.parse_args()
    return options


class EchoMarkdownHandler(dingtalk_stream.ChatbotHandler):
    def __init__(self, logger: logging.Logger = None):
        super(dingtalk_stream.ChatbotHandler, self).__init__()
        if logger:
            self.logger = logger

    async def process(self, callback: dingtalk_stream.CallbackMessage):
        incoming_message = dingtalk_stream.ChatbotMessage.from_dict(callback.data)
        text = 'echo received message:\n'
        text += '\n'.join(['> 1. %s'%i for i in incoming_message.text.content.strip().split('\n')])
        self.reply_markdown('dingtalk-tutorial-python', text, incoming_message)
        return AckMessage.STATUS_OK, 'OK'

def main():
    logger = setup_logger()
    options = define_options()

    credential = dingtalk_stream.Credential(options.client_id, options.client_secret)
    client = dingtalk_stream.DingTalkStreamClient(credential)
    client.register_callback_handler(dingtalk_stream.chatbot.ChatbotMessage.TOPIC, EchoMarkdownHandler(logger))
    client.start_forever()


if __name__ == '__main__':
    main()
```

以上不超过 60 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，简单 echo 机器人消息回去，采用 Markdown 类型，实现消息发送(回复)能力。相比文本消息，Markdown 支持更丰富的消息样式。

## 运行机器人服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `[INFO] connect success, sessionId=[...]`
”

```shell
python3 ./echo_markdown.py --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](/docs/explore/tutorials/stream/bot/go/create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。


## 效果如下

![发送 Markdown 消息](/img/explore/stream/bot/send-markdown.png)

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-python)