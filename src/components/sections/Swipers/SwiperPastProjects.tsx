import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "../../svg/RightArrow";
import "swiper/css";
import LeftArrowIcon from "../../svg/LeftArrow";
import LogoBZ from "../../svg/LogoBZ";


const SwiperPastProjects = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="text-white py-[45px] xl:py-[110px] px-[1rem] xl:px-0">
                    <div
                        className="flex gap-[400px] w-ful xl:max-w-[1310px] xl:ml-[165px] items-end xl:justify-between mb-[35px] xl:mb-[40px] mx-[165px]">
                        <h3 className="text-[26px] leading-[46px] xl:text-[32px] xl:leading-[38px] font-bold text-center xl:text-left mx-auto xl:mx-0 text-black tracking-[-0.4px]">
                            Developer BZ Group
                        </h3>
                        <LogoBZ/>
                    </div>
                    <div className="flex gap-[555px] ml-[165px] mb-[40px]">
                        <p className="text-[#676766] w-[530px] text-[18px] leading-7 ">Sme skúsení tím ľudí s
                            dlhoročnými
                            skúsenosťami, ktorý má za sebou mnoho projektov situovaných po celom Slovensku.</p>
                        <div className="hidden xl:flex gap-[5px] mr-[165px] self-center">
                            <LeftArrowIcon className="int-prev bg-[#00000033]"/>
                            <RightArrowIcon className="int-next bg-[#00000033]"/>
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
                            {url: "/img/room2.jpg", title: "Tatracentrum Bratislava"},
                            {url: "/img/room2.jpg", title: "Koloseo Bratislava"},
                            {url: "/img/room2.jpg", title: "Austria Trend Hotel Bratislava"},
                            {url: "/img/room2.jpg", title: "Fresh Market Bratislava"},
                            {url: "/img/room2.jpg", title: "Klienstké centrum Bratislava"},
                            {url: "/img/room2.jpg", title: "Jebko"},
                            {url: "/img/room2.jpg", title: "Pelko"},
                            {url: "/img/room2.jpg", title: "Sebko"},
                        ].map((img, i) => (
                            <SwiperSlide
                                className={`w-full xl:max-w-[255px] ${i === 0 && "xl:ml-[165px]"}`}
                                key={i}
                            >
                                <div className="relative h-[145px]">
                                    <Image className="grayscale hover:grayscale-0" objectFit="cover" layout={"fill"}
                                           src={img.url} alt={img.title}/>
                                </div>
                                <p className="text-black">{img.title}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SwiperPastProjects;