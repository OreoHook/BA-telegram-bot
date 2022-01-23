import { Bot, session } from "grammy";
import { FileAdapter } from "@satont/grammy-file-storage";
import { generateUpdateMiddleware } from "telegraf-middleware-console-time";
import { I18n } from "@grammyjs/i18n";
import { MenuMiddleware } from "grammy-inline-menu";
import "dotenv/config";

import { MyContext, Session } from "./my-context.js";
import { menu } from "./menu/index.js";

const token = process.env["BOT_TOKEN"];
if (!token) {
  throw new Error(
    "You have to provide the bot-token from @BotFather via environment variable (BOT_TOKEN)",
  );
}

const bot = new Bot<MyContext>(token);

bot.use(
  session({
    initial: (): Session => ({}),
    storage: new FileAdapter(),
  }),
);

const i18n = new I18n({
  directory: "locales",
  defaultLanguage: "en",
  defaultLanguageOnMissing: true,
  useSession: true,
});

bot.use(i18n.middleware());

if (process.env["NODE_ENV"] !== "production") {
  // Show what telegram updates (messages, button clicks, ...) are happening (only in development)
  bot.use(generateUpdateMiddleware());
}

bot.command("help", async (context) => context.reply(context.i18n.t("help")));

const menuMiddleware = new MenuMiddleware("/", menu);
bot.command("start", async (context) => menuMiddleware.replyToContext(context));
bot.command("settings", async (context) =>
  menuMiddleware.replyToContext(context, "/settings/"),
);
bot.command("students", async (context) =>
  menuMiddleware.replyToContext(context, "/students/"),
);
bot.command("applicants", async (context) =>
  menuMiddleware.replyToContext(context, "/applicants/"),
);
bot.use(menuMiddleware.middleware());

bot.catch((error) => {
  console.error("ERROR on handling update occured", error);
});

export async function start(): Promise<void> {
  // The commands you set here will be shown as /commands like /start or /magic in your telegram client.
  await bot.api.setMyCommands([
    { command: "start", description: "open the menu" },
    { command: "help", description: "show the help" },
    { command: "settings", description: "open the settings" },
    { command: "students", description: "show the students menu" },
    { command: "applicants", description: "show the applicants menu" },
  ]);

  await bot.start({
    onStart: (botInfo) => {
      console.log(new Date(), "Bot starts as", botInfo.username);
    },
  });
}
