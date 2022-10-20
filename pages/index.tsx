import Link from "next/link";
import {FloorPlan, ArrowDownNotFilledIcon, RightArrow, Severka, RectangleMediumIcon, RectangleDarkIcon, RectangleLightIcon} from "@components/icons/";
import {Timeline, MapFooter, Negotiation, Articles, Subscription} from "@components/common";
import {BuildingFilter} from "@components/filter";
import {ApartmentSwiper, CustomSwiper, DeveloperSwiper} from "@components/swiper";
import Head from "next/head";
import Image from "next/image";
import {ApartmentEquipmentDescription, CommonDescription} from "@components/common/Description/Description";
import {Button} from "@components/ui";
import React, {useState} from "react";


const Home = () => {
    const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false)
    return (
        <>
            <Head>
                <title>Moderné mestské bývanie | Olivia Residence</title>
            </Head>
            <div className="flex justify-center pt-[50px]">
                <div className="h-[650px] w-full max-w-[1920px] xl:mb-[140px] relative">
                    <div className="absolute w-full xl:max-w-[1920px] h-[650px] -z-20">
                        <Image objectFit="cover" layout="fill" alt="hero image" src={'/img/hero.jpg'} loading={'eager'}/>
                    </div>
                    <div className="w-full xl:max-w-[1400px] xl:mx-auto">
                        <div className="w-[300px] xl:w-[600px] pt-[185px] mb-[40px] mx-4 xl:mx-0">
                            <h1 className="font-bold text-[34px] xl:text-[56px] leading-[40px] xl:leading-[60px] tracking-[-1px] text-white">
                                Moderný štýl bývania v dynamickej lokalite so skvelými možnosťami
                            </h1>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-[10px] mx-4 xl:mx-0">
                            <Link href="/stretnutie">
                                <button
                                    className="w-full hover:bg-[#0E3F3B] bg-[#89A6A2] xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                                    Nezáväzné stretnutie
                                </button>
                            </Link>
                            <Link href="/ponuka-bytov">
                                <button
                                    className="w-full hover:bg-[#476761] hover:border-[#476761] font-medium text-[16px] leading-[24px] tracking-[-0.1px] xl:w-[210px] h-[50px] border border-white text-white">
                                    Ponuka apartmánov
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden xl:block absolute bottom-[-60px] left-0'>
                        <RectangleDarkIcon/>
                    </div>
                    <div className='hidden xl:block  absolute bottom-[-60px] left-[60px]'>
                        <RectangleMediumIcon/>
                    </div>
                    <div className='hidden xl:block absolute bottom-[-120px] left-0'>
                        <RectangleLightIcon/>
                    </div>
                </div>
            </div>
            <Timeline/>
            <CommonDescription/>
            <div className="flex justify-center my-[70px] xl:-mb-[50px] xl:mt-[200px]">
                <div className="m xl:mx-[165px]">
                    <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                        <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">Ponuka
                            apartmánov</h1>
                    </div>
                    <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:justify-between xl:mr-[180px]">
                        <div className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute xl:right-[210px] cursor-pointer"
                            onClick={() => setIsFloorDropDownCLicked((prevState) => !prevState)}>
                            <span
                                className="drop-span font-bold text-[18px] leading-7 text-[#476761]">7. podlažie</span>
                            <div className={`${isFloorDropDownCLicked ? "dropdown-content" : "hidden"}`}>
                                <div
                                    className=" flex flex-col px-[30px] text-[18px] leading-7 text-[#476761] font-medium">
                                    <Link href={'/podlazie/4'}>
                                        <a className="py-[7px]">4. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/5'}>
                                        <a className="py-[7px]">5. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/6'}>
                                        <a className="py-[7px]">6. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/7'}>
                                        <a className="py-[7px]">7. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/8'}>
                                        <a className="py-[7px]">8. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/9'}>
                                        <a className="py-[7px]">9. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/10'}>
                                        <a className="py-[7px]">10. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/11'}>
                                        <a className="py-[7px]">11. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/12'}>
                                        <a className="py-[7px]">12. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/13'}>
                                        <a className="py-[7px]">13. podlažie</a>
                                    </Link>
                                    <Link href={'/podlazie/14'}>
                                        <a className="py-[7px]">14. podlažie</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="ml-[10px] inline-block">
                                <ArrowDownNotFilledIcon/>
                            </div>
                        </div>
                        <div
                            className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] z-10">
                            <Link href="/ponuka-bytov">
                                <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761] text-center xl:text-left">Výber
                                    podlažia</a>
                            </Link>
                            <RightArrow stroke="#476761"/>
                            <span
                                className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033] text-center xl:text-left">Výber apartmánu</span>
                            <RightArrow stroke="#00000033"/>
                            <span
                                className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033] text-center xl:text-left">Detail apartmánu</span>
                        </div>
                        {/*<div className="hidden xl:inline-block relative left-[285px]">*/}
                        {/*    <Severka/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <BuildingFilter/>
            <ApartmentSwiper/>
            <Negotiation title={"Lokalita v centre diania"} subtitle={"Rožňavská 1A, Bratislava"}/>
            <div className={'flex flex-col py-[70px] xl:py-[150px] bg-[#F5F5F5]'}>
                <h2 className={'text-[#0E3F3B] font-bold text-[40px] leading-[48px] mx-4 xl:mx-0 xl:text-center'}>Vybavenie
                    apartmánov</h2>
                <ApartmentEquipmentDescription/>
                <div className={'mx-auto flex flex-col xl:flex-row gap-[15px] w-full xl:w-auto px-[1rem] xl:px-0 mt-[-60px] xl:mt-0'}>
                    <Button variant={'outlined'}>
                        Vybavenie apartmánov
                    </Button>
                    <Button variant={'filled'}>
                        Nezáväzné stretnutie
                    </Button>
                </div>
            </div>
            <CustomSwiper/>
            {/*<Articles classname={'mb-[150px] xl:pt-[120px]'}/>*/}
            <Subscription/>
            <DeveloperSwiper/>
            <MapFooter/>
        </>
    );
};

export default Home;
