import {NextPage} from "next";
import React from "react";
import MapFooter from "../components/ui/MapFooter";
import Description from "../components/sections/Descriptions/Description";
import ManIcon from "../components/svg/Man";
import ParkingIcon from "../components/svg/Parking";
import CameraIcon from "../components/svg/Camera";
import FloorPlanIcon from "../components/svg/FloorPlan";
import ArrowDownNotFilled from "../components/svg/ArrowDownNotFilled";
import RightArrowIcon from "../components/svg/RightArrow";
import SeverkaIcon from "../components/svg/Severka";
import {Checkbox, RangeSlider, Select} from "@mantine/core";
import ButtonBuildingNumFilter from "../components/sections/Buttons/ButtonBuildingNumFilter";
import ButtonBuildingVybavaFilter from "../components/sections/Buttons/ButtonBuldingVybavaFilter";
import Head from "next/head";
import Dom from '../components/sections/Interactive/flat/Dom'
import ButtonBuildingVybavaFilter2 from "../components/sections/Buttons/ButtonBuildingVybavaFilter2";
import ButtonBuildingVybavaFilter3 from "../components/sections/Buttons/ButtonBuildingVybavaFilter3";
import Link from "next/link";
import HouseAndFilter from "../components/sections/Interactive/HouseAndFilter";

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
            <Head>
                <title>Ponuka bytov | Olivia Residence</title>
            </Head>
            <div className="flex justify-center building">
                <div className="w-full xl:w-full">
                    <div className="flex justify-center my-[70px]">
                        <div className="mx-4 xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlanIcon classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] w-[250px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Ponuka apartmánov</h1>
                            </div>
                            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                                <div className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px] z-10">
                                    <Select
                                        className="w-[120px] floor-num"
                                        data={[
                                            "4. podlažie","5. podlažie", "7. podlažie","8. podlažie","9. podlažie","10. podlažie","11. podlažie","12. podlažie",
                                        ]}
                                        placeholder="7. podlažie"
                                        variant="unstyled"
                                        rightSection={ <ArrowDownNotFilled/>}
                                        rightSectionWidth={-70}
                                        styles={{ rightSection: { pointerEvents: 'none' } }}
                                        transitionDuration={80}
                                    />
                                </div>
                                <div className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px] z-10">
                                    <Link href="/ponuka-bytov">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Výber podlažia</a>
                                    </Link>
                                    <RightArrowIcon stroke="#476761"/>
                                    <span
                                        className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber apartmánu</span>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <SeverkaIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HouseAndFilter/>
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



{/*<div className="tooltip-wrap">*/}
{/*    <button>Press me</button>*/}
{/*    <div className="tooltip-content">*/}
{/*        Here is some content for the tooltip*/}
{/*    </div>*/}
{/*</div>*/}

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