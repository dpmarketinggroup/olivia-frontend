import React, { FunctionComponent } from "react";

interface BulletPoint2Props{
    icon: JSX.Element; 
    title:string;
    text: string
}

const BulletPoint2 : FunctionComponent<BulletPoint2Props> = ({
    icon,
    title,
    text
}) =>{
    return(
        <div>
            {icon}
            <h4 className="mb-[10px] mt-[20px] font-bold text-[16px] leading-[24px] tracking-[0.1] w-[190px]">{title}</h4>
            <p className="font-normal text-[14px] leading-[20px] text-neutral-600 w-[195px]">{text}</p>
        </div>
    )
}

export default BulletPoint2;