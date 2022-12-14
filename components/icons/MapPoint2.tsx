import React, {FunctionComponent} from "react";

interface MapPoint2Props{
    fill?: string
    width?:string
    height?:string
}

const MapPoint2Icon: FunctionComponent<MapPoint2Props>
    = ({
           fill="#89A6A2",
           width = "54",
           height="66"
       })=> {
    return (
        <svg width={width} height={height} viewBox="0 0 54 66" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 64.3998L27 65.2998L28.5 64.3998C29.5 63.7998 54 49.2998 54 27.7998C54 12.8998 41.9 0.799805 27 0.799805C12.1 0.799805 0 12.8998 0 27.7998C0 49.1998 24.5 63.7998 25.5 64.3998ZM27 6.7998C38.6 6.7998 48 16.1998 48 27.7998C48 42.9998 32 54.7998 27 58.1998C22 54.8998 6 42.9998 6 27.7998C6 16.1998 15.4 6.7998 27 6.7998Z"/>
            <path d="M27 39.7998C33.6 39.7998 39 34.3998 39 27.7998C39 21.1998 33.6 15.7998 27 15.7998C20.4 15.7998 15 21.1998 15 27.7998C15 34.3998 20.4 39.7998 27 39.7998ZM27 21.7998C30.3 21.7998 33 24.4998 33 27.7998C33 31.0998 30.3 33.7998 27 33.7998C23.7 33.7998 21 31.0998 21 27.7998C21 24.4998 23.7 21.7998 27 21.7998Z"/>
        </svg>
    );
};

export default MapPoint2Icon;