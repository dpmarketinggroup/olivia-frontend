import { MapFooter} from "@components/common";
import {BuildingFilter} from "@components/filter";
import {FloorPlan, ArrowDownNotFilledIcon, RightArrow} from "@components/icons";
import Head from "next/head";
import Link from "next/link";
import {CarDescription} from "@components/common/Description/Description";
import React, {useState} from "react";

const PonukaBytov = () => {
    const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false)
    return (
        <>
            <Head>
                <title>Ponuka bytov | Olivia Residence</title>
            </Head>
            <div className="flex justify-center building mt-[50px] xl:mt-[70px]">
                <div className="w-full xl:w-full">
                    <div className="flex justify-center my-[70px] xl:mb-0">
                        <div className="m xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">Ponuka
                                    apartmánov</h1>
                            </div>
                            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:justify-between xl:mr-[180px]">
                                <div className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute xl:right-[210px] cursor-pointer"
                                     onClick={() => setIsFloorDropDownCLicked((prevState) => !prevState)}
                                >
                                    <span className="drop-span font-bold text-[18px] leading-7 text-[#476761]">7. podlažie</span>
                                    <div className={`${isFloorDropDownCLicked ? "dropdown-content" : "hidden"}`}>
                                        <div
                                            className=" flex flex-col px-[30px] text-[18px] leading-7 text-[#476761] font-medium">
                                            <Link href={'/podlazie/3'}>
                                                <a className="py-[7px]">3. podlažie</a>
                                            </Link>
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
                    <div className={'xl:mt-[200px]'}>
                    <CarDescription/>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default PonukaBytov;
