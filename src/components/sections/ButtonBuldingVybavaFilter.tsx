import React, {FunctionComponent, useState} from "react";
import TwoArrowsIcon from "../svg/TwoArrows";

interface ButtonsVybavaProps{
    text:string
    icon: JSX.Element
}

const ButtonBuildingVybavaFilter:FunctionComponent<ButtonsVybavaProps> = ({text, icon}) => {
    const [isClicked, setClick] = useState(false);

    const changeColor = () =>{
        if (isClicked)
            setClick(false)
        else
            setClick(true)
    }

    return (
        <>
            <button onClick={changeColor}
                className={`border-2 border-white ${isClicked ? "bg-white" : "bg-transparent"} h-[40px] px-[15px]`}>
                <div className="flex gap-[15px] items-center">
                    {/*<TwoArrowsIcon width="19" height="19" fill={`${isClicked ? "transparent" : "white"}`}/>*/}
                    <div className="hidden xl:block">
                    {icon}
                    </div>
                    <span
                        className={`font-medium text-[16px] leading-7 tracking-[0.1px] ${isClicked ? "text-[#0E3F3B]" : "text-white"}`}>{text}</span>
                </div>
            </button>
        </>
    )
}

export default ButtonBuildingVybavaFilter;