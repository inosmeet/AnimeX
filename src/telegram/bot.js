import dotenv from "dotenv";
dotenv.config(); 
import { Telegram } from "telegraf";
import { Telegraf } from "telegraf";

const telegram = new Telegram(process.env.BOT_TOKEN, {
  agent: null,
  webhookReply: true,
});
  
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(ctx => {
  telegram.sendMessage(ctx.from.id, 
  `Your Telegram id: ${ctx.from.id}`);
});
try{

  bot.startPolling();
}
catch(err){
  console.log("Teleram bot err:", err);
}

export default telegram;