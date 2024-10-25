import React, { FunctionComponent } from "react";


interface ButtonProps {
    className?: string;
    onClick?: () => void;
}
const RightButtonIcon: FunctionComponent<ButtonProps> = ({
    className = "",
    onClick
}) => {
    return (
        <svg className={"cursor-pointer " + className} onClick={onClick} width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.320068" y="0.683838" width="55" height="55" rx="27.5" fill="black" />
            <path d="M24.1775 20.8987L31.4626 28.1838L24.1775 35.4689" stroke="white" stroke-width="2" />
        </svg>

    );
};

export default RightButtonIcon;
