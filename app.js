import { Telegraf, Markup } from 'telegraf';

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
        Markup.keyboard(['Blue', 'Red']
        ));
})

bot.hears('Blue', ctx => {
    ctx.reply(`You've chosen blue pill.`);
})

bot.hears('Red', ctx => {
    ctx.reply(`You've chosen red pill.`);
})

bot.launch();