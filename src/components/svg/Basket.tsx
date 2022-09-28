import React, {FunctionComponent} from "react";

interface BasketIconProps {
    fill?: string;
    width?: string;
    height?: string;
}

const BasketIcon: FunctionComponent<BasketIconProps>
    = ({
           width = "28",
           height = "30",
           fill = "none"
       }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 28 30" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27.9501 26.6996H26.15V16.4846C27.23 15.9446 27.9501 14.8646 27.9501 13.6496V12.2996H25.25V13.6496C25.25 13.9196 25.07 14.0996 24.8001 14.0996H20.75V7.34961C20.75 3.61461 17.7351 0.599609 14 0.599609C10.265 0.599609 7.25005 3.61461 7.25005 7.34961V14.0996H3.20005C2.93005 14.0996 2.75005 13.9196 2.75005 13.6496V12.2996H0.0500488V13.6496C0.0500488 14.8646 0.770049 15.9896 1.85005 16.4846V26.6996H0.0500488V29.3996H27.9501V26.6996ZM23.4501 26.6996H18.9501V16.7996H23.4501V26.6996ZM16.25 26.6996H11.75V16.7996H16.25V26.6996ZM14 3.29961C16.25 3.29961 18.05 5.09961 18.05 7.34961V14.0996H9.95005V7.34961C9.95005 5.09961 11.75 3.29961 14 3.29961ZM4.55005 16.7996H9.05005V26.6996H4.55005V16.7996Z"
                />
        </svg>
    );
};

export default BasketIcon;