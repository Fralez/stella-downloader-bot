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

bot.command(["start", "help"], ({ reply }) => {
  return reply(i18n.__("purpose"));
});

bot.startPolling();
