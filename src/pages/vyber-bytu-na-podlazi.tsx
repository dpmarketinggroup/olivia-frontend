import React from "react";
import {NextPage} from "next";
import MapFooter from "../components/ui/MapFooter";
import FloorPlanIcon from "../components/svg/FloorPlan";
import RightArrowIcon from "../components/svg/RightArrow";
import SeverkaIcon from "../components/svg/Severka";
import ArrowDownNotFilled from "../components/svg/ArrowDownNotFilled";
import Link from "next/link";


const VyberBytuNaPodlazi: NextPage = () => {
    return (
        <>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center my-[70px]">
                        <div className="mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlanIcon/>
                                <h1 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px]">Výber apartmánu
                                    na
                                    podlaží</h1>
                            </div>
                            <div className="flex justify-between">
                                <div
                                    className="flex gap-[13px] items-center px-[29px] py-[16px] bg-[#F5F5F5] rounded-[33px] mr-[155px]">
                                    <span
                                        className="font-bold text-[18px] leading-[28px] text-[#476761]">7. podlažie</span>
                                    <ArrowDownNotFilled/>
                                </div>
                                <div
                                    className="flex gap-[25px] items-center py-[20px] px-[25px] bg-[#F5F5F5] rounded-[33px] mr-[285px]">
                                    <span
                                        className="font-medium text-[14px] leading-5 text-[#00000033]">Výber podlažia</span>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <span
                                        className="font-medium text-[14px] leading-5 text-[#476761]">Výber apartmánu</span>
                                    <RightArrowIcon stroke="#476761"/>
                                    <span className="font-medium text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                                </div>
                                <SeverkaIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[32px] ml-[165px]">
                        <div className="bg-[#F5F5F5] max-h-[500px]">
                            <div className="grid grid-cols-2 gap-x-[35px] gap-y-[34px] mb-[50px]">
                                <span className="pt-[60px] pl-[70px]">3 - izbový apartmán</span>
                                <span className="pt-[60px]">č. 9.10</span>
                                <span className="pl-[70px]">Dostupnosť</span>
                                <span className="">voľný</span>
                                <span className="pl-[70px]">Počet izieb</span>
                                <span className="">3</span>
                                <span className="pl-[70px]">Apartmán m²</span>
                                <span className="">73.27 m²</span>
                                <span className="pl-[70px]">Balkón | Terasa m²</span>
                                <span className="">73.27 m²</span>
                                <span className="pl-[70px]">Celková výmera</span>
                                <span className="">73.27 m²</span>
                            </div>
                            <div className="flex justify-center pb-[60px]">
                                <Link href="/">
                                    <button
                                        className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white px-[20px] py-[6px] bg-[#476761]">
                                        Detail bytu
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className=" border-2 w-[690px] h-[555px] mb-[125px]">

                        </div>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default VyberBytuNaPodlazi;