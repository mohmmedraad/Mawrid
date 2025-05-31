import { I18N } from "@/constants";
import type { LangDir } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getLangDir(
	locale: (typeof I18N.supportedLocals)[number],
): LangDir {
	// @ts-ignore
	if (I18N.rtlLocals.includes(locale)) {
		return "rtl";
	}

	return "ltr";
}
