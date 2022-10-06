import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "../../svg/RightArrow";
import Link from "next/link";
import LeftArrowSwiperIcon from "../../svg/LeftArrowSwiper";
import RightArrowSwiperIcon from "../../svg/RightArrowSwiper";
import React from "react";

const SwiperApartments = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="xl:py-[110px] px-[1rem] xl:px-0 my-[50px] xl:mb-[75px]">
                    <div className="flex gap-[50px] xl:gap-[265px] xl:max-w-[1310px] items-center justify-center xl:justify-between mb-[35px] xl:mb-[70px] xl:mx-[165px]">
                        <h3 className="text-[16px] xl:w-auto xl:text-[26px] leading-[23px] xl:leading-[46px] xl:text-[32px] xl:leading-[38px] font-bold text-left xl:text-center xl:text-left xl:mx-0 text-black">
                            Od 1 izbových až po 4 izbové apartmány
                        </h3>
                        <div className="flex gap-[30px] items-center self-end xl:self-auto">
                            <div className="hidden xl:flex gap-[5px]">
                                <LeftArrowSwiperIcon className="int-prev"/>
                                <RightArrowSwiperIcon className="int-next"/>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <Link href='/'>
                                    <a className="hover:border-[#476761] border-b-2 border-white font-medium text-[16px] xl:text-[18px] leading-7 text-[#476761]">Ponuka apartmánov</a>
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
                            {url: "/img/1.png", title: "1 izbový apartmán"},
                            {url: "/img/2.png", title: "1.5 izbový apartmán"},
                            {url: "/img/3.png", title: "2 izbový apartmán"},
                            {url: "/img/4.png", title: "3 izbový apartmán"},
                            {url: "/img/4.png", title: "3 izbový apartmán"},
                        ].map(({url, title}, i) => (
                            <SwiperSlide
                                className={`w-full xl:max-w-[540px] ${i === 0 && "xl:ml-[165px]"}`}
                                key={i}
                            >
                                <div className="relative h-[200px]">
                                    <Image objectFit="contain" layout={"fill"} src={url} alt={title}/>
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
