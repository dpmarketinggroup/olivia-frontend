import {LeftArrow, RightArrow} from "@components/icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "@components/icons/RightArrow";
import Link from "next/link";

const ApartmentSwiper = () => {
    return (
        <div
            className={`xl:relative text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col overflow-visible xl:mb-[50px] w-full xl:max-w-[1200px] xl:mx-auto`}>
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
                spaceBetween={40}
                slidesPerView={1}
                breakpoints={{
                    1280: {
                        slidesPerView: 3
                    }
                }}
            >
                {[
                    {src: '/img/1.png', label: '1 izbový apartmán', id: 'one-apt'},
                    {label: '1.5 izbový apartmán', src: '/img/15.png', id: 'oneHalf-apt'},
                    {src: '/img/2.png', label: '2 izbový apartmán', id: 'two-apt'},
                    {src: '/img/3.png', label: '3 izbový apartmán', id: 'three-apt'},
                    {src: '/img/4.png', label: '4 izbový apartmán', id: 'four-apt'},
                ].map(({src, label, id}) => (
                    <SwiperSlide
                        className={`xl:w-full`}
                        key={id}
                    >
                        <div>
                            <h5 className={'text-green2 font-bold text-[24px] leading-[32px] mb-[15px]'}>{label}</h5>
                            <div className={'relative h-[400px]'}>
                                <Image className={'border'} priority={true}  objectPosition={'left'} objectFit={'contain'} alt={'Swiper image'}
                                       src={src} layout={'fill'}/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ApartmentSwiper;
