import React from "react";
import Image from "next/image";
import {GlassStar, Key, MapPoint, Star} from "@components/icons";
import {Button} from "@components/ui";

export interface DescriptionProps {
    src: string;
    children: React.ReactNode,
    className?: string
}

const Description = ({children, src, className}: DescriptionProps) => {
    return (
        <div
            className={`flex flex-col xl:flex-row justify-between items-center justify-center px-[1rem] xl:px-0 w-full xl:max-w-[1200px] mx-auto xl:gap-[110px] ${className}`}>
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
            <div className={'flex flex-col xl:flex-row gap-[10px]'}>
                <Button variant={'outlined'}>
                    O projekte
                </Button>
                <Button variant={'filled'}>
                    Nezáväzné stretnutie
                </Button>
            </div>
        </Description>)
}

export const ApartmentEquipmentDescription = () => {
    return (
        <Description className={'my-[50px] xl:my-[95px]'} src={'/img/room2.jpg'}>
            <div>

            </div>
            <h3 className={'font-bold text-[24px] leading-[32px] text-black xl:max-w-[300px] mb-[40px] text-center xl:text-left'}><span className={'text-green2 underline'}>Vysoký štandard </span>
                pre Váš maximálny komfort</h3>
            <div className={'flex flex-col gap-[25px] xl:grid xl:grid-cols-2 xl:gap-[65px]'}>
                {[
                    {
                        icon: <Key/>,
                        title: 'Apartmán na kľúč',
                        description: <p className={'text-[#676766] text-center xl:text-left'}>Bývanie v Olivia Residence je úplne bezstarostné. Ponúkame <span className={'font-bold'}>komplexne zariadené
                            apratmány vrátane kompletne vybavenej kuchyne so spotrebičmi a sanitou.</span> Vašou jedinou
                            starosťou bude výber nábytku.</p>
                    },
                    {
                        icon: <Star/>,
                        title: 'Vysoký štandard vybavenia',
                        description: <p className={'text-[#676766] text-center xl:text-left'}>Olivia nevyniká len množstvom nadštandardného vybavenia, ale aj jeho prevedením.
                            Materiály použité v apartmánoch zodpovedjú vysokým štandardom kvality.</p>
                    }
                ].map(({description, title, icon}, i) => (
                    <div className={'flex flex-col items-center xl:items-start'} key={i}>
                        {icon}
                        <h4 className={'my-[15px] font-bold'}>{title}</h4>
                        {description}
                    </div>
                ))}
            </div>
        </Description>
    )
}
