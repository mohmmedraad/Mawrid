import { I18N } from "@/constants";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	locales: I18N.supportedLocals,
	defaultLocale: I18N.defaultLocale,
	localePrefix: "as-needed",
});
