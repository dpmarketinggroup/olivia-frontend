import { SwiperSlide, Swiper } from "swiper/react";
import { LeftArrow, RightArrow } from "@components/icons";
import { Navigation } from "swiper";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import OverButtonIcon from "@components/icons/OverButton";
import ArrowLink from "@components/icons/ArrowLink";
const CustomSwiper = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col xl:w-full xl:max-w-[1200px] xl:mx-auto`}
    >
      <div
        className={`flex w-full justify-between items-center mb-[25px] xl:mb-[65px]`}
      >


      </div>
      <div className="flex flex-row">
        <div className="my-auto">

          <h3 className="text-[26px] leading-[46px] xl:text-[48px] xl:leading-[48px]  text-center xl:text-left text-black">
            {translate("gallery-swiper-heading")}
          </h3>
          <p className="text-black text-[26px] leading-[46px] xl:text-[48px] xl:leading-[48px]  ">OLIVIA Residence</p>
          <button className="mt-8 relative bg-primary text-white hidden sm:flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px]">
            {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
            <p className="text-[18px] leading-[18px]">Rezervácia obhliadky</p> <ArrowLink fill="#ffffff" />
            <div className="absolute z-[10] top-0 right-0"><OverButtonIcon /></div>
          </button>

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
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            1280: {
              slidesPerView: 1,
            },
          }}
        >
          {[
            "/img/240524OR4901-DJI_0020.00_00_08_11.Still002.jpg",
            "/img/240524OR4901-DJI_0020.00_02_53_25.Still014.jpg",
            "/img/231213OR4301-test-ex1-still-2.jpg",
            "/img/231213OR4301-test-ex3-still-1.jpg",
            "/img/IMG_0572.JPG",
            "/img/IMG_0582.JPG",
            "/img/IMG_0496.JPG",
            "/img/IMG_0254.JPG",
            "/img/DSC08200-HDR-1.jpg",
            "/img/DSC08270-HDR-2.jpg",
            "/img/DSC08285-HDR-3.jpg",
            "/img/interier/1.jpg",
            "/img/interier/2.jpg",
            "/img/interier/3.jpg",
            "/img/interier/4.jpg",
            "/img/interier/5.jpg",
            "/img/interier/6.jpg",
            "/img/interier/7.jpg",
            "/img/interier/8.jpg",
            "/img/interier/9.jpg",
            "/img/interier/10.jpg",
            "/img/interier/11.jpg",
            "/img/interier/12.jpg",
            "/img/interier/13.jpg",
            "/img/interier/14.jpg",
            "/img/interier/15.jpg",
            "/img/interier/16.jpg",
            "/img/interier/17.jpg",
          ].map((src, i) => (
            <SwiperSlide className={`xl:w-full`} key={i}>
              <div className="relative w-fit">
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
                  src={src}
                  width={648}
                  height={396}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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

export default CustomSwiper;
