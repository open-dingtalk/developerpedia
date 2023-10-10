---
sidebar_position: 6
---

# 5. 构建 AI 插件返回数据
在本章节，将会介绍如何构造AI插件的返回值。包括以下内容：
1. 使用默认卡片返回数据
2. 使用自定义卡片元件返回数据
3. 进阶：流式返回卡片数据

## 使用默认卡片返回数据

coming soon...

## 使用自定义卡片元件返回数据

### 创建自定义卡片
#### 1. 通过魔法棒技能页面跳转到 AI 卡片搭建器
![forward-to-card-builder.png](/img/explore/stream/aiplugin/forward-to-card-builder.png)

#### 2. 在卡片平台创建 AI 卡片
![create-ai-card.png](/img/explore/stream/aiplugin/create-ai-card.png)

#### 3. 搭建 AI 卡片 
![create-ai-card-ui.png](/img/explore/stream/aiplugin/create-ai-card-ui.png)

### 在AI技能中选择自定义卡片
![img.png](/img/explore/stream/aiplugin/message-card-chain.jpg)
### 使用自定义卡片元件
![use-ai-card-component.png](/img/explore/stream/aiplugin/use-ai-card-component.png)

:::info 提示信息
cardTemplateId：卡片的模版ID
:::

### 渲染返回数据
```java title="GraphAPIPluginCallback.java" showLineNumbers
public class GraphAPIPluginCallback implements OpenDingTalkCallbackListener<GraphAPIRequest, GraphAPIResponse> {
    @Override
    public GraphAPIResponse execute(GraphAPIRequest request) {
        System.out.println(JSON.toJSONString(request));
        log.info("receive graph request", JSON.toJSONString(request));
        JSONObject payload = new JSONObject();
        payload.put("text","Hello World");//text 对应 AI 卡片中的变量
        return GraphUtils.successJson(payload);
    }
}
```

### 效果展示
![show-ai-card.png.png](/img/explore/stream/aiplugin/show-ai-card.png)

## 进阶：流式返回卡片数据

coming soon...