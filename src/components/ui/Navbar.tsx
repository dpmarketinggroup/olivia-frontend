import React, {useState} from "react";
import Logo from "../svg/Logo";
import DownArrowIcon from "../svg/DownArrow";
import Link from "next/link";
import { Select } from '@mantine/core';

const Navbar = () => {
  const languages = ["SK", "EN"];

  return (
      <nav className="h-[60px] flex gap-[365px] items-center justify-between shadow-[0_0_10px_rgba(0,0,0,0.15)]">
        <div className="flex gap-[50] items-center ml-[40px]">
          <Logo/>
          <div className="flex gap-[25px] items-center">
            <div className="flex gap-[10px] items-center">
              <div className="dropdown">
                <Link href="/ponuka-bytov">
                  <a className="drop-span">Ponuka apartmánov</a>
                </Link>
                <div className="dropdown-content">
                  <Link href="/o-projekte#garazove-parkovanie">
                    <a className="w-[180px] pt-[20px] pb-[20px] px-[10px] text-center">Garážové parkovanie</a>
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
              <a className="font-normal text-[16px] leading-6">Kontakt</a>
            </Link>
          </div>
        </div>
        <div className="flex gap-[27px] mr-[40px]">
          <div className="flex items-center gap-[5px]">
            {/*<span className="hover:cursor-pointer" onClick={() => language === "SK" ? setLanguage("EN"): setLanguage("SK")}>{language}</span>*/}
            {/*<DownArrowIcon fill={'black'}/>*/}


            <div className="languages">
            <Select
                className="w-[50px]"
                data={languages}
                placeholder="SK"
                variant="unstyled"
                rightSection={<DownArrowIcon fill={'black'}/>}
                rightSectionWidth={30}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                transitionDuration={80}
            />
            </div>
          </div>
          <Link href='/stretnutie'>
            <button className="font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px]">Nezáväzné
              stretnutie
            </button>
          </Link>
        </div>
      </nav>
  );
};

export default Navbar;
