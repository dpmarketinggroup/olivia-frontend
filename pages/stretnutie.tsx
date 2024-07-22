import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form } from "@components/common/";
import {
  EmailSign,
  MapPoint2,
  RectangleLightIcon,
  RectangleDarkIcon,
  RectangleMediumIcon,
} from "@components/icons";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PhoneIcon from "@components/icons/Phone";

const Stretnutie = () => {
  const { t: translate } = useTranslation("home");
  const { asPath, locale, locales, push } = useRouter();
  function telNumber() {
    if (locale === "sk") {
      return (
        <div className="flex gap-[20px] items-center mb-[100px] xl:mb-[20px]">
          <PhoneIcon />
          <Link href={"tel:+421901923324"}>
            <a className="font-bold text-[18px] leading-7 text-white">
              +421 901 923 324
            </a>
          </Link>
        </div>
      );
    }
  }
  return (
    <>
      <Head>
        <title>Stretnutie | Olivia Residence</title>
      </Head>
      <div className="flex justify-center bg-[#0E3F3B]">
        <div className="relative w-full xl:max-w-[1920px]">
          <div className="flex flex-col items-center pt-[100px] xl:pt-[140px]">
            <MapPoint2 />
            <h1 className="font-bold text-[32px] xl:text-[40px] leading-[48px] tracking-[-0.5px] text-white xl:w-[600px] text-center mb-[55px] xl:mb-[px] mt-[40px] mx-4">
              {translate("hero-stretnutie-heading")}
            </h1>
          </div>
          <div className="hidden xl:flex h-[2px] bg-white opacity-30 max-w-[1090px] mx-auto"></div>
          <p className="mb-[70px] xl:mb-[40px] text-[18px] leading-7 text-white xl:w-auto mx-4 xl:mx-0 text-center mt-[30px]">
            {translate("hero-stretnutie-subheading-1")}
            <br /> {translate("hero-stretnutie-subheading-2")}
          </p>
          <div className="xl:flex justify-center">
            <div className="flex flex-col xl:flex-row xl:gap-[135px] xl:items-start">
              <div>
                <div className="xl:mb-[125px]">
                  <Form meeting={true} isGreen={true} />
                </div>
              </div>
              <div className="mt-[100px] xl:mt-[70px] mx-auto xl:mx-0">
                <div className="flex gap-[20px] items-center mb-[20px]">
                  <div>
                    <p className="font-bold text-[16px] leading-6 tracking-[0.1px] text-white">
                      Ing. Vladimíra Kubinová
                    </p>
                    <span className="text-[14px] leading-5 text-white">
                      {" "}
                      {translate("sales-assitant")}
                    </span>
                  </div>
                </div>
                <div className="flex gap-[20px] items-center mb-[10px]">
                  <EmailSign />
                  <Link href={"mailto:info@oliviaresidenc.sk"}>
                    <a className="font-bold text-[18px] leading-7 text-white">
                      info@oliviaresidence.sk
                    </a>
                  </Link>
                </div>
                {telNumber()}
                <p className="hidden xl:inline-block font-medium text-[14px] leading-5 tracking-[0.1px] w-[305px] text-white pb-[40px] xl:pb-0">
                  {translate("contact-and-meeting")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:flex bg-[#F5F5F5] w-full">
        <div className={"xl:mx-auto"}>
          <div className={`flex flex-col xl:flex-row  xl:gap-[85px]`}>
            <div>
              <div className="flex flex-col gap-[20px] mt-[55px] xl:mt-[75px] mx-4 mb-[45px]">
                <p className="font-medium text-[14px] leading-5 text-[#999999] xl:w-[455px] text-center xl:text-start">
                  {translate("stretnutie-page-text")}
                </p>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">
                    {translate("mon-fri")}
                  </span>
                  <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">
                    13.00 - 17.00
                  </span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">
                    {translate("sat")}
                  </span>
                  <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">
                    10.00 - 14.00
                  </span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">
                    {translate("sun-holiday")}
                  </span>
                  <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">
                    {translate("closed")}
                  </span>
                </div>
                <div className="flex flex-col items-center xl:items-start">
                  <span className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">
                    {translate("address")}
                  </span>
                  <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">
                    Rožňavská 1A, Bratislava
                  </span>
                  <div className="flex gap-[12px] items-center">
                    <MapPoint2 width="16" height="20" fill="000000" />
                    <p className="font-medium text-[18px] leading-7">
                      Fresh Market | {translate("ground-floor")}
                    </p>
                  </div>
                </div>
                <Link href="https://goo.gl/maps/CVbzvKFDCXY9aeaK6">
                  <button className="hover:bg-primary font-medium text-[16px] xl:mt-[30px] leading-6 tracking-[0.1px] text-white py-[12px] px-[45px] bg-[#476761] mb-[55px] xl:mb-[75px] xl:max-w-[160px]">
                    {translate("navigate")}
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center xl:my-auto">
              <Image
                quality={100}
                objectFit="cover"
                width={540}
                height={385}
                alt="Mapa"
                src={"/map.jpg"}
                loading={"eager"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-4 xl:mx-0">
        <div className="relative  flex flex-col xl:flex-row gap-[30px] xl:gap-[240px] items-center">
          <div className="flex justify-center mt-[100px] xl:my-[115px]">
            <Image
              quality={100}
              objectFit="cover"
              width={540}
              height={385}
              alt="3d map"
              src={"/img/map3d.png"}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <span className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">
              {translate("here-we-are")}
            </span>
            <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">
              Rožňavská 1A, Bratislava
            </span>
            <div className="flex gap-[12px] items-center mb-[100px] xl:mb-0">
              <MapPoint2 width="16" height="20" fill="000000" />
              <p className="font-medium text-[18px] leading-7">
                Fresh Market | {translate("ground-floor")}
              </p>
            </div>
          </div>
          <div className={`hidden xl:block absolute top-0 left-[-180px]`}>
            <RectangleDarkIcon />
          </div>
          <div className={`hidden xl:block absolute top-0 left-[-120px]`}>
            <RectangleMediumIcon />
          </div>
          <div className={`hidden xl:block absolute top-[60px] left-[-180px]`}>
            <RectangleLightIcon />
          </div>
          <div className={`hidden xl:block absolute top-[500px] left-[-120px]`}>
            <RectangleLightIcon />
          </div>
          <div className={`hidden xl:block absolute top-[60px] right-[-120px]`}>
            <RectangleLightIcon />
          </div>
          <div className={`hidden xl:block absolute top-[120px] right-[-60px]`}>
            <RectangleDarkIcon />
          </div>
          <div className={`hidden xl:block absolute bottom-0 right-0`}>
            <RectangleDarkIcon />
          </div>
        </div>
      </div>
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

export default Stretnutie;
