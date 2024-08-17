import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN as string);

function createWelcomeMessage(ctx: any) {
  return (
    `Hi <b>${ctx.from.first_name || ''} ${ctx.from.last_name || ''}</b> 👋 \n\n` +
    'Ready for an exciting building adventure?\n\n' +
    'Here you can build incredible towers, earn points and exchange them for valuable coins that can become a real treasure!'
  );
}

bot.start((ctx) => {
  ctx.replyWithHTML(
    createWelcomeMessage(ctx),
    Markup.inlineKeyboard([
      [Markup.button.webApp('Start Game', 'https://get-info-about.me/')],
      [Markup.button.url('Join the community', 'https://t.me/box_stacker_community')],
    ]),
  );
});

bot.command('login', (ctx) => {
  console.log(ctx);
});

bot.launch();

console.log('Bot start successfully');

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
