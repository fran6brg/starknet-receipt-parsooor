/**
 * miscelleanous
 */

export const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const lowerCaseEquals = (left: string, right: string): boolean =>
	left.toLowerCase() === right.toLowerCase();

export const lowerCaseIncludes = (
	values: string | string[],
	target: string,
): boolean => {
	if (Array.isArray(values))
		return values.some((value) =>
			value.toLowerCase().includes(target.toLowerCase()),
		);
	return values.toLowerCase().includes(target.toLowerCase());
};
