import React, { FunctionComponent } from "react";

interface ParkingPointIconProps {
    fill?: string;
    width?: string;
    height?: string;
}

const ParkingPointIcon: FunctionComponent<ParkingPointIconProps>
    = ({
        width = "28",
        height = "30",
        fill = "#476761"
    }) => {
        return (
            <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_655_4008)">
                    <rect x="22" y="18.7012" width="30" height="30" rx="15" fill="white" />
                    <path d="M34.1633 28.5486H35.8153V38.3486H34.1633V28.5486ZM35.1433 30.0046V28.5486H37.1173C37.8266 28.5486 38.4426 28.6746 38.9653 28.9266C39.4973 29.1693 39.908 29.5193 40.1973 29.9766C40.4866 30.4246 40.6313 30.9613 40.6313 31.5866C40.6313 32.212 40.4866 32.7533 40.1973 33.2106C39.908 33.668 39.4973 34.0226 38.9653 34.2746C38.4426 34.5173 37.8266 34.6386 37.1173 34.6386H35.1433V33.1826H37.1173C37.6866 33.1826 38.144 33.0473 38.4893 32.7766C38.8346 32.506 39.0073 32.1093 39.0073 31.5866C39.0073 31.064 38.8346 30.672 38.4893 30.4106C38.144 30.14 37.6866 30.0046 37.1173 30.0046H35.1433Z" fill="black" fill-opacity="0.3" />
                </g>
                <defs>
                    <filter id="filter0_d_655_4008" x="0" y="0.701172" width="74" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="11" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_655_4008" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_655_4008" result="shape" />
                    </filter>
                </defs>
            </svg>

        );
    };

export default ParkingPointIcon;