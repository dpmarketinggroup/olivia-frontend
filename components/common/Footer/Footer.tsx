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
import { FaInstagramSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";

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
        <Link href={"tel:+421901923324"}>
          <a className="hover:text-white">+421 901 923 324</a>
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
        <div className="relative bg-black w-full px-[1rem] xl:px-[165px]">
          <div className="flex flex-col xl:flex-row xl:gap-[205px] items-center xl:items-start justify-between mx-auto xl:max-w-[1200px]">
            <div className="flex flex-col justify-center gap-[26px] pt-[45px] w-full">
              <LogoSecondary />
              <p className="text-[14px] leading-[20px] text-white opacity-60 w-full xl:max-w-[330px]">
                {translate("footer-description")}
              </p>
              <form className={"w-full"} onSubmit={handleSubmit}>
                <TextInput
                  type={"email"}
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    width: "100%",
                    ".mantine-TextInput-input": {
                      color: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: 0,
                      height: "50px",
                      "&::placeholder": {
                        color: "rgba(255, 255, 255, 0.5)",
                      },
                    },
                  }}
                  className="xl:w-[350px] text-[16px] leading-6"
                  placeholder="Email"
                  rightSection={
                    <button disabled={loading} type={"submit"}>
                      {loading ? <Loader size={15} /> : <PaperPlaneIcon />}
                    </button>
                  }
                  radius="xs"
                />
              </form>
              <p className="text-[12px] leading-[20px] opacity-40 text-white xl:max-w-[350px] pb-[25px]">
                {translate("footer-click-text-first-part")}
                <Link href="/gdpr">
                  <a className="underline underline-offset-[3px]">
                    {translate("footer-click-text-second-part")}
                  </a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-[15px] xl:flex-row xl:gap-[100px] justify-end xl:pt-[80px] pb-[20px] xl:pb-0 w-full text-center xl:text-left">
              <div className="hidden md:flex flex-col gap-[15px] font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 text-white">
                <Link href="/">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-home")}
                  </a>
                </Link>
                <Link href="/ponuka-apartmanov">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-apartments")}
                  </a>
                </Link>
                {/* <Link href="/action-bonus">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-action")}
                  </a>
                </Link> */}
                <Link href="/stresne-apartmany">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-top-apartments")}
                  </a>
                </Link>
                <Link href="/o-projekte">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-about")}
                  </a>
                </Link>
                <Link href="/lokalita">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-location")}
                  </a>
                </Link>
              </div>
              <div className="hidden  md:flex flex-col gap-[15px] font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 text-white">
                {/*<Link href="/novinky">*/}
                {/*    <a>Novinky</a>*/}
                {/*</Link>*/}
                <Link href="/retail">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-retail")}
                  </a>
                </Link>
                <Link href="/kontakt">
                  <a className="opacity-60 hover:opacity-100">
                    {translate("footer-link-contact")}
                  </a>
                </Link>
              </div>
              <div className=" flex flex-col gap-[15px] items-start xl:items-end text-center xl:text-left font-medium text-[14px] xl:text-[16px] leading-5 xl:leading-6 text-white opacity-60">
                <h5>{translate("footer-sale-place")}</h5>
                <h5>Rožňavská 1A</h5>
                <h5>831 04 Bratislava</h5>
                <Link href={"mailto:info@oliviaresidence.sk"}>
                  <a className="hover:text-white">info@oliviaresidence.sk</a>
                </Link>
                {telNumber()}
                <div className={"flex gap-[25px] items-center"}>
                  <Link href={"https://www.instagram.com/olivia.residence/"}>
                    <FaInstagramSquare
                      className={"w-[30px] h-[30px] cursor-pointer"}
                    />
                  </Link>
                  <Link href={"https://www.facebook.com/olivia.residence.ba"}>
                    <FaFacebookSquare
                      className={"w-[30px] h-[30px] cursor-pointer"}
                    />
                  </Link>
                  <Link href={"https://www.youtube.com/@oliviaresidence6315"}>
                    <FaYoutube className={"w-[30px] h-[30px] cursor-pointer"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden xl:inline-block xl:absolute xl:top-0 xl:right-0">
            <RectangleFooter />
          </div>
        </div>
        <div className="px-[1rem] xl:px-0 flex flex-col xl:flex-row gap-[25px] pb-[15px] xl:pb-0 xl:gap-[50px] xl:gap-[130px] bg-[#000000] justify-center opacity-90">
          <div
            className={"xl:flex xl:justify-between xl:w-full xl:max-w-[1200px]"}
          >
            <p className="text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">
              {translate("footer-all-rights")}
            </p>
            <div className="hidden xl:flex gap-[10px] items-center">
              <p className="text-white text-[12px] leading-5">
                Branding, Webdesign by
              </p>
              <BrandlyLogoIcon />
              <span className="text-white">|</span>
              <p className="text-white text-[12px] leading-5">Developed by</p>
              <DpLogoIcon />
            </div>
            <Link href="/gdpr">
              <a className="pr-4 text-[12px] xl:text-[14px] leading-5 text-[#999999] py-[20px]">
                {translate("footer-protection")}
              </a>
            </Link>
          </div>
          <div className="flex xl:hidden gap-[10px] items-center">
            <p className="text-white text-[9px]  xl:text-[12px] leading-5">
              Branding and Webdesign by
            </p>
            <BrandlyLogoIcon />
            <span className="text-white">|</span>
            <p className="text-white text-[12px] leading-5">Developed by</p>
            <DpLogoIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
