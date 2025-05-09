import React, { FunctionComponent } from "react";


interface OverButtonBigIconProps {
    fill?: string;
    height?: string;
    width?: string;
    className?: string;
}

const OverButtonBigIcon: FunctionComponent<OverButtonBigIconProps> = (
    { fill = "white",
        height = "210",
        width = "220",
        className = "",
    }
) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 210 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M210 88.1063L210 44.0366L168.013 44.0366L168.013 88.1063L210 88.1063Z" fill={fill} />
            <path opacity="0.4" d="M168.013 44.037L168.013 -0.0327148L126.025 -0.0327168L126.025 44.037L168.013 44.037Z" fill={fill} />
            <path opacity="0.3" d="M126.025 44.037L126.025 -0.0327148L84.0376 -0.0327168L84.0376 44.037L126.025 44.037Z" fill={fill} />
            <path opacity="0.2" d="M126.025 88.1063L126.025 44.0366L84.0377 44.0366L84.0377 88.1063L126.025 88.1063Z" fill={fill} />
            <path opacity="0.1" d="M84.0375 88.1063L84.0375 44.0366L42.05 44.0366L42.05 88.1063L84.0375 88.1063Z" fill={fill} />
            <path opacity="0.1" d="M168.013 176.246L168.013 132.176L126.025 132.176L126.025 176.246L168.013 176.246Z" fill={fill} />
            <path opacity="0.2" d="M84.0376 44.037L84.0376 -0.0327148L42.0501 -0.0327168L42.0501 44.037L84.0376 44.037Z" fill={fill} />
            <path opacity="0.1" d="M42.05 44.037L42.05 -0.0327148L0.0625954 -0.0327168L0.0625935 44.037L42.05 44.037Z" fill={fill} />
            <path opacity="0.3" d="M168.013 88.1063L168.013 44.0366L126.025 44.0366L126.025 88.1063L168.013 88.1063Z" fill={fill} />
            <path opacity="0.2" d="M168.013 132.176L168.013 88.106L126.025 88.106L126.025 132.176L168.013 132.176Z" fill={fill} />
            <path opacity="0.1" d="M126.025 132.176L126.025 88.106L84.0376 88.106L84.0376 132.176L126.025 132.176Z" fill={fill} />
            <path opacity="0.1" d="M210 220.315L210 176.246L168.013 176.246L168.013 220.315L210 220.315Z" fill={fill} />
            <path opacity="0.3" d="M210 132.176L210 88.106L168.013 88.106L168.013 132.176L210 132.176Z" fill={fill} />
            <path opacity="0.2" d="M210 176.246L210 132.176L168.013 132.176L168.013 176.246L210 176.246Z" fill={fill} />
            <path opacity="0.5" d="M210 44.037L210 -0.0327148L168.013 -0.0327168L168.013 44.037L210 44.037Z" fill={fill} />
        </svg>


    );
};

export default OverButtonBigIcon;




