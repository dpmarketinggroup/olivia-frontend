import React, { FunctionComponent } from "react";
import Link from "next/link";
import RightArrowIcon from "./svg/RightArrow";
import CloseIcon from "./svg/Close";

const Banner = () =>{
    return(
        <div className="flex bg-[#0E3F3B] items-center justify-center h-[40px] relative">
            <div className="flex gap-[20px]">
                <p className="text-white font-medium text-[14px] leading-5 w-[160px]">
                    Výstavba oficiálne začala.
                </p>
                <div className="flex gap-[8px] items-center">
                    <Link href="/">
                        <a className="text-white font-medium text-[14px] leading-5 underline underline-offset-[5px]">Viac</a>
                    </Link>
                    <RightArrowIcon/>
                </div>
            </div>
            <div className=" mr-[13px] absolute right-[12px] top-[12px]">
                <CloseIcon/>
            </div>
        </div>
    )
}

export default Banner;