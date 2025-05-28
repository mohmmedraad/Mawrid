import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export const useCategoriesSearch = () => {
	return useQueryState(
		"categories",
		parseAsArrayOf(parseAsString).withDefault([]),
	);
};
