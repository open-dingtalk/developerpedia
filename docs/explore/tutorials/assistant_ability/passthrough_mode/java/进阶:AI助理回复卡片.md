---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 7. 进阶：AI 助理发卡片

钉钉AI助理默认提供了自动将返回结果转成卡片的能力([设置结果卡片](https://open.dingtalk.com/document/ai-dev/actions-advanced-settings#afc4df80791jw))，如果你希望能展示更丰富的信息或是更灵活的控制发送卡片的时机，可以使用钉钉开放平台提供的

1. 当你收到 AI 助理发来的消息的时候，如果希望在此时回复一张卡片，可以使用 Webhook 的方式回复消息，发送方式参考文档[Webhook 回复消息模式](https://open.dingtalk.com/document/direction/the-ai-assistant-sends-a-card-to-reply-to-the-webhook)

2. 除了 Webhook 回复模式，你可以使用钉钉开放平台 OpenAPI的方式来回复消息，可以参考文档[回复消息模式](https://open.dingtalk.com/document/ai-dev/ai-assistant-message-sending-openapi-reply-message-mode)

3. 如果你希望在没有收到 AI 助理消息的时候也可以通过 AI 助理发送卡片，可以使用主动发送模式来发送卡片， 使用方式参考文档[主动发送模式](https://open.dingtalk.com/document/ai-dev/ai-assistant-messaging-active-sending-mode)