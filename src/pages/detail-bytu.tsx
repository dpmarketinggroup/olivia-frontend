import React, {useState} from "react";
import {NextPage} from "next";
import FloorPlanIcon from "../components/svg/FloorPlan";
import ArrowDownNotFilled from "../components/svg/ArrowDownNotFilled";
import RightArrowIcon from "../components/svg/RightArrow";
import SeverkaIcon from "../components/svg/Severka";
import BankIcon from "../components/svg/Bank";
import Link from "next/link";
import StarIcon from "../components/svg/Star";
import ManIcon from "../components/svg/Man";
import ParkingIcon from "../components/svg/Parking";
import CameraIcon from "../components/svg/Camera";
import Description from "../components/sections/Descriptions/Description";
import MapFooter from "../components/ui/MapFooter";
import SwiperGallery from "../components/sections/Swipers/SwiperGallery";
import {Modal} from "@mantine/core";
import FormKontakt from "../components/sections/Form/FormKontakt";


const DetailyBytu: NextPage = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Modal opened={opened} size={770000} onClose={() => setOpened(false)} centered>
                <div className="flex justify-center">
                <FormKontakt checkboxBackgroundColor="#89A6A2" inputBackgroundColor="#ffffff1f"/>
                </div>
            </Modal>
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
                                    className="flex gap-[15px] items-center py-[20px] px-[25px] bg-[#F5F5F5] rounded-[33px] mr-[285px]">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#00000033]">Výber podlažia</span>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <span
                                        className="font-medium text-[14px] leading-5 text-[#00000033]">Výber apartmánu</span>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <span
                                        className="font-medium text-[14px] leading-5 text-[#476761]">Detail apartmánu</span>
                                </div>
                                <SeverkaIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-[165px]">
                        <h3 className="mb-[25px] font-bold text-[24px] leading-[32px] tracking-[-0.1px]">Apartmán č.
                            5.05</h3>
                        <div className="flex gap-[40px] mb-[70px] justify-center">
                            <div className="border-2 w-[780px] h-[460px]"></div>
                            <div className="flex flex-col gap-[40px]">
                                <div className="border-2 w-[290px] h-[126px]"></div>
                                <div className="border-2 w-[290px] h-[126px]"></div>
                                <div className="border-2 w-[290px] h-[126px]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[75px] ml-[165px] mb-[85px]">
                        <div className="flex gap-[15px] items-center">
                            <BankIcon/>
                            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">Financovanie</span>
                            <div className="flex gap-[8px] items-center">
                                <Link href='/'>
                                    <a className="font-medium text-[14px] leading-5 text-green2">Viac</a>
                                </Link>
                                <RightArrowIcon stroke="#476761"/>
                            </div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <StarIcon/>
                            <span
                                className="font-bold text-[16px] leading-6 tracking-[0.1px]">Nadštandardné vybavenie</span>
                            <div className="flex gap-[8px] items-center">
                                <Link href='/'>
                                    <a className="font-medium text-[14px] leading-5 text-green2">Viac</a>
                                </Link>
                                <RightArrowIcon stroke="#476761"/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-[165px]">
                        <div className="flex justify-between mb-[25px]">
                            <p className="text-[#676766] font-medium text-[16px] leading-6 tracking-[0.1px]">Číslo apartmánu</p>
                            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">5.05</span>
                        </div>
                        <div className="flex justify-between mb-[25px] items-center">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Cena</p>
                            <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px]">142 800€</span>
                        </div>
                        <div className="flex justify-between mb-[70px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Dostupnosť</p>
                            <span className="font-bold text-[16px] leading-6 tracking-[0.1px] text-[#476761]">voľný</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">Názov</p>
                            <span className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">Plocha</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Vstupná hala</p>
                            <span>5.16 m²</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Kuchyňa</p>
                            <span>6.66 m²</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Obývacia izba</p>
                            <span>25.30 m²</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Izba</p>
                            <span>11.99 m²</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Kúpelňa + WC</p>
                            <span>4.45 m²</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">Celková výmera</p>
                            <span className="font-bold">53.56 m²</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Balkón</p>
                            <span>7.67 m²</span>
                        </div>
                        <div className="flex justify-between mb-[70px]">
                            <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">Celková výmera + Balkón</p>
                            <span className="font-bold">61.23 m²</span>
                        </div>
                        <div onClick={() => setOpened(true)}>
                            <Link href="/detail-bytu">
                                <button className="px-[440px] py-[12px] bg-[#476761] text-white mb-[160px]">Mám záujem o
                                    apartmán č. 5.05
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-center mb-[190px]">
                        <FloorPlanIcon/>
                        <h1 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px]">Pôdorys apartmánu na
                            stiahnutie</h1>
                        <Link href="/">
                            <button
                                className="bg-[#476761] text-white px-[20px] py-[6px] font-medium text-[16px] leading-6">Stiahnuť
                                pôdorys
                            </button>
                        </Link>
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
                    <div className="mb-[80px]">
                        <SwiperGallery/>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default DetailyBytu;