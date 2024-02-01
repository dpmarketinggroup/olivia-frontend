import { useRouter } from "next/router";
import Head from "next/head";
import {
  ArrowDownNotFilledIcon,
  FloorPlan,
  RightArrow,
  Severka,
  SeverkaN,
  InfoIcon,
} from "@components/icons";
import Link from "next/link";
import { MapFooter, Info } from "@components/common";
import { useStore } from "../../lib/store/useStore";
import { Button } from "@components/ui";
import {
  Floor10,
  Floor11,
  Floor12,
  Floor13,
  Floor14,
  Floor3,
  Floor4,
  Floor5,
  Floor6,
  Floor7,
  Floor8,
  Floor9,
} from "@components/floors";
import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";
import { useTranslation } from "next-i18next";

const FloorDetail = () => {
  const { t: translate } = useTranslation("home");
  const router = useRouter();
  const { asPath, locale, locales, push } = useRouter();
  const fetch = useStore((state) => state.setSelectedApartment);
  const apartment = useStore((state) => state.selectedApartment);
  console.log(apartment);

  const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false);
  function infoBanner() {
    if (locale === "sk") {
      return (
        <div className="2xl:bottom-[-80px] xl:bottom-[-60px] lg:bottom-[-50px] md:bottom-[-40px] sm:bottom-[-30px] bottom-[-60px] w-full lg:h-[35px] sm:h-[20px] h-[30px] ">
          <div className="flex justify-center items-center border-2 border-black 2xl:gap-6 xl:gap-4 md:gap-3 gap-2 bg-[#476761] rounded-full h-full 2xl:w-[50%] xl:w-[50%] w-[100%] lg:w-[55%] md:w-[65%] sm:w-[75%] mx-auto text-white text-[7pt] md:text-[9pt] sm:text-[8pt] px-3">
            <div className="w-[13px] md:w-[15px] sm:w-[13px] items-center">
              <InfoIcon />
            </div>
            <div className="">{translate("info-banner")}</div>
          </div>
        </div>
      );
    }
  }
  function currentApartmentRenderSvg() {
    switch (router.query.id) {
      case "3": {
        return <Floor3 />;
      }
      case "4": {
        return <Floor4 />;
      }
      case "5": {
        return <Floor5 />;
      }
      case "6": {
        return <Floor6 />;
      }
      case "7": {
        return <Floor7 />;
      }
      case "8": {
        return <Floor8 />;
      }
      case "9": {
        return <Floor9 />;
      }
      case "10": {
        return <Floor10 />;
      }
      case "11": {
        return <Floor11 />;
      }
      case "12": {
        return <Floor12 />;
      }
      case "13": {
        return <Floor13 />;
      }
      case "14": {
        return <Floor14 />;
      }
      default: {
        return <Floor10 />;
      }
    }
  }

  function renderBalcony() {
    const { balkon_rozloha, terasa_rozloha } = apartment[0].attributes || null;

    if (balkon_rozloha && terasa_rozloha) {
      return (
        <>
          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("filter-terrace")}
          </span>
          <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
            {terasa_rozloha} m²
          </span>
          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("filter-balcony")}
          </span>
          <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
            {balkon_rozloha} m²
          </span>
        </>
      );
    }
    if (balkon_rozloha || terasa_rozloha) {
      return (
        <>
          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("filter-balcony-terrace")}
          </span>
          <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
            {balkon_rozloha || terasa_rozloha} m²
          </span>
        </>
      );
    }
  }

  function getApartmentNumber(pocet_izieb: string): number {
    switch (pocet_izieb) {
      case "jedno-izbový":
        return 1;
      case "jeden a pol-izbový":
        return 1.5;
      case "dvoj-izbový":
        return 2;
      case "dva a pol-izbový":
        return 2.5;
      case "troj-izbový":
        return 3;
      case "štvor-izbový":
        return 4;
      case "štyri a pol-izbový":
        return 4.5;
    }
    return 0;
  }
  function getAvailabilityBgColor(
    availability: "voľný" | "rezervovaný" | "predaný"
  ) {
    switch (availability) {
      case "voľný":
        return "bg-[#476761]";
      case "rezervovaný":
        return "bg-[#E4B80B]";
      case "predaný":
        return "bg-[#EE4C36]";
    }
  }

  const availableTranslate = (available: string) => {
    if (available === "voľný") return translate("filter-available");
    else if (available === "rezervovaný") return translate("filter-reserved");
    return translate("filter-sold");
  };
  function translateSeverka() {
    if (locale === "sk") {
      return <Severka />;
    } else if (locale === "en") {
      return <SeverkaN />;
    } else if (locale === "de") {
      return <SeverkaN />;
    }
  }
  function renderDetail() {
    if (!apartment || !apartment.length) {
      return (
        <p className="pb-[420px] w-[300px] mx-auto text-[18px] font-bold text-center">
          {translate("interactive-map")}
        </p>
      );
    }
    const {
      cena,
      cislo_bytu,
      dostupnost,
      celkova_rozloha,
      pocet_izieb,
      balkon_rozloha,
      terasa_rozloha,
    } = apartment[0].attributes || null;
    const { id } = apartment[0];

    return (
      <div className={"flex flex-col"}>
        <div className="grid grid-cols-2 gap-y-[30px] mb-[40px]">
          {pocet_izieb ? (
            <>
              <span className="pl-[70px] font-bold text-[16px] leading-6 tracking-[0.1px]">
                {getApartmentNumber(pocet_izieb)}
                {translate("apartment-swiper-item-general")}
              </span>
            </>
          ) : (
            <span></span>
          )}
          <span className="pr-[70px] font-bold text-[16px] leading-6 tracking-[0.1px] text-right">
            {translate("number")}
            {cislo_bytu}
          </span>
          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("price-VAT")}
          </span>
          <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
            {cena ? `${cena} €` : "-"}
          </span>
          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("filter-availability")}
          </span>
          <div className="pr-[70px] text-[14px] font-medium leading-5 text-white ml-[75px] w-[53px]">
            <span
              className={`px-[10px] py-[5px] ${getAvailabilityBgColor(
                dostupnost
              )}`}
            >
              {availableTranslate(dostupnost)}
            </span>
          </div>
          {pocet_izieb && (
            <>
              <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
                {translate("filter-num-of-rooms")}
              </span>
              <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
                {getApartmentNumber(pocet_izieb)}
              </span>
            </>
          )}

          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("filter-size")}
          </span>
          <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
            {celkova_rozloha} m²
          </span>
          {renderBalcony()}
          <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">
            {translate("total-area")}
          </span>
          <span className="pr-[70px] text-right font-bold text-[14px] leading-5">
            {(celkova_rozloha + balkon_rozloha + terasa_rozloha).toFixed(2)} m²
          </span>
        </div>
        <Button
          className={"mx-auto"}
          variant={"filled"}
          href={`/apartman/${id}`}
        >
          {translate("filter-step-3")}
        </Button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Výber apartmánu na poschodí | Olivia Residence</title>
      </Head>
      <div className="mx-auto mt-[60px]">
        <div>
          <div className="my-[100px]">
            <div className="xl:mx-auto w-full xl:max-w-[1200px]">
              <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
                <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">
                  {translate("apartment-on-floor")}
                </h1>
                {infoBanner()}
              </div>

              <div className="relative flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
                <div
                  className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute cursor-pointer self-start xl:self-auto mx-4"
                  onClick={() =>
                    setIsFloorDropDownCLicked((prevState) => !prevState)
                  }
                >
                  <span className="drop-span font-bold text-[18px] leading-7 text-[#476761]">
                    {router.query.id}
                    {translate("filter-drop-down-general")}
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
                </div>
                <div className="flex gap-[10px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[130px] xl:w-[450px] xl:justify-center">
                  <Link href="/ponuka-apartmanov">
                    <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">
                      {translate("filter-step-1")}
                    </a>
                  </Link>
                  <RightArrow stroke="#00000033" />
                  <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">
                    {translate("filter-step-2")}
                  </span>
                  <RightArrow stroke="#476761" />
                  <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">
                    {translate("filter-step-3")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-[300px] xl:static inline-block rotate-[-110deg]">
                  {translateSeverka()}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row flex-col-reverse xl:justify-between items-center xl:items-start xl:max-w-[1200px] xl:mx-auto">
            <div className="bg-[#F5F5F5] max-h-[620px] w-full xl:w-[400px]">
              <div className="py-[60px]">{renderDetail()}</div>
            </div>
            <div className="flex items-center w-full max-w-[650px] xl:w-full xl:max-w-[690px] h-[365px] xl:h-[555px] xl:mb-[125px]">
              {currentApartmentRenderSvg()}
            </div>
          </div>
        </div>
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
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const en = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((id) => {
    return {
      params: { id: id.toString() },
      locale: "en",
    };
  });
  const sk = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((id) => {
    return {
      params: { id: id.toString() },
      locale: "sk",
    };
  });
  const de = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((id) => {
    return {
      params: { id: id.toString() },
      locale: "de",
    };
  });
  const paths = [...de, ...en, ...sk];

  return {
    paths,
    fallback: true,
  };
};

export default FloorDetail;
