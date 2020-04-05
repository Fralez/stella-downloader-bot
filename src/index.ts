"use strict";

import Telegraf from "telegraf";
import { config } from "dotenv-safe";

// Config .env variables into process.env
config({
  allowEmptyValues: true,
});

const bot = new Telegraf(process.env.BOT_TOKEN || "");
