const { Bot } = require('grammy');
require('dotenv').config()// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const bot = new Bot(process.env.TOKEN); // <-- put your bot token here (https://t.me/BotFather)

bot.command('help', (ctx) => {
    ctx.reply(`
    The bot could greet people in different languages.
    The list of supported greetings:
    - hello - English
    - salut - French
    - hola - Spanish
    `)
});

bot.hears('salut', (ctx) => ctx.reply('salut'));
bot.hears('hello', (ctx) => ctx.reply('hello'));
bot.hears('hola', (ctx) => ctx.reply('hola'));

bot.on('message:text', (ctx) => ctx.reply(`Greeting "${ctx.update.message.text}" is not supported.`))

bot.start();