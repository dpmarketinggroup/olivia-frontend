import { LeftArrow, LogoBZ, RightArrow, BigLeftArrow, BigRightArrow } from "@components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { cursorTo } from "readline";
const TopApartmentSwiper = () => {
  const { t: translate } = useTranslation("home");
  const [countIndex, setCountIndex] = useState(0);
  const nextSlide = () => {
    setCountIndex((prevIndex) =>
      prevIndex === 7 ? prevIndex : prevIndex + 1
    );
  };

  // Funkcia na posun vzad
  const prevSlide = () => {
    setCountIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#2A2A2A]">

      <div
        className={`text-white py-4 sm:py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex  flex-col w-full xl:max-w-[1200px] xl:mx-auto`}
      >
        <div
          className={`flex flex-col  w-full justify-end mb-[25px] xl:mb-[65px]`}
        >


          <div
            className={
              "flex flex-col justify-end items-end mt-[35px] xl:mt-0"
            }
          >

            <div className=" gap-4 flex items-end">
              <div
                className={
                  " w-[130px] h-[45px] flex items-center justify-center"
                }
              >
                <BigLeftArrow className="int-prev" onClick={prevSlide} opacity={countIndex === 0 ? "0.2" : "1"} />
              </div>
              <div
                className={
                  " w-[130px] h-[45px]  flex items-center justify-center"
                }
              >
                <BigRightArrow className="int-next" onClick={nextSlide} opacity={countIndex === 7 ? "0.2" : "1"} />
              </div>
            </div>
          </div>
        </div>
        <Swiper
          className={"w-full"}
          direction={"horizontal"}
          modules={[Navigation]}
          navigation={{
            enabled: true,
            nextEl: ".int-next",
            prevEl: ".int-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}

          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 2,

            },
          }}
        >
          {[
            {
              src: "/img/sprchovy_kut.png",
              label: translate("top-apartments-swiper-label1"),
              object: translate("top-apartments-swiper-object1"),
            },
            {
              src: "/img/kuchyna.png",
              label: translate("top-apartments-swiper-label2"),
              object: translate("top-apartments-swiper-object2"),
            },
            {
              src: "/img/vyhlad.png",
              label: translate("top-apartments-swiper-label3"),
              object: translate("top-apartments-swiper-object3"),
            },
            {
              src: "/img/kurenie.png",
              label: translate("top-apartments-swiper-label4"),
              object: translate("top-apartments-swiper-object4"),
            },
            {
              src: "/img/dvere.png",
              label: translate("top-apartments-swiper-label5"),
              object: translate("top-apartments-swiper-object5"),
            },
            {
              src: "/img/obklad.png",
              label: translate("top-apartments-interior-item4"),
              object: translate("top-apartments-swiper-object1"),
            },
            {
              src: "/img/podlaha.png",
              label: translate("top-apartments-interior-item3"),
              object: translate("top-apartments-swiper-object2"),
            },
            {
              src: "/img/zaluzie.png",
              label: translate("top-apartments-interior-item2"),
              object: translate("top-apartments-swiper-object3"),
            },
            {
              src: "/img/dvere.png",
              label: translate("top-apartments-interior-item1"),
              object: translate("top-apartments-swiper-object5"),
            },
          ].map(({ src, label, object }, i) => (
            <SwiperSlide className={`w-[290px] sm:w-[400px]  h-[400px]`} key={i}>

              <div className="relative flex flex-wrap items-end w-[290px] sm:w-[400px] h-[400px] z-100">
                <div className="w-full p-[20px] flex flex-col gap-4 bg-gradient-to-t  from-[#000000] to-[#FFFFFF00]">
                  <p className="font-medium text-[18px]">{object}</p>
                  <hr className="border-[1px] border-[#FFFFFF65]" />
                  <h4 className="font-bold text-[26px]">{label}</h4>
                </div>
              </div>
              <div
                className={
                  "absolute top-[0%] left-[0%] w-[400px] -z-10 h-[400px]"
                }
              >
                <Image
                  className="brightness-[0.7]"
                  priority={true}
                  alt={"Swiper image"}
                  quality={100}
                  src={src}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-white mx-auto mt-8 bg-[#2A2A2A] p-4 text-center w-full sm:w-[80%] flex justify-center items-center">{translate("top-apartments-info")}</p>
      </div>
    </section>
  );
};

export default TopApartmentSwiper;
