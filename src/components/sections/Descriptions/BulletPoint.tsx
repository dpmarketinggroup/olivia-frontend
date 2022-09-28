import React, { FunctionComponent } from "react";

interface BulletPointProps{
    icon: JSX.Element; 
    text: string
}

const BulletPoint : FunctionComponent<BulletPointProps> = ({
    icon,
    text
}) =>{
    return(
        <div className="flex gap-[15px] xl:gap-[20px] items-center">
            {icon}
            <p className="font-bold text-[14px] xl:text-[16px] leading-[20px] xl:leading-[24px] tracking-[0.1px] text-neutral-600 w-[340px] xl:w-[400px]">{text}</p>
        </div>
    )
}

export default BulletPoint;