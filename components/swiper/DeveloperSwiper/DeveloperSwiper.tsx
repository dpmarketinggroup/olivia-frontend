import {LeftArrow, LogoBZ, RightArrow} from "@components/icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";

const DeveloperSwiper = () => {
    return (
        <div className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col`}>
            <div
                className={`flex flex-col xl:flex-row w-full justify-between xl:max-w-[1200px] mb-[25px] xl:mb-[65px] xl:mx-auto`}>
                <div className={'flex flex-col'}>
                    <h3 className="text-[26px] xl:text-[32px] xl:leading-[40px] font-bold text-center xl:text-left text-black mb-[40px]">
                        Developer BZ Group
                    </h3>
                    <p className={'text-[#676766] xl:max-w-[540px]'}>
                        Sme skúsení tím ľudí s dlhoročnými skúsenosťami, ktorý má za sebou mnoho projektov situovaných
                        po celom Slovensku.
                    </p>
                </div>
                <div className={'flex xl:flex-col justify-between items-end mt-[35px] xl:mt-0'}>
                    <LogoBZ/>
                    <div className="gap-[5px] flex">
                        <div className={'bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                            <LeftArrow className="int-prev"/>
                        </div>
                        <div className={'bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                            <RightArrow className="int-next"/>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                className={'w-full'}
                direction={"horizontal"}
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                    nextEl: ".int-next",
                    prevEl: ".int-prev",
                }}
                spaceBetween={30}
                slidesPerView={'auto'}
            >
                {[
                    {src: "/img/austria.jpg", label: 'Austria Trend Hotel Bratislava'},
                    {src: "/img/fresh.jpg", label: 'Fresh Market Bratislava'},
                    {src: "/img/klientske.jpg", label: 'Klientské centrum Bratislava'},
                    {src: "/img/koloseo.jpg", label: 'Koloseo Bratislava'},
                    {src: "/img/storeland.jpg", label: 'Storeland Lamač'},
                    {src: "/img/tatracentrum.jpg", label: 'Tatracentrum Bratislava'},
                ].map(({src, label}, i) => (
                    <SwiperSlide
                        className={`xl:w-full xl:max-w-fit ${i === 0 && 'xl:ml-[19%]'}`}
                        key={i}
                    >
                        <div className={'relative w-full xl:w-[255px] h-[145px]'}>
                            <Image alt={'Swiper image'} src={src} layout={'fill'} objectFit={'cover'}/>
                        </div>
                        <h5 className={'text-green2 font-medium mt-[10px]'}>{label}</h5>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DeveloperSwiper;