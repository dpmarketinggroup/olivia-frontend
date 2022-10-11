import React, {FunctionComponent, useState} from "react";
import Logo from "../../icons/Logo";
import DownArrowIcon from "../../icons/DownArrow";
import Link from "next/link";
import {Burger, Select} from '@mantine/core';
import {useScrollLock} from "@mantine/hooks";
import RightArrowIcon from "@components/icons/RightArrow";
import CloseIcon from "@components/icons/Close";

interface NavbarProps {
    mainPage?: boolean
}

const Navbar: FunctionComponent<NavbarProps> = ({mainPage = false}) => {
    const languages = ["SK", "EN"];

    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
    const [isOpenBanner, setIsOpenBanner] = useState(true);
    const [scrollLocked, setScrollLocked] = useScrollLock();

    return (
        <>
            {
                (mainPage && isOpenBanner) &&
                <div className="flex bg-[#0E3F3B] items-center w-full justify-center fixed h-[40px] xl:mt-0 z-[99]">
                    <div className="w-full max-w-[1920px] px-[1rem] xl:px-0 relative">
                        <div className="flex flex-col md:flex-row md:gap-[20px] ml-[23%] md:ml-[35%] xl:ml-0">
                            <p className="text-white font-medium text-[14px] leading-5 w-[160px] xl:ml-[40%]">
                                Výstavba oficiálne začala.
                            </p>
                            <div className="flex gap-[8px] items-center">
                                <Link href="/">
                                    <a className="text-white font-medium text-[14px] leading-5 underline underline-offset-[5px]">Viac</a>
                                </Link>
                                <RightArrowIcon/>
                            </div>
                        </div>
                        <div className="xl:mr-[13px] absolute right-[1rem] xl:right-[12px] top-[10px] md:top-[1px]">
                            <button onClick={() => setIsOpenBanner(false)}>
                                <CloseIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            }
        <nav className={`bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] ${(mainPage && isOpenBanner) && "mt-[40px]"} xl:h-[60px] w-full fixed top-0 z-50`}>
            <div className={`lg:shadow-none w-full max-w-[1920px] mx-auto xl:h-[60px] flex items-center justify-between`}>
                <div className="xl:flex gap-[50] items-center mx-4 xl:ml-[40px] xl:mr-0 h-full w-full">
                    <div
                        className={`flex justify-between ${!isOpenMobileNav ? "mb-[20px]" : "mb-[35px]"} mt-[20px] xl:mb-0 xl:mt-0`}>
                        <Link href="/">
                            <a><Logo/></a>
                        </Link>
                        <div className="xl:hidden">
                            <Burger opened={isOpenMobileNav}
                                    onClick={() => {
                                        setIsOpenMobileNav((o) => !o);
                                        setScrollLocked((c) => !c);
                                    }}/>
                        </div>
                    </div>
                    <div onClick={() => {
                        setIsOpenMobileNav(false);
                        setScrollLocked((c) => false)
                    }}
                         className={`${!isOpenMobileNav && "hidden"} flex xl:flex flex-col xl:flex-row gap-[25px] justify-center items-center h-[calc(100vh-60px)] xl:h-auto xl:w-auto`}>
                        <div
                            className={'flex flex-col xl:flex-row gap-[35px] xl:gap-[25px] text-[20px] xl:text-[16px]'}>
                            <div className="flex gap-[10px] items-center">
                                <div className="dropdown">
                                    <Link href="/ponuka-bytov">
                                        <a className="drop-span">Ponuka apartmánov</a>
                                    </Link>
                                    <div className="dropdown-content">
                                        <Link href="/o-projekte#garazove-parkovanie">
                                            <a className="w-[180px] pt-[20px] pb-[20px] px-[10px] text-center">Garážové
                                                parkovanie</a>
                                        </Link>
                                    </div>
                                    <div className="ml-[10px] inline-block">
                                        <DownArrowIcon fill={'black'}/>
                                    </div>
                                </div>
                            </div>
                            <Link href="/lokalita">
                                <a>Lokalita</a>
                            </Link>
                            <div>
                                <div className="dropdown">
                                    <Link href="/o-projekte">
                                        <a>O projekte</a>
                                    </Link>
                                    <div className="dropdown-content">
                                        <Link href="/o-projekte#harmonogram">
                                            <a className="pt-[20px] pb-[10px] px-[20px]">Harmonogram</a>
                                        </Link>
                                        <Link href="/o-projekte#financovanie">
                                            <a className="pt-0 pb-[20px] px-[20px] text-[#476761]">Financovanie</a>
                                        </Link>
                                    </div>
                                    <div className="ml-[10px] inline-block">
                                        <DownArrowIcon/>
                                    </div>
                                </div>

                            </div>
                            <Link href="/retail">
                                <a>Retail</a>
                            </Link>
                            <Link href="/novinky">
                                <a>Novinky</a>
                            </Link>
                            <Link href="/kontakt">
                                <a>Kontakt</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex gap-[27px] mr-[40px]">
                    <div className="flex items-center gap-[5px]">
                        <div className="languages">
                            <Select
                                className="hidden w-[50px]"
                                data={languages}
                                placeholder="SK"
                                variant="unstyled"
                                rightSection={<DownArrowIcon fill={'black'}/>}
                                rightSectionWidth={30}
                                styles={{rightSection: {pointerEvents: 'none'}}}
                                transitionDuration={80}
                            />
                        </div>
                    </div>
                    <Link href='/stretnutie'>
                        <button
                            className="hover:bg-[#0E3F3B] font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px] xl:w-[190px]">Nezáväzné
                            stretnutie
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
