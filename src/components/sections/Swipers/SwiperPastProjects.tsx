import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";

import LogoBZ from "../../svg/LogoBZ";
import LeftArrowSwiperIcon from "../../svg/LeftArrowSwiper";
import RightArrowSwiperIcon from "../../svg/RightArrowSwiper";
import {useMediaQuery} from "@mantine/hooks";


const SwiperPastProjects = () => {
    const matches = useMediaQuery('(min-width: 1280px)')
    return (
            <div className={'flex justify-center'}>
                <div className="text-white py-[45px] xl:py-[110px] mb-[40px] xl:mb-[130px] w-full px-[1rem] xl:px-0">
                    <div
                        className="flex gap-[145px] xl:gap-[400px] xl:max-w-[1310px] items-center xl:justify-between mb-[35px] xl:mb-[40px] xl:mx-[165px]">
                        <h3 className="text-[26px] leading-7 xl:leading-[46px] xl:text-[32px] xl:leading-[38px] font-bold text-center xl:text-left text-black ">
                            Developer BZ Group
                        </h3>
                        <LogoBZ classname="w-[110px] xl:w-[169px] h-[42px] xl:h-[63px]"/>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-[50px] xl:gap-[555px] justify-center xl:ml-[165px] mb-[40px]">
                        <p className="text-[#676766] xl:w-[530px] text-[16px] xl:text-[18px] leading-7 ">Sme
                            skúsení tím ľudí s dlhoročnými skúsenosťami, ktorý má za sebou mnoho projektov situovaných
                            po celom Slovensku.</p>
                        <div className="flex gap-[5px] xl:mr-[165px] self-end xl:self-start ">
                            <LeftArrowSwiperIcon className="int-prev"/>
                            <RightArrowSwiperIcon className="int-next"/>
                        </div>
                    </div>
                    <Swiper
                        className={'w-full'}
                        // direction={"horizontal"}
                        modules={[Navigation]}
                        navigation={{
                            enabled: true,
                            nextEl: ".int-next",
                            prevEl: ".int-prev",
                        }}
                        spaceBetween={20}
                        // slidesPerView={matches ? "auto" : 1}
                    >
                        {[
                            {url: "/img/tatracentrum.jpg", title: "Tatracentrum Bratislava"},
                            {url: "/img/koloseo.jpg", title: "Koloseo Bratislava"},
                            {url: "/img/austria.jpg", title: "Austria Trend Hotel Bratislava"},
                            {url: "/img/fresh.jpg", title: "Fresh Market Bratislava"},
                            {url: "/img/klientske.jpg", title: "Klienstké centrum Bratislava"},
                            {url: "/img/storeland.jpg", title: "Storeland Lamač"},
                        ].map(({url, title}, i) => (
                            <SwiperSlide key={i}>
                                <Image src={url} alt={title} height={144} width={255} layout={'responsive'}/>
                                <p className={'text-[#476761] mt-[15px]'}>{title}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
    )
}

export default SwiperPastProjects;
