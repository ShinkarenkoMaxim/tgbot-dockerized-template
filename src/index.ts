// Setup enviroment
import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

// Import all dependencies
import { Bot } from 'grammy';
import { run, sequentialize } from '@grammyjs/runner';
import { apiThrottler } from '@grammyjs/transformer-throttler';
import { parseMode } from '@grammyjs/parse-mode';

import { getSessionKey, session } from './config/session';
import { Context } from './config/context';
import i18n from './config/i18n';
import modules from './modules';

const bot = new Bot<Context>(process.env.TOKEN);
const throttler = apiThrottler();

bot.api.config.use(parseMode('HTML')); // default formatting replies as HTML
bot.api.config.use(throttler);

bot.use(sequentialize(getSessionKey));
bot.use(session);
bot.use(i18n.middleware());

bot.catch(console.error);

bot.use(modules);

// Start bot with polling by default and Sequentialize runner
const runner = run(bot);

// Stopping the bot when Node process
// is about to be terminated
const stopRunner = () => runner.isRunning() && runner.stop();
process.once('SIGINT', stopRunner);
process.once('SIGTERM', stopRunner);
