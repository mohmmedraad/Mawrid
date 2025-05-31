"use client";

import { getLangDir } from "@/lib/utils";
import { DirectionProvider as RedixDirectionProvider } from "@radix-ui/react-direction";
import { useLocale } from "next-intl";

export default function DirectionProvider({
	children,
}: { children: React.ReactNode }) {
	const locale = useLocale();
	return (
		<RedixDirectionProvider dir={getLangDir(locale)}>
			{children}
		</RedixDirectionProvider>
	);
}
