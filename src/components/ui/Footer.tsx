import React, {FunctionComponent} from "react";
import Link from "next/link";
import LogoSecondary from "../svg/LogoSecondary";
import {TextInput} from "@mantine/core";
import PaperPlaneIcon from "../svg/PaperPlane";
import RectangleFooter from "../svg/RectangleFooter";
import BrandlyLogoIcon from "../svg/brandlyLogo";
import DpLogoIcon from "../svg/dpLogo";


interface FooterProps {
    toBottom?: boolean
}

const Footer: FunctionComponent<FooterProps> = ({toBottom = false}) => {
    return (
        <div className={`${toBottom && "xl:absolute bottom-0 left-0 right-0"}`}>
            <div>
                <div className="relative bg-black">
                    <div className="w-full flex flex-col xl:flex-row xl:gap-[205px] justify-center mx-4 xl:ml-0 xl:mr-[165px]">
                        <div className=" flex flex-col gap-[26px] pt-[45px]">
                            <LogoSecondary/>
                            <p className="text-[14px] leading-[20px] text-white opacity-60 w-[330px]">Najnovšie
                                informácie o projekte Olivia Residence priamo do Vašej schránky.</p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <TextInput
                                    className="w-[350px] text-[16px] leading-6 tracking-[0.1px]"
                                    placeholder="Email" rightSection={<button><PaperPlaneIcon/></button>}
                                    radius="xs"
                                />
                            </form>
                            <p className="text-[12px] leading-[20px] opacity-40 text-white w-[350px] pb-[25px]">Kliknutím
                                na tlačidlo potvrdzujete, že súhlasíte s našimi podmienkami spracovania
                                <Link href="/gdpr">
                                    <a className="underline underline-offset-[3px]"> osobných údajov.</a>
                                </Link></p>
                        </div>
                        <div className="flex flex-row gap-[30px] xl:gap-[100px] items-start xl:pt-[80px] pb-[20px] xl:pb-0">
                            <div className="flex flex-col gap-[15px]">
                                <Link href='/'>
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Domovská
                                        stránka</a>
                                </Link>
                                <Link href="/ponuka-bytov">
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Apartmány</a>
                                </Link>
                                <Link href='/o-projekte'>
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">O
                                        projekte</a>
                                </Link>
                                <Link href='/lokalita'>
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Lokalita</a>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-[15px]">
                                <Link href="/novinky">
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Novinky</a>
                                </Link>
                                <Link href="/retail">
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Retail</a>
                                </Link>
                                <Link href="/kontakt">
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Kontakt</a>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-[15px] items-end">
                                <span
                                    className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Predajné miesto</span>
                                <span
                                    className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">Rožňavská 1A</span>
                                <span
                                    className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">831 04 Bratislava</span>
                                <span
                                    className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">+421 911 000 000</span>
                                <Link href={'mailto:info@oliviaresidence.sk'}>
                                    <a className="font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 tracking-[0.1px] text-white opacity-60 hover:opacity-100">info@oliviaresidence.sk</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:inline-block xl:absolute xl:top-0 xl:right-0">
                        <RectangleFooter/>
                    </div>
                </div>
                <div className="flex gap-[50px] xl:gap-[130px] bg-[#000000] justify-center opacity-90">
                    <p className="pl-4 xl:pl-[165px] text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">© 2022 Olivia Residence.
                        Všetky práva vyhradené.</p>
                    <div className="hidden xl:flex gap-[10px] items-center">
                        <p className="text-white text-[12px] leading-5">Branding and Webdesign by</p>
                        <BrandlyLogoIcon/>
                        <span className="text-white">|</span>
                        <p className="text-white text-[12px] leading-5">Developed by</p>
                        <DpLogoIcon/>
                    </div>
                    <Link href="/gdpr">
                        <a className="pr-4 xl:pr-[165px] text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">Ochrana osobných údajov</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;