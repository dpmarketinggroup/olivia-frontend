import React, {FunctionComponent} from "react";


interface StepsUniCreditProps{
    step: string;
    title: string;
    offer: string;
}

const StepsUniCredit: FunctionComponent<StepsUniCreditProps> = ({
    step,
    title,
    offer
}) =>{
    return(
        <div className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white mx-[1rem] xl:mx-0">
            <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-[#C6C6C6]">{step}</span>
            <h4 className="font-bold text-[18px] leading-7 ">{title}</h4>
            <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">{offer}</span>
            <p className="hidden xl:inline-block w-[220px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">Zostaňte informovaný. Najnovšie informácie o projekte Karaptská Smart Residence.</p>
        </div>
    )
}

export default StepsUniCredit;
