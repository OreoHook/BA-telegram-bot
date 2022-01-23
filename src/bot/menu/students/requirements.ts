import { MenuTemplate } from "grammy-inline-menu";

import { MyContext } from "../../my-context.js";

import { backButtons } from "../general.js";

export const menu = new MenuTemplate<MyContext>((context) =>
	context.i18n.t("students.requirements")
);

menu.manualRow(backButtons);
