import React from "react";
import Image from "next/image";

export interface DescriptionProps {
    src: string;
    children: React.ReactNode
}

const Description= ({children, src}: DescriptionProps) => {
    return (
        <div className={`flex flex-col xl:flex-row gap-[45px] xl:gap-[110px] xl:mx-[165px] items-center justify-center mb-[120px] xl:mb-[165px] `}>
            <div className="h-[300px] xl:h-[400px] w-full xl:w-[555px] relative">
                <Image objectFit="cover" layout="fill" alt="hero image" src={src}/>
            </div>
            <div className="flex flex-col gap-[15px] xl:gap-[23px] xl:items-start w-full px-[1rem] xl:px-0">
                {children}
            </div>
        </div>
    );
};

export default Description;
//TODO: Me -> Implementovať
export const CommonDescription = () => {
  return (<Description src={'dddd'}>
      p
  </Description>)
}
