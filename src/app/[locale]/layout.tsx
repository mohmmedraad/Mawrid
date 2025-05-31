import Providers from "@/components/providers";
import { SITE } from "@/constants";
import { routing } from "@/i18n/routing";
import { getLangDir } from "@/lib/utils";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { type Locale, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Cairo, Montserrat, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: {
		default: `${SITE.name} - ${SITE.title}`,
		template: `%s - ${SITE.name}`,
	},
	description: SITE.description,
	keywords: SITE.keywords,
	authors: SITE.authors,
	creator: SITE.creator.name,
	generator: "Next.js",
	category: SITE.category,
	openGraph: {
		type: "website",
		locale: "en_US",
		title: `${SITE.name} - ${SITE.title}`,
		siteName: SITE.name,
		description: SITE.description,
		url: SITE.url,
		images: `${SITE.url}/og.png`,
	},
	twitter: {
		card: "summary_large_image",
		title: `${SITE.name} - ${SITE.title}`,
		description: SITE.description,
		images: `${SITE.url}/og.png`,
		creator: SITE.creator.socials.x,
	},
	icons: {
		icon: `${SITE.url}/favicon.ico`,
	},
};

const enFont = Montserrat({
	subsets: ["latin"],
});

const arFont = Cairo({
	weight: ["400", "500", "700", "800", "900"],
	subsets: ["arabic"],
});

function getFont(locale: Locale) {
	const fonts: Record<Locale, NextFont> = {
		en: enFont,
		ar: arFont,
	};

	return fonts[locale];
}

export default async function RootLayout({
	params,
	children,
}: Readonly<{
	params: Promise<{ locale: string }>;
	children: React.ReactNode;
}>) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		return notFound();
	}

	setRequestLocale(locale);

	const font = getFont(locale);

	return (
		<html
			lang={locale}
			dir={getLangDir(locale)}
			className={`${font.className}`}
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
