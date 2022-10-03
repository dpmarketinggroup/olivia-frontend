import React, {FunctionComponent, useState} from "react";

interface ButtonBuildingFilter{
    num: string
}

const ButtonBuildingNumFilter:FunctionComponent<ButtonBuildingFilter> = ({num}) => {
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
                className={`w-[70px] px-[25px] py-[15px] border-2 border-white ${isClicked ? "bg-white text-[#0E3F3B]" : "bg-transparent text-white"} font-bold text-[14px] leading-5`}>{num} <br/> izb
            </button>
        </>
    )
}

export default ButtonBuildingNumFilter;