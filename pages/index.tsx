import Link from "next/link";
import FloorPlan from "@components/icons/FloorPlan";
import ArrowLink from "@components/icons/ArrowLink";
import OverButtonIcon from "@components/icons/OverButton";
import Negotiation from "@components/common/Negotiation";
import Subscription from "@components/common/Subscription";
import ReactMarkdown from 'react-markdown';
import OverButtonBigIcon from "@components/icons/OverButtonBig";
import ShopIcon from "@components/icons/Shop";
import { BuildingFilter } from "@components/filter";
import AboutUs from "@components/icons/AboutUs";
import {
  CommonDescription,
} from "@components/common/Description/Description";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Thermometer from "@components/icons/Thermometer";
import CheckIcon from "@components/icons/CheckIcon";
import Coins from "@components/icons/Coins";
import Tree from "@components/icons/Tree";
import PeoplePoints from "@components/icons/PeoplePoints";
import ParkingFlag from "@components/icons/ParkingFlag";
import dynamic from 'next/dynamic';
const CustomSwiper = dynamic(() => import("@components/swiper/CustomSwiper"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const DeveloperSwiper = dynamic(() => import("@components/swiper/DeveloperSwiper"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const ApartmentSwiper = dynamic(() => import("@components/swiper/ApartmentSwiper"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const MapFooter = dynamic(() => import("@components/common/MapFooter"), {
  ssr: false,
});


const Home = () => {
  const { t: translate } = useTranslation("home");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      <Head>
        <title>Moderné mestské bývanie | Olivia Residence</title>
      </Head>
      <div className="flex justify-center mt-[15px] xl:mt-0 xl:overflow-hidden">
        <div className="h-[650px] md:h-screen w-full xl:max-w-[1920px] xl:mb-[140px] relative flex">
          <div className="absolute bottom-0 right-0 z-[10]">
            <div className="flex flex-row">
              <div className="w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] bg-transparent"></div>
              <div className="w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] bg-white"></div>
            </div>
            <div className="flex flex-row">
              <div className="w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] bg-white"></div>
              <div className="w-[30px] sm:w-[60px] h-[30px] sm:h-[60px] bg-white"></div>
            </div>
          </div><div className="relative w-full px-4 md:px-8 xl:max-w-[1400px] xl:mx-auto my-auto z-[10]">

            <div className="w-full sm:w-[600px] lg:w-[620px] mt-20 mb-[40px]  relative">
              <div className="relative w-fit mb-8 px-6 py-2 rounded-full bg-yellow overflow-hidden">
                <div className="absolute  inset-0 flex justify-center items-center">
                  <OverButtonBigIcon width="120" height="120" className="absolute top-0 right-[-7px]" />
                </div>
                <p className="relative text-[#0E3F3B] text-[18px] font-medium text-center">
                  {translate("approve")}
                </p>
              </div>
              <h1 className="relative  text-[28px] sm:text-[40px] sm:text-[72px] leading-[30px] sm:leading-[42px] sm:leading-[72px] tracking-[-1px] text-white">
                {translate("hero-heading")}
              </h1>
              <p className="text-white text-[16px] mt-6">{translate("hero-desc")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:mx-4 xl:mx-0">
              <Link href={`/stretnutie`}>
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
              </Link>
              <Link href="/ponuka-apartmanov">
                <button className="hidden sm:block w-fit bg-white hover:bg-primary  font-medium text-[16px] leading-[24px] tracking-[-0.1px] px-6 hover:text-white text-primary h-[63px] ">
                  {translate("hero-button-white")}
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 xl:w-full -z-[22] xl:overflow-hidden brightness-50">
            <video
              className={"h-full xl:h-auto object-cover"}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            >
              <source type="video/webm" src="/videos/hero.webm" />
              {/* <source type="video/mp4" src="/videos/vid1.mp4" /> */}
              {/* <source src="/videos/vid2.mp4" type="video/mp4" /> */}
            </video>
          </div>


        </div>
      </div >
      <div className="max-w-[1200px]  xl:w-full mx-auto relative h-40 xl:h-4 mb-20">

        <div className="absolute right-[10px] md:right-[20px] xl:right-[-20px] transform   flex flex-row top-[-10px] sm:top-[-50px] xl:top-[-250px] z-[10]">

          <div className="hidden md:block">

            <Image
              src={"/img/about-us.jpeg"} width={300} height={300} alt="Ukazka" priority />
          </div>
          <div className=" flex md:hidden">

            <Image
              src={"/img/about-us.jpeg"} width={170} height={170} alt="Ukazka" priority />
          </div>
          <div className="bg-primary w-[170px] h-[170px] md:w-[280px] md:h-[300px] relative flex flex-col justify-center items-center">
            <div className="hidden md:block absolute top-0 right-[-8px]">
              <OverButtonBigIcon height="300" width="300" />
            </div>
            <div className="flex md:hidden absolute top-0 right-[-2px]">
              <OverButtonBigIcon height="170" width="170" />
            </div>
            <AboutUs />
            <p className="text-[16px] md:text-[25px] mt-4 leading-[18px] md:leading-[30px] text-center text-white w-[80%]">{translate("hero-inform")}</p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center md:h-[400px] sm:h-[350px] h-[250px] xl:mt-2 mt-20 mb-10">*/}


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

      {/*} <video
        className={"h-full xl:h-auto object-cover"}
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source type="video/mp4" src="/videos/231213OR4301-Benefit-VYHLAD-16x9.mp4" />

      </video>
    </div > */}

      <CommonDescription fill="black" className="bg-bgLight" />
      <div className="bg-yellow overflow-hidden md:overflow-visible relative p-4 md:p-8 w-full max-w-[1200px] mx-auto my-10 md:mb-[170px] md:mt-[120px] ">
        <div className="absolute top-0 right-[-10px]">
          <OverButtonBigIcon height="259" width="259" />
        </div>
        <div className="hidden md:flex lg:hidden absolute top-[-20%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={422.5}
            height={312.32}
            loading="lazy"
          />
        </div>
        <div className="hidden lg:flex absolute top-[-30%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={585}
            height={439.2}
            loading="lazy"
          />
        </div>
        <div className="flex md:hidden absolute top-[-10%] right-[-140px] md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={357.5}
            height={268.4}
            loading="lazy"
          />
        </div>
        <p className="relative text-[#0E3F3B] text-[32px] md:text-[42px] leading-none z-[6] w-[80%] md:w-[40%]">
          {translate("download-h")}
        </p>
        <Link href="/Karta vybavenia OLIVIA Residence.pdf">
          <button
            className={
              "relative text-[18px] hover:text-white hover:bg-[#0E3F3B] text-[#0E3F3B] bg-white font-medium mt-[30px] flex flex-row justify-center items-center py-4 px-6 z-[10]"
            }
          >
            {translate("download-button")}

          </button>
        </Link>
      </div>

      <div className="max-w-[1200px] w-full mt-[50px] bg-primary mx-auto pb-4 sm:pb-6 pr-4 sm:pr-6 flex flex-row gap-6 justify-between relative">
        <div className="bg-white h-[1000px] sm:h-[1080px] lg:h-[620px] w-[40px] sm:w-[80px] mr-2 sm:mr-6">

        </div>
        <div className={"bottom-0 absolute left-0 shrink-0  xl:mb-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"}>
          <div className="relative">
            <div className="absolute bottom-0 z-[10]">
              <div className="flex flex-row">
                <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] bg-white"></div>
                <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] bg-transparent"></div>
              </div>
              <div className="flex flex-row">
                <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] bg-white"></div>
                <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] bg-white"></div>
              </div>
            </div>
            {isClient && (
              <video
                className={"w-full aspect-square object-cover"}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source type="video/webm" src="/videos/250206OR6501-LOKALITA-shorter-16x9.webm" />

              </video >
            )}
          </div >
        </div >
        <div className="flex flex-col pb-[300px] sm:pb-[480px] lg:pb-0 lg:flex-row">
          <div className="mt-6 mr-auto">
            <h2 className="text-white  text-[32px] xl:text-[42px] leading-[40px] xl:leading-[48px]">{translate("description-locale-heading")}</h2>
            <p className="text-white opacity-40 text-[24px] xl:text-[26px] leading-[24px] xl:leading-[28px] italic font-thin mt-2" ><ReactMarkdown>
              {translate("description-locale-description1")}
            </ReactMarkdown></p>
          </div>
          <div className="w-[95%] lg:w-[55%] mt-10 sm:mt-8">
            <div className="flex flex-row justify-start items-center gap-4 w-full mb-4">
              <ShopIcon />
              <p className="text-white text-[17px] leading-[20px] " ><ReactMarkdown>{translate("description-locale-description2")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row flex-wrap gap-[6px]  pb-6 ">
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-1")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-2")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-3")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-4")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-5")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-6")}</ReactMarkdown></p></div>
            </div>
            <div className="flex flex-row justify-start items-center py-3 gap-2 border-t-[2px] border-b-[2px] border-[#ffffff33] border-dashed w-[90%]">
              <Thermometer /><p className="text-white text-[17px] leading-[20px]"><ReactMarkdown>{translate("description-locale-bullet-1")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row justify-start items-center py-3 gap-2 border-b-[2px] border-[#ffffff33] border-dashed w-[90%]">
              <Coins /><p className="text-white text-[17px] leading-[20px]"><ReactMarkdown>{translate("description-locale-bullet-2")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row justify-start items-center py-3 gap-2 border-b-[2px] border-[#ffffff33] border-dashed w-[90%]">
              <PeoplePoints /><p className="text-white text-[17px] leading-[20px]"><ReactMarkdown>{translate("description-locale-bullet-3")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row justify-start items-center py-3 gap-2 border-b-[2px] border-[#ffffff33] border-dashed w-[90%]">
              <ParkingFlag /><p className="text-white text-[17px] leading-[20px]"><ReactMarkdown>{translate("description-locale-bullet-4")}</ReactMarkdown>
              </p>
            </div>
            <div className="flex flex-row justify-start items-center py-3 gap-2 ">
              <Tree /><p className="text-white text-[17px] leading-[20px]"><ReactMarkdown>{translate("description-locale-bullet-5")}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>

      </div >




      <div className="flex justify-center mt-[10px] ">
        <div className=" relative  xl:mx-[165px]">
          <div className="relative top-[40px] md:top-[150px] flex flex-col gap-[30px] items-center  ">
            <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
            <h1 className=" text-[26px] xl:text-[48px] leading-[40px] xl:leading-[48px] text-center xl:text-left">
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
      <ApartmentSwiper />
      <Negotiation
        title={translate("negotiation-heading")}
        subtitle={"Rožňavská 1B, Bratislava"}
      />
      {/* <div className={"flex flex-col py-[70px] xl:py-[150px] bg-[#F5F5F5]"}>
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
      </div> */}
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
