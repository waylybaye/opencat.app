---
title: 'OpenCat Azure TTS Configuration Guide'
---

# OpenCat Azure TTS Configuration

## Create Resources in Azure

1. Sign in to your Azure account
2. Click the link to create a TTS resource [https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices](https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices)

![](/img/docs/create-tts.png)

* Region: It is recommended to choose `East Asia`
* Name: Choose any name
* Pricing tier: Select either Free Trial (Free F0) or Standard pricing

3. After filling in the details, click "Review + Create"
4. Click "Create"

## Configure OpenCat

![](/img/docs/create-tts-success.png)

1. After successful creation, click "Go to resource"

![](/img/docs/tts-tokens.png)

1. Click the copy button next to "Key 1" and paste it into the Token field in OpenCat
2. Once validated, the supported voice list will be displayed below
3. After previewing, click the plus button in front to add the resource to the top
4. Go to any chat and click the three-dot button in the upper right corner, then select "Read Aloud Voice". The voice you selected will be displayed at the top.
