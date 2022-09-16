import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";

interface MapProps {
  title: string;
  subtitle: string;
  buttonText?: string;
}

const Map: FunctionComponent<MapProps> = ({
  title,
  subtitle,
  buttonText = "Viac o lokalite",
}) => {
  return (
    <div className="w-full">
      <div className="flex mx-[165px] justify-between mb-[60px] items-center">
        <div className="flex flex-col gap-[20px]">
          <h3 className="font-bold text-[40px] leading-[48px] tracking-[-0.5px]">{title}</h3>
          <p className="text-[#676766] font-normal text-[16px] leading-[24px] tracking-[0.1px]">{subtitle}</p>
        </div>
        <Link href="/">
          <button className="w-[145px] h-[36px] border border-[#476761] text-[16px] text-[#476761] font-medium leading-6 tracking-[0.1px] self-end">{buttonText}</button>
        </Link>
      </div>
      <div className="h-[650px] w-full max-w-[1440px] relative">
        <Image
          objectFit="cover"
          layout="fill"
          alt="hero image"
          src={"/img/map.jpg"}
        />
      </div>
    </div>
  );
};

export default Map;
