"use strict";

import { config } from "dotenv-safe";
import Telegraf from "telegraf";

import { generateSong, Song } from "./models/Song";

// Config .env variables into process.env
config();

const bot = new Telegraf(process.env.BOT_TOKEN || "");

bot.on("message", async (ctx) => {
  // "https://youtu.be/jAt9VZpMIyM"
  const song: Song = await generateSong("https://youtu.be/jAt9VZpMIyM");
  ctx.reply(song.url);
});

bot.startPolling();
