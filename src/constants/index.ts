import {
	Book,
	FileText,
	Globe,
	GraduationCap,
	HeartHandshake,
	Landmark,
	Languages,
	MonitorPlay,
	Users,
} from "lucide-react";

export const SITE = {
	links: {
		github: "https://github.com/mohmmedraad/Mawrid",
	},
};

export const CATEGORIES = [
	{
		label: "Qur'an & Tafsir",
		value: "quran-tafsir",
		icon: Book,
	},
	{
		label: "Hadith & Sunnah",
		value: "hadith-sunnah",
		icon: Book,
	},
	{
		label: "Islamic Education",
		value: "education",
		icon: GraduationCap,
	},
	{
		label: "Research & Publications",
		value: "research-publications",
		icon: FileText,
	},
	{
		label: "Multilingual Projects",
		value: "multilingual",
		icon: Languages,
	},
	{
		label: "International Initiatives",
		value: "international",
		icon: Globe,
	},
	{
		label: "Community & Da'wah",
		value: "community-dawah",
		icon: Users,
	},
	{
		label: "Fiqh & Fatwas",
		value: "fiqh-fatwa",
		icon: Landmark,
	},
	{
		label: "Video & Media",
		value: "media",
		icon: MonitorPlay,
	},
	{
		label: "Humanitarian & Charity",
		value: "charity",
		icon: HeartHandshake,
	},
];
