import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(
    ...classNames: (string | Record<string, boolean>)[]
): string {
    const joinedClassNames = clsx(...classNames);
    return twMerge(joinedClassNames);
}
