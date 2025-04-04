import React, { FunctionComponent } from "react";


interface MagnifierProps {
    fill?: string;
}
const MagnifierIcon: FunctionComponent<MagnifierProps> = ({ fill = "white", }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_655_3144)">
                <path d="M20 19.1173L14.6828 13.8C15.944 12.3365 16.7075 10.4327 16.7075 8.35375C16.7074 3.74748 12.96 0 8.35375 0C3.74748 0 0 3.74748 0 8.35375C0 12.96 3.74748 16.7075 8.35375 16.7075C10.4327 16.7075 12.3365 15.944 13.8 14.6828L19.1173 20L20 19.1173ZM1.24842 8.35375C1.24842 4.43586 4.43586 1.24842 8.35375 1.24842C12.2716 1.24842 15.4591 4.43586 15.4591 8.35375C15.4591 12.2716 12.2716 15.4591 8.35375 15.4591C4.43586 15.4591 1.24842 12.2716 1.24842 8.35375Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_655_3144">
                    <rect width="20" height="20" fill={fill} />
                </clipPath>
            </defs>
        </svg>

    );
};

export default MagnifierIcon;