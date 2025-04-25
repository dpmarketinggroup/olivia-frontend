import Link from "next/link";
import {
  MapFooter,
  Subscription,
  Timeline,
  Hero,
  Equipment,
} from "@components/common";
import ArrowLink from "@components/icons/ArrowLink";
import OverButtonIcon from "@components/icons/OverButton";
import ShopIcon from "@components/icons/Shop";
import CheckIcon from "@components/icons/CheckIcon";
import Thermometer from "@components/icons/Thermometer";
import Coins from "@components/icons/Coins";
import PeoplePoints from "@components/icons/PeoplePoints";
import ParkingFlag from "@components/icons/ParkingFlag";
import Tree from "@components/icons/Tree";
import { House, UniCredit, EmailSign } from "@components/icons";
import Head from "next/head";
import { marked } from "marked";
import Image from "next/image";
import {
  CarDescription,
  CustomDescription,
  EcologicDescription,
} from "@components/common/Description/Description";
import OverButtonBigIcon from "@components/icons/OverButtonBig";
import KitchenIcon from "@components/icons/Kitchen";
import SinkIcon from "@components/icons/Sink";
import GlassStarIcon from "@components/icons/GlassStar";
import BasketIcon from "@components/icons/Basket";
import ElectricPanelIcon from "@components/icons/ElectricPanel";
import TwoArrowsIcon from "@components/icons/TwoArrows";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {
  ApartmentEquipmentDescription,
  CommonDescription,
} from "@components/common/Description/Description";

interface CustomDescriptionProps {
  src: string;
  title: string;
  description: string;
  bulletPoints: [
    { icon: JSX.Element; label: string },
    { icon: JSX.Element; label: string },
    { icon: JSX.Element; label: string }
  ];
  reverse?: boolean;
}

const OProjekte = () => {
  const { t: translate } = useTranslation("home");
  const customDescriptionList: CustomDescriptionProps[] = [
    {
      src: "room3.jpg",
      title: translate("description-lokalita-4-heading"),
      description: translate("description-lokalita-4-description"),
      bulletPoints: [
        {
          icon: <KitchenIcon />,
          label: translate("description-lokalita-4-bullet-1"),
        },
        {
          icon: <SinkIcon />,
          label: translate("description-lokalita-4-bullet-2"),
        },
        {
          icon: <GlassStarIcon />,
          label: translate("description-lokalita-4-bullet-3"),
        },
      ],
    },
    {
      src: "balcony.jpg",
      title: translate("description-lokalita-5-heading"),
      description: translate("description-lokalita-5-description"),
      bulletPoints: [
        {
          icon: <BasketIcon />,
          label: translate("description-lokalita-5-bullet-1"),
        },
        {
          icon: <ElectricPanelIcon />,
          label: translate("description-lokalita-5-bullet-2"),
        },
        {
          icon: <TwoArrowsIcon />,
          label: translate("description-lokalita-5-bullet-3"),
        },
      ],
      reverse: true,
    },
    // {
    //   src: "balcony.jpg",
    //   title: translate("description-lokalita-5-heading"),
    //   description: "Ekologické riešenie vykurovania",
    //   bulletPoints: [
    //     {
    //       icon: <BasketIcon />,
    //       label: "Výrazne nižšie náklady (o viac ako 50%)",
    //     },
    //     {
    //       icon: <ElectricPanelIcon />,
    //       label: "Auromatické vykurovanie bez nutnosti obsluhy",
    //     },
    //     {
    //       icon: <TwoArrowsIcon />,
    //       label: "Ekologické riešenie bez emisií škodlivých látok",
    //     },
    //   ],
    //   reverse: true,
    // },
  ];

  return (
    <>
      <Head>
        <title>O projekte | Olivia Residence</title>
      </Head>
      {/* <Hero
        imgName={"495"}
        button={true}
        title={translate("footer-link-about")}
        description={""}
        withRectangles={true}
      /> */}

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
          <div className="relative w-full px-4 md:px-8 xl:max-w-[1400px] xl:mx-auto my-auto lg:mt-auto lg:mb-40 xl:mb-60 ">

            <div className="w-full sm:w-[600px] lg:w-[620px] mt-20 mb-[40px]  relative">

              <h1 className="relative  text-[28px] sm:text-[40px] sm:text-[72px] leading-[30px] sm:leading-[42px] sm:leading-[72px] tracking-[-1px] text-white">
                {translate("footer-link-about")}
              </h1>

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

            </div>
          </div>

        </div>
      </div >


      <CommonDescription className="bg-primary " fill="white" button={true} />


      <div className="w-full mx-auto mt-[15rem] sm:mt-[25rem] mb-20 max-w-[1200px] ">
        <div className="bg-bgLight  flex flex-row relative justify-between items-end">

          <div className="absolute right-0 top-[-70px] sm:top-[-300px] md:top-[-100px] z-[10]">
            <div className={"relative shrink-0 mb-[25px] xl:mb-0 w-[300px] h-[300px] sm:w-[425px] sm:h-[425px] lg:w-[550px] lg:h-[550px]"}>
              <div className="absolute top-0 right-0 z-[10]">
                <div className="flex flex-row">
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-white"></div>
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-transparent"></div>
                  <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[35px] sm:h-[60px] lg:h-[95px] bg-white"></div>
                </div>
              </div>
              <video
                className={"w-full aspect-square object-cover"}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source type="video/webm" src="/videos/zaluzie.webm" />
                {/* <source type="video/mp4" src="/videos/vid1.mp4" /> */}
                {/* <source src="/videos/vid2.mp4" type="video/mp4" /> */}
              </video>
            </div>
          </div>
          <div className="w-full md:w-[45%] flex flex-col gap-8 ml-4 px-4 pt-40 md:pt-2 md:ml-10 my-4 md:my-10">
            <h2 className="text-black text-[36px] md:text-[48px] leading-none">{translate("description-lokalita-5-heading-1")}<span className="text-primary" >{translate("description-lokalita-5-heading-2")}</span>{translate("description-lokalita-5-heading-3")}</h2>
            <p className="text-black text-[24px] leading-[32px] mb-12 ">{translate("description-lokalita-5-description")}</p>
            <Link href="/stretnutie">
              <button

                className="drop-shadow-md relative bg-primary hover:bg-white hover:text-primary hover:scale-105 transform transition-transform duration-300 ease-in-out text-white flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
              >
                <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>
                <div className="group-hover:hidden block">

                  <ArrowLink fill="white" />
                </div>
                <div className="group-hover:block hidden ">
                  <ArrowLink fill="#087168" />
                </div>
                <div className="absolute z-[10] top-0 right-0">
                  <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out ">

                    <OverButtonIcon />
                  </div>
                  <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                    <OverButtonIcon fill="#087168" />
                  </div></div>

              </button>

            </Link>
          </div>
          <div className="w-[35px] sm:w-[60px] lg:w-[95px] h-[750px] sm:h-[500px] bg-white"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mt-20 mb-[30rem] xs:mb-[50rem] sm:mb-[54rem] h-fit md:my-20 w-full mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 h-[90vh] px-4 md:px-8">
          <div className="flex flex-col ">
            <div className="w-full relative">
              <div className="absolute top-0 right-0 z-[10]">
                <div className="flex flex-row">
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-white"></div>
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-transparent"></div>
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-white"></div>
                </div>
              </div>

              <Image
                src="/img/parking.jpeg"
                alt="parking"
                width={2000}
                height={1333}
              />
            </div>
            <div className="bg-primary relative  p-8 mt-[-8px]">
              <div className="absolute top-0 right-[-10px]">
                <OverButtonBigIcon />
              </div>
              <div className="space-y-10">
                <h2 className="text-white text-[36px] md:text-[42px]  leading-[38px] md:leading-[44px]">{translate("description-parking-heading")}</h2>
                <p className="text-white text-[16px]  ">{translate("description-parking-text")}</p>
                <Link href={`/stretnutie`}>
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
                <p className="text-white text-[16px] w-[105%]  ">{translate("description-storage-text")}</p>
                <Link href={`/stretnutie`}>
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
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-transparent"></div>
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-white"></div>
                  <div className="w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] bg-white"></div>
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

      {/* <video
          className={"h-full xl:h-auto object-cover"}
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
        >
          <source type="video/mp4" src="/videos/230405OR2602-BezODRAZOK-16x9(1).mp4" />

        </video>
      </div> */}
      {/* 
      <div className={"px-[1rem] xl:px-0 flex xl:justify-center"}>
        <Link href="/stretnutie">
          <button className="hover:bg-primary bg-[#476761] w-full xl:w-[210px] h-[60px] text-white font-medium text-[16px] leading-[24px] mb-[90px] xl:mb-[185px]">
            {translate("button-meeting")}
          </button>
        </Link>
      </div> */}
      {/* <a
        href=""
        className={"opacity-0 mb-[50px] border-2"}
        id={"vybavenie"}
      ></a>
      {customDescriptionList.map((props, index) => (
        <CustomDescription key={index} {...props} />
      ))}
      <div id={"garazove-parkovanie"}>
        <CarDescription oProjekte={true} />
      </div>
      <div>
        <EcologicDescription oProjekte={true} />
      </div> */}
      {/* <div id="standardy" className="xl:grid xl:max-w-[1200px] grid-cols-2 mx-auto">
        <Equipment
          title={translate("equipment-heading")}
          href="/OLIVIA Residence_štandard projektu.pdf"
        />
        <Equipment title={translate("equipment-heading-4")} href="/Karta vybavenia OLIVIA Residence.pdf" />
      </div> */}
      {/* <div className="flex justify-center" id="financovanie">
        <div className="w-full">
          <div className="relative xl:mb-[100px] xl:mb-0 flex flex-col">
            <div className="bg-black w-full px-[1rem] xl:px-0 h-[850px] xl:h-[485px]">
              <div className="flex flex-col gap-[30px] justify-center items-center pt-[100px] pb-[350px] xl:pb-[270px]">
                {" "}
                <h2 className="font-bold text-[32px] xl:text-[40px] leading-[48px] text-[#F5F5F5] text-center xl:text-left">
                  {translate("financing-heading-0")}
                </h2>
                <span className="text-[16px] text-center px-12 leading-6 tracking-[0.1px] text-[#89A6A2]">
                  {translate("financing-subheading-0")}
                </span>
                <h2 className="font-bold text-[32px] xl:text-[40px] leading-[48px] text-[#F5F5F5] text-center xl:text-left">
                  {translate("financing-heading")}
                </h2>
                {/* <span className="text-[16px] leading-6 tracking-[0.1px] text-[#89A6A2]">
                  {translate("financing-subheading")}
                </span>
                <UniCredit classname="w-full h-[44px] xl:-h-[65] xl:-w-[492px]" /> */}
      {/* </div >
            </div >
            <div className="mx-auto">
              <div className="flex flex-col xl:flex-row gap-[30px] xl:justify-center bg-[background: #F5F5F5] -translate-y-[110%] xl:-translate-y-1/2 h-[290px]">
                <div className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center justify-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white ml-3 mr-4 xl:mx-0 w-[350px] xl:mb-[30px]">
                  <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">
                    01
                  </span>
                  <p className="w-[290px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">
                    {translate("financing-01")}
                  </p>
                </div>

                <div className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center justify-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white ml-3 mr-4 xl:mx-0 w-[350px] xl:mb-[30px]">
                  <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">
                    02
                  </span>
                  <p className="w-[290px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">
                    {translate("financing-02")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col xl:justify-center xl:flex-row gap-[30px]  bg-[background: #F5F5F5] -translate-y-[60%] xl:-translate-y-1/2 h-[260px]">
                <div className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center justify-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white ml-3 mr-4 xl:mx-0 w-[350px]">
                  <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">
                    03
                  </span>
                  <p className="w-[290px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">
                    {translate("financing-03")}
                  </p>
                </div>

                <div className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center justify-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white ml-3 mr-4 xl:mx-0 w-[350px]">
                  <span className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">
                    04
                  </span>
                  <p className="w-[290px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">
                    {translate("financing-04")}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[full] mt-[-750px] xl:mt-[-565px] bg-[#F5F5F5] h-[770px] xl:h-[550px] border-primary"></div>
          </div >
        </div >
      </div > */}
      {/* <div className="w-[full]  bg-[#F5F5F5]  xl:h-[250px] border-primary">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] pt-[60px] pb-[40px] xl:mx-[165px] items-center justify-center text-center">
          <div className="inline-block">
            <h4 className="font-bold text-[26px] leading-8 mb-[10px]">
              {translate("financial-helper")}
            </h4>
            <p className="text-[20px] leading-[28px] text-[#999999]">
              {translate("financial-helper-text")}
            </p>
          </div>


        </div>
        {/* <Equipment
        title={translate("equipment-heading-2")}
        href="Detailná ponuka financovania.pdf"
      /> 
    </div > */}
      <div id="financovanie" className="w-full bg-bgLight relative p-4 md:p-8 mb-40 md:mb-60 lg:mb-20">
        <div className="absolute top-0 right-0">
          <div className="flex flex-row">
            <div className="bg-white w-[40px] md:w-[100px] h-[40px] md:h-[100px] "></div>
            <div className="bg-white w-[40px] md:w-[100px] h-[40px] md:h-[100px] "></div>
          </div>
          <div className="flex flex-row">
            <div className="bg-transparent w-[40px] md:w-[100px] h-[40px] md:h-[100px] "></div>
            <div className="bg-white w-[40px] md:w-[100px] h-[40px] md:h-[100px] "></div>
          </div>
        </div>
        <div className="xl:max-w-[1200px] mx-auto pb-[27rem]   sm:pb-40 lg:pb-20 pt-10">
          <h2 className="relative text-black h-[200px] text-[48px] text-center mx-auto z-[10] ">{translate("financing")}</h2>
          <div className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 z-[5]">
            <div className="bg-yellow max-w-[1200px] relative p-6 md:p-8 mx-4 lg:mx-auto">
              <div className="absolute top-0 right-[-10px] z-[10]">
                <OverButtonBigIcon height="259" width="259" />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-2/3">
                  <h3 className="text-[36px] md:text-[42px] text-[#0E3F3B] leading-none mb-8 w-[80%] md:w-[70%] z-[20] relative">{translate("financial-helper")}</h3>
                  <p className="text-[18px] text-[#0E3F3B] z-[20] relative md:w-full w-[90%]">{translate("financial-helper-text")}</p>
                </div>
                <Link href="/kontakt">
                  <button
                    className={
                      "relative text-[18px] hover:text-white hover:bg-[#0E3F3B] text-[#0E3F3B] bg-white font-medium mt-[30px] flex flex-row justify-center items-center py-4 px-6 z-[10] w-full md:w-fit h-fit  "
                    }
                  >
                    {translate("contact")}

                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className={
          "px-4 w-full xl:max-w-[1200px] xl:mx-auto my-[120px] xl:mt-[250px] mb-[70px] xl:mb-[70px]"
        }
      >
        <h2
          className={
            "text-[48px] mb-[10px] xl:mb-[20px] xl:text-[56px] leading-[48px] text-center"
          }
        >
          {translate("partner-bank")}
        </h2>
        <h3
          className={
            "text-[20px] mb-[30px] xl:mb-[60px] xl:text-[28px] leading-[36px] text-center text-[#0E3F3B4D] italic w-full md:w-[80%] mx-auto "
          }
        >
          {translate("partner-bank-description")}
        </h3>
        <div
          className={
            "flex flex-col gap-[15px] xl:gap-[30px] xl:flex-row justify-center items-center"
          }
        >
          <div className="text-center">
            {" "}

            <div className="h-[78px] xl:h-[100px] w-[327px] xl:w-[380px] relative">
              <Image
                objectFit="contain"
                layout="fill"
                alt="Unicredit"
                src="/img/unicreditbank1.jpg"
                loading={"eager"}
              />
            </div>
            <div></div>
          </div>
          <div className="h-[78px] xl:h-[100px] w-[327px] xl:w-[380px] relative">
            <Image
              objectFit="contain"
              layout="fill"
              alt="Sporitelna"
              src="/img/sporitelna.png"
              loading={"eager"}
            />
          </div>
          <div className="h-[78px] xl:h-[100px] w-[327px] xl:w-[380px] relative">
            <Image
              objectFit="contain"
              layout="fill"
              alt="VUB"
              src="/img/vub-bank.png"
              loading={"eager"}
            />
          </div>
          <div className="h-[78px] xl:h-[100px] w-[120px] xl:w-[120px] relative">
            <Image


              fill
              alt="tatrabanka"
              src="/img/tatrabanka.svg"
              loading={"eager"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>{" "}

      <div className={"xl:mt-[100px] xl:mb-[100px]"}>
        <Subscription />
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

export default OProjekte;
