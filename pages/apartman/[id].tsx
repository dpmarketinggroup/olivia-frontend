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
          <Image src={url} objectFit={"contain"} layout={"fill"} />
        </div>
      </Modal>
      <div className="flex flex-col justify-center w-full xl:max-w-[1200px] mx-auto">
        <div className="my-[100px]">
          <div className="xl:mx-auto w-full xl:max-w-[1200px]">
            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
              <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
              <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">
                {translate("filter-step-3")}
              </h1>
              {infoBanner()}
            </div>

            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
              <div
                className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute cursor-pointer"
                onClick={() =>
                  setIsFloorDropDownCLicked((prevState) => !prevState)
                }
              >
                <span className="drop-span font-bold text-[18px] leading-7 text-[#476761]">
                  {apartment.data.attributes.poschodie}
                  {translate("filter-drop-down-general")}
                </span>
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
              </div>
              <div className="flex gap-[10px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[380px] xl:w-[450px] xl:justify-center">
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
              </div>
              {/*<div className="hidden xl:inline-block">*/}
              {/*    <Severka/>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-[25px] font-bold text-[20px] xl:text-[24px] leading-[32px] tracking-[-0.1px] text-center xl:text-left">
            {translate("apartment-n")} {cislo_bytu}
          </h3>
          <div className="flex flex-col xl:flex-row gap-[20px] xl:gap-[40px] mb-[70px] items-center xl:items-start justify-center">
            <div
              className={
                "border border-b-0 xl:border-b-[1px] border-black mb-[-50px] xl:mb-0"
              }
            >
              <Image
                onClick={() => {
                  setOpened2(true);
                  setUrl(primarna_foto.data.attributes.url);
                }}
                objectFit="cover"
                width={primarna_foto.data.attributes.width}
                height={primarna_foto.data.attributes.height}
                alt="hero image"
                src={primarna_foto.data.attributes.url}
                loading={"eager"}
              />
            </div>
            <div className="flex flex-col w-[100%] xl:w-1/3 shrink-0 justify-between h-[510px]">
              <div className="w-full h-[300px] xl:h-[250px] relative border border-black">
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
              <div className="w-full h-[300px] xl:h-[250px] relative border border-t-0 xl:border-t-[1px] border-black">
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-[20px] xl:gap-[75px] items-center mb-[85px]">
          <div className="flex gap-[15px] items-center">
            <Bank />
            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">
              {translate("financing")}
            </span>
            <div className="flex gap-[8px] items-center">
              <Link href="/o-projekte#financovanie">
                <a className="font-medium text-[14px] leading-5 text-green2">
                  {translate("more")}
                </a>
              </Link>
              <RightArrow stroke="#476761" />
            </div>
          </div>
          <div className="flex gap-[15px] items-center">
            <Star />
            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">
              {translate("superior-equipment")}
            </span>
            <div className="flex gap-[8px] items-center">
              <Link href={"/o-projekte#vybavenie"}>
                <a className="font-medium text-[14px] leading-5 text-green2">
                  {translate("more")}
                </a>
              </Link>
              <RightArrow stroke="#476761" />
            </div>
          </div>
        </div>
        <div className="px-4 xl:mx-auto w-full mb-[100px] xl:mb-0">
          <div className="flex justify-between mb-[25px]">
            <p className="text-[#676766] font-medium text-[16px] leading-6 tracking-[0.1px]">
              {translate("filter-apartment-num")}
            </p>
            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">
              {cislo_bytu}
            </span>
          </div>
          <div className="flex justify-between mb-[25px] items-center">
            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
              {translate("price-without-sign")}
            </p>
            <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px]">
              {cena ? `${cena} €` : "-"}
            </span>
          </div>
          <div className="flex justify-between mb-[70px]">
            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
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
          <div className="flex justify-between mb-[25px]">
            <p className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">
              {translate("filter-title")}
            </p>
            <span className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">
              {translate("filter-area")}
            </span>
          </div>
          {kuchynska_miestnostv2_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-kitchen")}
              </p>
              <span>{kuchynska_miestnostv2_rozloha} m²</span>
            </div>
          )}
          {predsien_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-vestibule")}
              </p>
              <span>{predsien_rozloha} m²</span>
            </div>
          )}
          {obyvacia_izba_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-livingroom")}
              </p>
              <span>{obyvacia_izba_rozloha} m²</span>
            </div>
          )}
          {chodba_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-hallway")}
              </p>
              <span>{chodba_rozloha} m²</span>
            </div>
          )}
          {chodba_rozloha2 && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-hallway")}
              </p>
              <span>{chodba_rozloha2} m²</span>
            </div>
          )}
          {pracovna_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("office")}
              </p>
              <span>{pracovna_rozloha} m²</span>
            </div>
          )}
          {spaci_kut_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("sleeping-area")}
              </p>
              <span>{spaci_kut_rozloha} m²</span>
            </div>
          )}
          {izba4_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-wardrobe")}
              </p>
              <span>{izba4_rozloha} m²</span>
            </div>
          )}
          {izba_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-room-n")}1
              </p>
              <span>{izba_rozloha} m²</span>
            </div>
          )}
          {izba2_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-room-n")}2
              </p>
              <span>{izba2_rozloha} m²</span>
            </div>
          )}
          {izba3_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-room-n")}3
              </p>
              <span>{izba3_rozloha} m²</span>
            </div>
          )}
          {kupelna_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-bathroom")}
              </p>
              <span>{kupelna_rozloha} m²</span>
            </div>
          )}
          {wc_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                WC
              </p>
              <span>{wc_rozloha} m²</span>
            </div>
          )}
          {kupelna_wc_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-bathroom")} + WC
              </p>
              <span>{kupelna_wc_rozloha} m²</span>
            </div>
          )}
          {kupelna_wc_1_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-bathroom")} + WC 1
              </p>
              <span>{kupelna_wc_1_rozloha} m²</span>
            </div>
          )}
          {kupelna_wc_2_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-bathroom")} + WC 2
              </p>
              <span>{kupelna_wc_2_rozloha} m²</span>
            </div>
          )}
          {hala && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-hall")}
              </p>
              <span>{hala} m²</span>
            </div>
          )}
          {spajza && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-pantry")}
              </p>
              <span>{spajza} m²</span>
            </div>
          )}
          {prirucny_sklad && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-handy-storage")}
              </p>
              <span>{prirucny_sklad} m²</span>
            </div>
          )}
          {spalna && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-bedroom")}
              </p>
              <span>{spalna} m²</span>
            </div>
          )}

          <div className="flex justify-between mb-[25px]">
            <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">
              {translate("total-area")}
            </p>
            <span className="font-bold">{celkova_rozloha} m²</span>
          </div>
          {terasa_rozloha && (
            <div className="flex justify-between mb-[25px]">
              <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                {translate("filter-terrace-alone")}
              </p>
              <span>{terasa_rozloha} m²</span>
            </div>
          )}
          {balkon_rozloha && (
            <>
              <div className="flex justify-between mb-[25px]">
                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">
                  {translate("filter-balcony-alone")}
                </p>
                <span>{balkon_rozloha} m²</span>
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
            className={"w-full h-[50px] bg-primary text-white"}
          >
            {" "}
            {translate("form-interested-in-apart-n")} {cislo_bytu}
          </button>
        </div>
        <div className="flex flex-col gap-[30px] items-center mb-[120px] xl:mb-[190px] xl:mt-[160px]">
          <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]" />
          <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] w-[250px] xl:w-auto text-center xl:text-left">
            {translate("equipment-heading-3")}
          </h1>
          <Button
            variant={"filled"}
            href={podorys.data.attributes.url}
            target={"_blank"}
          >
            {translate("equipment-download")}
          </Button>
        </div>
        <CarDescription />
        <CustomSwiper />
      </div >
      <div className="xl:grid xl:max-w-[1200px] grid-cols-2 mx-auto">
        <Equipment
          title={translate("equipment-heading")}
          href="/standart.pdf"
        />
        <Equipment title={translate("equipment-heading-4")} href="/karta.pdf" />
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
  const de = data.data.map((val: any) => {
    return {
      params: { id: val.id.toString() },
      locale: "de",
    };
  });
  const paths = [...de, ...en, ...sk];

  return {
    paths,
    fallback: true,
  };
};

export default ApartmentDetail;
