import { SITE } from "@/constants";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Link from "next/link";
import { Icons } from "./icons";
import { NumberTicker } from "./number-ticker";
import { buttonVariants } from "./ui/button";

export default async function Hero() {
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
					WHERE ISLAMIC PROJECTS COME TOGETHER
				</h1>
				<p className="mb-6 text-base text-gray-700 md:text-xl">
					Mawrid is a platform that brings together diverse Islamic initiatives
					to simplify discovery, support collaboration, and avoid duplication.
				</p>
			</div>
			<div className="flex justify-center">
				<Link
					className={cn(
						buttonVariants({
							variant: "rainbow",
							size: "lg",
						}),
					)}
					target="_blank"
					href={SITE.links.github}
				>
					<div className="flex items-center">
						<Icons.gitHub className="size-4" />
						<span className="ml-1 md:hidden">Star</span>
						<span className="ml-1 hidden md:inline">Star on GitHub</span>{" "}
					</div>
					<div className="ml-2 flex items-center gap-1 text-sm md:flex">
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
