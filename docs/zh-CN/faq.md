---
title: 'OpenCat 常见问题'
---

# OpenCat FAQ

## 常见错误和原因

### No active subscription found

这个问题一般是因为有两个 App Store 账号，下载的账号和内购的账号不一致导致的。用内购账号重新下载 App 就可以了。


### OpenAI: You exceeded your current quota, please check your plan and billing details.

1. 新注册的用户在首次申请 API Key 时会给予一个试用额度，这个额度会在1个月或者几个月后过期。试用额度过期后需要绑定支付方式才能继续使用。
2. 如果你是首次申请 API Key 却遇到了这个问题，大概率是因为你使用的号码注册过别的账号。
3. 其他情况如 hard limit 问题，请参考官方对此错误信息的解释：[help.openai.com](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)

### 要继续用 API 需要订阅 Plus 吗？

不需要，PLUS 和 API 没有关系。 OpenAI 的 API 和网页版的 ChatGPT（包括 PLUS）是两套独立系统，功能和计费都是分开的，互相独立，互不影响。

### API 是怎么计费的？

API 的试用额度用完了后，是按实际使用量付费的，用多少 token 扣多少钱。只需要在 [Billing](https://platform.openai.com/account/billing/overview) 中绑定一个支付方式既可。首次绑卡可能需要预授权5美元。

[1] [https://platform.openai.com/account/billing/overview](https://platform.openai.com/account/billing/overview)

### 如何查看我的使用量
[https://platform.openai.com/account/usage](https://platform.openai.com/account/usage)


### 为什么我是 PLUS 还是没法用 GPT4？

GPT4 的 API 权限需要单独申请：
[https://openai.com/waitlist/gpt-4-api](https://openai.com/waitlist/gpt-4-api)


### OpenAl: Error : Your access was terminated due to violation of our policies, please check your email for more information. If you believe this is in error and would like to appeal, please contact

账号被风控了，很可能是用 OpenAI 封锁的 IP 使用了。


### 未能合并更改

已知在极少数情况下会出现这个问题，尚未定位出现的原因，但有用户反馈重启手机可以解决这个问题。
