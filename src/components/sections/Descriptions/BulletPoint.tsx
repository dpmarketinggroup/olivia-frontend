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
        <div className="flex gap-[20px] items-center">
            {icon}
            <p className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-neutral-600">{text}</p>
        </div>
    )
}

export default BulletPoint;