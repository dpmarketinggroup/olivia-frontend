import React, { FunctionComponent } from "react";


interface MotorwayProps {
    fill?: string;
}
const Motorway: FunctionComponent<MotorwayProps> = ({ fill = "#087168", }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_888_21621)">
                <path d="M33.5332 7.28402V13.0518H36.6338V5.66324" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <mask id="mask0_888_21621" maskUnits="userSpaceOnUse" x="0" y="-1" width="41" height="41">
                    <path d="M0.00195312 -0.000972748H40.0019V39.999H0.00195312V-0.000972748Z" fill="white" />
                </mask>
                <g mask="url(#mask0_888_21621)">
                    <path d="M37.9495 15.6377H32.2188V14.0027C32.2188 13.4775 32.6445 13.0517 33.1696 13.0517H36.9986C37.5237 13.0517 37.9495 13.4775 37.9495 14.0027V15.6377Z" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25.3838 13.9053V21.9663H28.4844V10.7875" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M29.8001 24.624H24.0693V22.9304C24.0693 22.3979 24.5009 21.9664 25.0333 21.9664H28.8361C29.3686 21.9664 29.8001 22.3979 29.8001 22.9304V24.624Z" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.3269 28.0244C19.0266 16.9507 28.4529 8.86754 39.3847 4.45816V0.582462C33.2165 1.33176 25.6996 2.61777 19.8624 4.82996L19.8057 4.85152" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M23.2965 30.5877C24.7472 33.7774 27.1565 37.2105 30.1097 39.416H3.5564C3.32796 38.9441 3.44507 39.1155 3.23351 38.6381C1.50031 34.727 0.520385 31.4642 0.62476 27.215C0.734916 22.7299 2.14062 18.4735 4.9689 14.9076C8.27601 10.738 12.4434 8.01172 17.2851 5.88524" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.3917 4.21862C28.5612 5.44815 23.6462 7.81354 19.7899 10.6449C17.6969 12.1817 15.87 14.0218 14.5086 16.1476C12.6302 19.0803 11.6857 22.4803 11.491 25.8635C11.3891 27.6319 11.5285 29.4104 11.8375 31.1571C12.1746 33.0624 12.7375 35.1842 13.7348 36.8911" stroke={fill} stroke-width="1.17187" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.56 3.12" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_888_21621">
                    <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>


    );
};

export default Motorway;