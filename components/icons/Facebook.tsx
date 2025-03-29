import React, { FunctionComponent } from "react";


interface FacebookIconProps {
    fill?: string;
    width?: string;
    height?: string;
}

const FacebookIcon: FunctionComponent<FacebookIconProps> = ({
    width = 24,
    height = 25,
    fill = "#087168"
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12.8326C22 7.27599 17.5229 2.77148 12 2.77148C6.47715 2.77148 2 7.27599 2 12.8326C2 17.8543 5.65684 22.0167 10.4375 22.7715V15.7409H7.89844V12.8326H10.4375V10.616C10.4375 8.09444 11.9305 6.7016 14.2146 6.7016C15.3088 6.7016 16.4531 6.89811 16.4531 6.89811V9.37409H15.1922C13.95 9.37409 13.5625 10.1497 13.5625 10.9454V12.8326H16.3359L15.8926 15.7409H13.5625V22.7715C18.3432 22.0167 22 17.8545 22 12.8326Z" fill={fill} />
        </svg>

    );
};

export default FacebookIcon;