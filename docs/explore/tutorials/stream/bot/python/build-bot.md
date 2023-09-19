---
sidebar_position: 3
---

# 3. 开发机器人服务

在本章节中，将会介绍如何用 Python 开发一个聊天机器人服务，实现基本的介绍和发送消息能力。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-python)中获取。

## 创建 Go 模块

```shell
mkdir bot_echo_text
cd bot_echo_text
```

## 安装依赖

```shell
python3 -m pip install dingtalk-stream
```

## 开发机器人服务

在 `bot_echo_text` 目录中，创建 `echo_text.py` 文件，文件内容如下：

```python title="echo_text.py" showLineNumbers
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


class EchoTextHandler(dingtalk_stream.ChatbotHandler):
    def __init__(self, logger: logging.Logger = None):
        super(dingtalk_stream.ChatbotHandler, self).__init__()
        if logger:
            self.logger = logger

    async def process(self, callback: dingtalk_stream.CallbackMessage):
        incoming_message = dingtalk_stream.ChatbotMessage.from_dict(callback.data)
        text = incoming_message.text.content.strip()
        self.reply_text(text, incoming_message)
        return AckMessage.STATUS_OK, 'OK'

def main():
    logger = setup_logger()
    options = define_options()

    credential = dingtalk_stream.Credential(options.client_id, options.client_secret)
    client = dingtalk_stream.DingTalkStreamClient(credential)
    client.register_callback_handler(dingtalk_stream.chatbot.ChatbotMessage.TOPIC, EchoTextHandler(logger))
    client.start_forever()


if __name__ == '__main__':
    main()
```

以上不超过 60 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，简单 echo 机器人消息回去，实现消息发送(回复)能力

## 运行机器人服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `INFO     endpoint is {'endpoint': 'wss://wss-....`

```shell
python3 ./echo_text.py --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-python)