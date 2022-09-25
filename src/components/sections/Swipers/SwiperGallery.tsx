import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "../../svg/RightArrow";
import "swiper/css";
import LeftArrowIcon from "../../svg/LeftArrow";
import AaaIcon from "../../svg/LeftArrowSwiper";
import LeftArrowSwiperIcon from "../../svg/LeftArrowSwiper";
import RightArrowSwiperIcon from "../../svg/RightArrowSwiper";


const SwiperGallery = () => {
    return (
        <div className="text-white py-[45px] xl:py-[110px] px-[1rem] xl:px-0 w-[1440px]">
            <div
                className="flex w-ful xl:max-w-[1310px] xl:ml-[165px] items-center xl:justify-between mb-[35px] xl:mb-[70px]">
                <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-center xl:text-left mx-auto xl:mx-0 text-black">
                    Galéria
                </h3>
                <div className="hidden xl:flex gap-[5px] mr-[165px]">
                    <LeftArrowSwiperIcon className="int-prev"/>
                    <RightArrowSwiperIcon className="int-next"/>
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
                    "/img/room2.jpg",
                    "/img/room2.jpg",
                    "/img/room2.jpg",
                    "/img/room2.jpg",
                    "/img/room2.jpg",
                    "/img/room2.jpg",
                    "/img/room2.jpg",
                ].map((url, i) => (
                    <SwiperSlide
                        className={`w-full xl:max-w-[540px] ${i === 0 && "xl:ml-[165px]"}`}
                        key={i}
                    >
                        <div className="relative h-[330px]">
                            <Image objectFit="cover" layout={"fill"} src={url} alt=""/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperGallery;