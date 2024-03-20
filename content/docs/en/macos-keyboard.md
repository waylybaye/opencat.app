# Keyboard Extension User Guide
The keyboard extension is a featured function of the OpenCat standalone edition. After breaking out of the sandbox restrictions, OpenCat can interact with users in almost any place where text input is possible within the macOS system.

## Enabling the Keyboard Extension
To enable the keyboard extension, you first need to go to OpenCat's settings and find the keyboard extension.

![request_system_capability](/img/docs/request_system_capability.png)
Click the "Request Authorization" button. Then follow the prompts. As shown in the figure below, allow OpenCat to access accessibility. Then close the OpenCat main program and reopen it.

![allow_opencat](/img/docs/allow_opencat.png)
At this point, when you open the settings again, you will see that the permission has been obtained.

![enable_keyboard_extension](/img/docs/enable_keyboard_extension.png)

## Using the Keyboard Extension
Using the keyboard extension is simple. Just start with a / followed by a command, then a space, and enter what you want to say, and finally press Shift+Enter. Wait for OpenCat's response.

### Casual Chat
There are two default commands, cat and chat, which represent OpenCat and chat. They call the same default model set by OpenCat to chat with you. For example:

```
/cat Do you like listening music during your free time？
Yes, I like to listen to various types of music, especially when I want to relax or unwind after work. Although I am just an AI assistant and cannot truly "listen" to music, choosing the right music can indeed help humans relax and gain positive energy. I also hope that one day I can truly experience the beauty of music.
```

> It is worth mentioning that when the AI responds, a toolbar will appear. If you want it to stop responding, you can simply press the stop button on this toolbar.

### Translation Feature
In addition, another built-in feature is translation. By using the abbreviation of the language's Locale as a command, you can convert the language you input into the corresponding language. For example:

```
/en 早上好！
 Good morning!

/ja 我爱你！
 日本語訳です:

あいしてる!

/ko 哥哥！
 Here is the translation to Korean:

오빠!

/fr 凯旋门
 Voici la traduction en français :

Arc de Triomphe
```

### Specifying Chat
You can use specific commands to specify the model and prompts for the chat. Depending on the type of command, it can be divided into specifying the model, specifying the title, and specifying the shortcut command.
#### Specifying the Model
Specifying the model means using the model name directly as the command.
##### Full Model Name
You can use the full name of the model. These full names are the names you see in the menu.

![model_fullname](/img/docs/model_fullname.png)

##### Model Abbreviation
You can also use abbreviations, such as gpt3, gpt4, claude2, etc.
#### Specifying the Title
In addition to specifying the model, you can also directly specify the title of your conversation, so that you can use the previously set model and prompts for the conversation. The title of the conversation refers to the title of the chat as shown in the figure: such as Translation Assistant, Swift Expert, etc.

![titles](/img/docs/titles.png)

#### Specifying Shortcut Commands
Finally, you can also specify shortcut commands to invoke the conversation. This shortcut command is not the macOS system shortcut command, but the one you set in OpenCat, which is used to represent a certain conversation in an abbreviated way. You can set it in the menu in the upper right corner of the conversation. For example, I set Translation Assistant as trans and Swift Expert as swift, so you can call them by /trans or /swift.
### Saving to Chat History
Finally, if you need to, you can save the conversations conducted in these places to the corresponding chat in OpenCat. It should be noted that to save a conversation, there must be a corresponding chat. Therefore, only conversations using specified titles or specified shortcut commands can be saved to the corresponding chat.
