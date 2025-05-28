"use client";

import { CATEGORIES } from "@/constants";
import { useCategoriesSearch } from "@/hooks/use-categories-search";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./max-width-wrapper";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function Categories() {
	const [categories, setCategories] = useCategoriesSearch();
	const handleCategoryChange = (category: string) => {
		setCategories((prevCategories) => {
			if (prevCategories.includes(category)) {
				return prevCategories.filter((c) => c !== category);
			}

			return [...prevCategories, category];
		});
	};

	return (
		<MaxWidthWrapper>
			<ScrollArea className="relative">
				<div className="flex w-max gap-4 py-3 pr-12 pl-4">
					{CATEGORIES.map((category) => (
						<button
							key={category.value}
							type="button"
							onClick={() => handleCategoryChange(category.value)}
							className={cn(
								"flex shrink cursor-pointer items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-gray-700 text-sm duration-200 hover:bg-gray-50",
								categories.includes(category.value) &&
									"border-primary bg-primary/5 text-primary hover:bg-primary/10",
							)}
						>
							<category.icon className="size-4 shrink-0" />
							<span className="shrink-0">{category.label}</span>
						</button>
					))}
				</div>
				<ScrollBar orientation="horizontal" />
				<div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-background" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/10 bg-gradient-to-l from-background" />
			</ScrollArea>
		</MaxWidthWrapper>
	);
}
