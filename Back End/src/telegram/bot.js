const { Telegram } = require("telegraf");
const { Telegraf } = require("telegraf");

const telegram = new Telegram(process.env.BOT_TOKEN, {
    agent: null,
    webhookReply: true,
  });
  
  const bot = new Telegraf(process.env.BOT_TOKEN);
  bot.use(ctx => {
    telegram.sendMessage(ctx.from.id, 
    `Your Telegram id: ${ctx.from.id}`);
  });
  bot.startPolling();

  module.exports = telegram;