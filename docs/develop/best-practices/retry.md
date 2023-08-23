---
sidebar_position: 5
---

# 开发者调用OpenAPI超时

本文介绍了钉钉服务端OpenAPI超时的判定条件、解决办法和最佳实践。

一般情况下，开发者调用钉钉开放平台的OpenAPI会出现调用超时的情况，目前钉钉开放平台的OpenAPI调用成功率能保证在99.95%，但是仍有一些情况下会出现异常，然后调用API超时也是一种异常情况，出现该异常是正常现象，但是针对这一现象目前有比较多的开发者进行咨询解决方案，现钉钉提供整一套的解决方案和最佳实践案例，供各位开发者进行参考。

现象一：调用钉钉开放平台API小面积出现超时情况下，开发者又想拿到正确的响应结果，建议开发者可以按照本文下列所述的解决方案进行排查和解决。

现象二：调用钉钉开放平台API大面积出现超时情况下，这种情况下可能钉钉的服务端有负载过高的情况，可以联系[技术支持](/docs/explore/support)提交反馈寻求帮助。

## 触发条件

在开发者调用钉钉开放平台的接口时，如果在3s内钉钉服务端未做出响应就会响应超时，此时调用者会获取到对应的超时错误请求。

## 判定条件

- 旧版OpenAPI返回以下错误码表示调用超时：

| 错误码 | 错误说明 | 备注【子错误码】 |
|-----|------|----------|
| 15  | 调用超时  | isp.top-remote-connection-timeout |
| 88 | 鉴权异常  | 如果子错误码为空，则鉴权服务超时。|

- 新版OpenAPI返回以下错误码表示调用超时：

| 错误码【http状态码】 | 错误说明 | 备注     |
|--------------|------|--------|
| 504          | Gateway Timeout  | 调用网关超时 |

## 解决办法

调用钉钉的开放接口的api出现上述所示的错误码之后，表示当前请求响应超时，此时开发者可以对接口调用做超时重试处理机制，正常情况下立即重试能获取成功响应的结果，但对于一些暂时性的错误，如网络抖动等，可能立即重试还是会失败，通常等待一小会儿再重试的话成功率会较高，并且也可能打散上游重试的时间，较少因为同时都重试而导致的下游瞬间流量高峰。决定等待多久之后再重试的方法叫做退避策略，我们提供了常见的退避策略方案，如：【具体见最佳实践】
- 立即重试：调用报错立即发起重试调用。
- 线性退避：每次等待固定时间后重试。
- 随机退避：在一定范围内随机等待一段时间后重试。
- 指数退避：连续重试时，每次等待时间都是前一次的倍数。

## 最佳实践

如果接口超时的几率比较大，建议开发者按照指数退避策略进行接入，如果出现的几率较小，可以立即重试或采用线性退避策略，以下是一些请求伪代码示例，仅供参考：
- 立即重试
```java
class Retry {
    public TaobaoResponse retryCall() {
        TaobaoResponse response = client.execute(req,"accessKey","accessSecret","suiteTicket");
        if (("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))
                || ("88".equals(response.getErrorCode()) && StringUtils.isEmpty(response.getSubCode()))) {
            // 判断为超时请求，立即发起重试
            response = client.execute(req,"accessKey","accessSecret","suiteTicket");
        }
        return response;
    }
}
```
- 线性退避
```java
class Retry {
    public TaobaoResponse linearRetry() {
        int maxRetryTimes = 3;
        TaobaoResponse response;
        for (int retry = 1; retry <= maxRetryTimes; retry++) {
            response = client.execute(req,"accessKey","accessSecret","suiteTicket");
            if (("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))
                    || ("88".equals(response.getErrorCode()) && StringUtils.isEmpty(response.getSubCode()))) {
                Thread.sleep(1000); // 固定线性等待时间发起重试
            } else {
                // 打印请求结果，此处有可能成功或失败，但不是超时异常，所以不继续下次重试。
                break;
            }
        }
        return response;
    }
}
```
- 随机退避
```java
class Retry {
    public TaobaoResponse randomRetry() {
        Retryer<TaobaoResponse> retry = RetryerBuilder.<TaobaoResponse>newBuilder() // 此处示例是借助开源guava-retrying工具
                .retryIfResult( response -> ("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))
                        || ("88".equals(response.getErrorCode()) && isEmpty(response.getSubCode())))
                .withWaitStrategy(WaitStrategies.randomWait(3, TimeUnit.SECONDS)) // 随机等待，最大时长3s
                .withStopStrategy(StopStrategies.stopAfterAttempt(3)) // 重试最大次数
                .build();
        try {
            return retry.call(() -> client.execute(req,"accessKey","accessSecret","suiteTicket"));
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
```
- 指数退避
```java
class Retry {
    public TaobaoResponse indexRetry() {
        Retryer<TaobaoResponse> retry = RetryerBuilder.<TaobaoResponse>newBuilder()
                .retryIfResult( response -> ("15".equals(response.getErrorCode()) && "isp.top-remote-connection-timeout".equals(response.getSubCode()))
                        || ("88".equals(response.getErrorCode()) && isEmpty(response.getSubCode())))
                .withWaitStrategy(WaitStrategies.exponentialWait(500, 10, TimeUnit.SECONDS)) // 等待策略：指数等待
                .withStopStrategy(StopStrategies.stopAfterAttempt(3)) // 重试最大次数
                .build();
        try {
            return retry.call(() -> client.execute(req,"accessKey","accessSecret","suiteTicket"));
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
```