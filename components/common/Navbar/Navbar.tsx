import React, {
  FunctionComponent,
  useEffect,
  useState,
  MouseEvent,
} from "react";
import Logo from "../../icons/Logo";
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

interface NavbarProps {
  mainPage?: boolean;
}

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 3;

const Navbar: FunctionComponent<NavbarProps> = ({ mainPage = false }) => {
  const languages = ["sk", "en", "de"];
  const router = useRouter();
  const { asPath, locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("home");
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
              src={"/img/modal-banner-3.jpg"}
              objectFit={"contain"}
              layout={"fill"}
            />
          </div>
        </Modal>
      );
    }
  }

  function infoSlider() {
    if (locale === "de") {
      return (
        <Marquee pauseOnHover speed={30} gradient={!mobileAndTablet}>
          <p className="text-white text-center py-[5px] px-[5px]">
            {translate("information-slider")}
          </p>
        </Marquee>
      );
    } else {
      return (
        <Marquee pauseOnHover speed={30} gradient={!mobileAndTablet}>
          <p className="text-white text-center py-[5px] px-[5px]">
            {translate("information-slider")}
          </p>
        </Marquee>
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
    setTimeout(() => setShowModal(true), 10000);
  }, []);

  return (
    <>
      {modalTranslate()}
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
      <nav
        className={`bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] xl:h-[95px] w-full fixed top-0 z-50`}
      >
        <div className="bg-primary">{infoSlider()}</div>
        <div
          className={`px-[1rem] xl:px-0 relative lg:shadow-none w-full xl:max-w-[1920px] mx-auto xl:h-[60px] flex items-center justify-between`}
        >
          <div
            className={`${isOpenMobileNav && "h-screen"
              } xl:h-auto flex flex-col xl:flex-row gap-[50] items-center xl:ml-[40px] xl:mr-0 min-w-full xl:min-w-fit`}
          >
            <div
              className={`w-full flex justify-between ${!isOpenMobileNav ? "mb-[20px]" : "mb-[35px]"
                } mt-[20px] xl:mb-0 xl:mt-0`}
            >
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
              <div className="xl:hidden">
                <Burger
                  opened={isOpenMobileNav}
                  onClick={() => {
                    setIsOpenMobileNav((o) => !o);
                    setScrollLocked((c) => !c);
                  }}
                />
              </div>
            </div>
            <div
              className={` gap-[25px] items-center mb-[20px] ${!isOpenMobileNav ? "hidden" : "flex"
                }`}
            >
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
            <div
              className={`languages xl:hidden ${!isOpenMobileNav ? "hidden" : "block"
                }`}
            >
              <Select
                className="w-[50px]"
                data={languages}
                placeholder={locale}
                variant="unstyled"
                rightSection={<DownArrowIcon fill={"black"} />}
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
            <div
              onClick={() => {
                setIsOpenMobileNav(false);
                setScrollLocked(() => false);
              }}
              className={`${!isOpenMobileNav && "hidden"
                } my-[30px] desktop:my-auto flex xl:flex flex-col xl:flex-row w-full gap-[25px] items-center xl:h-auto xl:min-w-full`}
            >
              <div
                className={
                  "flex flex-col xl:flex-row gap-[20px] xl:gap-[15px] xl:text-[16px] xl:mt-0 "
                }
              >
                <div className={"xl:hidden flex flex-col gap-[20px]"}>
                  <Link href={"/ponuka-apartmanov"} className={"xl:hidden"}>
                    <a className="p-[3px] ">{translate("filter-heading")}</a>
                  </Link>
                  <Link
                    href={"/ponuka-apartmanov#garazove-parkovanie"}
                    className={"xl:hidden"}
                  >
                    <a>{translate("description-car-heading")}</a>
                  </Link>
                </div>
                <div className="p-[3px]  flex gap-[10px] justify-center items-center">
                  <div className="dropdown ">
                    <Link href="/ponuka-apartmanov">
                      <a className="drop-span p-[3px] ">
                        {translate("filter-heading")}
                      </a>
                    </Link>
                    <div className="dropdown-content">
                      <Link href="/ponuka-apartmanov#garazove-parkovanie">
                        <a className="w-[180px] pt-[20px] pb-[20px] px-[10px] text-center">
                          {translate("description-car-heading")}
                        </a>
                      </Link>
                    </div>
                    <div className="ml-[10px] inline-block">
                      <DownArrowIcon fill={"black"} />
                    </div>
                  </div>
                </div>
                <Link href="/action-bonus">
                  <a className="font-bold text-[#ffffff]   flex justify-center items-center">
                    <p className="bg-[#89A6A2] border-[#89A6A2] p-[1px] border-[2px]">{translate("footer-link-action")}</p>
                  </a>
                </Link>

                <Link href="/lokalita">
                  <a className="p-[3px] flex justify-center items-center"><p>{translate("footer-link-location")}</p></a>
                </Link>
                <div className={"flex flex-col gap-[20px] xl:hidden items-center"}>
                  <Link href="/o-projekte">
                    <a className="p-[3px] ">
                      {translate("button-about-project")}
                    </a>
                  </Link>
                  {/* <Link href="/o-projekte#harmonogram">
                    <a>{translate("schedule")}</a>
                  </Link> */}
                  <Link href="/o-projekte#financovanie">
                    <a>{translate("financing")}</a>
                  </Link>
                </div>
                <div className={"hidden p-[3px] xl:flex justify-center items-center"}>
                  <div className="dropdown">
                    <Link href="/o-projekte">
                      <a>{translate("button-about-project")}</a>
                    </Link>
                    <div className="dropdown-content">
                      {/* <Link href="/o-projekte#harmonogram">
                        <a className="pt-[20px] pb-[10px] px-[20px]">
                          {translate("schedule")}
                        </a>
                      </Link> */}
                      <Link href="/o-projekte#financovanie">
                        <a className="pt-[20px] pb-[20px] px-[20px] text-[#476761]">
                          {translate("financing")}
                        </a>
                      </Link>
                    </div>
                    <div className="ml-[10px] inline-block">
                      <DownArrowIcon />
                    </div>
                  </div>
                </div>
                <Link href="/retail">
                  <a className="p-[3px] flex justify-center items-center"  >{translate("hero-retail-title")}</a>
                </Link>
                {/*<Link href="/novinky">*/}
                {/*    <a>Novinky</a>*/}
                {/*</Link>*/}
                <Link href="/kontakt">
                  <a className="p-[3px] flex justify-center items-center">{translate("footer-link-contact")}</a>
                </Link>
                <Link href="https://my.matterport.com/show/?m=x1f7uttieiY">
                  <a className="font-bold text-[#ffffff] text-center flex justify-center bg-[#476761] border-[#476761] p-[1px] border-[2px] ">
                    {translate("show-apartment-1")}<br /> {translate("show-apartment-2")}
                  </a>
                </Link>
              </div>
              <Link href={"/stretnutie"}>
                <button
                  className={
                    "bg-[#476761] xl:hidden px-[10px] py-[6px] w-full text-white"
                  }
                >
                  {translate("button-meeting")}
                </button>
              </Link>
            </div>
          </div>
          <div className="flex gap-[27px] mr-[40px]">
            <div className={"hidden xl:flex gap-[15px] items-center"}>
              <Link href={"https://www.instagram.com/olivia.residence/"}>
                <FaInstagramSquare
                  className={"w-[20px] h-[20px] cursor-pointer"}
                />
              </Link>
              <Link href={"https://www.facebook.com/olivia.residence.ba"}>
                <FaFacebookSquare
                  className={"w-[20px] h-[20px] cursor-pointer"}
                />
              </Link>
              <Link href={"https://www.youtube.com/@oliviaresidence6315"}>
                <FaYoutube className={"w-[20px] h-[20px] cursor-pointer"} />
              </Link>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="languages hidden xl:block">
                <Select
                  className="w-[50px]"
                  data={languages}
                  placeholder={locale}
                  variant="unstyled"
                  rightSection={<DownArrowIcon fill={"black"} />}
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
            </div>
            <Link href="/stretnutie">
              <button
                className={`hidden xl:block hover:bg-[#0E3F3B] font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px] xl:w-[190px]`}
                onClick={() => setIsOpenMobileNav(false)}
              >
                {translate("button-meeting")}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
