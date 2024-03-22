import Link from "next/link";
import {
  FloorPlan,
  ArrowDownNotFilledIcon,
  RightArrow,
  RectangleMediumIcon,
  RectangleDarkIcon,
  RectangleLightIcon,
  InfoIcon,
} from "@components/icons/";
import {
  Timeline,
  MapFooter,
  Negotiation,
  Subscription,
  Info,
  Equipment,
} from "@components/common";
import { BuildingFilter } from "@components/filter";
import {
  ApartmentSwiper,
  CustomSwiper,
  DeveloperSwiper,
} from "@components/swiper";
import Head from "next/head";
import {
  ApartmentEquipmentDescription,
  CommonDescription,
} from "@components/common/Description/Description";
import { Button } from "@components/ui";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Modal } from "@mantine/core";
import Image from "next/image";


const Home = () => {
  const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false);
  const { asPath, locale, locales, push } = useRouter();

  const { t: translate } = useTranslation("home");
  function infoBanner() {
    if (locale === "sk") {
      return (
        <div className=" absolute 2xl:bottom-[-80px] xl:bottom-[-60px] lg:bottom-[-50px] md:bottom-[-40px] sm:bottom-[-30px] bottom-[-40px] w-full lg:h-[35px] sm:h-[20px] h-[25px] ">
          <div className="flex justify-center items-center border-2 border-black 2xl:gap-5 gap-2 bg-[#476761] rounded-full h-full 2xl:w-[36%] w-[100%] lg:w-[50%] md:w-[75%] sm:w-[75%] mx-auto text-white text-[7pt] xl:text-[10pt] md:text-[10pt] sm:text-[8pt] px-3">
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
        <title>Moderné mestské bývanie | Olivia Residence</title>
      </Head>
      <div className="flex justify-center mt-[75px] xl:mt-0 xl:overflow-hidden">
        <div className="h-[650px] xl:h-[725px] w-full xl:max-w-[1920px] xl:mb-[140px] relative flex">
          <div className="absolute inset-0 xl:w-full -z-[22] xl:overflow-hidden brightness-50">
            <video
              className={"h-full xl:h-auto object-cover"}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            >
              <source type="video/mp4" src="/videos/vid1.mp4" />
              {/* <source src="/videos/vid2.mp4" type="video/mp4" /> */}
            </video>
          </div>
          <div className="w-full xl:max-w-[1400px] xl:mx-auto my-auto">
            <div className="w-[300px] xl:w-[600px] mb-[40px] mx-4 xl:mx-0">
              <h1 className="font-bold text-[29px] xl:text-[42px] leading-[32px] xl:leading-[47px] tracking-[-1px] text-white">
                {translate("hero-heading")}
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row gap-[10px] mx-4 xl:mx-0">
              <Link href="/stretnutie">
                <button className="w-full hover:bg-[#0E3F3B] bg-[#89A6A2] xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                  {translate("button-meeting")}
                </button>
              </Link>
              <Link href="/ponuka-apartmanov">
                <button className="w-full hover:bg-[#476761] hover:border-[#476761] font-medium text-[16px] leading-[24px] tracking-[-0.1px] xl:w-[210px] h-[50px] border border-white text-white">
                  {translate("hero-button-white")}
                </button>
              </Link>
            </div>
          </div>
          {infoBanner()}
          <div className="hidden xl:block absolute bottom-[-65px]  left-0">
            <RectangleDarkIcon />
          </div>
          <div className="hidden xl:block  absolute bottom-[-65px]  left-[60px]">
            <RectangleMediumIcon />
          </div>
          <div className="hidden xl:block absolute bottom-[-125px]  left-0">
            <RectangleLightIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-center md:h-[400px] sm:h-[350px] h-[250px] xl:mt-2 mt-20 mb-10">


        {/* <ReactPlayer
          width="500px"
          height="400px"
          url="/videos/231213OR4301-Benefit-VYHLAD-5x4 (1).mp4"
          controls={true}
          // light is usefull incase of dark mode
          light={false}
          // picture in picture
          pip={true}
          autoplay={true}
          muted={true}
        />
        <source src="/videos/231213OR4301-Benefit-VYHLAD-5x4 (1).mp4" type="video/mp4" />  */}

        <video
          className={"h-full xl:h-auto object-cover"}
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        >
          <source type="video/mp4" src="/videos/231213OR4301-Benefit-VYHLAD-16x9.mp4" />

        </video>
      </div>

      <CommonDescription />
      <div className="flex justify-center mt-[70px] xl:mt-[200px]">
        <div className="m xl:mx-[165px]">
          <div className="flex flex-col gap-[30px] items-center mb-[50px] ">
            <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
            <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">
              {translate("filter-heading")}
            </h1>
          </div>
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
      <ApartmentSwiper />
      <Negotiation
        title={translate("negotiation-heading")}
        subtitle={"Rožňavská 1A, Bratislava"}
      />
      <div className={"flex flex-col py-[70px] xl:py-[150px] bg-[#F5F5F5]"}>
        <h2
          className={
            "text-[#0E3F3B] font-bold text-[40px] leading-[48px] mx-4 xl:mx-0 xl:text-center"
          }
        >
          {translate("description-main-heading")}
        </h2>
        <ApartmentEquipmentDescription />
        <div
          className={
            "mx-auto flex flex-col xl:flex-row gap-[15px] w-full xl:w-auto px-[1rem] xl:px-0 xl:mt-[-60px]"
          }
        >
          <Link href={"/o-projekte#vybavenie"}>
            <Button variant={"outlined"}>
              {translate("button-home-amenities")}
            </Button>
          </Link>
          <Link href={"/stretnutie"}>
            <Button variant={"filled"}>{translate("button-meeting")}</Button>
          </Link>
        </div>
      </div>
      <CustomSwiper />
      {/*<Articles classname={'mb-[150px] xl:pt-[120px]'}/>*/}
      <Subscription />
      <DeveloperSwiper />
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

export default Home;
