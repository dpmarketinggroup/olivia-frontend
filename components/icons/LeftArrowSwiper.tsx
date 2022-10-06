import React, {FunctionComponent} from "react";

interface LeftArrowSwiperProps{
    className?: string
}

const LeftArrowSwiperIcon: FunctionComponent<LeftArrowSwiperProps> = ({className}) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"  className={"cursor-pointer " + className}>
            <rect y="0.000244141" width="22" height="22" fill="black" fill-opacity="0.2"/>
            <path d="M13 16.0002L8 11.0002L13 6.00024" stroke="white" stroke-width="1.5"/>
        </svg>
    );
};

export default LeftArrowSwiperIcon;