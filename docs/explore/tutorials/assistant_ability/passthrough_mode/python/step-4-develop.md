---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 4. 开发直通模式服务


在本章节中，将会介绍如何用 Python 开发一个聊天机器人服务，实现基本的介绍和发送消息能力。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-python)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Python 应用

```shell
mkdir ai_actions_stream
cd ai_actions_stream
```

## 安装依赖

```shell
python3 -m pip install dingtalk-stream
```

:::tip 注意事项
必须将 dingtalk-stream 升级到 v0.22.0 及以上版本
:::

## Python 代码开发

在 `ai_actions_stream` 目录中，创建 `actions.py` 文件，文件内容如下：

```python title="actions.py" showLineNumbers
# !/usr/bin/env python

import json
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


class WeatherHandler(dingtalk_stream.GraphHandler):
    def __init__(self, logger: logging.Logger = None):
        super(dingtalk_stream.GraphHandler, self).__init__()
        if logger:
            self.logger = logger

    async def process(self, callback: dingtalk_stream.CallbackMessage):
        request = dingtalk_stream.GraphRequest.from_dict(callback.data)
        self.logger.info('incoming request, method=%s, uri=%s', request.request_line.method, request.request_line.uri)

        response = dingtalk_stream.GraphResponse()
        response.status_line.code = 200
        response.status_line.reason_phrase = 'OK'
        response.headers['Content-Type'] = 'application/json'
        response.body = json.dumps({
            'location': '杭州',
            'dateStr': '2024-10-24',
            'text': '晴天',
            'temperature': 22,
            'humidity': 65,
            'wind_direction': '东南风'
        }, ensure_ascii=False)
        return AckMessage.STATUS_OK, response.to_dict()


def main():
    logger = setup_logger()
    options = define_options()

    credential = dingtalk_stream.Credential(options.client_id, options.client_secret)
    client = dingtalk_stream.DingTalkStreamClient(credential)
    client.register_callback_handler(dingtalk_stream.graph.GraphMessage.TOPIC, WeatherHandler(logger))
    client.start_forever()


if __name__ == '__main__':
    main()
```

以上不超过 70 行的代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册钉钉 A I助理技能回调方法，实现 AI 技能的功能
4. 在技能的实现中，简单返回固定的内容，你可以根据实际请求的自定义业务数据返回


## 运行你的服务

通过以下命令可以运行你的服务，当看到这样的日志输出时候表示运行成功 `INFO     endpoint is {'endpoint': 'wss://wss-....`

```shell
python3 ./actions.py --client_id="your-client-id" --client_secret="your-client-secret"
```

:::caution 注意事项
务必将以上命令中"your-client-id"和"your-client-secret"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建 AI 助理](step-2-create.md)获取。
:::

至此，你已成功完成相关服务开发和部署。接下来可以体验自己开发的服务了。

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-python)
