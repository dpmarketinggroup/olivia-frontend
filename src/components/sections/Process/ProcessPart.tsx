import React, { FunctionComponent } from "react";

interface ProcessProps {
    icon: JSX.Element,
    title: string ,
    year: number,
    quarter: string,
    isGreen?: boolean,
  }

  const ProcessPart: FunctionComponent<ProcessProps> = ({
    icon,
    title,
    year,
    quarter,
    isGreen = false,
  }) => {
    return(
        <div className="flex flex-col gap-[13px] xl:gap-[50px] items-center justify-center">
            <div>
                {icon}
            </div>
            <div className="flex flex-col gap-[4px] xl:gap-[16px] items-center justify-center" style={{ color: isGreen ? "#476761" :  "" , opacity : isGreen ? '': '0.5'}}>
                <p className="font-bold text-[18px] xl:text-[24px] leading-[32px] tracking-[-0.1px] w-[120px] xl:w-[280px] text-center" style={{ color: isGreen ? "#476761" : "", opacity : isGreen ? '': '0.5' }}>{title}</p>
                <span className="font-bold text-[22px] xl:text-[32px] leading-[38px] tracking-[-0.4px]" style={{ color: isGreen ? "#476761" : "", opacity : isGreen ? '': '0.5' }}>{year}</span>
                <span className="font-normal text-[14px] xl:text-[16px] leading-[24px] tracking-[-0.1px]" style={{ color: isGreen ? "#476761" : "", opacity : isGreen ? '': '0.5' }}>{quarter}</span>
            </div>
        </div>
    )
  }

  export default ProcessPart;


