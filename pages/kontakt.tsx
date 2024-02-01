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
        <title>Kontakt | Olivia Residence</title>
      </Head>
      <Hero
        imgName="kontaktHero"
        icon={<PhoneHero />}
        title={translate("hero-contact-heading")}
      />
      <div className="mx-auto flex flex-col">
        <p className="font-medium text-[16px] leading-6 mb-[20px] text-center xl:text-start">
          {translate("form-heading")}
        </p>
        <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[135px]">
          <div className="xl:mb-[125px]">
            <Form isGreen={false} />
          </div>
          <div className="mx-auto xl:mx-0">
            <div className="flex gap-[20px] items-center mb-[20px]">
              <div className={"leading-6"}>
                <p className="font-bold">Ing. Vladimíra Kubinová</p>
                <span className="text-[14px]">
                  {translate("sales-assitant")}
                </span>
              </div>
            </div>
            <div className="flex gap-[20px] items-center mb-[10px]">
              <EmailSign />
              <Link href={"mailto:info@oliviaresidenc.sk"}>
                <a className="font-bold text-[18px] leading-7">
                  info@oliviaresidence.sk
                </a>
              </Link>
            </div>
            {telNumber()}
            <p className="hidden xl:inline-block text-[#999999] w-full xl:max-w-[335px]">
              {translate("contact-and-meeting")}
            </p>
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
