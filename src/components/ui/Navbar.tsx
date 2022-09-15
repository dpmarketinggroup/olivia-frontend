import React from "react";
import Image from "next/image";
import Logo from "../svg/Logo";
import DownArrowIcon from "../svg/DownArrow";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[60px] mx-[40px] flex gap-[365px] items-center justify-between">
      <div className="flex gap-[50] items-center">
        <Logo />
        <div className="flex gap-[25px] items-center">
          <div className="flex gap-[10px] items-center">
            <span className="font-normal text-[16px] leading-6">
              Ponuka apartmánov
            </span>
            <DownArrowIcon fill={'black'}/>
          </div>
          <span className="font-normal text-[16px] leading-6">Lokalita</span>
          <div className="flex gap-[10px] items-center">
            <span className="font-normal text-[16px] leading-6 text-[#476761]">
              O projekte
            </span>
            <DownArrowIcon />
          </div>
          <span className="font-normal text-[16px] leading-6">Retail</span>
          <span className="font-normal text-[16px] leading-6">Novinky</span>
          <span className="font-normal text-[16px] leading-6">Kontakt</span>
        </div>
      </div>
      <div className="flex gap-[45px]">
        <div className="flex items-center gap-[5px]">
          <span>SK</span>
          <DownArrowIcon fill="black"/>
        </div>
        <Link href='/'>
          <button className="font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px]">Nezáväzné stretnutie</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
