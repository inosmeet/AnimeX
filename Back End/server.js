import dotenv from "dotenv";
import express from "express";
import {Telegram} from "telegraf";
import {Telegraf} from 'telegraf';

const result = dotenv.config();
const telegram = new Telegram(process.env.BOT_TOKEN, {
  agent: null,
  webhookReply: true,
});

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(ctx => {
  telegram.sendMessage(ctx.from.id, 
  `Your Telegram id: ${ctx.from.id}`);
});
bot.startPolling();


app.post("/contact", function(req, res) {
  telegram.sendMessage(
    process.env.MY_ID,
    `Name: ${req.body.Name} \nEmail: ${req.body.Email}\nMessage: ${req.body.Message}`,
  );
});












app.listen(5000, function(){
  console.log("Server started on port 5000.");
});
