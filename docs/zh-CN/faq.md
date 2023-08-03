---
title: 'OpenCat 常见问题'
---

# OpenCat FAQ


## 关于国区被下架的问题

8月1日，OpenCat 因不可抗力，国区已经无法搜索、下载、内购。

### 如果您只有一个国区账号，或者不想转区

您可以通过下面的办法更新 App，但不能进行任何购买

#### App 的更新办法 

1. 打开「系统设置 → 通用 → iPhone 储存空间」
2. 点进 OpenCat， 点击「卸载 App」（数据不会删除）
3. 卸载后再点击「重新安装App」即可更新

### 如果您想将购买转移到其它区

1. 获取订单号
    * 请在邮箱中找到「Apple 提供的收据」邮件，复制其中的「订单号」。
    * 或者打开 App Store，点击头像，再点击头像，点进购买记录，找到 OpenCat 内购。里面可以看到「订单号」 
2. 将 App 更新到 1.4.0 版本或者以上
3. 打开 「设置 → Cloud」，连续点击五下猫猫头
4. 输入订单号，即可将购买绑定到当前设备上。


## OpenCat Cloud 的常见问题

### OpenCat Cloud 是怎么计费的？

1. 您的订阅费用扣去 30% 苹果税 ≈ $2 美元，这个就是您的订阅每月的使用限额。我们根据 OpenAI 的成本 1:1 计费，没有加任何费用，OpenAI 的 API 成本多少钱，我们就算多少钱。
2. 订阅的用量在每个月您的购买日期重置。

### OpenCat、OpenAI、ChatGPT 之间是什么关系？

OpenAI 有两个独立的产品，一个是面向普通用户的 **ChatGPT**，一个是面向商业用户的 **API**。OpenCat 使用 OpenAI 提供的 **API**，实现类似 ChatGPT 的功能。


### 订阅 Cloud 后无法使用，会有 401 错误

这个问题是下载的账号和内购的账号不一致导致的。用内购账号重新下载 App 就可以了。


### No active subscription found

这个问题同上

### 提示网络超时或者其它网络链接错误

1. 请检查您是否填写了 API Key，删掉就可以了。本地有 API Key 时默认会走 API Key。
2. 如果没有 API Key，请通过 App 里的「联系我们」寻求帮助。


## 常见错误和原因

### OpenAI: You exceeded your current quota, please check your plan and billing details.

1. 新注册的用户在首次申请 API Key 时会给予一个试用额度，这个额度会在1个月或者几个月后过期。试用额度过期后需要绑定支付方式才能继续使用。
2. 如果你是首次申请 API Key 却遇到了这个问题，大概率是因为你使用的号码注册过别的账号。
3. 其他情况如 hard limit 问题，请参考官方对此错误信息的解释：[help.openai.com](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)

### 要继续用 API 需要订阅 Plus 吗？

不需要，PLUS 和 API 没有关系。 

### API 和 ChatGPT 是什么关系？

OpenAI 的 API 和网页版的 ChatGPT（包括 PLUS）是两套独立系统，功能和计费都是分开的，互相独立，互不影响。

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
