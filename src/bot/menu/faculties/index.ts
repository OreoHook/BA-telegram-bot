import { MenuTemplate } from "grammy-inline-menu";

import { backButtons } from "../general.js";
import { MyContext } from "../../my-context.js";

import { menu as economicsMenu } from "./economics.js";
import { menu as foreignLanguagesMenu } from "./foreign-languages.js";
import { menu as historyMenu } from "./history.js";
import { menu as pedagogyMenu } from "./pedagogy.js";
import { menu as physMathInfMenu } from "./phys-math-inf.js";
import { menu as psychologyMenu } from "./psychology.js";

export const menu = new MenuTemplate<MyContext>((context) =>
	context.i18n.t("faculties.body")
);

menu.submenu(
	(context) => "📊 " + context.i18n.t("menu.economics"),
	"economics",
	economicsMenu
);

menu.submenu(
	(context) => "🌐 " + context.i18n.t("menu.foreign-languages"),
	"foreign-languages",
	foreignLanguagesMenu
);

menu.submenu(
	(context) => "📜 " + context.i18n.t("menu.history"),
	"history",
	historyMenu
);

menu.submenu(
	(context) => "👨‍💻 " + context.i18n.t("menu.phys-math-inf"),
	"phys-math-inf",
	physMathInfMenu
);

menu.submenu(
	(context) => "📚 " + context.i18n.t("menu.psychology"),
	"psychology",
	psychologyMenu
);

menu.submenu(
	(context) => "👩‍🏫 " + context.i18n.t("menu.pedagogy"),
	"pedagogy",
	pedagogyMenu
);

menu.manualRow(backButtons);
