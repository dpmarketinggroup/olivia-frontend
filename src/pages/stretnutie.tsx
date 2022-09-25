import React from "react";
import {NextPage} from "next";
import FormKontakt from "../components/sections/Form/FormKontakt";
import Image from "next/image";
import PhoneIcon from "../components/svg/Phone";
import EmailSignIcon from "../components/svg/EmailSign";
import MapPoint2Icon from "../components/svg/MapPoint2";

const Stretnutie: NextPage = () => {
    return (
        <>
            <div className="flex justify-center bg-[#0E3F3B]">
                <div>
                    <div className="flex flex-col items-center pt-[80px]">
                        <MapPoint2Icon/>
                        <h1 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px] text-white w-[600px] text-center mb-[120px] mt-[40px]">Nezáväzné
                            stretnutie v Predajnom mieste</h1>
                    </div>
                    <div className="pl-[175px]">
                        <p className="mb-[40px] text-[18px] leading-7 text-white">Vyplňte formulár a zvoľte si
                            preferovaný dátum a
                            čas stretnutia.<br/> Náš predajca Vás bude
                            následne kontaktovať a potvrdí Vám termín stretnutia.
                        </p>
                        <div className="flex gap-[135px]">
                            <div>
                                <div className="mb-[125px]">
                                    <FormKontakt meeting={true} isGreen={true}/>
                                </div>
                            </div>
                            <div className="mt-[70px]">
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
                                <div className="mb-[20px]">
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
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px] w-[335px] text-white">V
                                    prípade záujmu o prenájom obchodného priestoru ma neváhajte kontaktovať</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stretnutie;