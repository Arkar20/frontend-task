import { cn } from "@/utils";
import React, { ReactNode, HTMLAttributes } from "react";

interface TileProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    className?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}
export function Tile({
    children,
    className = "",
    startIcon,
    endIcon,
    ...restProps
}: TileProps) {
    return (
        <div
            className={cn(
                "bg-[#333333] h-auto py-2 rounded-md border-[0.1px] border-[#333333] flex items-start relative",
                className
            )}
            {...restProps}
        >
            {startIcon && (
                <span className="absolute left-4 top-5 transform -translate-y-1/2 flex-shrink-0">
                    {startIcon}
                </span>
            )}
            <span className="flex-grow">{children}</span>
            {endIcon && (
                <span className="absolute right-4 top-5 transform -translate-y-1/2 flex-shrink-0">
                    {endIcon}
                </span>
            )}
        </div>
    );
}
