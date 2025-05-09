import Link from "next/link";
import Image from "next/image";
import {
  RectangleDarkIcon,
  RectangleLightIcon,
  RectangleMediumIcon,
} from "@components/icons";
import React from "react";
import RectangleLight from "@components/icons/RectangleLight";
import { useTranslation } from "next-i18next";
import OverButtonIcon from "@components/icons/OverButton";
import ArrowLink from "@components/icons/ArrowLink";

interface HeroProps {
  imgName: string;
  icon?: JSX.Element;
  title: string;
  description?: string;
  withRectangles?: boolean;
  button?: boolean;
}

const Hero = ({
  imgName,
  icon,
  title,
  description,
  button,
  withRectangles = false,
}: HeroProps) => {
  const { t: translate } = useTranslation("home");
  return (
    <div className="flex justify-center mt-[40px]">
      <div className="h-[600px] w-full xl:max-w-[1920px]  relative">
        <div className="h-[600px] w-full absolute -z-10">
          <Image
            fill
            src={`/img/${imgName}.png`}
            alt="hero image"
            quality={100}
            loading="eager"
            sizes="(min-width: 1280px) 1920px, 100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute bottom-0 right-0 ">
          <div className="flex flex-row ">
            <div className="bg-transparent h-[50px] w-[50px]"></div>
            <div className="bg-white h-[50px] w-[50px]"></div>
          </div>
          <div className="flex flex-row ">
            <div className="bg-white h-[50px] w-[50px]"></div>
            <div className="bg-white h-[50px] w-[50px]"></div>
          </div>
        </div>
        <div className="relative xl:w-full xl:max-w-[1200px] xl:mx-auto mx-8 py-8 flex flex-col justify-end h-full">
          <div className="mb-[30px] flex justify-center xl:block">{icon}</div>
          <h1 className=" w-full md:w-1/2 text-[56px] md:text-[64px] leading-[68px] tracking-[-1px] text-white mb-[30px] text-left xl:text-start">
            {title}
          </h1>

          {description && (<p className="text-[18px] leading-7 text-white mb-[40px] text-start">
            {description}
          </p>)}

          {button && (<Link href={`/stretnutie`}>
            <button

              className="drop-shadow-md relative bg-primary hover:bg-white hover:text-primary hover:scale-105 transform transition-transform duration-300 ease-in-out text-white flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
            >
              <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>
              <div className="group-hover:hidden block">

                <ArrowLink fill="#ffffff" />
              </div>
              <div className="group-hover:block hidden ">
                <ArrowLink fill="#087168" />
              </div>
              <div className="absolute z-[10] top-0 right-0">
                <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out drop-shadow-md">

                  <OverButtonIcon />
                </div>
                <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                  <OverButtonIcon fill="#087168" />
                </div></div>

            </button>
          </Link>)}


        </div>
      </div>
    </div>
  );
};

export default Hero;
