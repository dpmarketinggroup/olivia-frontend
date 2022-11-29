import { FunctionComponent, useEffect, useState, MouseEvent } from "react";
import Logo from "../../icons/Logo";
import DownArrowIcon from "../../icons/DownArrow";
import Link from "next/link";
import { Burger, Select } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import Cookies from "js-cookie";
import {useRouter} from "next/router";

interface NavbarProps {
  mainPage?: boolean;
}

const USER_CONSENT_COOKIE_KEY = "cookie_consent_is_true";
const USER_CONSENT_COOKIE_EXPIRE_DATE = 3;

const Navbar: FunctionComponent<NavbarProps> = ({ mainPage = false }) => {
  const languages = ["sk", "en"];
  const {locale, locales, push} = useRouter();

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

  return (
    <>
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
        className={`px-[1rem] bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] xl:h-[60px] w-full fixed top-0 z-50`}
      >
        <div
          className={`relative lg:shadow-none w-full xl:max-w-[1920px] mx-auto xl:h-[60px] flex items-center justify-between`}
        >
          <div
            className={`${
              isOpenMobileNav && "h-screen"
            } xl:h-auto flex flex-col xl:flex-row gap-[50] items-center xl:ml-[40px] xl:mr-0 min-w-full xl:min-w-fit`}
          >
            <div
              className={`w-full flex justify-between ${
                !isOpenMobileNav ? "mb-[20px]" : "mb-[35px]"
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
              onClick={() => {
                setIsOpenMobileNav(false);
                setScrollLocked(() => false);
              }}
              className={`${
                !isOpenMobileNav && "hidden"
              } my-auto flex xl:flex flex-col xl:flex-row w-full gap-[25px] items-center xl:h-auto xl:min-w-full`}
            >
              <div
                className={
                  "flex flex-col xl:flex-row gap-[20px] xl:gap-[25px] xl:text-[16px] xl:mt-0"
                }
              >
                <div className={"xl:hidden flex flex-col gap-[20px]"}>
                  <Link href={"/ponuka-apartmanov"} className={"xl:hidden"}>
                    <a>Ponuka apartmánov</a>
                  </Link>
                  <Link
                    href={"/ponuka-apartmanov#garazove-parkovanie"}
                    className={"xl:hidden"}
                  >
                    <a>Garážové parkovanie</a>
                  </Link>
                </div>
                <div className="hidden xl:block flex gap-[10px] items-center">
                  <div className="dropdown">
                    <Link href="/ponuka-apartmanov">
                      <a className="drop-span">Ponuka apartmánov</a>
                    </Link>
                    <div className="dropdown-content">
                      <Link href="/ponuka-apartmanov#garazove-parkovanie">
                        <a className="w-[180px] pt-[20px] pb-[20px] px-[10px] text-center">
                          Garážové parkovanie
                        </a>
                      </Link>
                    </div>
                    <div className="ml-[10px] inline-block">
                      <DownArrowIcon fill={"black"} />
                    </div>
                  </div>
                </div>
                <Link href="/lokalita">
                  <a>Lokalita</a>
                </Link>
                <div className={"flex flex-col gap-[20px] xl:hidden"}>
                  <Link href="/o-projekte">
                    <a>O projekte</a>
                  </Link>
                  <Link href="/o-projekte#harmonogram">
                    <a>Harmonogram</a>
                  </Link>
                  <Link href="/o-projekte#financovanie">
                    <a>Financovanie</a>
                  </Link>
                </div>
                <div className={"hidden xl:block"}>
                  <div className="dropdown">
                    <Link href="/o-projekte">
                      <a>O projekte</a>
                    </Link>
                    <div className="dropdown-content">
                      <Link href="/o-projekte#harmonogram">
                        <a className="pt-[20px] pb-[10px] px-[20px]">
                          Harmonogram
                        </a>
                      </Link>
                      <Link href="/o-projekte#financovanie">
                        <a className="pt-0 pb-[20px] px-[20px] text-[#476761]">
                          Financovanie
                        </a>
                      </Link>
                    </div>
                    <div className="ml-[10px] inline-block">
                      <DownArrowIcon />
                    </div>
                  </div>
                </div>
                <Link href="/retail">
                  <a>Retail</a>
                </Link>
                {/*<Link href="/novinky">*/}
                {/*    <a>Novinky</a>*/}
                {/*</Link>*/}
                <Link href="/kontakt">
                  <a>Kontakt</a>
                </Link>
              </div>
              <Link href={"/stretnutie"}>
                <button
                  className={
                    "bg-[#476761] xl:hidden px-[10px] py-[6px] w-full text-white"
                  }
                >
                  Nezáväzné stretnutie
                </button>
              </Link>
            </div>
          </div>
          <div className="flex gap-[27px] mr-[40px]">
            <div className="flex items-center gap-[5px]">
              <div className="languages">
                <Select
                  className="w-[50px]"
                  data={languages}
                  placeholder="SK"
                  variant="unstyled"
                  rightSection={<DownArrowIcon fill={"black"} />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  transitionDuration={80}
                  onChange={(selected) => selected !== null ? push('/', undefined, {locale: selected}) : null}
                />
              </div>
            </div>
            <Link href="/stretnutie">
              <button
                className={`hidden xl:block hover:bg-[#0E3F3B] font-medium text-[16px] leading-6 text-white bg-[#476761] px-[10px] py-[6px] xl:w-[190px]`}
                onClick={() => setIsOpenMobileNav(false)}
              >
                Nezáväzné stretnutie
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
