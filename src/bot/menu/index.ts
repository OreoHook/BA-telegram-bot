import { MenuTemplate } from "grammy-inline-menu";

import { MyContext } from "../my-context.js";

import { menu as settingsMenu } from "./settings/index.js";
import { menu as studentsMenu } from "./students/index.js";
import {menu as applicantsMenu} from './applicants/index.js'

export const menu = new MenuTemplate<MyContext>((context) =>
	context.i18n.t("welcome")
);

menu.submenu(
	(context) => "💆‍♂️ " + context.i18n.t("menu.applicants"),
	"applicants",
	applicantsMenu
);

menu.submenu(
	(context) => "👨‍🎓 " + context.i18n.t("menu.students"),
	"students",
	studentsMenu
);

menu.submenu(
	(context) => "⚙️ " + context.i18n.t("menu.settings"),
	"settings",
	settingsMenu
);
