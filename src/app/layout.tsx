import Providers from "@/components/providers";
import { SITE } from "@/constants";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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

const font = Montserrat({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${font.className}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
