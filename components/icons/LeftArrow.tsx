import React, { FunctionComponent } from "react";

interface LeftArrowProps {
    stroke?: string
    className?: string
}

const LeftArrowIcon: FunctionComponent<LeftArrowProps> = ({ stroke = "white", className }) => {
    return (
        <svg className={"cursor-pointer " + className} width="7" height="10" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11L2 6L7 1" stroke={stroke} strokeWidth="1.5" />
        </svg>

    );
};

export default LeftArrowIcon;
