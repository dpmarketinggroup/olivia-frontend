import React, { FunctionComponent } from "react";

interface BulletPoint2Props{
    icon: JSX.Element;
    title:string;
    text: string;
    className?:string;
}

const BulletPoint2 : FunctionComponent<BulletPoint2Props> = ({
    icon,
    title,
    text,
    className
}) =>{
    return(
        <div className={`text-center xl:text-left ${className}`}>
            {icon}
            <h4 className="mb-[8px] xl:mb-[10px] mt-[20px] font-bold text-[18px] xl:text-[16px] leading-[24px] xl:w-[190px]">{title}</h4>
            <p className="font-normal text-[16px] xl:text-[14px] leading-[20px] text-neutral-600 xl:w-[195px]">{text}</p>
        </div>
    )
}

export default BulletPoint2;
