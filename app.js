import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from)
    if (ctx.from.language_code == 'ru') {
        bot.telegram.sendMessage(ctx.chat.id, 'Привет! Если ты видишь этот текст, значит бот работает.', {})
    } else {
        bot.telegram.sendMessage(ctx.chat.id, 'Hello! If you can see this text, the bot is working.', {})
    }
})

bot.launch();