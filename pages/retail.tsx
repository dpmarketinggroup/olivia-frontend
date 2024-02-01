import { Hero, Negotiation, MapFooter } from "@components/common";
import { Flat, FloorPlan, Phone, EmailSign, FlatBold } from "@components/icons";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  RectangleDarkIcon,
  RectangleLightIcon,
  RectangleMediumIcon,
} from "@components/icons";
import { useTranslation } from "next-i18next";

const Retail = () => {
  const { t: translate } = useTranslation("home");
  return (
    <>
      <Head>
        <title>Retail | Olivia Residence</title>
      </Head>
      <div>
        <div className="flex justify-center  mt-[60px]">
          <div className="h-[660px] w-full xl:max-w-[1920px] flex justify-center relative">
            <div className="h-full w-full absolute -z-10">
              <Image
                objectFit="cover"
                layout="fill"
                alt="hero image"
                src={`/img/retailHero.jpg`}
                loading={"eager"}
              />
            </div>
            <div className="relative xl:w-full xl:max-w-[1400px] xl:mx-auto mx-4  mb-[20px] flex flex-col justify-center items-center ">
              <div className="mb-[20px] flex justify-center xl:block"><Flat /></div>
              <p className="text-[18px] leading-7 text-white mb-[10px] text-center xl:text-start">
                {translate("retail-section-2heading-1")}
              </p>
              <h1 className="font-bold sm:max-w-[55%] max-w-[90%] md:text-[56px] sm:text-[32px] text-[26px] md:leading-[60px] leading-[34px] tracking-[-1px] text-white mb-[20px] text-center ">
                {translate("retail-section-2heading-2")}
              </h1>

              <Link href="/">
                <button className="hover:bg-primary bg-[#89A6A2] w-full w-[110px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                  {translate("button-home")}             </button>
              </Link>
              <div
                className="hidden
                  absolute -bottom-[224px] -left-[260px]"
              >
                <div className={"flex"}>
                  <RectangleDarkIcon />
                  <RectangleMediumIcon />
                </div>
                <div>
                  <RectangleLightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="mb-[120px] xl:mb-[165px] w-full">
            <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[60px]">
              <div className="flex flex-col xl:flex-row items-center xl:items-start gap-[50px] xl:max-w-[700px] bg-[#F5F5F5] py-[90px] px-4 xl:px-[135px] mt-[-60px] xl:mt-0 ml-0 xl:ml-auto">
                <div
                  className={
                    "flex xl:block flex-col items-center xl:max-w-[190px] "
                  }
                >
                  <FlatBold />
                  <h4 className="font-medium text-[18px] xl:text-[16px] leading-6 tracking-[0.1px] mt-[22px] mb-[8px]">
                    {translate("retail-section-heading-1")}
                  </h4>
                  <p className="text-[16px] xl:text-[14px] leading-5 text-[#676766] text-center xl:text-start">
                    {translate("retail-section-description-1-first-part")}{" "}
                    <strong>
                      {translate("retail-section-description-1-second-part")}
                    </strong>
                    {translate("retail-section-description-1-third-part")}
                  </p>
                </div>
                <div
                  className={
                    "flex xl:block flex-col items-center xl:max-w-[190px]"
                  }
                >
                  <FloorPlan />
                  <h4 className="font-medium text-[18px] xl:text-[16px] leading-6 tracking-[0.1px]  mt-[22px] mb-[8px]">
                    {translate("retail-section-heading-2")}
                  </h4>
                  <p className="text-[16px] xl:text-[14px] leading-5 text-[#676766] text-center xl:text-start">
                    {translate("retail-section-description-2-first-part")}
                    <strong>
                      {" "}
                      {translate("retail-section-description-2-second-part")}
                    </strong>{" "}
                    {translate("retail-section-description-2-third-part")}
                  </p>
                </div>
              </div>
              <div className="mx-auto xl:ml-0">
                <div className="flex gap-[20px] items-center mb-[20px]">
                  <div>
                    <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">
                      Ing. Vladimíra Kubinová
                    </p>
                    <span className="text-[14px] leading-5">
                      {translate("sales-assitant")}
                    </span>
                  </div>
                </div>
                <div className="flex gap-[20px] items-center xl:mb-[23px]">
                  <EmailSign />
                  <Link href={"mailto:info@oliviaresidence.sk"}>
                    <a className="font-bold text-[18px] leading-7">
                      info@oliviaresidence.sk
                    </a>
                  </Link>
                </div>
                <p className="hidden xl:block font-medium text-[16px] leading-6 tracking-[0.1px] text-[#676766] w-[335px] mb-[23px]">
                  {translate("retail-text")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Negotiation
          title={translate("negotiation-heading")}
          subtitle="Rožňavská 1A, Bratislava"
          retail={true}
        />
        <MapFooter /> */}
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

export default Retail;
