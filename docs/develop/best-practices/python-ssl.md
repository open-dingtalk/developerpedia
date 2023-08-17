---
sidebar_position: 2
---

# Python 报 “SSL: CERTIFICATE_VERIFY_FAILED" 错误

Python 报类似一下错误时候可以参考本文档处理：

```text
Arguments: (SSLCertVerificationError(1, '[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1129)'),)
```

## 问题原因

这个问题通常不是服务端出问题了，而是开发者本地开发和生产部署环境的 Python 安装出现异常。

## 解决方式

可以参考这个页面中方法解决：[StackOverflow: urllib and "SSL: CERTIFICATE_VERIFY_FAILED" Error](https://stackoverflow.com/questions/27835619/urllib-and-ssl-certificate-verify-failed-error)

简单摘要一下，可以采用以下方式解决：

```shell
pip install certifi
/Applications/Python\ 3.10/Install\ Certificates.command
```

## 注意事项

1. 需要替换上面命令中版本号为你实际的 Python 版本号
2. 如果你的 Python 和 PIP 不是有特殊的安全路径，需要根据实际调整改为对应版本的 Python 和 PIP

## 其他

如果以上方式无法解决你的问题，欢迎通过[技术支持](/docs/explore/support)提交你的反馈。

如果该问题还有其他的因素需要考虑，也欢迎你[参与贡献](/docs/contrib/overview)完善该文档，帮助更多人解决 Python 环境问题。

## 参考资料：

* [StackOverflow: urllib and "SSL: CERTIFICATE_VERIFY_FAILED" Error](https://stackoverflow.com/questions/27835619/urllib-and-ssl-certificate-verify-failed-error)