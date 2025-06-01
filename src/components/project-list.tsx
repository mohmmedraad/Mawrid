"use client";

import { PROJECT_LINK_ICONS } from "@/constants";
import { useCategoriesSearch } from "@/hooks/use-categories-search";
import type { Project } from "@/types";
import { Globe } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export default function ProjectList({ projects }: { projects: Project[] }) {
	const [categories] = useCategoriesSearch();
	const projectList = useMemo(
		() =>
			categories.length
				? projects.filter((p) =>
						p.categories.some((c) => categories.includes(c)),
					)
				: projects,
		[categories, projects],
	);

	return (
		<MaxWidthWrapper className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-3 lg:grid-cols-4">
			{projectList.map((project) => (
				<ProjectCard key={project.title} project={project} />
			))}
		</MaxWidthWrapper>
	);
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<>
			<Card className="h-full gap-3 shadow-none duration-200 hover:bg-gray-50 hover:shadow-xl">
				{project.image ? (
					<img
						src={project.image}
						width={64}
						height={64}
						alt={project.title}
						className="size-16 object-contain ps-5"
					/>
				) : (
					<Globe className="size-16 text-gray-800" />
				)}
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</CardHeader>
				<CardContent />
				<CardFooter className="flex justify-around border-t pt-4">
					{project.links.map((link) => {
						const Icon = PROJECT_LINK_ICONS[link.type];
						return (
							<Link
								key={link.link}
								href={link.link}
								target="_blank"
								className="group rounded-md border p-2.5 transition duration-200 hover:border-primary hover:bg-primary"
							>
								<Icon className="size-4 text-gray-800 group-hover:text-white" />
								<span className="sr-only">{link.type}</span>
							</Link>
						);
					})}
				</CardFooter>
			</Card>
		</>
	);
}
