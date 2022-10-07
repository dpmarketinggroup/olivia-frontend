import {SwiperSlide, Swiper} from "swiper/react";
import {LeftArrow, RightArrow} from "@components/icons";
import {Navigation} from "swiper";
import Image from "next/image";

const CustomSwiper = () => {
    return (
        <div className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col`}>
            <div
                className={`flex w-full justify-between xl:max-w-[1200px] items-center mb-[25px] xl:mb-[65px] xl:mx-auto`}>
                <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-center xl:text-left text-black">
                    Galéria
                </h3>
                <div className="gap-[5px] flex">
                    <div className={'bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                        <LeftArrow className="int-prev"/>
                    </div>
                    <div className={'bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                        <RightArrow className="int-next"/>
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
                    <SwiperSlide
                        className={`xl:w-full xl:max-w-fit ${i === 0 && 'xl:ml-[19%]'}`}
                        key={i}
                    >
                        <Image alt={'Swiper image'} src={src} width={540} height={330}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CustomSwiper;
