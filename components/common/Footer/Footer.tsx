import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import Link from "next/link";
import LogoSecondary from "../../icons/LogoSecondary";
import { Loader, TextInput } from "@mantine/core";
import PaperPlaneIcon from "../../icons/PaperPlane";
import RectangleFooter from "../../icons/RectangleFooter";
import BrandlyLogoIcon from "../../icons/BrandlyLogo";
import DpLogoIcon from "../../icons/dpLogo";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import FacebookIcon from "@components/icons/Facebook";
import InstagramIcon from "@components/icons/Instagram";
import YoutubeIcon from "@components/icons/Youtube";
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Logo } from "@components/icons";
import ArrowLink from "@components/icons/ArrowLink";
import OverButtonIcon from "@components/icons/OverButton";
interface FooterProps {
  toBottom?: boolean;
}

const Footer: FunctionComponent<FooterProps> = ({ toBottom = false }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { t: translate } = useTranslation("home");
  const { asPath, locale, locales, push } = useRouter();
  function telNumber() {
    if (locale === "sk") {
      return (
        <Link legacyBehavior href={"tel:+421901923324"}>

          <a className="text-[#087168] font-normal hover:opacity-70 flex flex-row justify-center items-center gap-2"> +421 901 923 324<ArrowLink /></a>
        </Link>
      );
    }
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!email) return;
    try {
      setLoading(true);
      await axios.post("/api/newsletter", {
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.error(err);
    }
    setEmail("");
    setLoading(false);
    await router.push("/dakujeme-za-email");
  }

  return (
    <div
      className={`${toBottom && "xl:absolute bottom-0 left-0 right-0"
        } w-full green`}
    >
      <div>
        <div className="relative bg-bgLight w-full px-[1rem] xl:px-[165px] flex flex-col gap-[10px] py-[45px]">
          <div className="absolute z-[10] top-0 right-0">
            <div className="flex flex-row">
              <div className="bg-white h-[30px] md:h-[58px] w-[30px] md:w-[58px] "></div>
              <div className="bg-white h-[30px] md:h-[58px] w-[30px] md:w-[58px] "></div>
            </div>
            <div className="flex flex-row">
              <div className="bg-transparent h-[30px] md:h-[58px] w-[30px] md:w-[58px] "></div>
              <div className="bg-white h-[30px] md:h-[58px] w-[30px] md:w-[58px] "></div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4  items-center xl:items-start justify-between mx-auto xl:max-w-[1200px] w-full">
            <div className="flex flex-col justify-center gap-[16px] w-full">
              <Logo width={207.81} height={50} />
              <p className="text-[14px] leading-[20px] text-black  w-full mt-[16px] ">
                {translate("footer-description")}
              </p>
              <form className={"w-full flex flex-row"} onSubmit={handleSubmit}>
                <TextInput
                  type={"email"}
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    width: "100%",
                    ".mantine-TextInput-input": {
                      color: "white",
                      backgroundColor: "rgb(255, 255, 255)",
                      border: 0,
                      height: "62px",
                      "&::placeholder": {
                        color: "rgb(93, 87, 87)",
                      },
                    },
                  }}
                  className="xl:w-[350px] text-[16px] leading-6"
                  placeholder="Email"

                  radius="xs"
                />
                <button disabled={loading} type={"submit"} className="drop-shadow-md relative hover:bg-white bg-primary  hover:text-primary text-white hidden sm:flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] group">
                  {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                  <p className="text-[18px] leading-[18px]">{translate("form-button")}</p>
                  <div className="group-hover:hidden">

                    <PaperPlaneIcon fill="#ffffff" />
                  </div>
                  <div className="group-hover:block hidden">

                    <PaperPlaneIcon fill="#087168" />
                  </div>
                  <div className="absolute z-[10] top-0 right-0">
                    <div className="group-hover:block hidden">
                      <OverButtonIcon fill="#087168" />
                    </div>

                    <div className="group-hover:hidden">
                      <OverButtonIcon />
                    </div>
                  </div>
                </button>
                <button disabled={loading} type={"submit"} className="sm:hidden relative hover:bg-white bg-[#FFA100] text-white flex flex-row justify-center items-center gap-2 px-[24px] py-[24px] text-[18px] group">
                  {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                  <div className="group-hover:hidden">
                    <PaperPlaneIcon fill="#000000" />
                  </div>
                  <div className="group-hover:block hidden">
                    <PaperPlaneIcon fill="#FFA100" />
                  </div>
                  <div className="absolute z-[10] top-0 right-0">
                    <div className="group-hover:block hidden">
                      <OverButtonIcon fill="#FFA100" />
                    </div>

                    <div className="group-hover:hidden">
                      <OverButtonIcon />
                    </div></div>
                </button>
              </form>
              <p className="text-[12px] opacity-60 text-black  pb-[25px]">
                {translate("footer-click-text-first-part")}
                <Link legacyBehavior href="/gdpr">
                  <a className="underline underline-offset-[3px]">
                    {translate("footer-click-text-second-part")}
                  </a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-[12px] md:flex-row xl:gap-[15px] justify-between xl:justify-end xl:pt-[40px] pb-[20px] xl:pb-0 w-full xl:text-left">
              <div className="hidden lg:flex flex-col gap-[15px] font-thin text-[14px] xl:text-[14px] leading-5 xl:leading-6 text-black">
                <p className="text-black opacity-60 font-medium">{translate("footer-navigation")}</p>

                <Link legacyBehavior href="/ponuka-apartmanov">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-apartments")}
                  </a>
                </Link>
                {/* <Link href="/action-bonus">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-action")}
                  </a>
                </Link> */}
                <Link legacyBehavior href="/stresne-apartmany">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-top-apartments")}
                  </a>
                </Link>
                <Link legacyBehavior href="/o-projekte">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-about")}
                  </a>
                </Link>
                <Link legacyBehavior href="/lokalita">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-location")}
                  </a>
                </Link>

                {/*<Link href="/novinky">*/}
                {/*    <a>Novinky</a>*/}
                {/*</Link>*/}
                <Link legacyBehavior href="/retail">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-retail")}
                  </a>
                </Link>
                <Link legacyBehavior href="/kontakt">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-contact")}
                  </a>
                </Link>
              </div>

              <div className=" flex flex-col gap-[15px] items-start  font-medium text-[14px] xl:text-[14px] leading-5 xl:leading-6 text-black ">
                <h5 className="opacity-60">{translate("footer-sale-place")}</h5>
                <h5 className="font-normal opacity-60">Rožňavská 1B</h5>
                <h5 className="font-normal opacity-60">831 04 Bratislava</h5>
                <Link legacyBehavior href={"mailto:info@oliviaresidence.sk"}>
                  <a className="text-[#087168] font-normal hover:opacity-70 flex flex-row justify-center items-center gap-2">info@oliviaresidence.sk <ArrowLink /></a>
                </Link>
                {telNumber()}


              </div>
              <div className=" flex flex-col gap-[12px] items-start text-center xl:text-left font-medium text-[14px] xl:text-[14px] leading-5 xl:leading-6 text-black ">
                <p className="text-black opacity-60 font-medium">{translate("footer-social-media")}</p>
                <div className={"flex gap-[25px] items-center"}>
                  <Link href={"https://www.instagram.com/olivia.residence/"} >
                    <div className="cursor-pointer h-[36px] w-[36px] rounded-full bg-white flex justify-center items-center drop-shadow-md">
                      <InstagramIcon width="20" height="20" />
                    </div>
                  </Link>
                  <Link href={"https://www.facebook.com/olivia.residence.ba"}>
                    <div className="cursor-pointer h-[36px] w-[36px] rounded-full bg-white flex justify-center items-center drop-shadow-md">
                      <FacebookIcon width="20" height="20" />
                    </div>
                  </Link>
                  <Link href={"https://www.youtube.com/@oliviaresidence6315"}>
                    <div className="cursor-pointer h-[36px] w-[36px] rounded-full bg-white flex justify-center items-center drop-shadow-md">
                      <YoutubeIcon width="20" height="20" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-row justify-between items-center max-w-[1200px] w-full mx-auto ">
            <p className="text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">
              {translate("footer-all-rights")}
            </p>
            <Link legacyBehavior href="/gdpr">
              <a className="pr-4 text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">
                {translate("footer-protection")}
              </a>
            </Link>
          </div>
          <div className=" ] flex flex-col xl:flex-row  px-6 py-4 xl:gap-[50px] xl:gap-[130px] bg-[#000000] justify-center max-w-[1200px] w-full mx-auto rounded-3xl">
            <div
              className={"xl:flex justify-between xl:w-full xl:max-w-[1200px]"}
            >

              <div className="flex justify-between w-full gap-[10px] items-center">
                <DpLogoIcon />
                <p className="text-white text-[14px] sm:text-[16px] text-center leading-5">
                  Designed & developed by dpMarketingGroup
                </p>

                <p className="text-white text-[14px] sm:text-[16px] leading-5">
                  @2025
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
