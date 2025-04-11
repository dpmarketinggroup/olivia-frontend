import { LeftArrow, RightArrow } from "@components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import Image from "next/image";
import RightArrowIcon from "@components/icons/RightArrow";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import ArrowLink from "@components/icons/ArrowLink";

import "swiper/css";
import "swiper/css/scrollbar";

const ApartmentSwiper = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`xl:relative text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col overflow-visible xl:mb-[50px] w-full xl:max-w-[1200px] xl:mx-auto`}
    >
      <div
        className={`flex gap-6 flex-col xl:flex-row w-full justify-between xl:items-center mb-[65px]`}
      >
        <h3 className="text-[26px] leading-[46px] xl:text-[48px] xl:leading-[48px] md:w-[40%] text-black">
          {translate("from-1-to-4")}
        </h3>
        <div className={"flex items-center gap-[30px]"}>

          <div className={"flex gap-[10px] items-center md:flex hidden"}>
            <Link href={"/ponuka-apartmanov"} className="" legacyBehavior>

              <a
                className={
                  "border-b pb-2 text-[18px] leading-[28px] text-primary border-primary flex flex-row gap-2 justify-center items-center"
                }
              >
                {translate("apartment-swiper-link")}<ArrowLink />
              </a>

            </Link>

          </div>
        </div>
      </div>
      <Swiper
        className={"w-full overflow-visible"}
        watchOverflow={false}
        direction={"horizontal"}
        modules={[Navigation, Scrollbar]}
        navigation={{
          enabled: true,
          nextEl: ".apa-next",
          prevEl: ".apa-prev",
        }}
        spaceBetween={40}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {[
          {
            src: "/img/1.png",
            label: translate("apartment-swiper-item-1"),
            id: "one-apt",
          },
          {
            label: translate("apartment-swiper-item-1.5"),
            src: "/img/15-new.png",
            id: "oneHalf-apt",
          },
          {
            src: "/img/2.png",
            label: translate("apartment-swiper-item-2"),
            id: "two-apt",
          },
          {
            src: "/img/3.png",
            label: translate("apartment-swiper-item-3"),
            id: "three-apt",
          },

          {
            label: translate("apartment-swiper-item-4.5"),
            src: "/img/45.jpg",
            id: "fourHalf-apt",
          },
        ].map(({ src, label, id }) => (
          <SwiperSlide className={`xl:w-full`} key={id}>
            <div className="border-r-[1px] border-[#00000022]">
              <h5
                className={
                  "text-green2 font-bold text-[24px] leading-[32px] mb-[15px] text-center md:text-left"
                }
              >
                {label}
              </h5>
              <div className={"relative h-[350px] "}>
                <Image

                  priority={true}
                  objectPosition={"left"}
                  objectFit={"contain"}
                  alt={"Swiper image"}
                  src={src}
                  layout={"fill"}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex flex-row justify-center items-center">

          <div className="swiper-scrollbar apart"></div>
          <div className="gap-[8px] flex ml-auto mt-4 ">
            <div className="apa-prev bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer hover:opacity-40">
              <LeftArrow className="w-[20px] h-[20px]" stroke="#087168" />
            </div>
            <div className="bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer apa-next hover:opacity-40">
              <RightArrow className="w-[20px] h-[20px]" stroke="#087168" />
            </div>
          </div>
        </div>
      </Swiper>
      <div className={"flex gap-[10px] mt-8   items-center flex md:hidden"}>
        <Link href={"/ponuka-apartmanov"} className="" legacyBehavior>

          <a
            className={
              "border-b pb-2 text-[18px] leading-[28px] text-primary border-primary flex flex-row gap-2 justify-center items-center"
            }
          >
            {translate("apartment-swiper-link")}<ArrowLink />
          </a>

        </Link>

      </div>
    </div>
  );
};

export default ApartmentSwiper;
