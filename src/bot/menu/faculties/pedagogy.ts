import { MenuTemplate } from "grammy-inline-menu";

import { MyContext } from "../../my-context.js";

import { backButtons } from "../general.js";

export const menu = new MenuTemplate<MyContext>((context) =>
  context.i18n.t("faculties.pedagogy"),
);

menu.url(
  (context) => "🎓 " + context.i18n.t("menu.groups"),
  "https://edu.tgpi.ru/Dek/Default.aspx?mode=group&f=facultet&id=36",
);

menu.manualRow(backButtons);
