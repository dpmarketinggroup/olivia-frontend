import { LeftArrow, RightArrow } from "@components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import RightArrowIcon from "@components/icons/RightArrow";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const ApartmentSwiper = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`xl:relative text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col overflow-visible xl:mb-[50px] w-full xl:max-w-[1200px] xl:mx-auto`}
    >
      <div
        className={`flex gap-6 flex-col xl:flex-row w-full justify-between xl:items-center mb-[65px]`}
      >
        <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-black">
          {translate("from-1-to-4")}
        </h3>
        <div className={"flex items-center gap-[30px]"}>
          <div className="gap-[5px] flex">
            <div
              className={
                "cursor-pointer apa-prev bg-black/20 w-[20px] h-[20px] flex items-center justify-center"
              }
            >
              <LeftArrow />
            </div>
            <div
              className={
                "cursor-pointer apa-next bg-black/20 w-[20px] h-[20px] flex items-center justify-center"
              }
            >
              <RightArrow />
            </div>
          </div>
          <div className={"flex gap-[10px] items-center"}>
            <Link href={"/ponuka-apartmanov"}>
              <a
                className={
                  "border-b border-white text-[18px] leading-[28px] text-green2 hover:border-b hover:border-primary"
                }
              >
                {translate("apartment-swiper-link")}
              </a>
            </Link>
            <RightArrowIcon stroke={"#476761"} />
          </div>
        </div>
      </div>
      <Swiper
        className={"w-full"}
        watchOverflow={false}
        direction={"horizontal"}
        modules={[Navigation]}
        navigation={{
          enabled: true,
          nextEl: ".apa-next",
          prevEl: ".apa-prev",
        }}
        spaceBetween={40}
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
            <div>
              <h5
                className={
                  "text-green2 font-bold text-[24px] leading-[32px] mb-[15px]"
                }
              >
                {label}
              </h5>
              <div className={"relative h-[400px]"}>
                <Image
                  className={"border"}
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
      </Swiper>
    </div>
  );
};

export default ApartmentSwiper;
