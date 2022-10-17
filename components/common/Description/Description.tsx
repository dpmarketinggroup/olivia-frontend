import React from "react";
import Image from "next/image";
import {
    Camera,
    GlassStar,
    Key,
    Man,
    MapPoint,
    Parking,
    RectangleDarkIcon, RectangleLightIcon,
    RectangleMediumIcon,
    Star
} from "@components/icons";
import {Button} from "@components/ui";
import Link from "next/link";

export interface DescriptionProps {
    src: string;
    children: React.ReactNode;
    className?: string;
    reverse?:boolean
    heading?:boolean
}

const Description = ({children, src, className, reverse, heading}: DescriptionProps) => {
    return (
        <div className={`relative flex flex-col ${reverse ? 'xl:flex-row-reverse': 'xl:flex-row'} justify-between items-center justify-center px-[1rem] xl:px-0 w-full xl:max-w-[1200px] mx-auto xl:gap-[110px] ${className} mb-[125px]`}>
            <div className={'shrink-0 mb-[25px] xl:mb-0'}>
                <Image objectFit="cover" width={555} height={400} alt="description image" src={src}/>
            </div>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Description;

export const CommonDescription = () => {
    return (
        <Description src={'/img/room.jpg'}>
            <h3 className={'font-bold text-[40px] leading-[48px] text-[#0E3F3B] xl:max-w-[310px]'}>Moderné mestské
                bývanie</h3>
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
                <Link href={'/o-projekte'}>
                    <Button variant={'outlined'}>
                        O projekte
                    </Button>
                </Link>
                <Link href={'/stretnutie'}>
                    <Button variant={'filled'}>
                        Nezáväzné stretnutie
                    </Button>
                </Link>
            </div>
            <div className='hidden xl:block absolute right-[-100px] top-[30px]'>
                <RectangleMediumIcon/>
            </div>
            <div className='hidden xl:block absolute left-[555px] bottom-[-53px]'>
                <RectangleLightIcon/>
            </div>
        </Description>)
}

export const ApartmentEquipmentDescription = () => {
    return (
        <Description className={'my-[50px] xl:my-[95px]'} src={'/img/room2.jpg'} >
            <h3 className={'font-bold text-[24px] leading-[32px] text-black xl:max-w-[300px] mb-[40px] mt-[30px] xl:mt-0'}>
                <span className={'text-green2 underline'}>Vysoký štandard </span>
                pre Váš maximálny komfort</h3>
            <div className={'flex flex-col gap-[25px] xl:grid xl:grid-cols-2 xl:gap-[65px]'}>
                {[
                    {
                        icon: <Key/>,
                        title: 'Apartmán na kľúč',
                        description: <p className={'text-[#676766]'}>Bývanie v Olivia Residence
                            je úplne bezstarostné. Ponúkame <span className={'font-bold'}>komplexne zariadené
                            apratmány vrátane kompletne vybavenej kuchyne so spotrebičmi a sanitou.</span> Vašou jedinou
                            starosťou bude výber nábytku.</p>
                    },
                    {
                        icon: <Star/>,
                        title: 'Vysoký štandard vybavenia',
                        description: <p className={'text-[#676766]'}>Olivia nevyniká len
                            množstvom nadštandardného vybavenia, ale aj jeho prevedením.
                            Materiály použité v apartmánoch zodpovedjú vysokým štandardom kvality.</p>
                    }
                ].map(({description, title, icon}, i) => (
                    <div className={'flex flex-col'} key={i}>
                        {icon}
                        <h4 className={'my-[15px] font-bold'}>{title}</h4>
                        {description}
                    </div>
                ))}
            </div>
            <div className='hidden xl:block absolute bottom-[-54px] left-[150px]'>
                <RectangleLightIcon/>
            </div>
            <div className='hidden xl:block absolute bottom-[-220px] left-[-60px]'>
                <RectangleDarkIcon/>
            </div>
            <div className='hidden xl:block absolute top-[-80px] right-[50px]'>
                <RectangleMediumIcon/>
            </div>
            <div className='hidden xl:block absolute bottom-[-260px] right-[-120px]'>
                <RectangleDarkIcon/>
            </div>
            <div className='hidden xl:block absolute bottom-[-202px] right-[-60px]'>
                <RectangleMediumIcon/>
            </div>
        </Description>
    )
}

interface CarDescriptionProps{
    oProjekte?:boolean
}

export const CarDescription = ({oProjekte = false}:CarDescriptionProps) => {
    return (
        <Description src={"/img/car.png"}>
            <h3 className={'text-[40px] leading-[48px] text-green2 font-bold'}>Garážové parkovanie</h3>
            <p className={'text-black/60 my-[20px]'}>Olivia Residence ponúka garážové státia na prenájom, vďaka ktorým bude parkovanie komfortný a
                bezproblémový zážitok.</p>
            <div className={'flex flex-col gap-[15px] mb-[30px]'}>
                {
                    [
                        {icon: <Man/>, label: 'Prechod do Vášho bytu suchou nohou'},
                        {icon: <Parking/>, label: 'Dlhodobý prenájom garážových státí'},
                        {icon: <Camera/>, label: 'Zabezpečené kamerovým systémom'}
                    ].map(({label, icon}, i) => (
                        <div className={'flex gap-[10px]'} key={i}>
                            {icon}
                            <h5>{label}</h5>
                        </div>
                    ))
                }
            </div>
            <Link href={'/stretnutie'}>
                <Button className={'w-[190px]'} variant={'filled'}>Nezáväzné stretnutie</Button>
            </Link>
            <div className={`hidden xl:block absolute bottom-[80px] left-[480px] -z-30`}>
                <RectangleDarkIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-0 left-[-80px]`}>
                <RectangleDarkIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-[350px] left-[50px]`}>
                <RectangleDarkIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-[350px] left-[110px]`}>
                <RectangleMediumIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-[290px] left-[50px]`}>
                <RectangleLightIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-[410px] left-[-10px]`}>
                <RectangleLightIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-[290px] left-[170px] -z-30`}>
                <RectangleMediumIcon/>
            </div>
            <div className={`hidden xl:block absolute bottom-[340px] left-[460px]`}>
                <RectangleLightIcon/>
            </div>
            <div className={`${oProjekte ? "hidden xl:block" : "hidden"} absolute bottom-[1475px] left-[-60px]`}>
                <RectangleLightIcon/>
            </div>
            <div className={`${oProjekte ? "hidden xl:block" : "hidden"}  absolute bottom-[1050px] left-[1100px]`}>
                <RectangleDarkIcon/>
            </div>
            <div className={`${oProjekte ? "hidden xl:block" : "hidden"} absolute bottom-[990px] left-[1040px]`}>
                <RectangleLightIcon/>
            </div>
        </Description>
    )
}

type Bulletpoint = {
    icon:JSX.Element, label: string
}

interface CustomDescriptionProps{
    src:string;
    title:string;
    description:string;
    bulletPoints:Bulletpoint[],
    reverse?:boolean
}

export const CustomDescription = ({
    src,
    title,
    description,
    bulletPoints,
    reverse = false,
                                  }:CustomDescriptionProps) => {
    return (
        <Description src={`/img/${src}`} reverse={reverse}>
            <h3 className={'text-[40px] leading-[48px] text-green2 font-bold'}>{title}</h3>
            <p className={'text-black/60 my-[20px]'}>{description}</p>
            <div className={'flex flex-col gap-[15px] mb-[30px]'}>
                {
                    bulletPoints.map(({label, icon}, i) => (
                        <div className={'flex gap-[10px] text-[14px]'} key={i}>
                            {icon}
                            <h5>{label}</h5>
                        </div>
                    ))
                }
            </div>
            <Link href={'/stretnutie'}>
                <Button className={'w-[190px]'} variant={'filled'}>Nezáväzné stretnutie</Button>
            </Link>
        </Description>
    )
}
