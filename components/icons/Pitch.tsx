import React, { FunctionComponent } from "react";


interface PitchProps {
    fill?: string;
}
const Pitch: FunctionComponent<PitchProps> = ({ fill = "#087168", }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_22170)">
                <mask id="mask0_888_22170" maskUnits="userSpaceOnUse" x="0" y="-1" width="41" height="41">
                    <path d="M0.00195312 -0.000972748H40.0019V39.999H0.00195312V-0.000972748Z" fill="white" />
                </mask>
                <g mask="url(#mask0_888_22170)">
                    <path d="M2.93164 34.7256H0.587891V5.27246H39.416V34.7256H5.27539" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <path d="M2.93164 26.5229V7.6167H37.0723V32.3823H2.93164V28.8667V26.5229Z" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.002 7.6167V32.3823" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <mask id="mask1_888_22170" maskUnits="userSpaceOnUse" x="0" y="-1" width="41" height="41">
                    <path d="M0.00195312 -0.000972748H40.0019V39.999H0.00195312V-0.000972748Z" fill="white" />
                </mask>
                <g mask="url(#mask1_888_22170)">
                    <path d="M23.5176 19.999C23.5176 21.9407 21.9436 23.5146 20.002 23.5146C18.0603 23.5146 16.4863 21.9407 16.4863 19.999C16.4863 18.0574 18.0603 16.4834 20.002 16.4834C21.9436 16.4834 23.5176 18.0574 23.5176 19.999Z" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.5566 16.6844C32.1913 17.1671 31.2129 18.4686 31.2129 19.9992C31.2129 21.5298 32.1913 22.8313 33.5566 23.314" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37.0723 26.5225H33.5566V13.4756H37.0723" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.44727 16.6844C7.81258 17.1671 8.79102 18.4686 8.79102 19.9992C8.79102 21.5298 7.81258 22.8313 6.44727 23.314" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.93164 26.5225H6.44727V13.4756H2.93164" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_888_22170">
                    <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default Pitch;