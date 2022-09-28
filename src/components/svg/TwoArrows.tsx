import React, {FunctionComponent} from "react";

interface BasketIconProps {
    fill?: string;
    width?: string;
    height?: string;
}

const TwoArrowsIcon: FunctionComponent<BasketIconProps>
    = ({
           width = "28",
           height = "28",
           fill = "none"
       }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 28 28" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M27.95 14.4502H25.25V24.8002C25.25 25.0702 25.07 25.2502 24.8 25.2502H14.45V27.9502H24.8C26.555 27.9502 27.95 26.5552 27.95 24.8002V14.4502Z"/>
            <path d="M1.40005 27.9494H9.95005V25.2494H4.64005L11.39 18.4994L9.50005 16.6094L2.75005 23.3594V18.0494H0.0500488V26.5994C0.0500488 27.3644 0.635049 27.9494 1.40005 27.9494Z"/>
            <path d="M2.75005 3.1998C2.75005 2.9298 2.93005 2.7498 3.20005 2.7498H13.55V0.0498047H3.20005C1.44505 0.0498047 0.0500488 1.4448 0.0500488 3.1998V13.5498H2.75005V3.1998Z"/>
            <path d="M27.9501 1.3998C27.9501 0.634805 27.3651 0.0498047 26.6001 0.0498047H18.0501V2.7498H23.3601L16.6101 9.4998L18.5001 11.3898L25.2501 4.6398V9.9498H27.9501V1.3998Z"/>
        </svg>

    );
};

export default TwoArrowsIcon;