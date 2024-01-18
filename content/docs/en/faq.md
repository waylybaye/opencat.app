---
title: 'OpenCat FAQ'
---

# OpenCat FAQ

### Questions about OpenCat in the Chinese region

* As of August 1, 2023, due to force majeure, OpenCat is no longer searchable, downloadable, available for in-app purchases, or updatable in the Chinese region.
* As of November 13, 2023, after compliance rectification, OpenCat is back on the Chinese region store.

### Questions about available models in the Chinese region

1. Due to relevant regulations, only large models compliant with the Chinese region will be displayed in OpenCat.
2. OpenCat determines which version to use based on the storefront currently displayed in the App Store. If your App Store displays the wrong storefront, you can use shortcuts or the Store Redirect app to change it to the correct storefront. Alternatively, you can log in with the correct account, and the storefront will automatically switch after logging in.
3. Switching storefronts may affect the number of displayed models but does not affect the selected models in existing conversations.

### Questions about Gemini

When using Gemini for multi-turn conversations, it requires an alternating format where each participant speaks one sentence at a time. If one participant speaks more than one sentence, an error will occur. Gemini also does not support conversation topics. If you encounter a Gemini error, you need to manually delete the out-of-order messages or start a new conversation.

## Common questions about OpenCat Cloud

### How is OpenCat Cloud billed?

1. Your subscription fee is deducted by 30% Apple tax ≈ $2 USD, which is your monthly usage limit for the subscription. We bill based on a 1:1 cost with OpenAI, without adding any additional fees. The cost is determined by OpenAI's API pricing.
2. The usage for your subscription resets on your monthly purchase date.

### What is the relationship between OpenCat, OpenAI, and ChatGPT?

OpenAI has two independent products: ChatGPT for general users and an API for commercial users. OpenCat uses the API provided by OpenAI to achieve similar functionality to ChatGPT.

### After subscribing to Cloud, I can't use it and receive a 401 error.

This issue occurs when the account used for downloading is different from the account used for in-app purchases. You can resolve it by re-downloading the app with the account used for in-app purchases.

### No active subscription found.

This issue is the same as the previous one.

### Timeout or other network connection errors.

1. Please check if you have entered an API Key and delete it if necessary. If an API Key is present locally, it will be used by default.
2. If you don't have an API Key, please seek help through the "Contact Us" option in the app.

## Common errors and their causes

### OpenAI: You exceeded your current quota, please check your plan and billing details.

1. Newly registered users are given a trial quota when they first apply for an API Key. This quota expires after one or several months. To continue using the API after the trial quota expires, you need to add a payment method.
2. If you encounter this issue when applying for an API Key for the first time, it is likely because the phone number you are using has been registered with another account.
3. For other situations such as hard limit issues, please refer to the official explanation of this error message: [help.openai.com](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)

### Do I need to subscribe to Plus to continue using the API?

No, Plus and the API are not related.

### What is the relationship between the API and ChatGPT?

OpenAI's API and the web version of ChatGPT (including Plus) are two separate systems with independent functionality and billing. They are not interconnected.

### How is the API billed?

After the trial quota for the API is used up, you will be billed based on the actual usage, with charges corresponding to the number of tokens used. You only need to bind a payment method in [Billing](https://platform.openai.com/account/billing/overview). The first card binding may require a pre-authorization of $5 USD.

[1] [https://platform.openai.com/account/billing/overview](https://platform.openai.com/account/billing/overview)

### How can I check my usage?

[https://platform.openai.com/account/usage](https://platform.openai.com/account/usage)

### Why can't I use GPT4 even though I have PLUS?

Access to the GPT4 API requires a separate application:
[https://openai.com/waitlist/gpt-4-api](https://openai.com/waitlist/gpt-4-api)

### OpenAI: Error: Your access was terminated due to violation of our policies, please check your email for more information. If you believe this is in error and would like to appeal, please contact

Your account has been flagged by the risk control system, most likely due to using an IP address that has been blocked by OpenAI.

### Failed to merge changes

This issue is known to occur in very few cases, and the cause has not been identified yet. However, some users have reported that restarting their phones resolved the issue.

### Deprecated documents

> #### What has been lost in the Chinese region? What can still be done?
>
> 1. After deleting the app, it cannot be reinstalled, and it cannot be found in the App Store search or in the purchased list for redownload.
> 2. Chinese region accounts cannot update through the App Store. (You can use the method below)
> 3. Chinese region accounts cannot make new purchases, and subscriptions cannot be renewed after expiration.
> 4. The purchase rights of Chinese region accounts are still valid. As long as the app is not deleted or downloaded with another region account and then logged in with the Chinese region account, the Pro features will still be available.
>
> ### Solution 1: If you only have one Chinese region account or don't want to switch regions
>
> #### Updating the app
>
> 1. Open "Settings → General → iPhone Storage".
> 2. Go into OpenCat and click "Offload App" (data will not be deleted).
> 3. After offloading, click "Reinstall App" to update it.
>
> #### What if I accidentally deleted the app?
>
> Sorry, after deletion (not offloading), the app cannot be downloaded again using the Chinese region account (unless you have backed up the IPA file using other tools). You can only download it with an account from another region.
>
>
> ### Solution 2: Download with a non-Chinese region account and use with the Chinese region account
>
> You can download OpenCat with an account from another region and then switch back to the Chinese region account to automatically restore Pro features (Cloud features cannot be restored). However, Pro features will disappear after switching to another account.
>
>
> ### Solution 3: If you want to transfer purchases to another region without switching accounts back and forth
>
> 1. Obtain the order number:
>     * Find the "Apple Receipt" email in your mailbox and copy the "Order Number" from it.
>     * Or open the App Store, click on your profile picture, then click on your profile picture again, go to the purchase history, and find the OpenCat in-app purchase. The "Order Number" can be found there.
> 2. Update the app to version 1.4.0 or above. Note that if your app was downloaded from the Chinese region, you need to delete it and reinstall it with an account from another region to update it. (We do not recommend deleting the app downloaded from the Chinese region if you have it.)
> 3. Open "Settings → Cloud" and tap the cat head five times in a row.
> 4. Enter the order number to bind the purchase to the current device.
