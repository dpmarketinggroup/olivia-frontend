import {LeftArrow, RightArrow} from "@components/icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "@components/icons/RightArrow";
import Link from "next/link";

const ApartmentSwiper = () => {
    return (
        <div
            className={`xl:relative text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col overflow-visible xl:mb-[50px] w-full xl:max-w-[1200px] xl:mx-auto h-[590px]`}>
            <div
                className={`flex gap-6 flex-col xl:flex-row w-full justify-between xl:items-center mb-[65px]`}>
                <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-black">
                    Od 1 izbových až po 4 izbové apartmány
                </h3>
                <div className={'flex items-center gap-[30px]'}>
                    <div className="gap-[5px] flex">
                        <div
                            className={'cursor-pointer apa-prev bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                            <LeftArrow/>
                        </div>
                        <div
                            className={'cursor-pointer apa-next bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                            <RightArrow/>
                        </div>
                    </div>
                    <div className={'flex gap-[10px] items-center'}>
                        <Link href={'/ponuka-bytov'}>
                            <a className={'border-b border-white text-[18px] leading-[28px] text-green2 hover:border-b hover:border-primary'}>Ponuka
                                apartmánov</a>
                        </Link>
                        <RightArrowIcon stroke={'#476761'}/>
                    </div>
                </div>
            </div>
            <Swiper
                className={'w-full'}
                watchOverflow={false}
                direction={"horizontal"}
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                    nextEl: ".apa-next",
                    prevEl: ".apa-prev",
                }}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    1280: {
                        slidesPerView: 3
                    }
                }}
            >
                {[
                    {src: '/img/1.png', label: '1 izbový apartmán'},
                    {label: '1.5 izbový apartmán', src: '/img/15.png'},
                    {src: '/img/2.png', label: '2 izbový apartmán'},
                    {src: '/img/3.png', label: '3 izbový apartmán'},
                    {src: '/img/4.png', label: '4 izbový apartmán'},
                ].map(({src, label}, i) => (
                    <SwiperSlide
                        className={`xl:w-full`}
                        key={i}
                    >
                        <h5 className={'text-green2 font-bold text-[24px] leading-[32px] mb-[25px]'}>{label}</h5>
                        <Image objectFit={'contain'} alt={'Swiper image'} src={src} width={300} height={200}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ApartmentSwiper;
