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
import {Modal, Select} from "@mantine/core";
import FormKontakt from "../components/sections/Form/FormKontakt";
import Head from "next/head";
import Image from "next/image";
import SwiperPastProjects from "../components/sections/Swipers/SwiperPastProjects";

const DetailyBytu: NextPage = () => {
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);

    return (
        <>
            <Head>
                <title>Detail bytu | Olivia Residence</title>
            </Head>
            <Modal opened={opened} size={770000} onClose={() => setOpened(false)} centered>
                <div className="flex justify-center">
                <FormKontakt isGreen={false}/>
                </div>
            </Modal>
            <Modal className="gallery-modal" opened={opened2} size={770000} onClose={() => setOpened2(false)} centered>
                <div className="flex justify-center">
                    <SwiperGallery isModal={true}/>
                </div>
            </Modal>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center my-[70px]">
                        <div className="mx-4 xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlanIcon classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] xl:text-[40px] w-[250px] xl:w-auto leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Detail apartmánu</h1>
                            </div>
                            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                                <div className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px]">
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
                                <div className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[20px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px]">
                                    <Link href="/ponuka-bytov">
                                    <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber podlažia</a>
                                    </Link>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <Link href="/vyber-bytu-na-podlazi">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5  text-[#00000033]">Výber apartmánu</a>
                                    </Link>
                                    <RightArrowIcon stroke="#00000033"/>
                                    <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Detail apartmánu</span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <SeverkaIcon/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 xl:mx-[165px]">
                        <h3 className="mb-[25px] font-bold text-[20px] xl:text-[24px] leading-[32px] tracking-[-0.1px] text-center xl:text-left">Apartmán č. 5.05</h3>
                        <div onClick={() => setOpened2(true)} className="flex flex-col xl:flex-row gap-[20px] xl:gap-[40px] mb-[70px] items-center xl:items-start justify-center">
                            <div className="w-[290px] xl:w-[780px] h-[126px] xl:h-[460px] xl:flex justify-center">
                                <div className="mx-auto xl:mx-0 h-[126px] xl:h-[380px] w-[100px] xl:w-[300px] relative">
                                <Image
                                    objectFit="fill"
                                    layout="fill"
                                    alt="hero image"
                                    src="/img/apartment1.png"
                                />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[20px] xl:gap-[40px]">
                                <div className="w-[290px] h-[126px] relative">
                                        <Image
                                            objectFit="fill"
                                            layout="fill"
                                            alt="hero image"
                                            src="/img/room2.jpg"
                                        />
                                </div>
                                <div className="w-[290px] h-[126px] relative">
                                    <Image
                                        objectFit="fill"
                                        layout="fill"
                                        alt="hero image"
                                        src="/img/room.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-[20px] xl:gap-[75px] items-center ml-4 xl:ml-[165px] mb-[85px]">
                        <div className="flex gap-[15px] items-center">
                            <BankIcon/>
                            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">Financovanie</span>
                            <div className="flex gap-[8px] items-center">
                                <Link href='/o-projekte#financovanie'>
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
                    <div className="mx-auto xl:mx-[165px] w-[350px] xl:w-auto">
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
                                <button className="hover:bg-primary px-[60px] xl:px-[440px] py-[12px] bg-[#476761] text-white mb-[110px] xl:mb-[160px]">Mám záujem o apartmán č. 5.05</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-center mb-[120px] xl:mb-[190px]">
                        <FloorPlanIcon classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] w-[250px] xl:w-auto text-center xl:text-left">Pôdorys apartmánu na
                            stiahnutie</h1>
                        <Link href="/">
                            <button
                                className="hover:bg-primary bg-[#476761] text-white px-[20px] py-[6px] font-medium text-[16px] leading-6">Stiahnuť
                                pôdorys
                            </button>
                        </Link>
                    </div>
                    <div className="mb-[-80px] xl:mb-0">
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