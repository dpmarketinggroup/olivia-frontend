import React, {
  FunctionComponent,
  useEffect,
  useState,
  MouseEvent,
} from "react";
import Logo from "../../icons/Logo";
import LogoWhite from "@components/icons/LogoWhite";
import DownArrowIcon from "../../icons/DownArrow";
import Link from "next/link";
import { Burger, Modal, Select } from "@mantine/core";
import { useMediaQuery, useScrollLock } from "@mantine/hooks";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { OverButtonIcon } from "@components/icons";
import ArrowLink from "@components/icons/ArrowLink";

interface NavbarProps {
  mainPage?: boolean;
}

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 3;

const Navbar: FunctionComponent<NavbarProps> = ({ mainPage = false }) => {
  const languages = ["sk", "en"];
  const router = useRouter();
  const path = router.pathname;  // napr. "/apartman/[id]"
  const aspath = router.asPath;
  const { asPath, locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWhite, setIsWhite] = useState(false);


  useEffect(() => {
    setIsWhite(aspath.startsWith("/apartman/") || aspath.startsWith("/en/apartman/") || aspath.startsWith("/stresne-apartmany") || aspath.startsWith("/en/stresne-apartmany"));
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function telNumber() {
    if (locale === "sk") {
      return (
        <Link href={"tel:+421901923324"} className="text-[#087168] font-normal hover:opacity-70 flex flex-row justify-center items-center gap-2"> +421 901 923 324<ArrowLink />
        </Link>
      );
    }
  }
  function modalTranslate() {
    if (locale === "sk") {
      return (
        <Modal
          // className='hidden xl:block'
          sx={{
            ".mantine-Modal-modal": {
              width: "100%",
              maxWidth: "820px",
              backgroundColor: "transparent",
            },
          }}
          opened={showModal}
          onClose={() => setShowModal(false)}
          centered
        >
          <div
            className={"w-full xl:w-[780px] h-[230px] xl:h-[560px] relative"}
          >
            <Image
              src={"/241122OR5901-1x1.png"}
              objectFit={"contain"}
              layout={"fill"}
              alt="Image"
            />
          </div>
        </Modal>
      );
    }
  }

  function infoSlider() {
    if (locale === "de") {
      return (
        // <Marquee pauseOnHover speed={30} >
        <p className="text-white text-center py-[8px] px-[5px]">
          {translate("information-slider")}
        </p>
        // </Marquee>
      );
    } else {
      return (
        // <Marquee pauseOnHover speed={30} >
        <p className="text-white text-center py-[8px] px-[5px]">
          {translate("information-slider")}
        </p>
        // </Marquee >
      );
    }
  }

  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);
  const [scrollLocked, setScrollLocked] = useScrollLock();

  useEffect(() => {
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === "true";
    setCookieConsentIsTrue(consentIsTrue);
  }, []);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, "true", {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      });
      setCookieConsentIsTrue(true);
    }
  };

  const mobileAndTablet = useMediaQuery("(max-width: 1280px)");

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, []);
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setTimeout(() => setShowModal(true), 5000);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const hasVisited = localStorage.getItem("hasVisited");
        if (!hasVisited) {
          setTimeout(() => setShowModal(true), 5000);
          localStorage.setItem("hasVisited", "true");
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);


  return (
    <>
      {/* {modalTranslate()} */}
      {/*{*/}

      {/*     (mainPage && !cookieConsentIsTrue) && (*/}
      {/*        <div className="flex bg-[#0E3F3B] items-center w-full justify-center fixed md:h-[40px] xl:mt-0 z-[99]">*/}
      {/*            <div className="w-full max-w-[1920px] px-[1rem] xl:px-0 relative">*/}
      {/*                <div className="flex flex-col md:flex-row md:gap-[20px] ml-[23%] md:ml-[35%] xl:ml-0 pt-[3px] xl:pt-0">*/}
      {/*                    <p className="text-white font-medium text-[14px] leading-5 w-[160px] xl:ml-[40%]">*/}
      {/*                        Výstavba oficiálne začala.*/}
      {/*                    </p>*/}
      {/*                    <div className="flex gap-[8px] items-center">*/}
      {/*                        <Link href="/">*/}
      {/*                            <a className="text-white font-medium text-[14px] leading-5 underline underline-offset-[5px] pb-[5px] xl:pb-0 ml-[55px] md:ml-0">Viac</a>*/}
      {/*                        </Link>*/}
      {/*                        <RightArrowIcon/>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*                <div className="xl:mr-[13px] absolute right-[1rem] xl:right-[12px] top-[13px] md:top-[1px]">*/}
      {/*                    <button onClick={onClick}>*/}
      {/*                        <CloseIcon/>*/}
      {/*                    </button>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    )*/}
      {/*}*/}
      {/*    ${(mainPage && !cookieConsentIsTrue) && "mt-[40px]"} */}
      {/* <nav
        className={`bg-transparent shadow-[0_0_10px_rgba(0,0,0,0.15)] xl:h-[95px] w-full fixed top-0 z-[100]`}
      > */}
      <nav
        className={`${(isWhite || isScrolled || isOpenMobileNav) ? "bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] " : "bg-transparent"}  w-full fixed top-0 z-[100]`}
      ><Marquee gradient={false} className="bg-black">

          <div className="bg-black">{infoSlider()}</div>
        </Marquee>
        <div
          className={`px-6 relative lg:shadow-none w-full xl:max-w-[1920px] mx-auto h-[80px] flex items-center justify-between`}
        >


          <div
            className={
              "hidden xl:flex flex-row gap-[20px] xl:gap-[15px] xl:text-[16px] xl:mt-0 "
            }
          >
            <Link href="/ponuka-apartmanov" className={` drop-span p-[3px] mt-1 ${isWhite || isScrolled ? "text-black " : "text-white"} uppercase`}>
              {translate("apartment-swiper-link")}

            </Link>
            <Link href="/stresne-apartmany" className={` ${isWhite || isScrolled ? "text-black " : "text-white"}  uppercase flex justify-center items-center mt-1`}>
              <p className="">{translate("footer-link-top-apartments")}</p>

            </Link>
            <Link href="/lokalita" className={`mt-1 p-[3px] ${isWhite || isScrolled ? "text-black " : "text-white"} text-[15px] uppercase flex justify-center items-center`}><p>{translate("footer-link-location")}</p>
            </Link>


          </div>



          <div
            className={`xl:w-fit w-full flex flex-col justify-center   xl:mb-0 xl:mt-0`}
          >
            <div className="flex justify-between items-center">

              <Link href="/" className="h-fit" >

                {(isWhite || isScrolled || isOpenMobileNav) ? <><div className="sm:hidden flex">
                  <Logo width={104} height={25} /> </div> <div className="hidden sm:block">
                    <Logo width={208} height={50} /> </div></> : <><div className="sm:hidden flex items-center justify-center my-auto">
                      <LogoWhite width={104} height={25} /> </div> <div className="hidden sm:block">
                    <LogoWhite width={208} height={50} /> </div></>}


              </Link>
              <div className="xl:hidden flex flex-row justify-center items-center gap-6">
                <Link href="/ponuka-apartmanov">
                  <button className={`${isOpenMobileNav ? "hidden" : "block"} w-fit ${isWhite || isScrolled ? "bg-[#f4f4f4]" : "bg-white"} hover:bg-primary  font-medium text-[12px] sm:text-[16px] leading-[24px] tracking-[-0.1px] w-[100px] sm:w-[210px] px-6 hover:text-white text-primary h-[32px] sm:h-[59px] `}>
                    {translate("hero-button-white")}
                  </button>
                </Link>
                <Burger
                  color={(isWhite || isScrolled || isOpenMobileNav) ? "#087168" : "white"}
                  opened={isOpenMobileNav}
                  onClick={() => {
                    setIsOpenMobileNav((o) => !o);
                    setScrollLocked((c) => !c);
                  }}
                />
              </div>
            </div>


            <div className={`${isOpenMobileNav ? "flex" : "hidden"} flex-col absolute  bg-white w-full top-[6rem] left-0 gap-4 py-2 z-[20] h-screen`}>
              <Link href="/ponuka-apartmanov" className={` drop-span p-[3px] text-black uppercase mx-auto`}>
                {translate("apartment-swiper-link")}

              </Link>
              <Link href="/stresne-apartmany" className={`text-black   uppercase flex justify-center items-center mt-1`}>
                <p className="">{translate("footer-link-top-apartments")}</p>

              </Link>
              <Link href="/lokalita" className={`mt-1 p-[3px] text-black text-[15px] uppercase flex justify-center items-center`}><p>{translate("footer-link-location")}</p>
              </Link>
              <Link href="/o-projekte" className="uppercase text-black mx-auto">{translate("footer-link-about")}
              </Link>
              <Link href="/kontakt" className={`mt-0 md:mt-1 p-0 md:p-[3px] flex justify-center text-black uppercase items-center`}>{translate("footer-link-contact")}
              </Link>

              <Link href={`/stretnutie`} className="mx-auto">
                <button

                  className="drop-shadow-md relative bg-primary hover:bg-white hover:text-primary hover:scale-105 transform transition-transform duration-300 ease-in-out text-white flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
                >
                  <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>
                  <div className="group-hover:hidden block">

                    <ArrowLink fill="#ffffff" />
                  </div>
                  <div className="group-hover:block hidden ">
                    <ArrowLink fill="#087168" />
                  </div>
                  <div className="absolute z-[10] top-0 right-0">
                    <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out drop-shadow-md">

                      <OverButtonIcon />
                    </div>
                    <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                      <OverButtonIcon fill="#087168" />
                    </div></div>

                </button>
              </Link>

              <Link href={"mailto:info@oliviaresidence.sk"} className="text-[#087168] font-normal hover:opacity-70 flex flex-row justify-center items-center gap-2 text-[16px]">
                <>
                  info@oliviaresidence.sk <ArrowLink />
                </>
              </Link>
              {telNumber()}
              <div className="text-black flex flex-row gap-2 mx-auto mb-4">

                <button

                  onClick={() => push(asPath, asPath, { locale: "sk" })}
                  className={`uppercase text-[16px] ${locale === "sk" ? "text-black font-bold" : "text-gray-500"
                    }`}
                >
                  SK
                </button>
                <p>|</p>
                <button

                  onClick={() => push(asPath, asPath, { locale: "en" })}
                  className={`uppercase text-[16px] ${locale === "en" ? "text-black font-bold" : "text-gray-500"
                    }`}
                >
                  EN
                </button>

              </div>
              <div className="mx-auto">

                <h5 className="text-[#676766] text-[16px] text-center mx-auto">{translate("footer-sale-place")}</h5>
                <h5 className="font-normal text-center mx-auto text-[14px]">Rožňavská 1A</h5>
                <h5 className="font-normal mx-auto text-center text-[14px]">831 04 Bratislava</h5>
                <Link href={"mailto:info@oliviaresidence.sk"} className="text-[#087168] font-normal hover:opacity-70 flex flex-row justify-center items-center gap-2">
                  <>
                    info@oliviaresidence.sk <ArrowLink />
                  </>
                </Link>
                {telNumber()}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[5px]">
            <div className="hidden xl:flex flex-row">
              <Link href="/o-projekte" className={`mt-1 p-[3px] flex justify-center ${isWhite || isScrolled ? "text-black" : 'text-white'} uppercase items-center`}>{translate("footer-link-about")}
              </Link>
              <Link href="/kontakt" className={`mt-1 p-[3px] flex justify-center ${isWhite || isScrolled ? "text-black" : 'text-white'} uppercase items-center`}>{translate("footer-link-contact")}
              </Link>
            </div>
            <div className={`languages ${isWhite || isScrolled ? "black" : "white"} hidden xl:block`}>
              <Select
                className="w-[50px] uppercase"
                data={languages}
                placeholder={locale}
                variant="unstyled"
                rightSection={<DownArrowIcon fill={isWhite || isScrolled ? "black" : 'white'} />}
                rightSectionWidth={30}
                styles={{ rightSection: { pointerEvents: "none" } }}
                transitionDuration={80}
                onChange={(selected) =>
                  selected !== null
                    ? push(asPath, asPath, { locale: selected })
                    : null
                }
              />

            </div>
            <div className="hidden xl:block">

              <Link href="/stretnutie">
                <button

                  className="overflow-hidden drop-shadow-md relative bg-primary hover:bg-white hover:text-primary hover:scale-105 transform transition-transform duration-300 ease-in-out text-white flex flex-row justify-center items-center gap-2 px-[28px] py-[18px] text-[18px] max-h-[63px] w-fit group"
                >
                  <p className="text-[18px] leading-[18px]">{translate("button-meeting")}</p>

                  <div className="absolute z-[10] top-0 right-0">
                    <div className="group-hover:hidden block transform transition-transform duration-300 ease-in-out ">

                      <OverButtonIcon />
                    </div>
                    <div className="group-hover:block hidden transform transition-transform duration-300 ease-in-out">
                      <OverButtonIcon fill="#087168" />
                    </div></div>

                </button>

              </Link>
            </div>

          </div>
        </div>
      </nav >
    </>
  );
};

export default Navbar;
