import React, {FunctionComponent} from "react";

interface RightArrowProps{
    className?: string
}

const RightArrowSwiperIcon: FunctionComponent<RightArrowProps> = ({ className}) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={"cursor-pointer " + className}>
            <rect width="22" height="22" fill="black" fill-opacity="0.2"/>
            <path d="M8 6L13 11L8 16" stroke="white" stroke-width="1.5"/>
        </svg>

    );
};

export default RightArrowSwiperIcon;