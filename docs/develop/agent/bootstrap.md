---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 启动 Stream 服务 - Python

本文针对 Python SDK 提供多种启动方式示例。

## 准备工作

本文假设你已经对钉钉 AI 助理有初步的认识，了解基础概念，并知道如何创建和编辑 AI 助理，为 AI 助理添加自定义插件，以及获得用于代码开发的 Client ID 和 Client Secret。
可以通过 [链接](/docs/explore/tutorials/assistant_ability/passthrough_mode/python/step-1-intro.md) 来了解

注意：以下示例代码中用到了 session webhook，可以参考 [tools.yaml](https://github.com/chzealot/dingagent-examples-python/blob/main/tools.yaml) 配置。


## 启动方式

本文档中给出两种使用方式

1. asyncio：启动一个实例
2. asyncio_multi_instance：启动多个实例，甚至可以把 dingtalk_stream 和 tornadoweb 等框架放在一个 asyncio loop中执行

<Tabs>

<TabItem value="asyncio" label="asyncio" default>

```python showLineNumbers {16-18}
import os
import json
import asyncio
import dingtalk_stream


class HelloHandler(dingtalk_stream.GraphHandler):
    async def process(self, callback: dingtalk_stream.CallbackMessage):
        request = dingtalk_stream.GraphRequest.from_dict(callback.data)
        body = json.loads(request.body)
        await self.reply_markdown(body['sessionWebhook'], '- 天气：晴\n- temperature: 22')
        return dingtalk_stream.AckMessage.STATUS_OK, self.get_success_response({'success': True}).to_dict()

async def hello():
    credential = dingtalk_stream.Credential(os.getenv('CLIENT_ID'), os.getenv('CLIENT_SECRET'))
    client = dingtalk_stream.DingTalkStreamClient(credential)
    client.register_callback_handler(dingtalk_stream.graph.GraphMessage.TOPIC, HelloHandler())
    await client.start()

if __name__ == '__main__':
    asyncio.run(hello())
```

</TabItem>

<TabItem value="asyncio_multi_instance" label="asyncio_multi_instance" default>

```python showLineNumbers {17-23}
import os
import json
import asyncio
import dingtalk_stream


class HelloHandler(dingtalk_stream.GraphHandler):
    async def process(self, callback: dingtalk_stream.CallbackMessage):
        request = dingtalk_stream.GraphRequest.from_dict(callback.data)
        body = json.loads(request.body)
        await self.reply_markdown(body['sessionWebhook'], '- 天气：晴\n- temperature: 22')
        return dingtalk_stream.AckMessage.STATUS_OK, self.get_success_response({'success': True}).to_dict()

async def hello():
    credential = dingtalk_stream.Credential(os.getenv('CLIENT_ID'), os.getenv('CLIENT_SECRET'))

    client1 = dingtalk_stream.DingTalkStreamClient(credential)
    client1.register_callback_handler(dingtalk_stream.graph.GraphMessage.TOPIC, HelloHandler())

    client2 = dingtalk_stream.DingTalkStreamClient(credential)
    client2.register_callback_handler(dingtalk_stream.graph.GraphMessage.TOPIC, HelloHandler())

    await asyncio.gather(client1.start(), client2.start())

if __name__ == '__main__':
    asyncio.run(hello())
```

</TabItem>

</Tabs>

## 参考资料

1. [GitHub - Awesome DingTalk Integration](https://github.com/dingtalk-ai/awesome-dingtalk-integration)
2. [GitHub - open-dingtalk/dingtalk-stream-sdk-python](https://github.com/open-dingtalk/dingtalk-stream-sdk-python)
3. [AI 助理发消息 - Webhook 回复消息模式](https://open.dingtalk.com/document/ai-dev/ai-assistant-message-sending-webhook-reply-message-mode)
