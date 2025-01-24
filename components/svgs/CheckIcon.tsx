import React, { SVGProps } from "react";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="m7.5 17.017-5.175-5.175 2.358-2.359L7.5 12.308l8.233-8.241 2.359 2.358L7.5 17.017Z"
        />
    </svg>
);
