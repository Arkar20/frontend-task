import { cn } from "@/utils";
import React from "react";

interface ColorCheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className: string;
}

const ColorRadioInput: React.FC<ColorCheckboxProps> = ({
    className,
    ...rest
}) => {
    return (
        <label className="inline-block mx-2 cursor-pointer">
            <input type="radio" className="hidden peer" {...rest} />
            <div
                className={cn(
                    "w-10 h-10 rounded-full border-4 peer-checked:border-primary peer-checked:w-11 peer-checked:h-11 border-transparent",
                    className
                )}
            />
        </label>
    );
};

export default ColorRadioInput;
