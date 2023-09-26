---
sidebar_position: 3
---

# 3. 开发事件订阅服务

在本章节中，将会介绍如何用 Python 开发一个事件订阅服务，接收钉钉平台推送的变更通知。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-python)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Python 应用

```shell
mkdir event_chat_update
cd event_chat_update
```

## 安装依赖

```shell
python3 -m pip install dingtalk-stream
```

## 开发事件订阅服务

在 `event_chat_update` 目录中，创建 `event_handler.py` 文件，文件内容如下：

相关代码如下：
```python title="event_handler.py" {25-42} showLineNumbers
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import logging
import time
import dingtalk_stream


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


class MyEventHandler(dingtalk_stream.EventHandler):
    async def process(self, event: dingtalk_stream.EventMessage):
        if event.headers.event_type != 'chat_update_title':
            # ignore events not equals `chat_update_title`; 忽略`chat_update_title`之外的其他事件；
            # 该示例仅演示 chat_update_title 类型的事件订阅；
            return dingtalk_stream.AckMessage.STATUS_OK, 'OK'
        self.logger.info(
            'received event, delay=%sms, eventType=%s, eventId=%s, eventBornTime=%d, eventCorpId=%s, '
            'eventUnifiedAppId=%s, data=%s',
            int(time.time() * 1000) - event.headers.event_born_time,
            event.headers.event_type,
            event.headers.event_id,
            event.headers.event_born_time,
            event.headers.event_corp_id,
            event.headers.event_unified_app_id,
            event.data)
        # put your code here; 可以在这里添加你的业务代码，处理事件订阅的业务逻辑；

        return dingtalk_stream.AckMessage.STATUS_OK, 'OK'


def main():
    options = define_options()
    credential = dingtalk_stream.Credential(options.client_id, options.client_secret)
    client = dingtalk_stream.DingTalkStreamClient(credential)
    client.register_all_event_handler(MyEventHandler())
    client.start_forever()


if __name__ == '__main__':
    main()
```

以上不超过 60 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client (DWClient)
3. 在 Stream Client 中注册事件推送的监听服务，实现变更通知的接收能力
4. 在事件回调方法中，通过日志记录变更通知的消息内容，你可以可以改造这段代码，将变更通知写入自己的数据库中

## 运行事件订阅服务

通过以下命令可以运行你的机器人服务，当看到这样的日志输出时候表示运行成功 `INFO     endpoint is {'endpoint': 'wss://wss-....`

```shell
python3 event_handler.py --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-app)获取。
:::

至此，你已成功完成事件订阅服务开发和部署。接下来可以在[钉钉开发者后台](https://open-dev.dingtalk.com)勾选需要订阅的事件类型，然后体验整个接收流程。

:::info 说明
如果你开发过钉钉聊天机器人的消息接收，就可以知道在聊天机器人代码中，需要指定订阅的 Topic，而事件订阅的代码中没有指定 Topic。原因是钉钉事件订阅平台的事件类型（Topic）是通过网页形式（在开发者后台）勾选，而不是通过代码方式指定 Topic。
接下来的文档会提供指引，介绍如何在开发者后台勾选需要订阅的事件类型（Topic）。
:::

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-python)