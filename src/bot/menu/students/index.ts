import { MenuTemplate } from "grammy-inline-menu";

import { backButtons } from "../general.js";
import { MyContext } from "../../my-context.js";

import { menu as requirementsMenu } from "./requirements.js";
import { menu as facultiesMenu } from "../faculties/index.js";

export const menu = new MenuTemplate<MyContext>((context) =>
  context.i18n.t("students.body"),
);

menu.submenu(
  (context) => "📖 " + context.i18n.t("menu.requirements"),
  "requirements",
  requirementsMenu,
);

menu.submenu(
  (context) => "🗃️ " + context.i18n.t("menu.faculties"),
  "faculties",
  facultiesMenu,
);

menu.url(
  (context) => "📋 " + context.i18n.t("menu.schedule"),
  "https://edu.tgpi.ru/Rasp/",
);

menu.manualRow(backButtons);
