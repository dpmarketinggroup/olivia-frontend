import {SwiperSlide, Swiper} from "swiper/react";
import {LeftArrow, RightArrow} from "@components/icons";
import {Navigation} from "swiper";
import Image from "next/image";

interface SwiperProps {
    swiperSlides: typeof SwiperSlide[],
    title: string;
    href?: string;
}
const CustomSwiper = ({swiperSlides, title, href }: SwiperProps) => {
    return (
        <div className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 w-[1440px]`}>
            <div
                className={`flex justify-between w-ful xl:max-w-[1310px] xl:ml-[165px] items-center xl:justify-between mb-[25px] xl:mb-[70px]`}>
                <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-center xl:text-left xl:mx-0 text-black">
                    Galéria
                </h3>
                <div className="flex gap-[5px] xl:mr-[165px]">
                    <LeftArrow className="int-prev"/>
                    <RightArrow className="int-next"/>
                </div>
            </div>
            <Swiper
                direction={"horizontal"}
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                    nextEl: ".int-next",
                    prevEl: ".int-prev",
                }}
                spaceBetween={20}
                slidesPerView={"auto"}
            >
                {[
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
                ].map((url, i) => (
                    <SwiperSlide
                        className={`w-full xl:max-w-[540px]`}
                        key={i}
                    >
                        <div className="relative h-[330px]">
                            <Image objectFit="cover" layout={"fill"} src={url} alt=""/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomSwiper;
