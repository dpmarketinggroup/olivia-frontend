import { LeftArrow, LogoBZ, RightArrow } from "@components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const DeveloperSwiper = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col w-full xl:max-w-[1200px] xl:mx-auto`}
    >
      <div
        className={`flex flex-col  w-full justify-between mb-[25px] xl:mb-[65px]`}
      >
        <h3 className="text-[26px] xl:text-[48px] xl:leading-[40px]  text-center xl:text-left text-black mb-[40px]">
          {translate("developer-swiper")}
        </h3>
        <div className={"flex flex-row justify-between "}>

          <p className={"text-[#676766] xl:max-w-[540px]"}>
            {translate("developer-swiper-description")}
          </p>
          <LogoBZ />
        </div>
        <div
          className={
            "flex xl:flex-col justify-between items-end mt-[35px] xl:mt-0"
          }
        >


        </div>
      </div>
      <Swiper
        className={"w-full"}
        direction={"horizontal"}
        modules={[Navigation, Pagination]}
        pagination={{
          type: "progressbar"
        }
        }
        navigation={{
          enabled: true,
          nextEl: ".int-next",
          prevEl: ".int-prev",
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {[
          { src: "/img/austria.jpg", label: "Austria Trend Hotel Bratislava" },
          { src: "/img/fresh.jpg", label: "Fresh Market Bratislava" },
          { src: "/img/klientske.jpg", label: "Klientské centrum Bratislava" },
          { src: "/img/koloseo.jpg", label: "Koloseo Bratislava" },
          { src: "/img/storeland.jpg", label: "Storeland Lamač" },
          { src: "/img/tatracentrum.jpg", label: "Tatracentrum Bratislava" },
        ].map(({ src, label }, i) => (
          <SwiperSlide className={`xl:w-full`} key={i}>
            <div
              className={
                "relative w-full xl:w-[510px] h-[390px] xl:h-[290px] "
              }
            >
              <div className="absolute z-[10] top-0 right-0">
                <div className="flex flex-row">
                  <div className="h-[58px] w-[58px] bg-white border-white border-[1px]"></div>
                  <div className="h-[58px] w-[58px] bg-white border-white border-[1px]"></div>
                </div>
                <div className="flex flex-row">
                  <div className="h-[58px] w-[58px] "></div>
                  <div className="h-[58px] w-[58px] bg-white border-white border-[1px]"></div>
                </div>
              </div>
              <Image
                priority={true}
                alt={"Swiper image"}
                quality={100}
                src={src}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>
            <h5 className={"text-black mt-[10px]"}>{label}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="gap-[5px] flex ml-auto">
        <div
          className={
            "bg-black/20 w-[62px] h-[62px] flex items-center justify-center"
          }
        >
          <LeftArrow className="int-prev" stroke="#087168" />
        </div>
        <div
          className={
            "bg-black/20 w-[62px] h-[62px] flex items-center justify-center"
          }
        >
          <RightArrow className="int-next" stroke="#087168" />
        </div>
      </div>
    </div >
  );
};

export default DeveloperSwiper;
