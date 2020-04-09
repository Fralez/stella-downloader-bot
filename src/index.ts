"use strict";

import { config } from "dotenv-safe";
import Telegraf from "telegraf";

import { generateSong, Song } from "./models/Song";

// Config .env variables into process.env
config();

const bot = new Telegraf(process.env.BOT_TOKEN || "");

bot.on("message", async (ctx) => {
  ctx.reply("Hello human! Meet my handsome creator: @fralezz");
});

bot.startPolling();
