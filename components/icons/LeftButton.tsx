import React, { FunctionComponent } from "react";

interface ButtonProps {
    className?: string;
    onClick?: () => void;
}
const LeftButtonIcon: FunctionComponent<ButtonProps> = ({
    className = "",
    onClick
}) => {
    return (
        <svg className={"cursor-pointer " + className} width="40" onClick={onClick} height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="55" height="55" rx="27.5" transform="matrix(-1 0 0 1 55.3201 0.683838)" fill="black" />
            <path d="M31.4626 20.8987L24.1776 28.1838L31.4626 35.4689" stroke="white" stroke-width="2" />
        </svg>

    );
};

export default LeftButtonIcon;
