import { SwiperSlide, Swiper } from "swiper/react";
import { LeftArrow, RightArrow } from "@components/icons";
import { Navigation, Pagination, Scrollbar } from "swiper";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import OverButtonIcon from "@components/icons/OverButton";
import ArrowLink from "@components/icons/ArrowLink";
import Link from "next/link";
import "swiper/css";
import "swiper/css/scrollbar";
const CustomSwiper = () => {
  const { t: translate } = useTranslation("home");
  return (
    <div
      className={`text-white py-4 px-[1rem] xl:px-0 flex flex-col xl:w-full xl:max-w-[1200px] xl:mx-auto`}
    >
      <div
        className={`flex w-full justify-between items-center mb-[25px] xl:mb-[65px]`}
      >


      </div>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="my-auto w-1/3">

          <h3 className="text-[46px] leading-[46px] xl:text-[56px] xl:leading-[48px]  text-center xl:text-left text-black">
            {translate("gallery-swiper-heading")}
          </h3>
          <Link href={"/stretnutie"}

            className="mt-4 hidden drop-shadow-md relative bg-primary hover:bg-white hover:text-primary hover:scale-105 transform transition-transform duration-300 ease-in-out text-white md:flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] text-[18px] max-h-[63px] w-fit group"
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

          </Link>

        </div>
        <Swiper
          className={"w-full  "}
          direction={"horizontal"}

          modules={[Navigation, Pagination, Scrollbar]}
          navigation={{
            enabled: true,
            nextEl: ".int-next",
            prevEl: ".int-prev",
          }}
          spaceBetween={15}

          slidesPerView={"auto"} // ✅ Dynamická veľkosť
          // centeredSlides={true}
          scrollbar={{ draggable: true }}

          breakpoints={{
            1280: {
              slidesPerView: 1,
            },
          }}
        >
          {[
            "/img/241022OR5801-CUTSAVE-vyber_01_09_24_10.png",
            // "/img/241022OR5801-CUTSAVE-vyber_01_09_40_08.png",
            "/img/241022OR5801-CUTSAVE-vyber_01_08_34_23.png",
            "/img/241022OR5801-CUTSAVE-vyber_01_08_24_24.png",
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
            <SwiperSlide className={`xl:w-full h-[400px]`} key={i}>
              <div className="relative w-fit">
                <div className="absolute z-[10] top-0 right-0">
                  <div className="flex flex-row">
                    <div className="h-[30px] md:h-[58px] w-[30px] md:w-[58px] bg-white border-white border-[1px]"></div>
                    <div className="h-[30px] md:h-[58px] w-[30px] md:w-[58px] bg-white border-white border-[1px]"></div>
                  </div>
                  <div className="flex flex-row">
                    <div className="h-[30px] md:h-[58px] w-[30px] md:w-[58px] "></div>
                    <div className="h-[30px] md:h-[58px] w-[30px] md:w-[58px] bg-white border-white border-[1px]"></div>
                  </div>
                </div>


                <Image
                  loading="lazy"
                  alt={"Swiper image"}
                  src={src}
                  width={648}
                  height={396}
                />
              </div>
            </SwiperSlide>
          ))}


          {/* <div className="flex flex-col justify-center items-center ">
            <div className="swiper-scrollbar w-[80%]"></div>
            <div className="gap-[8px] flex ml-auto  ">
              <div className="int-prev md:hidden bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer hover:opacity-40">
                <LeftArrow className="w-[20px] h-[20px]" stroke="#087168" />
              </div>
              <div className="bg-[#f4f4f4] int-next md:hidden w-[62px] h-[62px] flex items-center justify-center cursor-pointer hover:opacity-40">
                <RightArrow className="w-[20px] h-[20px]" stroke="#087168" />
              </div>
              <div className="w-[62px] h-[62px] hidden md:block"></div>
            </div>
          </div> */}



        </Swiper>
      </div>

      <div className="gap-[8px] hidden md:flex ml-auto  ">
        <div className="int-prev bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer hover:opacity-40">
          <LeftArrow className="w-[20px] h-[20px]" stroke="#087168" />
        </div>
        <div className="bg-[#f4f4f4] w-[62px] h-[62px] flex items-center justify-center cursor-pointer int-next hover:opacity-40">
          <RightArrow className="w-[20px] h-[20px]" stroke="#087168" />
        </div>
      </div>
      <Link href={"/stretnutie"} className="mt-8 relative bg-primary text-white md:hidden flex flex-row justify-center items-center gap-2 w-full px-[32px] py-[22px] text-[18px] max-h-[62px]">
        {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
        <p className="text-[18px] leading-[18px] ">{translate("button-meeting")}</p> <ArrowLink fill="#ffffff" />
        <div className="absolute z-[10] top-0 right-0"><OverButtonIcon /></div>
      </Link>
    </div >
  );
};

export default CustomSwiper;
