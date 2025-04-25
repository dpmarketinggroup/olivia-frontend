import Head from "next/head";
import { Checkbox, Loader, Modal, Textarea, TextInput } from "@mantine/core";
import Equipment from "@components/common/Equipment";
import {
  ArrowDownNotFilledIcon,
  Bank,
  FloorPlan,
  RightArrow,
  Star,
  InfoIcon,
  OverButtonIcon,
} from "@components/icons";
import Link from "next/link";
import Image from "next/image";
import { CustomSwiper } from "@components/swiper";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "../../lib/store/useStore";
import { Button } from "@components/ui";
import { CarDescription } from "@components/common/Description/Description";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPaths } from "next";
import { useTranslation } from "next-i18next";
import MapFooter from "@components/common/MapFooter";
import 'react-phone-number-input/style.css';
import ArrowLink from "@components/icons/ArrowLink";
import OverButtonBigIcon from "@components/icons/OverButtonBig";

type Photo = {
  url: string;
  width: number;
  height: number;
};
const ApartmentDetail = () => {
  const { t: translate } = useTranslation("home");
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState<E164Number>();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const router = useRouter();
  const { asPath, locale, locales, push } = useRouter();
  const getApartment = useStore((state) => state.getApartment);
  const apartment = useStore((state) => state.selectedApartment);

  useEffect(() => {
    if (router.query.id) getApartment(Number(router.query.id));
  }, [router.query]);
  function infoBanner() {
    if (locale === "sk") {
      return (
        <div className="2xl:bottom-[-80px] xl:bottom-[-60px] lg:bottom-[-50px] md:bottom-[-40px] sm:bottom-[-30px] bottom-[-60px] w-full lg:h-[35px] sm:h-[20px] h-[30px] ">
          <div className="flex justify-center items-center border-2 border-black 2xl:gap-6 xl:gap-4 md:gap-3 gap-2 bg-[#476761] rounded-full h-full 2xl:w-[50%] xl:w-[50%] w-[100%] lg:w-[55%] md:w-[65%] sm:w-[75%] mx-auto text-white xl:text-[10pt] text-[7pt] md:text-[9pt] sm:text-[8pt] px-3">
            <div className="w-[12px] md:w-[15px] sm:w-[13px] items-center">
              <InfoIcon />
            </div>
            <div className="">{translate("info-banner")}</div>
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    if (apartment?.data?.attributes?.primarna_foto?.data?.attributes) {
      setSelectedPhoto(apartment.data.attributes.primarna_foto.data.attributes);
    }
  }, [apartment]);
  if (!apartment || !apartment.data)
    return <div className={"h-screen"}>No apartment found</div>;

  const {
    cena,
    dostupnost,
    kuchynska_miestnostv2_rozloha,
    kupelna_wc_rozloha,
    cislo_bytu,
    celkova_rozloha,
    balkon_rozloha,
    obyvacia_izba_rozloha,
    izba_rozloha,
    izba2_rozloha,
    izba3_rozloha,
    izba4_rozloha,
    predsien_rozloha,
    chodba_rozloha,
    chodba_rozloha2,
    pracovna_rozloha,
    spaci_kut_rozloha,
    kupelna_rozloha,
    wc_rozloha,
    terasa_rozloha,
    primarna_foto,
    dodatocna_foto1,
    dodatocna_foto2,
    podorys,
    kupelna_wc_1_rozloha,
    kupelna_wc_2_rozloha,
    prirucny_sklad,
    spajza,
    hala,
    spalna,
  } = apartment.data.attributes;





  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    if (!name || !surname || !email) return;

    try {
      setLoading(true);
      await axios.post("/api/enquiry", {
        body: JSON.stringify({
          type: "dopyt",
          name,
          surname,
          email,
          message,
          phone,
          apartment: `Byt č.${cislo_bytu}`,
        }),
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
    await router.push("/dakujeme");
  }

  function getAvailabilityTextColor(
    availability: "voľný" | "rezervovaný" | "predaný"
  ) {
    switch (availability) {
      case "predaný":
        return "text-[#EE4C36]";
      case "rezervovaný":
        return "text-[#E4B80B]";
      case "voľný":
        return "text-[#476761]";
    }
  }

  const translateAvailability = (availability: string) => {
    if (availability === "voľný") return translate("filter-available");
    else if (availability === "rezervovaný")
      return translate("filter-reserved");
    return translate("filter-sold");
  };

  return (
    <>
      <Head>
        <title>Detail bytu | Olivia Residence</title>
      </Head>
      <Modal
        sx={{
          ".mantine-Modal-modal": {
            width: "100%",
            maxWidth: "770px",
            paddingBottom: "80px",
          },
        }}
        opened={opened}
        onClose={() => setOpened(false)}
        centered
      >
        <h3
          className={
            "text-[32px] leading-[38px] text-center font-bold text-primary"
          }
        >
          {translate("form-interested-in-apart-n")} {cislo_bytu}
        </h3>
        <form
          onSubmit={handleSubmit}
          className={
            "flex flex-col gap-[15px] xl:w-full xl:max-w-[540px] xl:mx-auto font-pr"
          }
        >
          <div
            className={"flex flex-col xl:grid grid-cols-2 gap-[15px] mt-[40px]"}
          >
            <CustomInput
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
              name={"name"}
              placeholder={translate("form-first-name")}
            />
            <CustomInput
              value={surname}
              required={true}
              onChange={(e) => setSurname(e.target.value)}
              name={"surname"}
              placeholder={translate("form-second-name")}
            />
          </div>
          <CustomInput
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            placeholder={translate("form-email")}
          />
          <PhoneInput
            style={{
              height: "50px",
            }}
            international={false}
            countries={["SK"]}
            value={phone}
            defaultCountry={"SK"}
            onChange={(val) => setPhone(val)}
            placeholder={translate("form-number")}
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name={"message"}
            placeholder={translate("form-message") || ""}
            sx={{
              ".mantine-Textarea-input": {
                border: 0,
                backgroundColor: "rgba(0, 0, 0, 0.07)",
                borderRadius: 0,
                height: "145px",
              },
              ".mantine-Checkbox-input": {},
            }}
          />
          <Checkbox
            required={true}
            label={`${translate("form-check-1-1")} ${translate(
              "form-check-1-2"
            )}`}
            size={"md"}
            sx={{
              ".mantine-Checkbox-label": {
                color: "#999999",
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                lineHeight: "20px",
              },
              ".mantine-Checkbox-input": {
                backgroundColor: "transparent",
                border: "1.5px solid #0E3F3BCC",
                opacity: 0.8,
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
              },
              ".mantine-Checkbox-input:checked": {
                backgroundColor: "#476761",
                opacity: 1,
                border: 0,
              },
              ".mantine-Checkbox-icon": {
                color: "white",
              },
            }}
          />
          <Checkbox
            label={translate("form-check-2")}
            size={"md"}
            sx={{
              ".mantine-Checkbox-label": {
                color: "#999999",
                fontFamily: "Jost, sans-serif",
                fontSize: "14px",
                lineHeight: "20px",
              },
              ".mantine-Checkbox-input": {
                backgroundColor: "transparent",
                border: "1.5px solid #0E3F3BCC",
                opacity: 0.8,
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
              },
              ".mantine-Checkbox-input:checked": {
                backgroundColor: "#476761",
                opacity: 1,
                border: 0,
              },
              ".mantine-Checkbox-icon": {
                color: "white",
              },
            }}
          />
          <button
            disabled={loading}
            className={`py-[12px] bg-[#476761] hover:bg-primary text-white flex items-center justify-center gap-[10px]`}
          >
            {translate("form-button")}
            {loading && <Loader size={20} />}
          </button>
        </form>
      </Modal>
      <Modal
        className="gallery-modal"
        sx={{
          ".mantine-Modal-modal": {
            width: "1500px",
          },
        }}
        opened={opened2}
        onClose={() => setOpened2(false)}
        centered
      >
        <div className={"w-full h-[70vh] relative"}>
          <Image src={url} objectFit={"contain"} layout={"fill"} alt="image" />
        </div>
      </Modal>
      <div className="flex flex-col justify-center w-full xl:max-w-[1200px] mx-auto">
        <div className="my-[70px] md:my-[100px]">
          <div className="xl:mx-auto w-full xl:max-w-[1200px]">
            {/* <div className="flex flex-col gap-[30px] items-center mb-[50px]">
              <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
              <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">
                {translate("filter-step-3")}
              </h1>
              {infoBanner()}
            </div> */}

            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
              {/* <div
                className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute cursor-pointer"
                onClick={() =>
                  setIsFloorDropDownCLicked((prevState) => !prevState)
                }
              >
                <span className="drop-span font-bold text-[18px] leading-7 text-[#476761]">
                  {apartment.data.attributes.poschodie}
                  {translate("filter-drop-down-general")}
                </span> */}
              {/* <div
                  className={`${isFloorDropDownCLicked ? "dropdown-content" : "hidden"
                    }`}
                > */}
              {/* <div className=" flex flex-col px-[30px] text-[18px] leading-7 text-[#476761] font-medium">
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
                  </div> */}
              {/* </div> */}
              {/* <div className="ml-[10px] inline-block">
                  <ArrowDownNotFilledIcon />
                </div> */}
              {/* </div> */}
              {/* <div className="flex gap-[10px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[380px] xl:w-[450px] xl:justify-center">
                <Link href="/ponuka-apartmanov">
                  <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">
                    {translate("filter-step-1")}
                  </a>
                </Link>
                <RightArrow stroke="#00000033" />
                <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">
                  {translate("filter-step-2")}
                </span>
                <RightArrow stroke="#00000033" />
                <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">
                  {translate("filter-step-3")}
                </span>
              </div> */}
              {/*<div className="hidden xl:inline-block">*/}
              {/*    <Severka/>*/}
              {/*</div>*/}
            </div>
          </div>
        </div> <div className="block md:hidden bg-bgLight p-4">

          <div className=""><p className="text-primary md:w-full w-2/3 text-[16px]"> {translate("filter-heading")} <span className="text-black opacity-30">/</span> <span className="text-black">{translate("apartment-n")} {cislo_bytu}</span></p></div>
          <h3 className="my-[25px]  text-[36px] xl:text-[42px] leading-[40px] tracking-[-0.1px] ">
            {translate("apartment-n")} {cislo_bytu}
          </h3>
        </div>
        <div className="flex  gap-10 flex-col md:flex-row  justify-between ">

          <div className="flex flex-col gap-[20px]  mb-[70px] items-center xl:items-start justify-center w-full max-w-1/2 ">
            <div
              className={
                " mb-[-50px] xl:mb-0 cursor-pointer"
              }
            >
              {selectedPhoto && (
                <Image
                  onClick={() => {
                    setOpened2(true);
                    setUrl(selectedPhoto?.url);
                  }}
                  objectFit="cover"
                  width={selectedPhoto?.width}
                  height={selectedPhoto?.height}
                  alt="hero image"
                  src={selectedPhoto?.url}
                  loading={"eager"}
                />)}
            </div>
            <div className="flex flex-row w-[100%]  shrink-0 justify-between h-fit">
              {/* <div className="w-full h-[250px] xl:h-[200px] relative border border-black p-10 cursor-pointer">
                <Image
                  onClick={() => {
                    setOpened2(true);
                    setUrl(primarna_foto.data.attributes.url);
                  }}
                  objectFit="cover"
                  layout="fill"
                  alt="hero image"
                  src={primarna_foto.data.attributes.url}
                  loading={"eager"}
                />
              </div>
              <div className="w-full h-[250px] xl:h-[200px] relative opacity-40 cursor-pointer">
                <Image
                  onClick={() => {
                    setOpened2(true);
                    setUrl(dodatocna_foto1.data.attributes.url);
                  }}
                  objectFit="contain"
                  layout="fill"
                  alt="hero image"
                  src={dodatocna_foto1.data.attributes.url}
                  loading={"eager"}
                />
              </div>
              <div className="w-full h-[250px] xl:h-[200px] relative  opacity-40 cursor-pointer ">
                <Image
                  onClick={() => {
                    setOpened2(true);
                    setUrl(dodatocna_foto2.data.attributes.url);
                  }}
                  objectFit="contain"
                  layout="fill"
                  objectPosition={"center"}
                  alt="hero image"
                  src={dodatocna_foto2.data.attributes.url}
                  loading={"eager"}
                />
              </div> */}

              {[primarna_foto, dodatocna_foto1, dodatocna_foto2].map((foto, index) => {
                const src = foto.data.attributes;
                const isActive = selectedPhoto?.url === src?.url;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedPhoto(src)}
                    className={`w-full h-[250px] xl:h-[200px] relative cursor-pointer transition-all duration-300
              ${isActive ? "opacity-100 border border-black" : "opacity-40 border-none"}`}
                  >
                    <Image
                      objectFit="contain"
                      layout="fill"
                      alt="gallery image"
                      src={src?.url}
                      loading="eager"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-bgLight  py-4 px-2 lg:p-10 w-full max-w-1/2 relative h-fit">
            <div className="absolute top-0 right-0 z-[10]">
              <div className="flex flex-row">
                <div className="bg-white w-[30px] md:w-[50px] h-[30px] md:h-[50px]"></div>
                <div className="bg-white w-[30px] md:w-[50px] h-[30px] md:h-[50px]"></div>
              </div>
              <div className="flex flex-row">
                <div className="bg-transparent w-[30px] md:w-[50px] h-[30px] md:h-[50px]"></div>
                <div className="bg-white w-[30px] md:w-[50px] h-[30px] md:h-[50px]"></div>
              </div>
            </div>
            <div className="hidden md:block"><p className="text-primary md:w-full w-2/3 text-[16px]"> {translate("filter-heading")} <span className="text-black opacity-30">/</span> <span className="text-black">{translate("apartment-n")} {cislo_bytu}</span></p></div>
            <h3 className="hidden md:block mt-[25px]  text-[36px] xl:text-[42px] leading-[40px] tracking-[-0.1px] ">
              {translate("apartment-n")} {cislo_bytu}
            </h3>
            <div className="px-4 xl:mx-auto w-full mt-[40px] mb-[100px] xl:mb-0">
              <div className="flex justify-between mb-[15px]">
                <p className="text-[#0E3F3B4D] font-medium text-[16px] leading-6 tracking-[0.1px]">
                  {translate("floor")}
                </p>
                <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">
                  {apartment.data.attributes.poschodie}

                </span>
              </div>
              <div className="flex justify-between mb-[15px]">
                <p className="text-[#0E3F3B4D] font-medium text-[16px] leading-6 tracking-[0.1px]">
                  {translate("filter-apartment-num")}
                </p>
                <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">
                  {cislo_bytu}
                </span>
              </div>
              <div className="flex justify-between mb-[15px] items-center">
                <p className="font-medium text-[16px] leading-6 tracking-[0.1px] text-[#0E3F3B4D]">
                  {translate("price-without-sign")}
                </p>
                <span className="font-bold text-[16px] leading-6 tracking-[-0.1px]">
                  {/* {cena ? `${cena} €` : "-"} */}
                  {translate("top-apartments-premium-properties-6")}
                </span>
              </div>
              <div className="flex justify-between mb-[15px]">
                <p className="font-medium text-[16px] leading-6 tracking-[0.1px] text-[#0E3F3B4D]">
                  {translate("filter-availability")}
                </p>
                <span
                  className={`font-bold text-[16px] leading-6 tracking-[0.1px] ${getAvailabilityTextColor(
                    dostupnost
                  )}`}
                >
                  {translateAvailability(dostupnost)}
                </span>
              </div>
              {/* <div className="flex justify-between mb-[25px]">
                <p className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">
                  {translate("filter-title")}
                </p>
                <span className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">
                  {translate("filter-area")}
                </span>
              </div> */}
              <div className="flex justify-between mb-[15px] mt-[50px]">
                <p className=" text-[24px] leading-6 tracking-[0.1px]">
                  {translate("total-area")}
                </p>
                <span className="text-[24px]">{celkova_rozloha} m²</span>
              </div>

              {kuchynska_miestnostv2_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-kitchen")}
                  </p>
                  <span className={"font-bold"}>{kuchynska_miestnostv2_rozloha} m²</span>
                </div>
              )}
              {predsien_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-vestibule")}
                  </p>
                  <span className={"font-bold"}>{predsien_rozloha} m²</span>
                </div>
              )}
              {obyvacia_izba_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-livingroom")}
                  </p>
                  <span className={"font-bold"}>{obyvacia_izba_rozloha} m²</span>
                </div>
              )}
              {chodba_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-hallway")}
                  </p>
                  <span className={"font-bold"}>{chodba_rozloha} m²</span>
                </div>
              )}
              {chodba_rozloha2 && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-hallway")}
                  </p>
                  <span className={"font-bold"}>{chodba_rozloha2} m²</span>
                </div>
              )}
              {pracovna_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("office")}
                  </p>
                  <span className={"font-bold"}>{pracovna_rozloha} m²</span>
                </div>
              )}
              {spaci_kut_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("sleeping-area")}
                  </p>
                  <span className={"font-bold"}>{spaci_kut_rozloha} m²</span>
                </div>
              )}
              {izba4_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-wardrobe")}
                  </p>
                  <span className={"font-bold"}>{izba4_rozloha} m²</span>
                </div>
              )}
              {izba_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-room-n")}1
                  </p>
                  <span className={"font-bold"}>{izba_rozloha} m²</span>
                </div>
              )}
              {izba2_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-room-n")}2
                  </p>
                  <span className={"font-bold"}>{izba2_rozloha} m²</span>
                </div>
              )}
              {izba3_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-room-n")}3
                  </p>
                  <span className={"font-bold"}>{izba3_rozloha} m²</span>
                </div>
              )}
              {kupelna_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-bathroom")}
                  </p>
                  <span className={"font-bold"}>{kupelna_rozloha} m²</span>
                </div>
              )}
              {wc_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    WC
                  </p>
                  <span className={"font-bold"}>{wc_rozloha} m²</span>
                </div>
              )}
              {kupelna_wc_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-bathroom")} + WC
                  </p>
                  <span className={"font-bold"}>{kupelna_wc_rozloha} m²</span>
                </div>
              )}
              {kupelna_wc_1_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-bathroom")} + WC 1
                  </p>
                  <span className={"font-bold"}>{kupelna_wc_1_rozloha} m²</span>
                </div>
              )}
              {kupelna_wc_2_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-bathroom")} + WC 2
                  </p>
                  <span className={"font-bold"}>{kupelna_wc_2_rozloha} m²</span>
                </div>
              )}
              {hala && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-hall")}
                  </p>
                  <span className={"font-bold"}>{hala} m²</span>
                </div>
              )}
              {spajza && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-pantry")}
                  </p>
                  <span className={"font-bold"}>{spajza} m²</span>
                </div>
              )}
              {prirucny_sklad && (
                <div className="flex justify-between mb-[15px] ">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-handy-storage")}
                  </p>
                  <span className={"font-bold"}>{prirucny_sklad} m²</span>
                </div>
              )}
              {spalna && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-bedroom")}
                  </p>
                  <span className={"font-bold"}>{spalna} m²</span>
                </div>
              )}


              {terasa_rozloha && (
                <div className="flex justify-between mb-[15px]">
                  <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                    {translate("filter-terrace-alone")}
                  </p>
                  <span className={"font-bold"}>{terasa_rozloha} m²</span>
                </div>
              )}
              {balkon_rozloha && (
                <>
                  <div className="flex justify-between mb-[15px]">
                    <p className="font-medium text-[16px] text-[#0E3F3B4D] leading-6 tracking-[0.1px]">
                      {translate("filter-balcony-alone")}
                    </p>
                    <span className={"font-bold"}>{balkon_rozloha} m²</span>
                  </div>
                  <div className="flex justify-between mb-[70px]">
                    <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">
                      {translate("total-area")}{" "}
                      {balkon_rozloha && `+ ${translate("filter-balcony-alone")}`}{" "}
                      {terasa_rozloha && `+ ${translate("filter-terrace-alone")}`}
                    </p>
                    <span className="font-bold">
                      {(celkova_rozloha + balkon_rozloha + terasa_rozloha).toFixed(
                        2
                      )}{" "}
                      m²
                    </span>
                  </div>
                </>
              )}
              <button
                onClick={() => setOpened(true)}
                className={"drop-shadow-md relative bg-primary hover:bg-white hover:text-primary hover:scale-105 transform transition-transform duration-300 ease-in-out text-white flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-full md:w-fit group"}
              >
                {" "}
                <p className="text-[18px] leading-[18px]">
                  {translate("form-interested-in-apart-n")} {cislo_bytu}</p>
                <div className="absolute z-[10] top-0 right-0">
                  <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out ">

                    <OverButtonIcon fill="white" />
                  </div>
                  <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                    <OverButtonIcon fill="#087168" />
                  </div></div>
              </button>
            </div>
          </div>
        </div>
        <div className=" my-10 flex flex-col lg:flex-row gap-6 items-center mb-[85px] max-w-[1200px] px-4">
          <div className="flex flex-col justify-between gap-[15px] bg-bgLight relative p-8 border-b-[2px] border-yellow h-[264px] w-full">
            <div className="absolute top-0 right-0 z-[10]">
              <div className="flex flex-row">
                <div className="bg-white h-[28px] w-[28px]"></div>
                <div className="bg-white h-[28px] w-[28px]"></div>
              </div>
              <div className="flex flex-row">
                <div className="bg-transparent h-[28px] w-[28px]"></div>
                <div className="bg-white h-[28px] w-[28px]"></div>
              </div>
            </div>
            <Bank />
            <span className="text-[#0E3F3B] text-[28px] leading-6 tracking-[0.1px] ">
              {translate("financing")}
            </span>
            <div className="flex gap-[8px] items-center">
              <Link href="/o-projekte#financovanie" className="font-medium text-[20px] leading-5 text-green2">
                <p className="border-b-[1px] border-[#0E3F3B]">{translate("more")}</p>
              </Link>
              <ArrowLink fill="#0E3F3B" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[15px] bg-bgLight relative p-8 border-b-[2px] border-yellow h-[264px] w-full">
            <div className="absolute top-0 right-0 z-[10]">
              <div className="flex flex-row">
                <div className="bg-white h-[28px] w-[28px]"></div>
                <div className="bg-white h-[28px] w-[28px]"></div>
              </div>
              <div className="flex flex-row">
                <div className="bg-transparent h-[28px] w-[28px]"></div>
                <div className="bg-white h-[28px] w-[28px]"></div>
              </div>
            </div>
            <Star />
            <span className="text-[#0E3F3B] text-[28px] leading-6 tracking-[0.1px] ">
              {translate("superior-equipment")}
            </span>
            <div className="flex gap-[8px] items-center">
              <Link href={"/o-projekte#vybavenie"} className="font-medium text-[20px] leading-5 text-green2">
                <p className="border-b-[1px] border-[#0E3F3B]">{translate("more")}</p>
              </Link>
              <ArrowLink fill="#0E3F3B" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[15px] bg-bgLight relative p-8 border-b-[2px] border-yellow h-[264px] w-full">
            <div className="absolute top-0 right-0 z-[10]">
              <div className="flex flex-row">
                <div className="bg-white h-[28px] w-[28px]"></div>
                <div className="bg-white h-[28px] w-[28px]"></div>
              </div>
              <div className="flex flex-row">
                <div className="bg-transparent h-[28px] w-[28px]"></div>
                <div className="bg-white h-[28px] w-[28px]"></div>
              </div>
            </div>
            <FloorPlan />
            <span className="text-[#0E3F3B] text-[28px] leading-6 tracking-[0.1px] ">
              {translate("equipment-heading-3")}
            </span>
            <div className="flex gap-[8px] items-center">
              <Link href={podorys.data.attributes.url}
                target={"_blank"} className="font-medium text-[20px] leading-5 text-green2">
                <p className="border-b-[1px] border-[#0E3F3B]">{translate("equipment-link")}</p>
              </Link>
              <ArrowLink fill="#0E3F3B" />
            </div>
          </div>
        </div>

      </div >
      <div className="max-w-[1200px] mt-10 mb-[44rem] sm:mb-[47rem] md:my-10 w-full mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 h-[90vh] px-4 md:px-8">
          <div className="flex flex-col ">
            <div className="w-full relative">
              <div className="absolute top-0 right-0 z-[10]">
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-transparent"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
              </div>

              <Image
                src="/img/parking.jpeg"
                alt="parking"
                width={2000}
                height={1333}
              />
            </div>
            <div className="bg-primary relative  p-8 mt-[-7px]">
              <div className="absolute top-0 right-[-10px]">
                <OverButtonBigIcon />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-[36px] md:text-[42px]  leading-[38px] md:leading-[44px]">{translate("description-parking-heading")}</h2>
                <p className="text-white text-[16px] mt-10 ">{translate("description-parking-text")}</p>
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
              <div className="flex flex-col gap-4">
                <h2 className="text-white text-[36px] md:text-[42px]  leading-[38px] md:leading-[44px]">{translate("description-storage-heading")}</h2>
                <p className="text-white text-[16px]  mt-10 ">{translate("description-storage-text")}</p>
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
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-transparent"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                </div>
                <div className="flex flex-row">
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
                  <div className="w-[40px] md:w-[100px] h-[40px] md:h-[100px] bg-white"></div>
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
      <CustomSwiper />
      <div id="vybavenie" className="bg-yellow overflow-hidden md:overflow-visible relative p-6 md:p-10 w-full max-w-[1200px] mx-auto my-[200px] ">
        <div className="absolute top-0 right-[-10px]">
          <OverButtonBigIcon height="259" width="259" />
        </div>
        <div className="hidden md:flex lg:hidden absolute top-[-20%] right-10 md:right-20 z-[6]">
          <Image
            src="/img/laptop.png"
            alt="alternativny text"
            width={422.5}
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
        <div className="flex flex-col md:flex-row gap-2">
          <Link href="/Karta vybavenia OLIVIA Residence.pdf">
            <button
              className={
                "relative text-[18px] hover:text-white hover:bg-[#0E3F3B] text-[#0E3F3B] bg-white font-medium mt-[30px] flex flex-row justify-center items-center py-4 px-6 z-[10]"
              }
            >
              {translate("equipment-house")}

            </button>
          </Link>
          <Link href="/OLIVIA Residence_štandard projektu.pdf">
            <button
              className={
                "relative text-[18px] hover:text-white hover:bg-[#0E3F3B] text-[#0E3F3B] bg-white font-medium mt-[30px] flex flex-row justify-center items-center py-4 px-6 z-[10]"
              }
            >
              {translate("equipment-apartman")}

            </button>
          </Link></div>
      </div>
      <MapFooter />
    </>
  );
};

interface CustomInputProps {
  placeholder: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  withAsterisk?: boolean;
  required?: boolean;
}

export const CustomInput = (props: CustomInputProps) => {
  return (
    <TextInput
      sx={{
        ".mantine-TextInput-input": {
          border: 0,
          backgroundColor: "rgba(0, 0, 0, 0.07)",
          borderRadius: 0,
          height: "50px",
          paddingLeft: "15px",
        },
      }}
      {...props}
    />
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
  const { data } = await axios.get(
    "https://floating-scrubland-57360.herokuapp.com/api/byts?pagination[pageSize]=200"
  );

  const sk = data.data.map((val: any) => {
    return {
      params: { id: val.id.toString() },
      locale: "sk",
    };
  });

  const en = data.data.map((val: any) => {
    return {
      params: { id: val.id.toString() },
      locale: "en",
    };
  });
  // const de = data.data.map((val: any) => {
  //   return {
  //     params: { id: val.id.toString() },
  //     locale: "de",
  //   };
  // });
  const paths = [...en, ...sk];

  return {
    paths,
    fallback: true,
  };
};

export default ApartmentDetail;
