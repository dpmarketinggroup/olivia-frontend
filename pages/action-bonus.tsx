import Negotiation from "@components/common/Negotiation";
import {
  InfoIcon2,
  CalendarIcon,
  HomeIcon,
  Slider1Icon,
  Slider2Icon,
  Slider3Icon,
  Slider4Icon,
  Slider5Icon,
  Slider6Icon,
  ContractKeyIcon,
  Calendar2Icon,
  ContractIcon,
  BuildingIcon,
  PercentIcon,
  RectangleDarkIcon,
  RectangleLightIcon,
  RectangleMediumIcon,
  Home2Icon,
  BuildIcon,
  PencilIcon,
  iIcon,
  SpecialistIcon
} from "@components/icons";
import ListIcon from "@components/icons/ListIcon";
import Image from "next/image";
import {
  ApartmentSwiper,
  CustomSwiper,
  DeveloperSwiper,
} from "@components/swiper";
import { useRouter } from "next/router";
import { BuildingFilter } from "@components/filter";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PhoneIcon from "@components/icons/Phone";
import React, { useEffect, useState } from "react";
import { actions } from "react-table";

const Action = () => {
  const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false);
  const { t: translate } = useTranslation("home");
  const { asPath, locale, locales, push } = useRouter();

  function telNumber() {
    if (locale === "sk") {
      return (
        <div className="flex gap-[20px] items-center mb-[100px] xl:mb-[20px]">
          <PhoneIcon />
          <Link href={"tel:+421901923324"}>
            <a className="font-bold text-[18px] leading-7">+421 901 923 324</a>
          </Link>
        </div>
      );
    }
  }

  return (
    <div className={"flex flex-col"}>
      <Head>
        <title>Akcia Bonusové úroky | Olivia Residence</title>
      </Head>

      <div className="flex justify-center  mt-[60px]">
        {/* bol tam margin bottom 50px */}
        <div className="h-[600px] flex items-center w-full xl:max-w-[1920px]  relative">
          <div className="h-full w-full absolute  -z-10 xl:mt-[0] mt-[50px]">
            <Image
              objectFit="cover"
              layout="fill"
              alt="hero image"
              src={`/img/Background-action.jpg`}
              loading={"eager"}
            />
          </div>
          <div className="relative flex flex-col md:pl-[150px] md:items-start items-center xl:max-w-[1400px] md:mx-4 sm:mx-[155px] mx-[40px] md:pt-[90px] pt-[70px] mb-[20px]">
            <h1 className="font-bold md:w-[600px] md:text-[60px] sm:text-[39px] text-[32px] md:leading-[60px] sm:leading-[45px] leading-[32.2px] tracking-[-1px] text-white md:mb-[10px] mb-[5px] text-left xl:text-start">
              {translate("hero-h1-action")}
            </h1>
            <p className="text-[16px] md:w-[500px] leading-[22.4px] text-white md:my-[15px] my-[15px] text-left xl:text-start">
              {translate("hero-h2-action")}
            </p>
            <div className="">
              <Link href="/action-bonus/#option">
                <button className="hover:bg-[#0E3F3B] bg-[#89A6A2] w-full xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                  {translate("hero-button")}
                </button>
              </Link>
              <Link href="/ponuka-apartmanov">
                <button className=" hover:bg-[#89A6A2] hover:border-[#89A6A2]  xl:ml-3 border-2 border-white w-full xl:w-[210px] h-[50px] text-white mt-5 font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                  {translate("hero-button-white")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  sm:h-[300px] h-[250px] bg-[#89A6A2] sm:p-[15px] p-[25px] flex flex-col justify-center items-center text-center text-white md:text-[32px] px-3 py-4 text-[24px] leading-[28px]">
        <div className="m-4 w-[31px]">
          <InfoIcon2 />
        </div>
        <div className="flex flex-col justify-center items-center text-center text-white leading-8">
          {" "}
          <span className="flex flex-wrap">{translate("notice1")}</span>
          <span className="flex flex-wrap">{translate("notice2")}</span>
        </div>
      </div>
      <section id="option" className="bg-white w-full p-0">
        <div className="flex  items-center justify-center ">
          <span className="md:text-[40px] text-[28px] lg:mx-[250px] mx-[20px] md:my-[50px] my-[20px] text-left  md:leading-10 leading-[30px] max-w-[445px] text-[#476761] ">
            <strong>{translate("offer-h1")}</strong>
          </span>
        </div>
        <div className="flex sm:flex-row flex-col md:mx-[200px] mx-[20px] md:gap-0 gap-[63px] justify-center">
          <div className="max-w-[550px] min-w-[220px] p-6 bg-[#EFF7F4] md:border-dashed md:border-2 md:border-r-[#65B94A]">
            <div className="flex flex-row items-center mt-[-40px] gap-[10px]">
              <CalendarIcon />
              <p className=" text-center text-[14px] text-white bg-[#389653] h-[28px] tracking-[.25rem] py-1 px-1 w-[130px] h-auto rounded-lg">
                {translate("option-1")}
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-[22px] text-[#3A7F6A] text-left leading-[26.5px] mb-[15px]">
                <strong>{translate("offer-section1-h")}</strong>
              </h2>
              <p className="mb-[60px] text-[16px] leading-[24px] text-left pt-2">
                {translate("offer-section1-p")}
              </p>
            </div>
            {/* <div>
              <button className="bg-[#389653] py-2 px-5 text-white text-[16px]">
                Zistiť viac
              </button>
            </div> */}
          </div>
          <div className="bg-[#EFF8ED] max-w-[550px] min-w-[220px] p-6">
            <div className="flex flex-row items-center mt-[-40px] gap-[10px]">
              <HomeIcon />
              <p className="text-center text-[14px] text-white bg-[#65B94A] h-[28px] tracking-[.25rem] py-1 px-1 w-[130px] h-auto rounded-lg">
                {translate("option-2")}
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-[22px] text-[#65B94A] text-left leading-[26.5px] mb-[15px]">
                <strong>{translate("offer-section2-h")}</strong>
              </h2>
              <p className="mb-[80px] text-[16px] leading-[24px] text-left pt-2">
                {translate("offer-section2-p")}
              </p>
            </div>
            {/* <div>
              <button className="bg-[#65B94A] py-2 px-5 text-white text-[16px]">
                Zistiť viac
              </button>
            </div> */}
          </div>
        </div>
        <div className=" md:mt-[-130px] mt-[-400px] w-full h-[475px] md:h-[200px] bg-[#476761]"></div>
      </section>
      <section className="flex flex-col justify-center items-center py-[92px] md:px-[160px] px-[20px]">
        <div className="flex flex-col flex-wrap justify-center items-center max-w-[490px]">
          <h1 className="md:text-[40px] text-[32px] md:leading-10 leading-[32.5px] text-[#476761] text-center">
            <strong>{translate("model-example-h")}</strong>
          </h1>
        </div>
        <div className="flex md:flex-row flex-col   flex-start my-[60px]">
          <div className="md:m-[20px] m-[10px] md:w-auto w-[310px]">
            <div className="flex flex-col px-[10px] mb-[80px] md:w-[363px] w-[310px]">
              <h3 className="text-left md:text-[24px] text-[20.5px] text-[#476761] md:leading-7 leading-[24px] mb-[45px]">
                <strong>
                  <span className="text-[#47676199]">
                    {translate("model-example-sec1-h-c")}
                  </span>
                  {translate("model-example-sec1-h")}
                </strong>
              </h3>
              <div>
                <p className=" text-left text-[#000000] md:text-[14px] text-[12px] leading-[15px]">
                  <span className="text-[#626262]">
                    {translate("model-example-sec1-slider1-c")}
                  </span>
                  {translate("model-example-sec1-slider1")}
                </p>

                <Slider1Icon />

                <p className="md:text-[11.31px] text-[9.5px] text-right text-[#486761]">
                  <strong>231 120 {translate("currency")}</strong>
                </p>
              </div>
              <div>
                <p className=" text-left text-black md:text-[14px] text-[12px] leading-[15px]">
                  {translate("model-example-sec1-slider2")}
                  <span className="text-[#626262]">
                    {translate("model-example-sec1-slider2-c")}
                  </span>
                </p>

                <Slider2Icon />

                <p className="md:text-[11.31px] text-[9.5px] text-right text-[#486761]">
                  <strong>30 {translate("years")}</strong>
                </p>
              </div>
              <div>
                <p className=" text-left text-[#000000] md:text-[14px] text-[12px] leading-[15px]">
                  <span className="text-[#626262]">
                    {translate("model-example-sec1-slider3-c")}
                  </span>
                  {translate("model-example-sec1-slider3")}
                </p>

                <Slider3Icon />

                <p className="md:text-[11.31px] text-[9.5px] text-right text-[#486761]">
                  <strong>4,49% p.a.</strong>
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-start   md:w-auto w-310px bg-[#89A6A2] p-[10px] self-stretch">
              <p className="text-white md:text-[15px] text-[13px] leading-[15.5px]">
                <span className="text-[#ffffff99] ">
                  {translate("model-example-sec1-foot-c")}
                </span>{" "}
                {translate("model-example-sec1-foot")}
              </p>
              <p className="text-[#F5F5F5] md:text-[28px] text-[24px]">
                <strong>1 170 {translate("currency")}</strong>
              </p>
            </div>
          </div>
          <div className="flex md:flex-row  flex-col items-start md:max-w-none max-w-[320px] bg-gradient-to-r  from-[#65B94A17] to-[#38965317] pb-[1rem]">
            <div className="bg-white md:w-[363px] w-[300px] md:m-[20px] mx-[10px] my-[40px]">
              <div className="flex flex-row items-center mt-[-20px] gap-[10px]">
                <CalendarIcon />
                <p className=" text-center text-[14px] text-white bg-[#389653] h-[28px] tracking-[.25rem] py-1 px-1 w-[130px] h-auto rounded-lg">
                  {translate("option-1")}
                </p>
              </div>
              <div className="px-[15px]">
                <h3 className="text-[#3A7F6A] md:text-[24px] text-[20.5px] text-left md:leading-7 leading-[24px] leading-7">
                  <strong>{translate("model-example-sec2-h")}</strong>
                </h3>
                <p className="md:text-[16px] text-[13.5px] text-[#476761] text-left md:leading-5 leading-[17px] mb-[30px] pt-3">
                  {translate("model-example-sec2-p")}
                </p>
                <div className="my-[10px]">
                  <p className=" text-left text-[#000000] md:text-[14px] text-[12px]">
                    <span className="text-[#626262]">
                      {translate("model-example-sec2-slider1-c")}
                    </span>

                    {translate("model-example-sec2-slider1")}
                  </p>

                  <Slider4Icon />

                  <p className="md:text-[11.31px] text-[9.5px] text-right text-[#486761]">
                    <strong>1 170 {translate("currency")}</strong>
                  </p>
                </div>
                <div className="my-[10px]">
                  <p className=" text-left text-[#000000] md:text-[14px] text-[12px]">
                    {translate("model-example-sec2-slider2")}
                  </p>

                  <Slider5Icon />

                  <p className="md:text-[11.31px] text-[9.5px] text-right text-[#486761]">
                    <strong>792 {translate("currency")}</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-start bg-[#3A7F6A] p-[10px] md:w-auto w-[300px]">
                <p className="text-white md:text-[15px] text-[13px]">
                  <span className="text-[#ffffff99] ">
                    {translate("model-example-sec2-slider1-c")}
                  </span>

                  {translate("model-example-sec2-slider1")}
                </p>
                <p className="text-[#F5F5F5] md:text-[28px] text-[24px] ">
                  <strong>792 {translate("currency")}</strong>
                  <span className=" text-[#F5F5F560] md:text-[20px] text-[17px] line-through">
                    {"  "}1 170 {translate("currency")}
                  </span>
                </p>
              </div>
              <div className="flex flex-col flex-start bg-[#389653] p-[10px] md:w-auto w-[300px]">
                <p className="text-white md:text-[15px]">
                  <span className="text-[#ffffff99] md:text-[15px] text-[13px]">
                    {translate("model-example-sec2-foot-c")}
                  </span>
                  {translate("model-example-sec2-foot")}
                </p>
                <p className="text-[#F5F5F5] md:text-[28px] text-[24px]">
                  <strong>13 608 {translate("currency")}</strong>
                </p>
              </div>
            </div>
            <div className="bg-white md:w-[363px] w-[300px] md:m-[20px] mx-[10px] my-[2 0px]">
              <div className="flex flex-row items-center mt-[-20px] gap-[10px]">
                <HomeIcon />
                <p className="text-center text-[14px] text-white bg-[#65B94A] h-[28px] tracking-[.25rem] py-1 px-1 w-[130px] h-auto rounded-lg">
                  {translate("option-2")}
                </p>
              </div>
              <div className="md:px-[15px] px-[10px]">
                <h3 className="text-[#65B94A] md:text-[24px] text-[20.5px] text-left">
                  <strong>{translate("model-example-sec3-h")}</strong>
                </h3>
                <p className="md:text-[16px] text-[13.5px] text-[#476761] text-left leading-5 mb-[30px] pt-3">
                  {translate("model-example-sec3-p")}
                </p>
                <div className="my-[10px]">
                  <p className=" text-left text-[#000000] md:text-[14px] text-[12px]">
                    {translate("model-example-sec3-slider1")}
                  </p>

                  <Slider6Icon />

                  <p className="text-[11.31px] text-right text-[#486761]">
                    <strong>0 {translate("currency")}</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-start bg-[#65B94A] p-[10px] md:w-auto w-[300px]">
                <p className="text-white md:text-[15px] text-[13px]">
                  <span className="text-[#ffffff99] ">
                    {translate("model-example-sec3-foot-c")}
                  </span>
                  {translate("model-example-sec3-foot")}
                </p>
                <p className="text-[#F5F5F5] md:text-[28px] text-[24px]">
                  <strong>0 {translate("currency")}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-[100px] sm:mx-[15px] mx-[8px] text-center text-[13px] leading-6 align-strech">
          <p>{translate("model-example-f")}</p>
        </div>
      </section>
      <section className="md:px-[160px] px-[20px] py-[58px] gap-[51px] flex justify-center  flex-col md:flex-row bg-white">
        <div className="flex flex-col md:gap-[62px] gap-[30px] max-w-[320px]">
          <h1 className="text-[40px] leading-[48px] md:text-left text-left text-[#476761]">
            <strong>{translate("better-offer-h")}</strong>
          </h1>
          <Link href="/stretnutie">
            <button className="hover:bg-primary bg-[#476761] w-[189px] xl:w-[210px] md:h-[50px] h-[36px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
              {translate("button-meeting")}
            </button>
          </Link>
        </div>
        <div className=" flex items-start content-start flex-wrap gap-[10px] max-w-[750px]">
          <div className="bg-[#fbfbfb]  w-[370px] md:h-[240px] h-[180px] p-[16px] ">
            <ContractKeyIcon />
            <p className="text-[22px] mt-[15px] leading-[24px] text-black text-left">
              <strong>{translate("better-offer-1")}</strong>
            </p>
          </div>
          <div className="bg-[#fbfbfb]  w-[370px] h-[240px] p-[16px]">
            <Calendar2Icon />
            <p className="text-[22px] mt-[15px] leading-[24px] text-black text-left">
              <strong>{translate("better-offer-2.1")}</strong>
            </p>
            <p className="text-[13px] my-4 leading-[18px] text-[#00000099] text-left">
              {translate("better-offer-2.2")}
            </p>
          </div>
          <div className="bg-[#fbfbfb] w-[370px] md:h-[240px]  h-[160px] p-[16px] ">
            <ContractIcon />
            <p className="text-[22px] mt-[15px] leading-[24px] text-black text-left">
              <strong>{translate("better-offer-3")}</strong>
            </p>
          </div>
          <div className="bg-[#fbfbfb] w-[370px] h-[240px] p-[16px] ">
            <BuildingIcon />
            <p className="text-[22px] mt-[15px] leading-[24px] text-black text-left">
              <strong>{translate("better-offer-4.1")}</strong>
            </p>
            <p className="text-[13px] my-4 leading-[18px] text-[#00000099] text-left">
              {translate("better-offer-4.2")}
            </p>
          </div>
          <div className="bg-[#fbfbfb] w-[370px] md:h-[240px] h-[160px] p-[16px] ">
            <PercentIcon />
            <p className="text-[22px] mt-[15px] leading-[24px] text-black text-left">
              <strong>{translate("better-offer-5")}</strong>
            </p>
          </div>
          <div className="bg-[#fbfbfb] w-[370px] md:h-[240px] h-[160px] p-[16px] ">
            <SpecialistIcon />
            <p className="text-[22px] mt-[15px] leading-[24px] text-black text-left">
              <strong>{translate("better-offer-6")}</strong>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F4F3] w-full h-[375px] relative">
        <div className="hidden xl:block absolute right-[700px] ">
          <RectangleLightIcon />
        </div>
        <div className="hidden xl:block absolute right-[0px] ">
          <RectangleDarkIcon />
        </div>
        <div className="hidden xl:block absolute ">
          <RectangleMediumIcon />
        </div>
        <div className="hidden xl:block absolute left-[120px] top-[60px]">
          <RectangleMediumIcon />
        </div>
        <div className="hidden xl:block absolute  left-[60px] top-[120px] ">
          <RectangleLightIcon />
        </div>
        <div className="hidden xl:block absolute right-[60px] top-[60px]">
          <RectangleMediumIcon />
        </div>
        <div className="hidden xl:block absolute right-[1000px] bottom-[0px] ">
          <RectangleLightIcon />
        </div>{" "}
        <div
          className=" flex flex-col justify-center items-center gap-[10px] mt-[60px]
        "
        >
          <ListIcon />
          <h1 className="text-[40px] text-center ">
            <strong>{translate("offer-financing")}</strong>
          </h1>
          <Link href="/action-bonus/#financing">
            <button className=" h-[36px] w-[186px] text-white bg-[#476761] text-[16px]">
              {translate("financing-btn")}
            </button>
          </Link>
        </div>
      </section>
      <section id="financing" className="md:bg-white bg-[#476761] mb-[50px]">
        <div className=" w-full bg-[#476761] h-[330px] pt-[20px]">
          <h1 className="text-white text-center md:text-[40px] text-[32px]">
            <strong>{translate("what-is-plan-h")}</strong>
          </h1>
        </div>
        <div className="flex md:flex-row flex-col gap-[15px] items-center justify-center mt-[-200px]">
          <div className="bg-white drop-shadow-lg h-[265px]  md:w-[350px] w-[300px] px-[20px] pt-[60px] flex flex-col items-center content-start ">
            <div className=" flex flex-row items-center justify-center gap-[10px]">
              <span className="text-[24px] text-[#476761]">
                <strong>01.</strong>
              </span>{" "}
              <PencilIcon />
            </div>
            <p className="text-[18px] text-center text-[#676766] leading-6">
              {translate("what-is-plan1")}
            </p>
          </div>

          <div className="bg-white drop-shadow-lg h-[265px] md:w-[350px] w-[300px] px-[20px] pt-[60px] flex flex-col items-center content-start">
            <div className=" flex flex-row items-center justify-center gap-[10px]">
              <span className="text-[24px] text-[#476761]">
                <strong>02.</strong>
              </span>{" "}
              <BuildIcon />
            </div>
            <p className="text-[18px] text-center text-[#676766] leading-6">
              {translate("what-is-plan2")}
            </p>
          </div>
          <div className="bg-white drop-shadow-lg h-[265px] md:w-[350px] w-[300px] px-[20px] pt-[60px] mb-[10px] flex flex-col items-center content-start">
            <div className=" flex flex-row items-center justify-center gap-[10px]">
              <span className="text-[24px] text-[#476761]">
                <strong>03.</strong>
              </span>{" "}
              <Home2Icon />
            </div>
            <p className="text-[18px] text-center text-[#676766] leading-6">
              {translate("what-is-plan3")}
            </p>
          </div>
        </div>
      </section>

      <Negotiation
        title={translate("negotiation-heading")}
        subtitle={"Rožňavská 1A, Bratislava"}
      />

      <BuildingFilter />
      <CustomSwiper />
    </div>
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

export default Action;
