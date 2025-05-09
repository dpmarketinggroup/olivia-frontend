import { NewHero, MapFooter, Negotiation } from "@components/common";
import { Download, LeftButton, MapPoint } from "@components/icons";
import Head from "next/head";
import {
  ThreeDIcon,
  BoxIcon,
  RightButton,
} from "@components/icons";

import { TopApartmentSwiper } from "@components/swiper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { InterierDizajn } from "@components/common";
import Link from "next/link";
import { useState } from "react";
type Bulletpoint = {
  icon: JSX.Element;
  label: string;
};



interface MyObject {
  total: string;
  podorys: string;
  number_flat: string;
  area_flat: string;
  rooms: string;
  area_balcon?: string;
  area_terasa?: string;
}


const myArray: MyObject[] = [
  {
    total: "213,01 m2", podorys: "/1501.pdf", number_flat: "15.01", area_flat: "132,73 m2", rooms: "4+kk", area_balcon: "20,48 m2", area_terasa: "59,80 m2",

  },
  {
    total: "205,13 m2", podorys: "/1502.pdf", number_flat: "15.02", area_flat: "120,28 m2", rooms: "4+kk", area_terasa: "84,85 m2",

  },
  { total: "238,13 m2", podorys: "/1503.pdf", number_flat: "15.03", area_flat: "126,75 m2", rooms: "4+kk", area_balcon: "9,26 m2", area_terasa: "102,12 m2", },
  { total: "109,17 m2", podorys: "/1504.pdf", number_flat: "15.04", area_flat: "98,01 m2", rooms: "3+kk", area_balcon: "11,16 m2", },
]

const Podorys: string[] = [
  "/img/15.01.svg",
  "/img/15.02.svg",
  "/img/15.03.svg",
  "/img/15.04.svg",
]



const StresneApartmany = () => {
  const { t: translate } = useTranslation("home");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funkcia na posun vpred
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 3 ? prevIndex : prevIndex + 1
    );
  };

  // Funkcia na posun vzad
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };
  return (
    <>
      <Head>
        <title>Strešné apartmány | Olivia Residence</title>
      </Head>
      <NewHero
        imgName={"hero-stresne-apartmany.png"}
        icon={<MapPoint fill="#89A6A2" size={45} />}
        title={translate("hero-lokalita-title") || ""}
        description={translate("hero-lokalita-subtitle") || ""}
      />
      <section className="relative w-full desktop:max-w-[1920px] mx-auto flex flex-col justify-center items-center mt-6 mb-[6rem]">
        <div className="relative flex md:flex-row flex-col justify-center items-center gap-12">
          <div className="relative max-w-[92%] sm:max-w-[85%] md:max-w-[40%]">
            <div className="relative">
              <Link href="https://mollyinvr.com/projects/euroinvest/olivia/?project=APT1501" passHref>
                <div className="absolute z-10 top-0 sm:top-[5%] left-[70%] sm:left-[75%] bg-black font-medium text-white w-[85px] sm:w-[120px] h-[85px] sm:h-[120px] rounded-full text-center flex flex-col justify-center items-center gap-1 text-[8px] sm:text-[12px] cursor-pointer">
                  <BoxIcon />
                  {translate("top-apartments-virtual")}
                </div>
              </Link>
              <video
                className={"rounded-2xl"}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source type="video/mp4" src="/videos/241013OR5704-apt-1501-v1-5x4.mp4" />
              </video>
            </div>
            <div className="flex flex-row mt-10 justify-between">
              <p className="font-bold text-[24px] sm:text-[32px] leading-[28px] tracking-[-0.5px]">15.01</p>
              <Link href="https://mollyinvr.com/projects/euroinvest/olivia/?project=APT1501" passHref>
                <span className="text-[#476761] text-[14px] sm:text-[16px] flex flex-row gap-1 items-center cursor-pointer">
                  {translate("top-apartments-virtual-button")}<ThreeDIcon />
                </span>
              </Link>
            </div>
          </div>
          <div className="relative max-w-[92%] sm:max-w-[85%] md:max-w-[40%]">
            <div className="relative">
              <Link href="https://mollyinvr.com/projects/euroinvest/olivia/?project=APT1502 " passHref>
                <div className="absolute z-10 top-0 sm:top-[5%] left-[70%] sm:left-[75%] bg-black font-medium text-white w-[85px] sm:w-[120px] h-[85px] sm:h-[120px] rounded-full text-center flex flex-col justify-center items-center gap-1 text-[8px] sm:text-[12px] cursor-pointer">
                  <BoxIcon />
                  {translate("top-apartments-virtual")}
                </div>
              </Link>
              <video
                className={"rounded-2xl"}
                autoPlay={true}
                playsInline={true}
                muted={true}
                loop={true}
              >
                <source type="video/mp4" src="/videos/241013OR5704-apt-1502-v1-5x4.mp4" />
              </video>
            </div>
            <div className="flex flex-row mt-10 justify-between">
              <p className="font-bold text-[24px] sm:text-[32px] leading-[28px] tracking-[-0.5px]">15.02</p>
              <Link href="https://mollyinvr.com/projects/euroinvest/olivia/?project=APT1502 " passHref>
                <span className="text-[#476761] text-[14px] sm:text-[16px] flex flex-row gap-1 items-center cursor-pointer">
                  {translate("top-apartments-virtual-button")}<ThreeDIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="main" className="w-full  desktop:max-w-[1920px] mx-0 px-0 sm:px-1 sm:mx-auto flex flex-col justify-center items-center ">

        <div className="w-full ">
          <div className="flex flex-row justify-center items-center font-semibold text-[20px] w-full px-0 sm:px-20 border-b-[#00000022] border-b-[1px] max-w-[100%]">
            <div onClick={() => setCurrentIndex(0)} className={(currentIndex === 0 ? "text-[#43645F] border-b-[#43645F] " : "text-[#00000077] border-b-white ") + "text-[20px]     border-b-[2px] py-[16px] sm:py-[22px] px-[10px] sm:px-[34px] flex flex-col lg:flex-row justify-center items-center cursor-pointer"}>
              15.01 <span className={(currentIndex === 0 ? "text-[#43645F] " : "text-[#00000027] ") + "lg:ml-6 text-[12px] sm:text-[16px] "}>213,01m2</span>
            </div>
            <div onClick={() => setCurrentIndex(1)} className={(currentIndex === 1 ? "text-[#43645F] border-b-[#43645F] " : "text-[#00000077] border-b-white ") + "text-[20px]     border-b-[2px] py-[16px] sm:py-[22px] px-[10px] sm:px-[34px] flex flex-col lg:flex-row justify-center items-center cursor-pointer"}>
              15.02 <span className={(currentIndex === 1 ? "text-[#43645F] " : "text-[#00000027] ") + "lg:ml-6 text-[12px] sm:text-[16px] "}>205,13m2</span>
            </div>
            <div onClick={() => setCurrentIndex(2)} className={(currentIndex === 2 ? "text-[#43645F] border-b-[#43645F] " : "text-[#00000077] border-b-white ") + "text-[20px]     border-b-[2px] py-[16px] sm:py-[22px] px-[10px] sm:px-[34px] flex flex-col lg:flex-row justify-center items-center cursor-pointer"}>
              15.03 <span className={(currentIndex === 2 ? "text-[#43645F] " : "text-[#00000027] ") + "lg:ml-6 text-[12px] sm:text-[16px] "}>238,13m2</span>
            </div>
            <div onClick={() => setCurrentIndex(3)} className={(currentIndex === 3 ? "text-[#43645F] border-b-[#43645F] " : "text-[#00000077] border-b-white ") + "text-[20px]     border-b-[2px] py-[16px] sm:py-[22px] px-[10px] sm:px-[34px] flex flex-col lg:flex-row justify-center items-center cursor-pointer"}>
              15.04 <span className={(currentIndex === 3 ? "text-[#43645F] " : "text-[#00000027] ") + "lg:ml-6 text-[12px] sm:text-[16px] "}>109,17m2</span>
            </div>
          </div>
          <div className="bg-[#FAFAFA] w-full flex flex-col sm:flex-row justify-center items-center py-10 gap-4 sm:gap-20">
            <div className=" relative w-[300px] h-[320px] sm:h-[480px]">
              <Image
                className="-rotate-90 sm:rotate-0"
                src={Podorys[currentIndex]}
                alt="pôdorys apartmanu"
                layout="fill"

              />
            </div>
            <div className="w-[90%] sm:w-auto">
              <div className="relative">
                <div className="absolute top-[0%] right-[0%] z-[60] flex flex-row gap-2 p-4 mr-2 sm:mr-0 items-center">
                  <p className="text-white text-[18px]">{translate("top-apartments-premium-standard-next")}</p>
                  <LeftButton className="int-prev " onClick={prevSlide} />
                  <RightButton className="int-next " onClick={nextSlide} />

                </div>


                <div className="relative bg-white w-full sm:w-[420px] mx-auto">
                  <div className="relative">
                    <div className="relative z-50 w-full sm:w-[420px] flex flex-col justify-end  p-4 h-[350px] sm:h-[205px]">

                      <Link legacyBehavior href={myArray[currentIndex].podorys}>
                        <a
                          target={"_blank"}
                          className="cursor-pointer text-white bg-black rounded-2xl flex flex-row gap-2 justify-center items-center py-1 px-2 w-fit text-sm font-medium"
                        ><Download />
                          {translate("top-apartments-premium-standard-pdf")}
                        </a>
                      </Link>

                      <p className="mt-2 font-bold text-white text-[18px] sm:text-[24px] leading-[28px] tracking-[-0.5px]">{myArray[currentIndex].number_flat}</p>

                    </div>
                    <div className="absolute max-w-md md:max-w-lg lg:max-w-xl z-10 w-full h-[350px] sm:w-[420px] top-[0%] sm:h-[205px]">
                      <Image
                        className="brightness-[0.7] object-cover "
                        src="/img/hero-stresne-apartmany.png"
                        layout="fill"
                        objectFit="cover"
                        alt={"Terasa"}
                      />
                    </div>
                  </div>
                  <div className="text-[15px] sm:text-[18px] font-medium my-2 p-4">
                    <div className="flex flex-row justify-between my-3">
                      <p className="text-[#00000077] ">{translate("top-apartments-premium-properties-1")}</p>
                      <p className="text-black">{myArray[currentIndex].area_flat}</p>
                    </div>
                    <hr className="border-[1px] border-[#00000022]" />
                    <div className="flex flex-row justify-between my-3">
                      <p className="text-[#00000077]">{translate("top-apartments-premium-properties-2")}</p>
                      <p className="text-black">{myArray[currentIndex].rooms}</p>
                    </div>
                    {myArray[currentIndex].area_balcon ? (<>
                      <hr className="border-[1px] border-[#00000022]" />
                      <div className="flex flex-row justify-between my-3">
                        <p className="text-[#00000077]">{translate("top-apartments-premium-properties-3")}</p>
                        <p className="text-black">{myArray[currentIndex].area_balcon}</p>
                      </div> </>) : (<></>)}
                    {myArray[currentIndex].area_terasa ? (<>
                      <hr className="border-[1px] border-[#00000022]" />
                      <div className="flex flex-row justify-between my-3">
                        <p className="text-[#00000077]">{translate("top-apartments-premium-properties-4")}</p>
                        <p className="text-black">{myArray[currentIndex].area_terasa}</p>
                      </div>
                    </>) : (<></>)}
                    <hr className="border-[1px] border-[#00000022]" />
                    <div className="flex flex-row justify-between my-3 bg-primary p-2">
                      <p className="text-white">{translate("total-area-2")}</p>
                      <p className="text-white">{myArray[currentIndex].total}</p>
                    </div>
                    <hr className="border-[1px] border-[#00000022]" />
                    <div className="flex flex-row justify-between my-3">
                      <p className="text-[#00000077]">{translate("top-apartments-premium-properties-5")}</p>
                      <p className="text-black">{translate("top-apartments-premium-properties-6")}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between gap-2 sm:gap-0 mt-2 p-4">
                    <Link href='/stretnutie'>
                      <button className="hover:bg-primary text-[16px] font-medium leading-[24px] tracking-[0.1px] text-white hover:text-white border h-[50px]  w-full xl:w-[190px] bg-black border-none">
                        {translate("button-meeting")}
                      </button>
                    </Link>
                    {currentIndex === 0 ? (
                      <Link href="https://mollyinvr.com/projects/euroinvest/olivia/?project=APT1501 ">
                        <span className="text-[#476761] text-[14px] sm:text-[14px] flex flex-row gap-1 justify-center items-center cursor-pointer h-[50px]">{translate("top-apartments-virtual")}<ThreeDIcon /></span>
                      </Link>) : (<></>)}
                    {currentIndex === 1 ? (
                      <Link href="https://mollyinvr.com/projects/euroinvest/olivia/?project=APT1502 ">
                        <span className="text-[#476761] text-[14px] sm:text-[14px] flex flex-row gap-1 justify-center items-center cursor-pointer h-[50px]">{translate("top-apartments-virtual")}<ThreeDIcon /></span>
                      </Link>) : (<></>)}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <h2 className="font-bold text-[24px] sm:text-[32px] xl:text-[40px] leading-[30px] sm:leading-[40px] xl:leading-[48px] text-black text-center max-w-[85%] sm:max-w-[60%] mt-8">{translate("top-apartments-premium-standard-h2")}</h2>
        </div>
      </section >
      <InterierDizajn />
      <TopApartmentSwiper />
      <section className="w-full  desktop:max-w-[1920px] mx-auto flex flex-col justify-center items-center ">

        <div className="absolute -z-10 w-full h-[430px] grayscale-[10%]">
          <Image
            src="/img/06d5563bdd7a5cefec1123f4a668eeba.png"
            alt="Ukážka apartmánu"
            objectFit="cover"
            layout="fill"
            className="brightness-[0.7]"
          />
        </div>
        <div className="relative z-100 flex flex-col items-start xl:items-start gap-[28px] py-[60px]  ">
          <h2 className="font-bold text-[28px] sm:text-[32px] xl:text-[40px] leading-[30px] sm:leading-[40px] xl:leading-[48px] text-white max-w-[90%] sm:max-w-[60%]">{translate("top-apartmnets-meet-h2")}</h2>
          <p className="leading-[28px] text-white max-w-[90%] sm:max-w-[50%]">{translate("top-apartmnets-meet-p")}</p>

          <Link href='/stretnutie'>
            <button className="hover:bg-primary text-[16px] font-medium leading-[24px] tracking-[0.1px] text-black hover:text-white border h-[50px] w-[90%] sm:w-[70%] md:w-[30%]  sm:w-full xl:w-[190px] bg-white border-none">
              {translate("button-meeting")}
            </button>
          </Link>
        </div>
      </section>



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
      //Will be passed to the page component as pro
    },
  };
}

export default StresneApartmany;
