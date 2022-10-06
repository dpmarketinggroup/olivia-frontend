import {SwiperSlide, Swiper} from "swiper/react";
import {LeftArrow, RightArrow} from "@components/icons";
import {Navigation} from "swiper";
import Image from "next/image";

interface SwiperProps {
    images: string[],
    title: string;
}
const CustomSwiper = ({images, title }: SwiperProps) => {
    return (
        <div className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col`}>
            <div
                className={`flex w-full justify-between xl:max-w-[1200px] items-center mb-[25px] xl:mb-[65px] xl:mx-auto`}>
                <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-center xl:text-left text-black">
                    {title}
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
                {images.map((src, i) => (
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
