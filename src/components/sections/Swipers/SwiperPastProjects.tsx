import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import "swiper/css";
import LogoBZ from "../../svg/LogoBZ";
import LeftArrowSwiperIcon from "../../svg/LeftArrowSwiper";
import RightArrowSwiperIcon from "../../svg/RightArrowSwiper";


const SwiperPastProjects = () => {
    return (
        <div className="flex justify-center">
            <div>
                <div className="text-white py-[45px] xl:py-[110px] px-[1rem] xl:px-0 mb-[40px] xl:mb-[130px]">
                    <div
                        className="flex gap-[145px] xl:gap-[400px]  xl:max-w-[1310px] xl:ml-[165px] items-end justify-center xl:justify-between mb-[35px] xl:mb-[40px] mx-[165px]">
                        <h3 className="text-[26px] leading-7 xl:leading-[46px] xl:text-[32px] xl:leading-[38px] font-bold text-center xl:text-left mx-auto xl:mx-0 text-black tracking-[-0.4px] w-[120px] xl:w-auto">
                            Developer BZ Group
                        </h3>
                        <LogoBZ classname="w-[110px] xl:w-[169px] h-[42px] xl:h-[63px]"/>
                    </div>
                    <div className="flex gap-[555px] justify-center ml-4 xl:ml-[165px] mb-[40px]">
                        <p className="text-[#676766] w-[384px] xl:w-[530px] text-[16px] xl:text-[18px] leading-7 ">Sme skúsení tím ľudí s dlhoročnými skúsenosťami, ktorý má za sebou mnoho projektov situovaných po celom Slovensku.</p>
                        <div className="hidden xl:flex gap-[5px] mr-[165px] self-center">
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
                            {url: "/img/room2.jpg", title: "Tatracentrum Bratislava"},
                            {url: "/img/room2.jpg", title: "Koloseo Bratislava"},
                            {url: "/img/room2.jpg", title: "Austria Trend Hotel Bratislava"},
                            {url: "/img/room2.jpg", title: "Fresh Market Bratislava"},
                            {url: "/img/room2.jpg", title: "Klienstké centrum Bratislava"},
                            {url: "/img/room2.jpg", title: "Fresh Market Bratislava"},
                        ].map((img, i) => (
                            <SwiperSlide
                                className={`w-full max-w-[185px] xl:max-w-[255px] ${i === 0 && "xl:ml-[165px]"}`}
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