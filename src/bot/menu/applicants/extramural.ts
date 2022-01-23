import { MenuTemplate } from "grammy-inline-menu";

import { MyContext } from "../../my-context.js";

import { backButtons } from "../general.js";

export const menu = new MenuTemplate<MyContext>((context) =>
  context.i18n.t("applicants.extramural"),
);

menu.url(
  (context) => "🎓 " + context.i18n.t("menu.bachelor"),
  "https://www.tgpi.ru/abitur/bachelor",
);

menu.url(
  (context) => "👨‍🔬 " + context.i18n.t("menu.magistr"),
  "https://www.tgpi.ru/abitur/magistr",
);

menu.url(
  (context) => "🏫 " + context.i18n.t("menu.committee"),
  "http://newpriem.tgpi.ru/",
);

menu.manualRow(backButtons);
