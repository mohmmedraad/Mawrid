export type Project = {
	links: {
		type: ProjectLinkType;
		link: string;
	}[];
	title: string;
	image: string;
	categories: string[];
	description: string;
};

export type ProjectLinkType = "apple-store" | "play-store" | "website";

export type LangDir = "rtl" | "ltr";
