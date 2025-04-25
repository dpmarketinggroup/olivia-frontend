import { LeftArrow, LogoBZ, RightArrow } from "@components/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import ArrowLink from "@components/icons/ArrowLink";
import OverButtonIcon from "@components/icons/OverButton";
import "swiper/css";
import "swiper/css/scrollbar";

const DeveloperSwiper = () => {
  const { t: translate } = useTranslation("home");

  return (
    <div className="text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col w-full xl:max-w-[1200px] xl:mx-auto">
      <div className="flex flex-col w-full justify-between mb-[25px] xl:mb-[65px]">
        <div className="flex flex-row justify-between">

          <h3 className="text-[36px] md:text-[48px] xl:leading-[40px] text-left text-black mb-[20px]">
            {translate("developer-swiper")}

          </h3>
          <LogoBZ classname="md:hidden block scale-[60%]" /> </div>
        <div className="flex flex-row justify-between">
          <p className="text-[#676766] w-full md:w-[60%] xl:max-w-[540px]">
            {translate("developer-swiper-description")}
          </p>
          <LogoBZ classname="hidden md:block " />
        </div>
      </div>

      {/* SWIPER */}
      <Swiper
        className="w-full " // ✅ Zabezpečí správne vykreslenie scrollbar-u
        direction="horizontal"
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={{
          enabled: true,
          nextEl: ".int-next",
          prevEl: ".int-prev",
        }}
        spaceBetween={0}
        slidesPerView={"auto"} // ✅ Dynamická veľkosť
        // centeredSlides={true}
        scrollbar={{ draggable: true }} // ✅ Funkčné nastavenie scrollbar-u
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
          <SwiperSlide className="xl:w-full" key={i}>
            <div className="relative w-full xl:w-[510px] h-[200px] xl:h-[290px]">
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
              <Image priority alt="Swiper image" quality={100} src={src} layout="fill" objectFit="cover" />
            </div>
            <h5 className="text-black mt-[10px]">{label}</h5>
          </SwiperSlide>
        ))}

        {/* ✅ Musí byť vo vnútri Swiperu */}
        <div className="flex flex-row justify-center items-center">

          <div className="swiper-scrollbar "></div>
          <div className="gap-[8px] flex ml-auto mt-4 ">
            <div className="int-prev bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer hover:opacity-40">
              <LeftArrow className="w-[20px] h-[20px]" stroke="#087168" />
            </div>
            <div className="bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer int-next hover:opacity-40">
              <RightArrow className="w-[20px] h-[20px]" stroke="#087168" />
            </div>
          </div>
        </div>
      </Swiper>

      {/* Navigačné šípky */}
      <button className="mt-8 relative bg-primary text-white md:hidden flex flex-row justify-center items-center gap-2 w-full px-[32px] py-[22px] text-[18px] max-h-[62px]">
        {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
        <p className="text-[18px] leading-[18px] ">{translate("button-meeting")}</p> <ArrowLink fill="#ffffff" />
        <div className="absolute z-[10] top-0 right-0"><OverButtonIcon /></div>
      </button>
    </div >
  );
};

export default DeveloperSwiper;
