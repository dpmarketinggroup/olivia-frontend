import React, {FunctionComponent, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import RightArrowIcon from "../../svg/RightArrow";
import {Modal} from "@mantine/core";


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
    const [opened, setOpened] = useState(false);
    return(
        <>
        <Modal opened={opened}  onClose={() => setOpened(false)} centered closeOnClickOutside={true}>
            <h2 className="font-bold text-[40px] leading-[48px] text-green2 mb-[25px]">{title}</h2>
            <div className="relative h-[340px] mb-[25px]">
                <Image
                    src={path}
                    alt={`${title} image`}
                    layout={"fill"}
                    objectFit={"cover"}
                />
            </div>
            <p className="text-[14px] leading-5 text-green2 mb-[25px]">{date}</p>
            <p className="text-[16px] leading-6 tracking-[0.1px] mb-[25px]">
                {description}
            </p>
            <Link href="/stretnutie">
                <button className="hover:bg-primary px-[20px] py-[6px] bg-[#476761] text-white font-medium text-[16px] leading-6">
                    Nezáväzné stretnutie
                </button>
            </Link>
        </Modal>
        <div className="flex flex-col gap-[10px]">
            <div className="h-[135px] xl:h-[155px] w-[200px] xl:w-[255px] relative">
                <Image objectFit="cover" layout="fill" alt="hero image" src={path} />
            </div>
                <span className="text-[14px] leading-5 text-green2">{date}</span>
                <h4 className="text-[16px] font-medium leading-6 tracking-[0.1px]">{title}</h4>
                <p className="text-[14px] leading-5 text-[#676766] w-[200px] xl:w-[190px]">{description}</p>
                <div className="flex gap-[8px] items-center">
                    <Link href='#'>
                        <a className="hover:border-b-2 hover:border-[#476761] border-b-2 border-white font-medium text-[14px] leading-5 text-green2" onClick={() => setOpened(true)}>Viac</a>
                    </Link>
                    <RightArrowIcon stroke="#476761"/>
                </div>
        </div>
        </>
    )
}

export default News;