import Image from "next/image";
import {Button} from "@components/ui";
import {RectangleDarkIcon, RectangleLightIcon, RectangleMediumIcon} from "@components/icons";
import {useMediaQuery} from "@mantine/hooks";
import {useEffect, useRef} from "react";
import {FaArrowsAltH} from "react-icons/fa";
import {useTranslation} from "next-i18next";

interface NegotiationProps {
    title: string;
    subtitle: string;
    buttonText?: string;
    centerText?: boolean;
    lokalita?: boolean;
    retail?:boolean
}

const Negotiation = ({
                         title,
                         subtitle,
                         buttonText = "Viac o lokalite",
                         centerText = false,
                         lokalita = false,
                        retail = false
                     }: NegotiationProps) => {
    const {t: translate} = useTranslation('home');
    const matches = useMediaQuery('(min-width: 1920px)');
    const matchesTablet = useMediaQuery('(min-width: 1280px)')
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {

        ref && ref.current!.scrollTo({
            left: 350
        })
    }, []);

    return (
        <div className='flex justify-center'>
            <div className="w-full flex flex-col relative">
                {!centerText ?
                    (
                        <div
                            className="flex flex-col xl:flex-row gap-[25px] xl:gap-[540px] mx-4 justify-center mb-[30px] xl:mb-[60px] xl:items-end">
                            <div className="flex flex-col gap-[10px] xl:gap-[20px]">
                                <h3 className="font-bold xl:w-auto text-[25px] xl:text-[40px] leading-[28px] xl:leading-[48px] tracking-[-0.5px]">{title}</h3>
                                <p className="text-[#676766] font-normal text-[14px] xl:text-[16px] leading-[24px] tracking-[0.1px]">{subtitle}</p>
                            </div>
                            <Button variant={'outlined'} href={'/lokalita'}>
                                {buttonText === "Viac o lokalite" ? translate("negotiation-button") : buttonText}
                            </Button>
                        </div>
                    ) : (
                        <div className="xl:text-center">
                            <h3 className="font-bold text-[32px] leading-[38px] tracking-[-0.4px] text-green2 mb-[20px] mx-4">{title}</h3>
                            <p className="text-[16px] leading-6 tracking-[0.1px] text-[#676766] mb-[60px] mx-4 xl:mx-0">{subtitle}</p>
                        </div>
                    )
                }
                <div
                    ref={ref}
                    className={`overflow-scroll xl:overflow-visible xl:mx-auto`}>
                    <div className={'relative w-[1000px] xl:w-screen xl:max-w-[1920px] h-[450px] xl:h-[880px]'}>
                        <Image
                            objectPosition={'center'}
                            objectFit="cover"
                            alt="hero image"
                            layout={'fill'}
                            src={"/img/map.jpg"}
                            priority={true}
                            quality={100}
                        />
                    </div>
                    <div className={`${retail ? "hidden" : "hidden xl:block"} absolute bottom-[-52px] left-0`}>
                        <RectangleDarkIcon/>
                    </div>
                    <div className={`${retail ? "hidden" : "hidden xl:block"} absolute bottom-[-52px] left-[60px]`}>
                        <RectangleMediumIcon/>
                    </div>
                    <div className={`${retail ? "hidden" : "hidden xl:block"} absolute bottom-[-112px] left-0`}>
                        <RectangleLightIcon/>
                    </div>
                    <div
                        className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[2330px] left-[1100px] -z-30`}>
                        <RectangleDarkIcon/>
                    </div>
                    <div className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[2050px] left-[500px]`}>
                        <RectangleDarkIcon/>
                    </div>
                    <div className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1990px] left-[560px]`}>
                        <RectangleLightIcon/>
                    </div>
                    <div className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1850px] left-[40px]`}>
                        <RectangleLightIcon/>
                    </div>
                    <div
                        className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1450px] left-[1300px]`}>
                        <RectangleDarkIcon/>
                    </div>
                    <div
                        className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1390px] left-[1240px]`}>
                        <RectangleLightIcon/>
                    </div>
                    <div className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1320px] left-[50px]`}>
                        <RectangleLightIcon/>
                    </div>
                    <div
                        className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1230px] left-[1120px] -z-30`}>
                        <RectangleMediumIcon/>
                    </div>
                    <div
                        className={`${lokalita ? "hidden xl:block" : "hidden"} absolute bottom-[1170px] left-[1060px] -z-30`}>
                        <RectangleLightIcon/>
                    </div>
                </div>
                <FaArrowsAltH color={'white'} size={40} className={'xl:hidden shadow-xl absolute bottom-[1rem] inset-x-0 mx-auto'}/>
            </div>
        </div>
    );
};

export default Negotiation;
