import React, { FunctionComponent } from "react";


interface OverButtonIconProps {
    fill?: string;
    height?: string;
    width?: string;
}

const OverButtonIcon: FunctionComponent<OverButtonIconProps> = (
    { fill = "white",
        height = "63",
        width = "103"
    }
) => {
    return (
        <svg width={width} height={height} viewBox="0 0 103 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M103.332 41.3649L103.332 20.6982L82.6654 20.6982L82.6654 41.3649L103.332 41.3649Z" fill={fill} />
            <path opacity="0.2" d="M62 41.3649L62 20.6982L41.3333 20.6982L41.3333 41.3649L62 41.3649Z" fill={fill} />
            <path opacity="0.1" d="M41.332 41.3649L41.332 20.6982L20.6654 20.6982L20.6654 41.3649L41.332 41.3649Z" fill={fill} />
            <path opacity="0.3" d="M82.666 41.3649L82.666 20.6982L61.9993 20.6982L61.9993 41.3649L82.666 41.3649Z" fill={fill} />
            <path opacity="0.2" d="M82.666 62.0309L82.666 41.3643L61.9993 41.3643L61.9993 62.0309L82.666 62.0309Z" fill={fill} />
            <path opacity="0.1" d="M62 62.0309L62 41.3643L41.3333 41.3643L41.3333 62.0309L62 62.0309Z" fill={fill} />
            <path opacity="0.3" d="M103.332 62.0309L103.332 41.3643L82.6654 41.3643L82.6654 62.0309L103.332 62.0309Z" fill={fill} />
            <path opacity="0.4" d="M82.666 20.6979L82.666 0.03125L61.9993 0.0312491L61.9993 20.6979L82.666 20.6979Z" fill={fill} />
            <path opacity="0.3" d="M62 20.6979L62 0.03125L41.3333 0.0312491L41.3333 20.6979L62 20.6979Z" fill={fill} />
            <path opacity="0.2" d="M41.334 20.6979L41.334 0.03125L20.6673 0.0312491L20.6673 20.6979L41.334 20.6979Z" fill={fill} />
            <path opacity="0.1" d="M20.666 20.6979L20.666 0.03125L-0.000650406 0.0312491L-0.000651319 20.6979L20.666 20.6979Z" fill={fill} />
            <path opacity="0.5" d="M103.334 20.6979L103.334 0.03125L82.6673 0.0312491L82.6673 20.6979L103.334 20.6979Z" fill={fill} />
        </svg>

    );
};

export default OverButtonIcon;




