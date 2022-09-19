import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "../../svg/RightArrow";
import "swiper/css";
import LeftArrowIcon from "../../svg/LeftArrow";
import Link from "next/link";

const SwiperApartments = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="py-[45px] xl:py-[110px] px-[1rem] xl:px-0 mb-[75px]">
                    <div className="flex gap-[265px] w-ful xl:max-w-[1310px] xl:ml-[165px] items-center xl:justify-between mb-[35px] xl:mb-[70px] mx-[165px]">
                        <h3 className="text-[26px] leading-[46px] xl:text-[32px] xl:leading-[38px] font-bold text-center xl:text-left mx-auto xl:mx-0 text-black tracking-[-0.4px]">
                            Od 1 izbových až po 4 izbové apartmány
                        </h3>
                        <div className="flex gap-[30px] items-center">
                            <div className="hidden xl:flex gap-[5px]  self-center">
                                <LeftArrowIcon className="int-prev bg-[#00000033]"/>
                                <RightArrowIcon className="int-next bg-[#00000033]"/>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <Link href='/'>
                                    <a className="font-medium text-[18px] leading-7 text-[#476761]">Ponuka apartmánov</a>
                                </Link>
                                <RightArrowIcon stroke="#476761"/>
                            </div>
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
                            {url: "/img/apartment1.png", title: "1 izbový apartmán"},
                            {url: "/img/apartment1.png", title: "1.5 izbový apartmán"},
                            {url: "/img/apartment1.png", title: "2 izbový apartmán"},
                            {url: "/img/apartment1.png", title: "3 izbový apartmán"},
                            {url: "/img/apartment1.png", title: "4 izbový apartmán"},
                            {url: "/img/apartment1.png", title: "5 izbový apartmán"},
                            {url: "/img/room2.jpg", title: "Pelko"},
                            {url: "/img/room2.jpg", title: "Sebko"},
                        ].map((img, i) => (
                            <SwiperSlide
                                className={`w-full xl:max-w-[230px] ${i === 0 && "xl:ml-[165px]"}`}
                                key={i}
                            >
                                <p className="text-black mb-[30px]">{img.title}</p>
                                <div className="relative h-[145px]">
                                    <Image objectFit="contain" layout={"fill"}
                                           src={img.url} alt={img.title}/>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SwiperApartments;