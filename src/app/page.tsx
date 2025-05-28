import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import Categories from "@/components/categories";
import { FlickeringGrid } from "@/components/flickering-grid";
import Hero from "@/components/hero";
import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProjectList from "@/components/project-list";
import type { Project } from "@/types";

export const dynamic = "force-static";

function getProjects() {
	const PROJECTS_DIRECTORY = "./src/data/projects.json";
	const projectsDir = resolve(process.cwd(), PROJECTS_DIRECTORY);
	const projects = existsSync(projectsDir)
		? readFileSync(projectsDir, "utf-8")
		: "[]";
	return JSON.parse(projects as string) as Project[];
}

export default function HomePage() {
	const projects = getProjects();

	return (
		<main className="pb-20">
			<div className="relative">
				<FlickeringGrid
					className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
					squareSize={4}
					gridGap={6}
					color="#f46655"
					maxOpacity={0.1}
					flickerChance={0.1}
				/>
				<MaxWidthWrapper className="relative py-20">
					<Icons.logo className="mx-auto mb-8 block w-[150px]" />
					<Hero />
				</MaxWidthWrapper>
			</div>
			<Categories />
			<ProjectList projects={projects} />
		</main>
	);
}
