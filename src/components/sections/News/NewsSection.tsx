import React, {FunctionComponent, useState} from "react";
import Link from "next/link";
import RightArrowIcon from "../../svg/RightArrow";
import News from "./News";
import {Modal} from "@mantine/core";
import Image from "next/image";

interface NewsSectionProps {
    news: [
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
    ],
    withHeading?: boolean
    mb?: number
}

const NewsSection: FunctionComponent<NewsSectionProps>
    = ({
            news,
            withHeading= true,
            mb = 150
       }) => {
    return (
        <>
            <div className={`mx-4 xl:mx-[165px] mb-[90px] xl:mb-[${mb}px]`}>
                {withHeading &&
                    <div className="text-center mb-[55px] xl:mb-[110px]">
                        <h2 className="font-bold text-[27px] xl:text-[40px] leading-[48px] tracking-[-0.5px] mb-[10px] xl:mb-[20px]">Novinky</h2>
                        <p className="text-[16px] leading-6 tracking-[0.1px] text-[#676766] mb-[10px] xl:mb-[20px]">Najnovšie informácie
                            o projekte Olivia Residence.</p>
                        <div className="flex gap-[10px] justify-center items-center">
                            <Link href="/novinky">
                                <a className="text-[18px] font-medium leading-[28px] text-green2">Všetky novinky</a>
                            </Link>
                            <RightArrowIcon stroke="#476761"/>
                        </div>
                    </div>
                }
                <div className="xl:flex gap-4 xl:gap-[30px] grid grid-cols-2 justify-items-center xl:justify-center">
                    {news.map((n, k) => (
                        <News key={k} path={n.path} date={n.date} title={n.title} description={n.description}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewsSection;