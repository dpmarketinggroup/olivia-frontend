import React from "react";
import Image from "next/image";
import MapPoint2Icon from "../../svg/MapPoint2";

const Map3d = () => {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[240px] items-center">
                <div className="h-[250px] xl:h-[385px] w-[340px] xl:w-[540px] max-w-full relative mt-[200px] mb-[25px] xl:my-[115px]">
                    <Image
                        objectFit="cover"
                        layout="fill"
                        alt="hero image"
                        src={"/img/map3d.png"}
                    />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <span className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">Tu sa nachádzame</span>
                    <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Rožňavská 1A, Bratislava</span>
                    <div className="flex gap-[12px] items-center mb-[200px] xl:mb-0">
                        <MapPoint2Icon width="16" height="20" fill="000000"/>
                        <p className="font-medium text-[18px] leading-7">Fresh Market | Prízemie</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map3d;