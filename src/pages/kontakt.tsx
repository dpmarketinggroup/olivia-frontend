import {NextPage} from "next";
import Hero from "../components/sections/Hero/Hero";
import PhoneHeroIcon from "../components/svg/PhoneHero";
import FormKontakt from "../components/sections/Form/FormKontakt";
import Image from "next/image";
import PhoneIcon from "../components/svg/Phone";
import EmailSignIcon from "../components/svg/EmailSign";
import React from "react";
import MapFooter from "../components/ui/MapFooter";


const Kontakt: NextPage = () => {
    return (
        <>
            <Hero imgName="kontaktHero" icon={<PhoneHeroIcon/>} title="Kontakt"/>
            <div className="flex justify-center">
                <div className="mx-[165px]">
                    <p className="font-medium text-[16px] leading-6 tracking-[0.1px] mb-[20px]">V prípade otázok nás
                        neváhajte kontaktovať</p>
                    <div className="flex gap-[135px]">
                        <div>
                            <div className="mb-[125px]">
                                <FormKontakt checkboxBackgroundColor="#89A6A2" inputBackgroundColor="#ffffff1f"/>
                            </div>
                        </div>
                        <div>
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
                                    <p className="font-bold text-[16px] leading-6 tracking-[0.1px] ">Božena Nemcová</p>
                                    <span className="text-[14px] leading-5">Sales Assistant</span>
                                </div>
                            </div>
                            <div className="mb-[20px]">
                                <div className="flex gap-[20px] items-center">
                                    <PhoneIcon/>
                                    <span className="font-bold text-[18px] leading-7">+421 911 000 000</span>
                                </div>
                                <div className="flex gap-[20px] items-center">
                                    <EmailSignIcon/>
                                    <span className="font-bold text-[18px] leading-7">info@oliviaresidence.sk</span>
                                </div>
                            </div>
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px] text-[#676766] w-[335px]">V
                                prípade záujmu o prenájom obchodného priestoru ma neváhajte kontaktovať</p>
                        </div>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default Kontakt; 