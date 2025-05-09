import { Hero, MapFooter } from "@components/common";
import { EmailSign, PhoneHero } from "@components/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PhoneIcon from "@components/icons/Phone";
import React from "react";
import Form from "@components/common/FormPodnety";

const Kontakt = () => {
  const { t: translate } = useTranslation("home");
  const { asPath, locale, locales, push } = useRouter();
  function telNumber() {
    if (locale === "sk") {
      return (
        <div className="flex gap-[20px] items-center mb-[100px] xl:mb-[20px]">
          <PhoneIcon />
          <Link legacyBehavior href={"tel:+421901923324"}>
            <a className="font-bold text-[18px] text-primary leading-7">+421 901 923 324</a>
          </Link>
        </div>
      );
    }
  }

  return (
    <div className={"flex flex-col"}>
      <Head>
        <title>Podnety | Olivia Residence</title>
      </Head>

      <div className="mx-0 lg:mx-[50px] xl:mx-auto mb-40 flex flex-col mt-40 px-4 md:px-10 pb-10 xl:pb-0 pt-10 bg-bgLight max-w-[1200px] w-full relative">

        <div className="absolute bottom-[70px] left-[-50px]">

          <div className="relative hidden lg:block lg:w-[500px] lg:h-[500px]">
            <Image className={"w-full aspect-square object-cover"} src={'/img/241022OR5801-CUTSAVE-vyber_01_08_24_24.png'} width={1080} height={608} alt="podnety" />
            <div className="absolute bottom-0 left-0 z-[10]">
              <div className="flex flex-row ">
                <div className="bg-white h-[30px] md:h-[50px] w-[30px] md:w-[50px]"></div>
                <div className="bg-transparent h-[30px] md:h-[50px] w-[30px] md:w-[50px]"></div>
              </div>
              <div className="flex flex-row ">
                <div className="bg-white h-[30px] md:h-[50px] w-[30px] md:w-[50px]"></div>
                <div className="bg-white h-[30px] md:h-[50px] w-[30px] md:w-[50px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap:-[10px] md:gap-[40px] xl:gap-[135px] ml-0 lg:ml-[450px] w-full lg:w-1/2">


          <div className="xl:mb-[25px] w-full ">
            <h2 className=" text-[48px] leading-[50px]  mb-[20px] ">
              {translate("podnety-heading")}
            </h2>
            <Form podnet={true} isGreen={false} />
          </div>
        </div>
      </div>

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

export default Kontakt;
