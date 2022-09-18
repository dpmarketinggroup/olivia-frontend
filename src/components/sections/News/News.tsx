import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrowIcon from "../../svg/RightArrow";

interface NewsProps{
    path: string,
    date: string,
    title: string,
    description: string
}

const News : FunctionComponent<NewsProps> = ({
    path,
    date,
    title,
    description,
})=>{
    return(
        <div className="flex flex-col gap-[10px]">
            <div className="h-[155px] w-[255px] relative">
                <Image objectFit="cover" layout="fill" alt="hero image" src={path} />
            </div>
                <span className="text-[14px] leading-5 text-green2">{date}</span>
                <h4 className="text-[16px] font-medium leading-6 tracking-[0.1px]">{title}</h4>
                <p className="text-[14px] leading-5 text-[#676766] w-[190px]">{description}</p>
                <div className="flex gap-[8px] items-center">
                    <Link href='/src/pages'>
                        <a className="font-medium text-[14px] leading-5 text-green2">Viac</a>
                    </Link>
                    <RightArrowIcon stroke="#476761"/>
                </div>
        </div>
    )
}

export default News;