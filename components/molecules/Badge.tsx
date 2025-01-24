import { cn } from "@/utils";

import { ReactNode, HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
    children: ReactNode;
}

export function Badge({ className = "", children, ...rest }: BadgeProps) {
    return (
        <span
            className={cn(
                "bg-[#333333] text-[#D9D9D9] px-2 py-1 rounded-full", // Default styles
                className
            )}
            {...rest}
        >
            {children}
        </span>
    );
}
