import React, {FunctionComponent} from "react";

interface PopUpProps {
    top:string
    left:string
    display?:string
    title: string
    room1?: number
    room2?: number
    room3?: number
    room4?: number
}

const PopUp: FunctionComponent<PopUpProps>
    = ({
           top,
           left,
           display,
           title,
           room1,
           room2,
           room3,
           room4,
       }) => {
    return (
        <>
            <div style={{top, left}} className={`w-[250px] bg-white shadow-[0_0_60px_rgba(0,0,0,0.1)] z-20`}>
                <div className="flex flex-col gap-[15px] pl-[45px] pb-[35px] pt-[30px]">
                    <p className="mb-[15px] ml-[35px] font-bold text-[18px] leading-7 text-[#476761]">{title}</p>
                    <div className="flex">
                        <p className="w-[140px] text-[12px] leading-5 text-[#999999]">1 - izbové apartmány</p>
                        <span className="text-[14px] font-medium leading-5 text-[#476761]">{room1}</span>
                    </div>
                    <div className="flex">
                        <p className="w-[140px] text-[12px] leading-5 text-[#999999]">2 - izbové apartmány</p>
                        <span className="text-[14px] font-medium leading-5 text-[#476761]">{room2}</span>
                    </div>
                    <div className="flex">
                        <p className="w-[140px] text-[12px] leading-5 text-[#999999]">3 - izbové apartmány</p>
                        <span className="text-[14px] font-medium leading-5 text-[#476761]">{room3}</span>
                    </div>
                    <div className="flex">
                        <p className="w-[140px] text-[12px] leading-5 text-[#999999]">4 - izbové apartmány</p>
                        <span className="text-[14px] font-medium leading-5 text-[#476761]">{room4}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopUp;
