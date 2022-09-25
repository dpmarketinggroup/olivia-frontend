import React from "react";
import Image from "next/image";
import Logo from "../svg/Logo";
import DownArrowIcon from "../svg/DownArrow";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[60px] flex gap-[365px] items-center justify-between shadow-[0_0_10px_rgba(0,0,0,0.15)]">
      <div className="flex gap-[50] items-center ml-[40px]">
        <Logo />
        <div className="flex gap-[25px] items-center">
          <div className="flex gap-[10px] items-center">
            <Link href="/ponuka-bytov">
            <a className="font-normal text-[16px] leading-6">
              Ponuka apartmánov
            </a>
            </Link>
            <DownArrowIcon fill={'black'}/>
          </div>
          <Link href="/lokalita">
            <a className="font-normal text-[16px] leading-6">Lokalita</a>
          </Link>
          <div className="flex gap-[10px] items-center">
            <Link href="/o-projekte">
            <a className="font-normal text-[16px] leading-6 text-[#476761]">
              O projekte
            </a>
            </Link>
            <DownArrowIcon />
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
          <span>SK</span>
          <DownArrowIcon fill="black"/>
        </div>
        <Link href='/stretnutie'>
          <button className="font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px]">Nezáväzné stretnutie</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
