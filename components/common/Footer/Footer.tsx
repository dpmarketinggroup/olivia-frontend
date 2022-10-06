import React, {FunctionComponent} from "react";
import Link from "next/link";
import LogoSecondary from "../../icons/LogoSecondary";
import {TextInput} from "@mantine/core";
import PaperPlaneIcon from "../../icons/PaperPlane";
import RectangleFooter from "../../icons/RectangleFooter";
import BrandlyLogoIcon from "../../icons/BrandlyLogo";
import DpLogoIcon from "../../icons/dpLogo";

interface FooterProps {
    toBottom?: boolean
}

const Footer: FunctionComponent<FooterProps> = ({toBottom = false}) => {
    return (
        <div className={`${toBottom && "xl:absolute bottom-0 left-0 right-0"} w-full `}>
            <div>
                <div className="relative bg-black w-full px-[1rem] xl:px-[165px]">
                    <div className="flex flex-col xl:flex-row xl:gap-[205px] items-center xl:items-start justify-between mx-auto xl:max-w-[1920px]">
                        <div className="flex flex-col items-center justify-center xl:items-start gap-[26px] pt-[45px] w-full">
                            <LogoSecondary/>
                            <p className="text-[14px] leading-[20px] text-white opacity-60 w-full xl:max-w-[330px]">Najnovšie
                                informácie o projekte Olivia Residence priamo do Vašej schránky.</p>
                            <form className={'w-full'} onSubmit={(e) => e.preventDefault()}>
                                <TextInput
                                    sx={{
                                        width: '100%'
                                    }}
                                    className="xl:w-[350px] text-[16px] leading-6"
                                    placeholder="Email" rightSection={<button><PaperPlaneIcon/></button>}
                                    radius="xs"
                                />
                            </form>
                            <p className="text-[12px] leading-[20px] opacity-40 text-white xl:max-w-[350px] pb-[25px]">Kliknutím
                                na tlačidlo potvrdzujete, že súhlasíte s našimi podmienkami spracovania
                                <Link href="/pages/gdpr">
                                    <a className="underline underline-offset-[3px]"> osobných údajov.</a>
                                </Link></p>
                        </div>
                        <div
                            className="flex flex-col gap-[15px] items-center xl:flex-row xl:gap-[100px] justify-end  items-start xl:pt-[80px] pb-[20px] xl:pb-0 w-full text-center xl:text-left">
                            <div
                                className="hidden md:flex flex-col gap-[15px] font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 text-white opacity-60">
                                <Link href='/pages'>
                                    <a className="">Domovská
                                        stránka</a>
                                </Link>
                                <Link href="/pages/ponuka-bytov">
                                    <a>Apartmány</a>
                                </Link>
                                <Link href='/pages/o-projekte'>
                                    <a>O
                                        projekte</a>
                                </Link>
                                <Link href='/pages/lokalita'>
                                    <a>Lokalita</a>
                                </Link>
                            </div>
                            <div
                                className="hidden  md:flex flex-col gap-[15px] font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 text-white opacity-60">
                                <Link href="/pages/novinky">
                                    <a>Novinky</a>
                                </Link>
                                <Link href="/pages/retail">
                                    <a>Retail</a>
                                </Link>
                                <Link href="/pages/kontakt">
                                    <a>Kontakt</a>
                                </Link>
                            </div>
                            <div
                                className=" flex items-center flex-col gap-[15px] items-start xl:items-end text-center xl:text-left font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 text-white opacity-60">
                                <h5>Predajné miesto</h5>
                                <h5>Rožňavská 1A</h5>
                                <h5>831 04 Bratislava</h5>
                                <h5>+421 911 000 000</h5>
                                <Link href={'mailto:info@oliviaresidence.sk'}>
                                    <a>info@oliviaresidence.sk</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:inline-block xl:absolute xl:top-0 xl:right-0">
                        <RectangleFooter/>
                    </div>
                </div>
                <div className="flex gap-[50px] xl:gap-[130px] bg-[#000000] justify-center opacity-90">
                    <p className="pl-4 xl:pl-[165px] text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">©
                        2022 Olivia Residence.
                        Všetky práva vyhradené.</p>
                    <div className="hidden xl:flex gap-[10px] items-center">
                        <p className="text-white text-[12px] leading-5">Branding and Webdesign by</p>
                        <BrandlyLogoIcon/>
                        <span className="text-white">|</span>
                        <p className="text-white text-[12px] leading-5">Developed by</p>
                        <DpLogoIcon/>
                    </div>
                    <Link href="/pages/gdpr">
                        <a className="pr-4 xl:pr-[165px] text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">Ochrana
                            osobných údajov</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
