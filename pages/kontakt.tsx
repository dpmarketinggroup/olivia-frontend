import { Form, Hero, MapFooter } from "@components/common";
import { EmailSign, PhoneHero } from "@components/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PhoneIcon from "@components/icons/Phone";
import React from "react";

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
        <title>Kontakt | Olivia Residence</title>
      </Head>
      <Hero
        imgName="hero_kontakt"
        button={true}
        title={translate("hero-contact-heading")}
      />
      <div className="mx-auto flex flex-col mt-40 px-4 md:px-10 pb-10 xl:pb-0 pt-10 bg-bgLight max-w-[1200px] relative">
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
        <div className="flex flex-col md:flex-row gap:-[10px] md:gap-[40px] xl:gap-[135px]">

          <div className="mx-0 md:mx-auto xl:mx-0">
            <div className="flex gap-[20px] items-center mb-[20px]">
              <div className={"leading-6"}>
                <p className="font-bold text-[22px]">Ing. Vladimíra Kubinová</p>
                <span className="text-[15px]">
                  {translate("sales-assitant")}
                </span>
              </div>
            </div>
            <div className="flex gap-[20px] items-center mb-[10px]">
              <EmailSign />
              <Link legacyBehavior href={"mailto:info@oliviaresidenc.sk"}>
                <a className="font-bold text-primary  text-[18px] leading-7">
                  info@oliviaresidence.sk
                </a>
              </Link>
            </div>
            {telNumber()}
            <p className="hidden xl:inline-block text-[15px] text-black w-full xl:max-w-[335px]">
              {translate("contact-and-meeting")}
            </p>
          </div>
          <div className="xl:mb-[125px] w-full md:w-1/2">
            <h2 className=" text-[48px] leading-[50px] w-2/3 mb-[20px] ">
              {translate("form-heading")}
            </h2>
            <Form isGreen={false} />
          </div>
        </div>
      </div>
      <MapFooter />
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
