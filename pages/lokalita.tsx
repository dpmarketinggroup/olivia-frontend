import { Hero, MapFooter, Negotiation } from "@components/common";
import { MapPoint } from "@components/icons";
import Head from "next/head";
import {
  Basket,
  Bag,
  SmilingHouse,
  Scooter,
  Flag,
  RingRoadArrow,
  Man,
  PlaygroundIcon,
  TrainIcon,
  WeightIcon,
  TennisIcon,
  FootballIcon,
} from "@components/icons";
import Thermometer from "@components/icons/Thermometer";
import ShopIcon from "@components/icons/Shop";
import CheckIcon from "@components/icons/CheckIcon";
import Coins from "@components/icons/Coins";
import PeoplePoints from "@components/icons/PeoplePoints";
import ParkingFlag from "@components/icons/ParkingFlag";
import Tree from "@components/icons/Tree";
import Booking from "@components/icons/Booking";
import OverButtonIcon from "@components/icons/OverButton";
import ReactMarkdown from 'react-markdown';
import {
  ApartmentEquipmentDescription,
  CommonDescription,
  CustomDescription,
  TransportDescription,
  SportDescription
} from "@components/common/Description/Description";
import { Button } from "@components/ui";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import OverButtonBigIcon from "@components/icons/OverButtonBig";
import AboutUs from "@components/icons/AboutUs";
import { marked } from "marked";
import Link from "next/link";
import Image from "next/image";
import React from "react";
type Bulletpoint = {
  icon: JSX.Element;
  label: string;
};

interface CustomDescriptionProps {
  src: string;
  title: string;
  description: string;
  bulletPoints: Bulletpoint[];
  reverse?: boolean;
}

const Lokalita = () => {
  const { t: translate } = useTranslation("home");
  const customDescriptionList: CustomDescriptionProps[] = [
    {
      src: "twoGirls.png",
      title: translate("description-lokalita-1-heading"),
      description: translate("description-lokalita-1-description"),
      bulletPoints: [
        {
          icon: <Basket />,
          label: translate("description-lokalita-1-bullet-1"),
        },
        { icon: <Bag />, label: translate("description-lokalita-1-bullet-2") },
        {
          icon: <SmilingHouse />,
          label: translate("description-lokalita-1-bullet-3"),
        },
        {
          icon: <PlaygroundIcon />,
          label: translate("description-lokalita-1-bullet-4"),
        },
      ],
      reverse: true,
    },
    {
      src: "bus.png",
      title: translate("description-lokalita-2-heading"),
      description: translate("description-lokalita-2-description"),
      bulletPoints: [
        {
          icon: <Scooter />,
          label: translate("description-lokalita-2-bullet-1"),
        },
        { icon: <Flag />, label: translate("description-lokalita-2-bullet-2") },
        {
          icon: <RingRoadArrow />,
          label: translate("description-lokalita-2-bullet-3"),
        },
        {
          icon: <TrainIcon />,
          label: translate("description-lokalita-2-bullet-4"),
        },
      ],
    },
    {
      src: "sportPeople.png",
      title: translate("description-lokalita-3-heading"),
      description: translate("description-lokalita-3-description"),
      bulletPoints: [
        {
          icon: <WeightIcon />,
          label: translate("description-lokalita-3-bullet-1"),
        },
        { icon: <Man />, label: translate("description-lokalita-3-bullet-2") },
        {
          icon: <TennisIcon />,
          label: translate("description-lokalita-3-bullet-3"),
        },
        {
          icon: <FootballIcon />,
          label: translate("description-lokalita-3-bullet-4"),
        },
      ],
      reverse: true,
    },
  ];
  return (
    <>
      <Head>
        <title>Lokalita | Olivia Residence</title>
      </Head>
      <Hero
        imgName="hero_lokalita"
        button={true}
        title={translate("hero-lokalita-title")}
        description={translate("hero-lokalita-subtitle") || ""}
      />
      {/* <div className="flex justify-center md:h-[400px] sm:h-[350px] h-[250px] xl:mt-2 mt-20 mb-10">

*/}
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

      {/*     <video
          className={"h-full xl:h-auto object-cover"}
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        >
          <source type="video/mp4" src="/videos/231213OR4301-V2-16x9-WEB.mp4" />

        </video>
      </div> */}
      <div className="max-w-[1200px]  xl:w-full mx-auto relative h-fit xl:h-4 mb-20">

        <div className="absolute right-[10px] md:right-[20px] xl:right-[-20px] transform   flex flex-row top-[-10px] sm:top-[-50px] xl:top-[-100px] z-[10]">

          <div className="block">


            <div className="bg-yellow  w-[350px] md:w-[400px] h-[200px] relative flex flex-col justify-center items-start px-8">

              <div className="flex absolute top-0 right-[-4px]">
                <OverButtonBigIcon height="200" width="200" />
              </div>
              <AboutUs fill={'#0E3F3B'} />
              <p className="text-[16px] md:text-[18px] mt-4 leading-[18px] md:leading-[30px] text-[#0E3F3B] font-semibold ">{translate("hero-inform")}</p>
            </div>
          </div>
        </div>
      </div>
      {/* {customDescriptionList.map((props, k) => (
        <CustomDescription key={k} {...props} />
      ))} */}




      <div className="max-w-[1200px] w-full my-[200px] bg-primary mx-auto pb-4 sm:pb-10 pr-4 sm:pr-10 flex flex-row gap-6 justify-between relative">
        <div className="bg-white h-[1150px] sm:h-[1080px] lg:h-[600px] w-[80px] sm:w-[100px] mr-2 sm:mr-10">

        </div>
        <div className={"bottom-0 absolute left-0 shrink-0  xl:mb-0 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px]"}>
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
            <video
              className={"w-full aspect-square object-cover"}
              autoPlay={true}
              playsInline={true}
              muted={true}
              loop={true}
            >
              <source type="video/mp4" src="/videos/250206OR6501-LOKALITA-shorter-16x9.mp4" />

            </video >
          </div >
        </div >
        <div className="flex flex-col pb-[300px] sm:pb-[480px] lg:pb-0 lg:flex-row">
          <div className="mt-12 mr-auto">
            <h2 className="text-white  text-[32px] xl:text-[48px] leading-[40px] xl:leading-[48px]">{translate("description-locale-heading")}</h2>
            <p className="text-white opacity-40 text-[24px] xl:text-[28px] leading-[24px] xl:leading-[28px] italic font-thin mt-2" ><ReactMarkdown>
              {translate("description-locale-description1")}
            </ReactMarkdown></p>
          </div>
          <div className="w-[95%] lg:w-[45%] mt-10 sm:mt-16">
            <div className="flex flex-row justify-start items-center gap-4 w-full mb-4">
              <ShopIcon />
              <p className="text-white text-[20px] leading-[24px] " ><ReactMarkdown>{translate("description-locale-description2")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 border-b-[2px] pb-6 border-[#ffffff33] border-dashed">
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-1")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-2")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-3")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-4")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-5")}</ReactMarkdown></p></div>
              <div className="w-fit  flex flex-row justify-center items-center px-4 py-2 bg-yellow rounded-full text-[#0E3F3B] text-[14px] gap-1"><CheckIcon /><p ><ReactMarkdown>{translate("description-locale-properties-6")}</ReactMarkdown></p></div>
            </div>
            <div className="flex flex-row justify-start items-center py-4 gap-2 border-b-[2px] border-[#ffffff33] border-dashed">
              <Thermometer /><p className="text-white text-[18px] leading-[22px]"><ReactMarkdown>{translate("description-locale-bullet-1")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row justify-start items-center py-4 gap-2 border-b-[2px] border-[#ffffff33] border-dashed">
              <Coins /><p className="text-white text-[18px] leading-[22px]"><ReactMarkdown>{translate("description-locale-bullet-2")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row justify-start items-center py-4 gap-2 border-b-[2px] border-[#ffffff33] border-dashed">
              <PeoplePoints /><p className="text-white text-[18px] leading-[22px]"><ReactMarkdown>{translate("description-locale-bullet-3")}</ReactMarkdown></p>
            </div>
            <div className="flex flex-row justify-start items-center py-4 gap-2 border-b-[2px] border-[#ffffff33] border-dashed">
              <ParkingFlag /><p className="text-white text-[18px] leading-[22px]"><ReactMarkdown>{translate("description-locale-bullet-4")}</ReactMarkdown>
              </p>
            </div>
            <div className="flex flex-row justify-start items-center py-4 gap-2 ">
              <Tree /><p className="text-white text-[18px] leading-[22px]"><ReactMarkdown>{translate("description-locale-bullet-5")}</ReactMarkdown>
              </p>
            </div>
            <Link href={'/stretnutie'} className=" mt-4 relative bg-yellow text-[#0E3F3B] flex flex-row justify-between  items-center gap-2 px-[32px] py-[22px] w-full text-[18px] max-h-[96px] h-[96px]">
              {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
              <p className="text-[22px] font-medium leading-[24px]">{translate("button-meeting")}</p><Booking />
              <div className="absolute z-[10] top-0 right-0"><OverButtonIcon height="96" width="158" /></div>
            </Link>
          </div>
        </div>

      </div >
      <Negotiation
        title={translate("negotiation-heading")}
        subtitle={"Rožňavská 1A, Bratislava"}
      />
      {/* <h2
        className={
          "mt-[175px] font-bold text-[40px] leading-[48px] tracking-[-0.5] text-[#0E3F3B] mx-4 xl:mx-0 xl:text-center"
        }
      >
        {translate("description-main-heading")}
      </h2> */}
      <CommonDescription fill={"black"} className="bg-bgLight" />
      <div className="bg-yellow overflow-hidden md:overflow-visible relative p-6 md:p-10 w-full max-w-[1200px] mx-auto my-[200px] ">
        <div className="absolute top-0 right-[-10px]">
          <OverButtonBigIcon height="259" width="259" />
        </div>
        <div className="hidden md:flex lg:hidden absolute top-[-20%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={422}
            height={312.32}
          />
        </div>
        <div className="hidden lg:flex absolute top-[-20%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={650}
            height={488}
          />
        </div>
        <div className="flex md:hidden absolute top-[-10%] right-[-120px] md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={357.5}
            height={268.4}
          />
        </div>
        <p className="relative text-[#0E3F3B] text-[36px] md:text-[48px] leading-none z-[6] w-[80%] md:w-1/2">
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
      {/* <div
        className={
          "flex flex-col xl:flex-row gap-[10px] justify-center mt-[-50px] mb-[70px] xl:mb-[175px] mx-4 "
        }
      >
        <Button href={"/o-projekte#vybavenie"} variant={"outlined"}>
          {translate("button-home-amenities")}
        </Button>
        <Button href={"/stretnutie"} variant={"filled"}>
          {translate("button-meeting")}
        </Button>
      </div> */}
      <TransportDescription fill={"white"} className="bg-primary" src={"/img/get_on_the_bus.jpeg"} button={true} />
      <SportDescription fill={"black"} className="bg-bgLight" src={"/img/active_free_time.jpeg"} />
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

export default Lokalita;
