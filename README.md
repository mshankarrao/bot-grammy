# bot-grammy
testing the telegram bot creation using grammy

## Grammy - A Node.js Framework for Telegram Bot Development

Grammy is a Node.js framework for developing Telegram bots. It provides an easy and flexible way to build bots with minimal code and effort. With Grammy, you can create Telegram bots for various purposes such as sending notifications, handling user inputs, and more.

### Features

- Easy to use and flexible API
- Built-in support for common bot features
- Supports multiple bots in a single instance
- Well-documented and actively maintained

### Getting Started

To get started with Grammy, you need to have Node.js installed on your machine. Then, you can install the framework using npm:

```npm install grammy ```


Once installed, you can create a new bot by defining a class that extends the `Grammy` class and implementing the `run` method:

```javascript
const { Grammy } = require('grammy');

class MyBot extends Grammy {
  async run() {
    this.on('message', async (msg) => {
      await this.sendMessage(msg.chat.id, 'Hello, world!');
    });
  }
}

const bot = new MyBot({
  token: 'YOUR_BOT_TOKEN',
});

bot.start();


