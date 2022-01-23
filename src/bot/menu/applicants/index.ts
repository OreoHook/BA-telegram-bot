import { MenuTemplate } from "grammy-inline-menu";

import { backButtons } from "../general.js";
import { MyContext } from "../../my-context.js";

import { menu as fulltimeMenu } from "./full-time.js";
import { menu as extramuralMenu } from "./extramural.js";
import { menu as facultiesMenu } from "../faculties/index.js";

export const menu = new MenuTemplate<MyContext>((context) =>
  context.i18n.t("applicants.body"),
);

menu.submenu(
  (context) => "🌑 " + context.i18n.t("menu.extramural"),
  "extramural",
  fulltimeMenu,
);

menu.submenu(
  (context) => "🌕 " + context.i18n.t("menu.fulltime"),
  "fulltime",
  extramuralMenu,
);

menu.submenu(
  (context) => "🗃️ " + context.i18n.t("menu.faculties"),
  "faculties",
  facultiesMenu,
);

menu.manualRow(backButtons);
