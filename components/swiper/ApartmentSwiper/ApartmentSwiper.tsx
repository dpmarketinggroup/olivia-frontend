import {LeftArrow, RightArrow} from "@components/icons";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Image from "next/image";
import RightArrowIcon from "@components/icons/RightArrow";

const ApartmentSwiper = () => {
    return (
        <div>
            <div className={`text-white py-[55px] xl:py-[110px] px-[1rem] xl:px-0 flex flex-col`}>
                <div
                    className={`flex w-full justify-between xl:max-w-[1200px] items-center mb-[25px] xl:mb-[65px] xl:mx-auto`}>
                    <h3 className="text-[26px] leading-[46px] xl:text-[40px] xl:leading-[40px] font-bold text-center xl:text-left text-black">
                        Od 1 izbových až po 4 izbové apartmány
                    </h3>
                    <div className={'flex items-center gap-[30px]'}>
                        <div className="gap-[5px] flex">
                            <div className={'bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                                <LeftArrow className="int-prev"/>
                            </div>
                            <div className={'bg-black/20 w-[20px] h-[20px] flex items-center justify-center'}>
                                <RightArrow className="int-next"/>
                            </div>
                        </div>
                        <div className={'flex gap-[10px] items-center'}>
                            <h5 className={'text-[18px] leading-[28px] text-green2'}>Ponuka apartmánov</h5>
                            <RightArrowIcon stroke={'#476761'}/>
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
                    {[{src: '/img/1.png', label: '1 izbový apartmán'}, {
                        label: '1.5 izbový apartmán',
                        src: '/img/2.png'
                    }, {src: '/img/3.png', label: '3 izbový apartmán'}, {
                        src: '/img/4.png',
                        label: '4 izbový apartmán'
                    }, {src: '/img/4.png', label: '4 izbový apartmán'}, {
                        src: '/img/4.png',
                        label: '4 izbový apartmán'
                    }].map(({src, label}, i) => (
                        <SwiperSlide
                            className={`xl:w-full xl:max-w-fit ${i === 0 && 'xl:ml-[19%]'}`}
                            key={i}
                        >
                            <h5 className={'text-green2 font-bold text-[24px] leading-[32px] mb-[25px]'}>{label}</h5>
                            <Image objectFit={'contain'} alt={'Swiper image'} src={src} width={300} height={200}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ApartmentSwiper;
