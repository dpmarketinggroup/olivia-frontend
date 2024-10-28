import Link from "next/link";
import Image from "next/image";
import {
  RectangleDarkIcon,
  RectangleLightIcon,
  RectangleMediumIcon,
  ArrowDown
} from "@components/icons";
import React from "react";
import RectangleLight from "@components/icons/RectangleLight";
import { useTranslation } from "next-i18next";

interface HeroProps {
  imgName: string;
  icon?: JSX.Element;
  title: string;
  description?: string;
  withRectangles?: boolean;
}

const Hero = ({
  imgName,
  icon,
  title,
  description,
  withRectangles = false,
}: HeroProps) => {
  const { t: translate } = useTranslation("home");
  return (
    <div className="flex justify-center mt-[60px]">
      <div className="sm:h-[600px] w-full xl:max-w-[1920px] mb-[60px] xl:mb-[140px] relative flex flex-col justify-center items-center">
        <div className="h-full w-full absolute -z-10">

          <Image
            className="brightness-[0.7]"
            objectFit="cover"
            layout="fill"
            alt="hero image"
            src={`/img/` + (imgName.endsWith('.png') ? imgName : imgName + '.jpg')}
            loading={"eager"}
          />
        </div>
        <div className="relative xl:w-full xl:max-w-[1400px] xl:mx-auto mx-4 pt-[140px] mb-[20px] flex flex-col justify-center items-center gap-4 sm:gap-0">

          <h1 className="font-bold max-w-[95%] sm:max-w-[66%] text-[32px] sm:text-[56px] leading-[36px] sm:leading-[66px] tracking-[-1px] text-white mb-[20px] text-center ">
            {translate("top-apartments-h1-1")}<span className="py-2  leading-[28px] sm:leading-[60px] bg-custom-gradient">{translate("top-apartments-h1-2")}</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] leading-5 sm:leading-7 text-white mb-[20px] sm:mb-[40px] text-center max-w-[85%] sm:max-w-[50%]">
            {translate("top-apartments-h2")}
          </p>
          <div className="relative top-[15%] sm:top-[18%]">
            <Link href="#main">
              <div className="bg-white rounded-full w-[120px] hover:w-[122px] h-[120px] hover:shadow-md hover:cursor-pointer  flex justify-center items-center">
                <ArrowDown />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
