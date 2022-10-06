import React, {FunctionComponent, useState} from "react";
import BasketIcon from "../../svg/Basket";
import BasketCrossedIcon from "../../svg/BasketCrossed";


interface ButtonsVybavaProps{
    text:string
}

const ButtonBuildingVybavaFilter3:FunctionComponent<ButtonsVybavaProps> = ({text}) => {
    const [isClicked, setClick] = useState(false);

    const changeColor = () =>{
        setClick((p) => !p)
    }

    return (
        <>
            <button onClick={changeColor}
                    className={`hover:border-[#476761] hover:bg-[#476761] border-2 border-white ${isClicked ? "bg-white" : "bg-transparent"} h-[40px] px-[15px]`}>
                <div className="flex gap-[15px] items-center">
                    <div className="hidden xl:block">
                        <BasketCrossedIcon fill={`${isClicked ? "#0E3F3B" : "white"}`}/>
                    </div>
                    <span
                        className={`font-medium text-[16px] leading-7 tracking-[0.1px] ${isClicked ? "text-[#0E3F3B]" : "text-white"}`}>{text}</span>
                </div>
            </button>
        </>
    )
}

export default ButtonBuildingVybavaFilter3;