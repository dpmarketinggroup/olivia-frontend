import {NextPage} from "next";
import React from "react";
import MapFooter from "../components/ui/MapFooter";
import TableRow from "../components/sections/Table/TableRow";
import Description from "../components/sections/Descriptions/Description";
import ManIcon from "../components/svg/Man";
import ParkingIcon from "../components/svg/Parking";
import CameraIcon from "../components/svg/Camera";
import FloorPlanIcon from "../components/svg/FloorPlan";
import ArrowDownNotFilled from "../components/svg/ArrowDownNotFilled";
import RightArrowIcon from "../components/svg/RightArrow";
import SeverkaIcon from "../components/svg/Severka";
import Image from "next/image";
import {Checkbox, RangeSlider} from "@mantine/core";
import TwoArrowsIcon from "../components/svg/TwoArrows";
import BasketIcon from "../components/svg/Basket";
import BasketCrossedIcon from "../components/svg/BasketCrossed";
import {className} from "postcss-selector-parser";

interface Table {
    apartmentNum: string
    floorNum: string
    roomNum: string
    apartmentM2: string
    balconyM2: string
    wholeM2: string
    priceWithDPH: string
    availability: boolean
}

const PonukaBytov: NextPage = () => {

    return (
        <>
            <div className="flex justify-center building">
                <div>
                    {/*<p className="mt-[125px] ml-[190px] mb-[35px] font-bold text-[32px] leading-[38px]">1-izbové*/}
                    {/*    byty</p>*/}
                    {/*<div className="flex justify-center bg-[#F5F5F5] mb-[100px] pb-[75px]">*/}
                    {/*    <table className="">*/}
                    {/*        <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Číslo apartmánu*/}
                    {/*            </th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Poschodie</th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Počet izieb</th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Apartmán m²</th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Balkón | Terasa*/}
                    {/*                m²*/}
                    {/*            </th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Celková výmera*/}
                    {/*            </th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Cena s DPH</th>*/}
                    {/*            <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Dostupnosť</th>*/}
                    {/*        </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*        {table1.map((props, index) => (*/}
                    {/*            <TableRow {...props} key={index}/>*/}
                    {/*        ))}*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*    <FilteringTable/>*/}
                    {/*</div>*/}
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
                                        className="font-medium text-[14px] leading-5 text-[#476761]">Výber podlažia</span>
                                    <RightArrowIcon stroke="#476761"/>
                                    <span
                                        className="font-medium text-[14px] leading-5 text-[#00000033]">Výber apartmánu</span>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <span className="font-medium text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                                </div>
                                <SeverkaIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[1105px] w-[1440px] max-w-[1440px] relative">
                        <Image
                            objectFit="cover"
                            layout="fill"
                            alt="hero image"
                            src={"/img/interaktivnaBudova.png"}
                        />
                    </div>
                    <div className="bg-primary-pattern w-full">
                        <div className="mx-[165px]">
                            <div className="flex justify-between pt-[90px] mb-[40px]">
                                <div>
                                    <p className="mb-[10px] text-[14px] leading-5 text-white">Cena €</p>
                                    <RangeSlider
                                        className="w-[320px]"
                                        color="red"
                                        size="xs"
                                    />
                                </div>
                                <div>
                                    <p className="mb-[10px] text-[14px] leading-5 text-white">Poschodie</p>
                                    <RangeSlider
                                        className="w-[320px]"
                                        color="red"
                                        size="xs"
                                    />
                                </div>
                                <div>
                                    <p className="mb-[10px] text-[14px] leading-5 text-white">Rozloha</p>
                                    <RangeSlider
                                        className="w-[320px]"
                                        color="red"
                                        size="xs"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between mb-[70px]">
                                <div className="flex gap-[20px]">
                                    <button
                                        className="w-[70px] px-[25px] py-[15px] border-2 border-white bg-transparent text-white font-bold text-[14px] leading-5">1 <br/> izb
                                    </button>
                                    <button
                                        className="w-[70px] px-[25px] py-[15px] border-2 border-white bg-transparent text-white font-bold text-[14px] leading-5">1.5 <br/> izb
                                    </button>
                                    <button
                                        className="w-[70px] px-[25px] py-[15px] border-2 border-white bg-transparent text-white font-bold text-[14px] leading-5">2 <br/>izb
                                    </button>
                                    <button
                                        className="w-[70px] px-[25px] py-[15px] border-2 border-white bg-transparent text-white font-bold text-[14px] leading-5">3 <br/>izb
                                    </button>
                                    <button
                                        className="w-[70px] px-[25px] py-[15px] border-2 border-white bg-transparent text-white font-bold text-[14px] leading-5">4 <br/>izb
                                    </button>
                                </div>
                                <div className="flex gap-[20px] items-end">
                                    <div>
                                        <p className="text-[14px] leading-5 text-white mb-[10px]">Výbava:</p>
                                        <button className="border-2 border-white bg-transparent h-[40px] px-[15px]">
                                            <div className="flex gap-[15px] items-center">
                                                <TwoArrowsIcon width="19" height="19" fill="white"/>
                                                <span
                                                    className="font-medium text-[16px] leading-7 tracking-[0.1px] text-white">s terasou</span>
                                            </div>
                                        </button>
                                    </div>
                                    <button className="border-2 border-white bg-transparent h-[40px] px-[15px]">
                                        <div className="flex gap-[15px] items-center">
                                            <BasketIcon width="20" height="20" fill="white"/>
                                            <span
                                                className="font-medium text-[16px] leading-7 tracking-[0.1px] text-white"> s balkónom</span>
                                        </div>
                                    </button>
                                    <button className="border-2 border-white bg-transparent h-[40px] px-[15px]">
                                        <div className="flex gap-[15px] items-center">
                                            <BasketCrossedIcon/>
                                            <span
                                                className="font-medium text-[16px] leading-7 tracking-[0.1px] text-white"> bez balkónu</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pb-[90px]">
                                <div className="flex gap-[30px]">
                                    <Checkbox label={
                                        <>
                                            <p className="font-medium text-[14px] leading-5 text-white">nezobrazovať
                                                predané</p>
                                        </>
                                    } radius="xs" color="#476761"/>
                                    <Checkbox label={
                                        <>
                                            <p className="font-medium text-[14px] leading-5 text-white">nezobrazovať
                                                rezervované</p>
                                        </>
                                    } radius="xs" color="green"/>
                                </div>
                                <button className="text-white bg-primary px-[30px] py-[12px]">Hľadať</button>
                            </div>
                        </div>
                    </div>
                    <Description imgPath="/img/car.png"
                                 title="Garážové parkovanie"
                                 descrip="Olivia Residence ponúka garážové státia na prenájom, vďaka ktorým bude parkovanie komfortný a bezproblémový zážitok."
                                 bulletPoints={[
                                     {icon: <ManIcon/>, text: "Prechod do Vášho bytu suchou nohou"},
                                     {icon: <ParkingIcon/>, text: "Dlhodobý prenájom garážových státí"},
                                     {icon: <CameraIcon/>, text: "Zabezpečené kamerovým systémom"},
                                 ]}
                                 twoButtons={false}
                    />
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default PonukaBytov;