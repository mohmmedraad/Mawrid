"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Languages } from "lucide-react";
import type { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export function LanguageSelector({ locale }: { locale: Locale }) {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const [isPending, startTransition] = useTransition();
	const handleLanguageChange = (newLocale: string) => {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: newLocale },
			);
		});
	};

	return (
		<Select
			defaultValue={locale}
			onValueChange={handleLanguageChange}
			disabled={isPending}
		>
			<SelectTrigger className="w-full rounded-xl has-[>svg]:px-4 data-[size=default]:h-10 data-[size=default]:px-6 sm:w-min">
				<Languages className="ms-2 size-4" />
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="en">English</SelectItem>
				<SelectItem value="ar">العربية</SelectItem>
			</SelectContent>
		</Select>
	);
}
