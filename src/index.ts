"use strict";

import { config } from "dotenv-safe";
import Telegraf, { Markup } from "telegraf";
import i18n from "i18n";

// Config .env variables into process.env
config();

i18n.configure({
  locales: ["en"],
  directory: __dirname + "/../locales",
});

const bot = new Telegraf(process.env.BOT_TOKEN || "");

// /start command
bot.command(["start"], ({ replyWithMarkdown,  }) => {
  const replyOptions = Markup.inlineKeyboard([
    Markup.callbackButton(i18n.__("how_works_q"), "how_works_q"),
  ]).extra();
  return replyWithMarkdown(i18n.__("purpose"), replyOptions);
});

// /help
bot.command(["help"], ({ replyWithMarkdown }) => {
  const replyOptions = Markup.inlineKeyboard([
    Markup.callbackButton("Next", "next"),
  ]).extra();
  return replyWithMarkdown(i18n.__("help"), replyOptions);
});

bot.action("how_works_q", ({ editMessageText, editMessageReplyMarkup, }) => {
  const replyOptions = Markup.inlineKeyboard([
    Markup.callbackButton("Next", "next"),
  ]).extra();
  return editMessageText(i18n.__("help"), replyOptions);
});

bot.startPolling();
