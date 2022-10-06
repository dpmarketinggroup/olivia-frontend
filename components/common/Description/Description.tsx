import React from "react";
import Image from "next/image";
import {GlassStar, MapPoint, Star} from "@components/icons";
import {Button} from "@components/ui";

export interface DescriptionProps {
    src: string;
    children: React.ReactNode
}

const Description = ({children, src}: DescriptionProps) => {
    return (
        <div className={`flex flex-col xl:flex-row justify-between items-center justify-center w-full xl:max-w-[1200px] mx-auto xl:gap-[110px]`}>
            <div className={'shrink-0'}>
                <Image objectFit="cover" width={555} height={400} alt="hero image" src={src}/>
            </div>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Description;
//TODO: Me -> Implementovať
export const CommonDescription = () => {
    return (
        <Description src={'/img/room.jpg'}>
            <h3 className={'font-bold text-[40px] leading-[48px] text-[#0E3F3B] xl:max-w-[310px]'}>Moderné
                mestské bývanie</h3>
            <p className={'text-black/60 mt-[20px]'}>
                Olivia je určená pre ľudí, ktorí chcú, aby ich domov presahoval za steny ich bytu. Pre ľudí, ktorí chcú
                mať ich obľúbené aktivity na dosah ruky. Pre ľudí, ktorí chcú svoj čas využívať efektívne.
                A pre ľudí, ktorí chcú mať z bývania zážitok.
                Olivia nie je len bývanie, je to životný štýl.
            </p>
            <div className={'my-[25px] flex flex-col gap-[10px]'}>
                {[
                    {icon: <MapPoint size={25}/>, label: 'Skvelá dynamická lokalita'},
                    {icon: <Star/>, label: 'Vysoký štandard vybavenia'},
                    {icon: <GlassStar/>, label: 'Štýlové a kvalitné prevedenie'},
                ].map(({icon, label}, i) => (
                    <div className={'flex gap-[12px] items-center font-bold text-black/60'} key={i}>
                        {icon}
                        <h5>{label}</h5>
                    </div>
                ))}
            </div>
            <div className={'flex gap-[10px]'}>
                <Button variant={'outlined'}>
                    O projekte
                </Button>
                <Button variant={'filled'}>
                    Nezáväzné stretnutie
                </Button>
            </div>
        </Description>)
}
