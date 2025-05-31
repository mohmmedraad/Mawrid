import {
	Book,
	FileText,
	Globe,
	GraduationCap,
	HeartHandshake,
	Landmark,
	Languages,
	type LucideIcon,
	MonitorPlay,
	Users,
} from "lucide-react";
import type { Messages } from "next-intl";

export const SITE = {
	name: "Mawrid",
	title: "Islamic Projects Directory",
	description:
		"A platform that brings together Islamic projects from around the world, making it easier to discover, access, and support them.",
	url: "https://mawrid.netlify.app",
	category: "Islamic Resource Directory",
	keywords: [
		"Islamic projects",
		"Mawrid",
		"Quran",
		"Hadith",
		"Islamic apps",
		"Tafsir",
		"Muslim resources",
		"Dawah",
		"Arabic Islamic content",
		"Islamic websites",
	],
	authors: [
		{
			name: "mohammed raad",
			link: "https://mohammed-raad.vercel.app/",
		},
	],
	creator: {
		name: "mohammed raad",
		socials: {
			x: "https://twitter.com/mohammedraad_0",
		},
	},
	links: {
		github: "https://github.com/mohmmedraad/Mawrid",
	},
};

export const CATEGORIES: {
	key: keyof Messages["categories"];
	value: string;
	icon: LucideIcon;
}[] = [
	{ key: "quran-tafsir", value: "quran-tafsir", icon: Book },
	{ key: "hadith-sunnah", value: "hadith-sunnah", icon: Book },
	{ key: "education", value: "education", icon: GraduationCap },
	{
		key: "research-publications",
		value: "research-publications",
		icon: FileText,
	},
	{ key: "multilingual", value: "multilingual", icon: Languages },
	{ key: "international", value: "international", icon: Globe },
	{ key: "community-dawah", value: "community-dawah", icon: Users },
	{ key: "fiqh-fatwa", value: "fiqh-fatwa", icon: Landmark },
	{ key: "media", value: "media", icon: MonitorPlay },
	{ key: "charity", value: "charity", icon: HeartHandshake },
];

export const I18N = {
	supportedLocals: ["ar", "en"],
	defaultLocale: "en",
	rtlLocals: ["ar"],
	ltrLocals: ["en"],
} as const;
