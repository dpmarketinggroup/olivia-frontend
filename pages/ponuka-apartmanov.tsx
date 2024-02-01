import { MapFooter, Info } from "@components/common";
import { BuildingFilter } from "@components/filter";
import {
  FloorPlan,
  ArrowDownNotFilledIcon,
  RightArrow,
  InfoIcon,
} from "@components/icons";
import Head from "next/head";
import Link from "next/link";
import {
  CarDescription,
  EcologicDescription,
} from "@components/common/Description/Description";
import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const PonukaBytov = () => {
  const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false);
  const { asPath, locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("home");
  function infoBanner() {
    if (locale === "sk") {
      return (
        <div className=" mb-[40px] lg:h-[30px] md:h-[30px] xl:h-[40px] sm:h-[20px] h-[25px] ">
          <div className="flex justify-center items-center border-2 border-black xl:gap-4 gap-2 bg-[#476761] rounded-full h-ful xl:w-[80%] w-[100%] lg:w-[100%] md:w-[100%] sm:w-[75%] mx-auto text-white xl:text-[12pt] text-[7pt] xl:text-[10pt] md:text-[10pt] sm:text-[8pt] px-3">
            <div className="w-[13px] md:w-[15px] sm:w-[13px] items-center">
              <InfoIcon />
            </div>
            <div className="">{translate("info-banner")}</div>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      <Head>
        <title>Ponuka apartmánov | Olivia Residence</title>
      </Head>
      <div className="flex justify-center building mt-[50px] xl:mt-[70px]">
        <div className="w-full xl:w-full">
          <div className="flex justify-center mt-[70px]">
            <div className="m xl:mx-[165px]">
              <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
                <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">
                  {translate("filter-heading")}
                </h1>
              </div>
              {infoBanner()}
              <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:justify-between ">
                {/* <div
                  className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute xl:right-[210px] cursor-pointer"
                  onClick={() =>
                    setIsFloorDropDownCLicked((prevState) => !prevState)
                  }
                >
                  <span className="drop-span font-bold text-[18px] leading-7 text-[#476761]">
                    {translate("filter-drop-down-7")}
                  </span>
                  <div
                    className={`${
                      isFloorDropDownCLicked ? "dropdown-content" : "hidden"
                    }`}
                  >
                    <div className=" flex flex-col px-[30px] text-[18px] leading-7 text-[#476761] font-medium">
                      <Link href={"/podlazie/3"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-3")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/4"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-4")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/5"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-5")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/6"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-6")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/7"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-7")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/8"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-8")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/9"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-9")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/10"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-10")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/11"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-11")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/12"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-12")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/13"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-13")}
                        </a>
                      </Link>
                      <Link href={"/podlazie/14"}>
                        <a className="py-[7px]">
                          {translate("filter-drop-down-14")}
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="ml-[10px] inline-block">
                    <ArrowDownNotFilledIcon />
                  </div>
                </div> */}
                <div className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] z-10">
                  <Link href="/ponuka-apartmanov">
                    <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761] text-center xl:text-left">
                      {translate("filter-step-1")}
                    </a>
                  </Link>
                  <RightArrow stroke="#476761" />
                  <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033] text-center xl:text-left">
                    {translate("filter-step-2")}
                  </span>
                  <RightArrow stroke="#00000033" />
                  <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033] text-center xl:text-left">
                    {translate("filter-step-3")}
                  </span>
                </div>
                {/*<div className="hidden xl:inline-block relative left-[285px]">*/}
                {/*    <Severka/>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <BuildingFilter />
          <div className={"xl:mt-[200px]"}>
            <CarDescription />
            <EcologicDescription />
          </div>
        </div>
      </div>
      <MapFooter />
    </>
  );
};

interface StaticProps {
  locale: string;
}

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
      //Will be passed to the page component as props
    },
  };
}

export default PonukaBytov;
