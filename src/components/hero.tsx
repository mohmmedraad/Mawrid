import { SITE } from "@/constants";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Icons } from "./icons";
import { LanguageSelector } from "./language-selector";
import { NumberTicker } from "./number-ticker";
import { buttonVariants } from "./ui/button";

export default async function Hero() {
	const t = await getTranslations();
	const locale = await getLocale();
	let stars = 0;

	try {
		const response = await fetch(
			"https://api.github.com/repos/mohmmedraad/Mawrid",
			{
				headers: process.env.GITHUB_OAUTH_TOKEN
					? {
							"Content-Type": "application/json",
						}
					: {},
				next: {
					revalidate: 3600,
				},
			},
		);

		if (response.ok) {
			const data = await response.json();
			stars = data.stargazers_count || stars;
		}
	} catch (error) {
		console.error("Error fetching GitHub stars:", error);
	}
	return (
		<section>
			<div className="mx-auto max-w-4xl text-center">
				<h1 className="mb-4 font-bold text-5xl text-gray-900 leading-[1.1] md:text-6xl">
					{t("hero-title")}
				</h1>
				<p className="mb-6 text-base text-gray-700 md:text-xl">
					{t("hero-description")}
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<LanguageSelector locale={locale} />
				<Link
					className={cn(
						buttonVariants({
							variant: "rainbow",
							size: "lg",
						}),
						"w-full sm:w-min",
					)}
					target="_blank"
					href={SITE.links.github}
				>
					<div className="flex items-center">
						<Icons.gitHub className="size-4" />
						<span className="ms-1 md:hidden">{t("star")}</span>
						<span className="ms-1 hidden md:inline">
							{t("star-on-github")}
						</span>{" "}
					</div>
					<div className="ms-2 flex items-center gap-1 text-sm md:flex">
						<StarIcon className="size-4 fill-yellow-300 text-yellow-300" />
						<NumberTicker
							value={stars}
							className="font-display font-medium text-white dark:text-black"
						/>
					</div>
				</Link>
			</div>
		</section>
	);
}
