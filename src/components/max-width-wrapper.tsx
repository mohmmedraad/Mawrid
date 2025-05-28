import type { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
	return (
		<div
			className={cn("mx-auto w-full max-w-screen-xl px-6 sm:px-10", className)}
		>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
