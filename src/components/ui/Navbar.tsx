import React, {useState} from "react";
import Logo from "../svg/Logo";
import DownArrowIcon from "../svg/DownArrow";
import Link from "next/link";
import {Burger, Select} from '@mantine/core';
import {useScrollLock} from "@mantine/hooks";

const Navbar = () => {
    const languages = ["SK", "EN"];

    const [opened, setOpened] = useState(false);
    const [scrollLocked, setScrollLocked] = useScrollLock();

    return (
        <nav className="fixed xl:static top-0 w-full xl:w-auto bg-white z-10 xl:h-[60px] flex items-center justify-between shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            <div className="xl:flex gap-[50] items-center mx-4 xl:ml-[40px] xl:mr-0 h-full w-full">
                <div className={`flex justify-between ${!opened ? "mb-[20px]" : "mb-[35px]"} mt-[20px] xl:mb-0 xl:mt-0`}>
                    <Link href="/" >
                        <a><Logo/></a>
                    </Link>
                    <div className="xl:hidden">
                    <Burger opened={opened}
                            onClick={() => {
                                setOpened((o) => !o);
                                setScrollLocked((c) => !c);
                    }}/>
                    </div>
                </div>
                <div onClick={() => {setOpened(false); setScrollLocked((c) => false)}} className={`${!opened && "hidden"} xl:flex flex flex-col xl:flex-row gap-[25px] items-center h-[calc(100vh-60px)] xl:w-auto`}>
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
                        <a className="font-normal text-[16px] leading-6">Lokalita</a>
                    </Link>
                    <div className="flex gap-[10px] items-center">
                        {/*<Link href="/o-projekte">*/}
                        {/*<a className="font-normal text-[16px] leading-6 text-[#476761]">*/}
                        {/*  O projekte*/}
                        {/*</a>*/}
                        {/*</Link>*/}
                        {/*<DownArrowIcon />*/}
                        <div className="dropdown">
                            <Link href="/o-projekte">
                                <a className="drop-span text-[#476761]">O projekte</a>
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
                        <a className="font-normal text-[16px] leading-6">Retail</a>
                    </Link>
                    <Link href="/novinky">
                        <a className="font-normal text-[16px] leading-6">Novinky</a>
                    </Link>
                    <Link href="/kontakt">
                        <a className="font-normal text-[16px] leading-6 mb-[350px] xl:mb-0">Kontakt</a>
                    </Link>
                    <Link href='/stretnutie'>
                        <button
                            className="xl:hidden font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px] w-full">Nezáväzné
                            stretnutie
                        </button>
                    </Link>
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
                        className="font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px] xl:w-[190px]">Nezáväzné
                        stretnutie
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
