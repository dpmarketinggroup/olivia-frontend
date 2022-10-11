import {Description, MapFooter} from "@components/common";
import {BuildingFilter} from "@components/filter";
import {Man, Parking, Camera, FloorPlan, ArrowDownNotFilledIcon, RightArrow, Severka} from "@components/icons";
import {Select} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import {CarDescription} from "@components/common/Description/Description";

const PonukaBytov = () => {
    return (
        <>
            <Head>
                <title>Ponuka bytov | Olivia Residence</title>
            </Head>
            <div className="flex justify-center building mt-[50px] xl:mt-[70px]">
                <div className="w-full xl:w-full">
                    <div className="flex justify-center my-[70px]">
                        <div className="m xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">Ponuka
                                    apartmánov</h1>
                            </div>
                            <div
                                className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
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
                            </div>
                        </div>
                    </div>
                    <BuildingFilter/>
                    <CarDescription/>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default PonukaBytov;
