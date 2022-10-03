import React from "react";
import {NextPage} from "next";
import Hero from "../components/sections/Hero/Hero";
import FlatIcon from "../components/svg/Flat";
import Map from "../components/sections/Maps/Map";
import FloorPlanIcon from "../components/svg/FloorPlan";
import Image from "next/image";
import PhoneIcon from "../components/svg/Phone";
import EmailSignIcon from "../components/svg/EmailSign";
import FlatBoldIcon from "../components/svg/FlatBold";
import MapFooter from "../components/ui/MapFooter";
import Head from "next/head";
import Link from "next/link";


const Retail: NextPage = () => {
    return (
        <>
            <Head>
                <title>Retail | Olivia Residence</title>
            </Head>
        <div>
            <Hero imgName="retailHero" icon={<FlatIcon/>} title="Retail" description="Lukratívna lokalita pre život aj biznis"/>
            <div className="flex justify-center">
                <div className="mb-[120px] xl:mb-[165px]">
                    <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[60px]">
                        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-[50px] w-[400px] xl:w-[700px] bg-[#F5F5F5] py-[90px] px-4 xl:pl-[135px] xl:pr-0">
                            <div className= "w-[190px]">
                                <FlatBoldIcon/>
                                <h4 className="font-medium text-[16px] leading-6 tracking-[0.1px] mt-[22px] mb-[8px]">Prenájom obchodného priestoru</h4>
                                <p className="text-[14px] leading-5 text-[#676766]">Prenajmite si <strong>obchodný priestor v dynamickej lokalite </strong>, kde Váš biznis určite nesplynie s konkurenciou.</p>
                            </div>
                            <div className= "w-[190px]">
                                <FloorPlanIcon/>
                                <h4 className="font-medium text-[16px] leading-6 tracking-[0.1px]  mt-[22px] mb-[8px]">Pôdorys na mieru</h4>
                                <p className="text-[14px] leading-5 text-[#676766]">Pre prvých pár záujemcov ponúkame jedinečnú možnosť <strong>návrhu obchodného priestoru na mieru</strong> podľa Vašich potrieb.</p>
                            </div>
                        </div>
                        <div className="ml-4 xl:ml-0">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px] text-[#676766] w-[335px] mb-[23px]">V prípade záujmu o prenájom obchodného priestoru ma neváhajte kontaktovať</p>
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
                            <div>
                                <div className="flex gap-[20px] items-center">
                                    <PhoneIcon/>
                                    <Link href={'tel:+421911000000'}>
                                        <a className="font-bold text-[18px] leading-7">+421 911 000 000</a>
                                    </Link>
                                </div>
                                <div className="flex gap-[20px] items-center">
                                    <EmailSignIcon/>
                                    <Link href={'mailto:info@oliviaresidence.sk'}>
                                        <a className="font-bold text-[18px] leading-7">info@oliviaresidence.sk</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Map title="Lokalita v centre diania" subtitle="Rožňavská 1A, Bratislava"/>
            <MapFooter/>
        </div>
            </>
    )
}

export default Retail;