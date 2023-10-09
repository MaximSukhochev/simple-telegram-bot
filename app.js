import { Telegraf, Markup } from 'telegraf';
import addEntry from "./db.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from);
    if (ctx.from.language_code == 'ru') {
        ctx.reply('Привет! Если ты видишь этот текст, значит бот работает.');
    } else {
        ctx.reply('Hello! If you can see this text, the bot is working.');
    }
    ctx.reply(
        'Which pill?',
        Markup.keyboard(['blue', 'red']
        ));
})

bot.hears('blue', ctx => {
    ctx.reply(`You've chosen blue pill.`);
    addEntry('blue', ctx.from.id, ctx.from.username)
})

bot.hears('red', ctx => {
    ctx.reply(`You've chosen red pill.`);
    addEntry('red', ctx.from.id, ctx.from.username)
})

bot.launch();