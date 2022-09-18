import React, {FunctionComponent} from "react";
import Link from "next/link";
import RightArrowIcon from "../../svg/RightArrow";
import News from "./News";

interface NewsSectionProps {
    news: [
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
        { path: string, date: string, title: string, description: string },
    ]
}

const NewsSection: FunctionComponent<NewsSectionProps>
    = ({
           news
       }) => {
    return (
        <>
            <div className="mx-[165px] mb-[150px]">
                <div className="text-center mb-[110px]">
                    <h2 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px] mb-[20px]">Novinky</h2>
                    <p className="text-[16px] leading-6 tracking-[0.1px] text-[#676766] mb-[20px]">Najnovšie informácie
                        o projekte Olivia Residence.</p>
                    <div className="flex gap-[10px] justify-center items-center">
                        <Link href="/src/pages">
                            <a className="text-[18px] font-medium leading-[28px] text-green2">Všetky novinky</a>
                        </Link>
                        <RightArrowIcon stroke="#476761"/>
                    </div>
                </div>
                <div className="flex gap-[30px] justify-center">
                    {news.map((n, k) => (
                        <News key={k} path={n.path} date={n.date} title={n.title} description={n.description}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewsSection;