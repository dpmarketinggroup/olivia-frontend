import { MapFooter, Info } from "@components/common";
import { BuildingFilter } from "@components/filter";

import Image from "next/image";
import {
  FloorPlan,
  ArrowDownNotFilledIcon,
  RightArrow,
  InfoIcon,
  OverButtonIcon,
} from "@components/icons";
import Head from "next/head";
import Link from "next/link";
import {
  CarDescription,
  EcologicDescription,
} from "@components/common/Description/Description";
import AboutUs from "@components/icons/AboutUs";
import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Hero from "@components/common/Hero";
import OverButtonBigIcon from "@components/icons/OverButtonBig";
import ArrowLink from "@components/icons/ArrowLink";
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
        <title>{translate("filter-heading")} | Olivia Residence</title>
      </Head>
      <Hero
        imgName="hero_offer-apart"
        title={translate("filter-heading")}
        description={""}
      />
      <div className="max-w-[1200px]  xl:w-full mx-auto relative h-fit xl:h-4 mb-20">

        <div className="absolute right-[10px] md:right-[20px] xl:right-[-20px] transform   flex flex-row top-[-10px] sm:top-[-50px] xl:top-[-100px] z-[10]">

          <div className="block">


            <div className="bg-primary  w-[350px] md:w-[400px] h-[200px] relative flex flex-col justify-center items-start px-8">

              <div className="flex absolute top-0 right-[-4px]">
                <OverButtonBigIcon height="200" width="200" />
              </div>
              <AboutUs />
              <p className="text-[16px] md:text-[18px] mt-4 leading-[18px] md:leading-[30px] text-white  font-semibold">{translate("hero-inform")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center building">
        <div className="w-full xl:w-full">
          <div className="flex justify-center mt-[70px]">
            <div className="m xl:mx-[165px]">
              {/* <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
                <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">
                  {translate("filter-heading")}
                </h1>
              </div> */}

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
                {/* <div className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] z-10">
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
                </div> */}
                {/*<div className="hidden xl:inline-block relative left-[285px]">*/}
                {/*    <Severka/>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          <BuildingFilter />

        </div>
      </div>
      <div className="bg-yellow overflow-hidden md:overflow-visible relative p-6 md:p-10 w-full max-w-[1200px] mx-auto my-[200px] ">
        <div className="absolute top-0 right-[-10px]">
          <OverButtonBigIcon height="259" width="259" />
        </div>
        <div className="hidden md:flex lg:hidden absolute top-[-20%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={"422.5"}
            height="312.32"
          />
        </div>
        <div className="hidden lg:flex absolute top-[-20%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={"650"}
            height="488"
          />
        </div>
        <div className="flex md:hidden absolute top-[-10%] right-[-120px] md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={"357.5"}
            height="268.4"
          />
        </div>
        <p className="relative text-[#0E3F3B] text-[36px] md:text-[48px] leading-none z-[6] w-[80%] md:w-1/2">
          {translate("download-h")}
        </p>
        <Link href="https://my.matterport.com/show/?m=x1f7uttieiY">
          <button
            className={
              "relative text-[18px] hover:text-white hover:bg-[#0E3F3B] text-[#0E3F3B] bg-white font-medium mt-[30px] flex flex-row justify-center items-center py-4 px-6 z-[10]"
            }
          >
            {translate("download-button")}

          </button>
        </Link>
      </div>
      <div className="max-w-[1200px] mt-40 mb-[44rem] sm:mb-[47rem] md:my-40 w-full mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 h-[90vh] px-4 md:px-8">
          <div className="flex flex-col ">
            <div className="w-full relative">
              <div className="absolute top-0 right-0 z-[10]">
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-transparent"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
              </div>

              <Image
                src="/img/parking.jpeg"
                alt="parking"
                width={2000}
                height={1333}
              />
            </div>
            <div className="bg-primary relative  p-8 mt-[-7px]">
              <div className="absolute top-0 right-[-10px]">
                <OverButtonBigIcon />
              </div>
              <div className="space-y-10">
                <h2 className="text-white text-[36px] md:text-[42px]  leading-[38px] md:leading-[44px]">{translate("description-parking-heading")}</h2>
                <p className="text-white text-[16px]  ">{translate("description-parking-text")}</p>
                <Link href={`/`}>
                  <button

                    className="drop-shadow-md relative bg-yellow hover:bg-white hover:text-yellow hover:scale-105 transform transition-transform duration-300 ease-in-out text-black flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
                  >
                    <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>
                    <div className="group-hover:hidden block">

                      <ArrowLink fill="#000000" />
                    </div>
                    <div className="group-hover:block hidden ">
                      <ArrowLink fill="#FFA100" />
                    </div>
                    <div className="absolute z-[10] top-0 right-0">
                      <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out drop-shadow-md">

                        <OverButtonIcon />
                      </div>
                      <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                        <OverButtonIcon fill="#FFA100" />
                      </div></div>

                  </button>
                </Link>
              </div>
            </div>

          </div>
          <div className="flex flex-col">

            <div className="bg-primary relative w-full p-8">
              <div className="absolute top-0 right-[-10px]">
                <OverButtonBigIcon />
              </div>
              <div className="space-y-10">
                <h2 className="text-white text-[36px] md:text-[42px]  leading-[38px] md:leading-[44px]">{translate("description-storage-heading")}</h2>
                <p className="text-white text-[16px]  ">{translate("description-storage-text")}</p>
                <Link href={`/`}>
                  <button

                    className="drop-shadow-md relative bg-yellow hover:bg-white hover:text-yellow hover:scale-105 transform transition-transform duration-300 ease-in-out text-black flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
                  >
                    <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>
                    <div className="group-hover:hidden block">

                      <ArrowLink fill="#000000" />
                    </div>
                    <div className="group-hover:block hidden ">
                      <ArrowLink fill="#FFA100" />
                    </div>
                    <div className="absolute z-[10] top-0 right-0">
                      <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out drop-shadow-md">

                        <OverButtonIcon />
                      </div>
                      <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                        <OverButtonIcon fill="#FFA100" />
                      </div></div>

                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full relative">
              <div className="absolute bottom-0 right-0 z-[10]">
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-transparent"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
              </div>

              <Image
                src="/img/ulozny_priestor.png"
                alt="parking"
                width={2000}
                height={1333}
              />
            </div>
          </div>
        </div>
      </div >
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
