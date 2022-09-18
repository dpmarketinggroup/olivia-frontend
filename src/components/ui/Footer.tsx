import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoSecondary from "../svg/LogoSecondary";
import {TextInput} from "@mantine/core";
import PaperPlaneIcon from "../svg/PaperPlane";


const Footer = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="w-[1440px]">
                    <div className='flex gap-[125px]  bg-primary-pattern'>
                        <div className="flex flex-col gap-[28px] mx-[165px] py-[150px]">
                            <h2 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px] text-white w-[445px]">Dohodnite
                                si <br/><span className="underline underline-offset-[6px]">Nezáväzné stretnutie</span> v
                                Predajnom mieste</h2>
                            <p className="w-[400px] text-[16px] leading-[28px] text-white">Zodpovieme všetky Vaše
                                otázky, prevedieme Vás procesom kúpy a poskytneme Vám všetky potrebné informácie o Vašom
                                novom bývaní.</p>
                            <p className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] text-white">Rožňavská
                                1A, Bratislava</p>
                            <Link href='/'>
                                <button
                                    className="text-[16px] font-[500] leading-[24px] tracking-[0.1px] text-white border h-[50px] w-[190px] bg-[#89A6A2] border-none">Nezáväzné
                                    stretnutie
                                </button>
                            </Link>
                        </div>
                        <div className="h-[385px] w-[540px] relative top-[155px] right-[165px]">
                            <Image
                                objectFit="cover"
                                layout="fill"
                                alt="hero image"
                                src={"/img/smallMap.jpg"}
                            />
                        </div>
                    </div>
                    <div className="bg-black">
                        <div className="flex gap-[210px] ml-[165px]">
                            <div className="flex flex-col gap-[26px] pt-[45px]">
                                <LogoSecondary/>
                                <p className="text-[14px] leading-[20px] text-white opacity-60 w-[330px]">Najnovšie informácie o projekte Olivia Residence priamo do Vašej schránky.</p>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <TextInput
                                        className="w-[350px] text-[16px] leading-6 tracking-[0.1px]"
                                        placeholder="Email" rightSection={<button><PaperPlaneIcon/></button>}/>
                                </form>
                                <p className="text-[12px] leading-[20px] opacity-40 text-white w-[350px] pb-[25px]">Kliknutím na tlačidlo potvrdzujete, že súhlasíte s našimi podmienkami spracovania
                                    <span className="underline underline-offset-[3px]"> osobných údajov.</span></p>
                            </div>
                            <div className="flex gap-[100px] items-start pt-[80px]">
                                <div className="flex flex-col gap-[15px]">
                                    <Link href='/'>
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Domovská stránka</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Apartmány</a>
                                    </Link>
                                    <Link href='/'>
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">O projekte</a>
                                    </Link>
                                    <Link href='/'>
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Lokalita</a>
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                    <Link href="/">
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Novinky</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Retail</a>
                                    </Link>
                                    <Link href="/">
                                        <a className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Kontakt</a>
                                    </Link>
                                </div>
                                <div className="flex flex-col gap-[15px] items-end">
                                    <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Predajné miesto</span>
                                    <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">Rožňavská 1A</span>
                                    <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">831 04 Bratislava</span>
                                    <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">+421 911 000 000</span>
                                    <span className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white opacity-60">info@oliviaresidence.sk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between bg-[#000000] opacity-90">
                        <p className="pl-[165px] text-[14px] leading-5 text-[#999999] py-[20px]">© 2022 Olivia Residence. Všetky práva vyhradené.</p>
                        <p className="pr-[165px] text-[14px] leading-5 text-[#999999] py-[20px]">Ochrana osobných údajov</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;