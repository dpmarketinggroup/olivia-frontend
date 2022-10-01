import React, {FunctionComponent} from "react";
import Link from "next/link";
import Image from "next/image";
import MapPoint from "./svg/MapPoint";
import MapPoint2Icon from "./svg/MapPoint2";

interface OpeningHoursProps{
    reverseFlex?: boolean
}

const OpeningHours: FunctionComponent<OpeningHoursProps> = ({reverseFlex = false}) => {
    return (
        <div className='flex justify-center bg-[#F5F5F5]'>
            <div>
                <div className={`flex flex-col xl:flex-row xl:gap-[85px] w-full items-center xl:items-start ${reverseFlex && "flex-row-reverse"}`}>
                    <div>
                        <div className="flex flex-col gap-[20px] mt-[55px] xl:mt-[75px] mx-[165px] mb-[45px]">
                            <p className="font-medium text-[14px] leading-5 text-[#999999] w-[350px] xl:w-[455px]">Dohodnite si
                                nezáväzné stretnutie alebo sa u nás zastavte v čase otváracej doby. Radi Vás
                                privítame a zodpovieme Vaše otázky.</p>
                            <div className="flex flex-col">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">PO - PIA</span>
                                <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">10.00 - 18.00</span>
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">SO - NE</span>
                                <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Zatvorené</span>
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">Adresa</span>
                                <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Rožňavská 1A, Bratislava</span>
                                <div className="flex gap-[12px] items-center">
                                    <MapPoint2Icon width="16" height="20" fill="000000"/>
                                    <p className="font-medium text-[18px] leading-7">Fresh Market | Prízemie</p>
                                </div>
                            </div>
                        </div>
                        <Link href="/">
                            <button
                                className="font-medium text-[16px] leading-6 tracking-[0.1px] text-white py-[12px] px-[45px] bg-[#476761] ml-[165px] mb-[55px] xl:mb-[75px]">Navigovať
                            </button>
                        </Link>
                    </div>
                    <div className={`h-[385px] w-[400px] xl:w-[540px] relative xl:top-[75px] ${reverseFlex ? "left-[165px]" : "xl:right-[165px]"}`}>
                        <Image
                            objectFit="cover"
                            layout="fill"
                            alt="hero image"
                            src={"/img/smallMap.jpg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OpeningHours;