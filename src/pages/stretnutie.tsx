import React from "react";
import {NextPage} from "next";
import FormKontakt from "../components/sections/Form/FormKontakt";
import Image from "next/image";
import PhoneIcon from "../components/svg/Phone";
import EmailSignIcon from "../components/svg/EmailSign";
import MapPoint2Icon from "../components/svg/MapPoint2";
import OpeningHours from "../components/OpeningHours";
import Map3d from "../components/sections/Maps/Map3d";

const Stretnutie: NextPage = () => {
    return (
        <>
            <div className="flex justify-center bg-[#0E3F3B]">
                <div>
                    <div className="flex flex-col items-center pt-[50px] xl:pt-[80px]">
                        <MapPoint2Icon/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[48px] tracking-[-0.5px] text-white w-[380px] xl:w-[600px] text-center mb-[55px] xl:mb-[120px] mt-[40px]">Nezáväzné
                            stretnutie v Predajnom mieste</h1>
                    </div>
                    <div className="hidden xl:inline-block absolute top-[25%] left-[15%] w-[1090px] h-[2px] bg-white opacity-30"></div>
                    <div className="">
                        <p className="mb-[70px] xl:mb-[40px] text-[18px] leading-7 text-white w-[350px] xl:w-auto mx-auto xl:mx-0">Vyplňte formulár a zvoľte si
                            preferovaný dátum a
                            čas stretnutia.<br/> Náš predajca Vás bude
                            následne kontaktovať a potvrdí Vám termín stretnutia.
                        </p>
                        <div className="flex flex-col xl:flex-row xl:gap-[135px] items-center xl:items-start">
                            <div>
                                <div className="xl:mb-[125px]">
                                    <FormKontakt meeting={true} isGreen={true}/>
                                </div>
                            </div>
                            <div className="mt-[50px] xl:mt-[70px]">
                                <div className="flex gap-[20px] items-center mb-[20px]">
                                    <div className="h-[60px] w-[60px] relative">
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            alt="Jozef Mrkvicka"
                                            src="/img/bozenaNemcova.png"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[16px] leading-6 tracking-[0.1px] text-white">Božena
                                            Nemcová</p>
                                        <span className="text-[14px] leading-5 text-white">Sales Assistant</span>
                                    </div>
                                </div>
                                <div className="mb-[90px] xl:mb-[20px]">
                                    <div className="flex gap-[20px] items-center">
                                        <PhoneIcon/>
                                        <span
                                            className="font-bold text-[18px] leading-7 text-white">+421 911 000 000</span>
                                    </div>
                                    <div className="flex gap-[20px] items-center">
                                        <EmailSignIcon/>
                                        <span
                                            className="font-bold text-[18px] leading-7 text-white">info@oliviaresidence.sk</span>
                                    </div>
                                </div>
                                <p className="hidden xl:inline-block font-medium text-[14px] leading-5 tracking-[0.1px] w-[305px] text-white pb-[40px] xl:pb-0">V prípade otázok sa na mňa neváhajte obrátiť.
                                    Rada Vám poradím a zodpoviem Vaše otázky.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OpeningHours/>
            <Map3d/>
        </>
    )
}

export default Stretnutie;