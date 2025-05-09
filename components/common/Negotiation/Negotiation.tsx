import Image from "next/image";
import { Button } from "@components/ui";
import { RectangleDarkIcon, RectangleLightIcon, RectangleMediumIcon } from "@components/icons";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useRef } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import OverButtonIcon from "@components/icons/OverButton";
import OverButtonBigIcon from "@components/icons/OverButtonBig";
import Booking from "@components/icons/Booking";
import ArrowLink from "@components/icons/ArrowLink";
import Link from "next/link";
interface NegotiationProps {
    title: string;
    subtitle: string;
    buttonText?: string;
    centerText?: boolean;
    lokalita?: boolean;
    retail?: boolean
}

const Negotiation = ({
    title,
    subtitle,
    buttonText = "Viac o lokalite",
    centerText = false,
    lokalita = false,
    retail = false
}: NegotiationProps) => {
    const { t: translate } = useTranslation('home');
    const matches = useMediaQuery('(min-width: 1920px)');
    const matchesTablet = useMediaQuery('(min-width: 1280px)')
    const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {

        ref && ref.current!.scrollTo({
            left: 350
        })
    }, []);

    return (
        <>
            <div className='flex justify-center mb-0 md:mb-20'>
                <div className="w-full flex flex-col relative">
                    {!centerText ?
                        (
                            <div
                                className="flex flex-col xl:flex-row gap-[25px] xl:items-end max-w-[1200px] w-full mx-auto px-4">
                                <div className="flex flex-col gap-[10px] xl:gap-[20px]">
                                    <h3 className=" xl:w-auto text-[25px] xl:text-[42px] leading-[28px] xl:leading-[48px] tracking-[-0.5px]">{title}</h3>
                                    <p className="text-[#0E3F3B] opacity-[30%] font-normal text-[14px] xl:text-[22px] leading-[24px] italic">{subtitle}</p>
                                </div>
                                {/* <Button variant={'outlined'} href={'/lokalita'}>
                                {buttonText === "Viac o lokalite" ? translate("negotiation-button") : buttonText}
                            </Button> */}
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
                                src={"/img/map.png"}
                                loading="lazy"
                                quality={100}
                            />
                            <div className="hidden md:block sticky z-[10] top-[250px] w-fit ml-auto mr-8 ">


                                <Link href={"/ponuka-apartmanov"} className="hover:opacity-90 relative bg-[url('/img/ponuka.jpeg')] bg-cover bg-center text-white  flex flex-col justify-between  items-start gap-2  text-[18px] w-[395px] h-[220px] mb-4  ">
                                    <div className="absolute z-[5] w-full h-full bg-black opacity-50"></div>
                                    {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                                    <div className="z-[10] mt-8 ml-8"><ArrowLink fill="white" /></div>

                                    <p className="text-[22px] mb-8 ml-8 z-[10] font-medium leading-[18px]">{translate("filter-heading")}</p>

                                    <div className="absolute z-[10] top-0 right-[-10px]"><OverButtonBigIcon /></div>

                                </Link>
                                <Link href={'/stretnutie'} className="relative hover:bg-white drop-shadow-md bg-yellow hover:text-yellow text-[#0E3F3B] hidden sm:flex flex-row justify-between  items-center gap-2 px-[32px] py-[22px] w-full text-[18px] max-h-[96px] h-[96px] group">
                                    {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                                    <p className="text-[22px] font-medium leading-[18px]">{translate("button-meeting")}</p><Booking />
                                    <div className="absolute z-[10] top-0 right-0">
                                        <div className="group-hover:block hidden">

                                            <OverButtonIcon fill="#FFA100" height="96" width="158" />
                                        </div>
                                        <div className="group-hover:hidden">

                                            <OverButtonIcon height="96" width="158" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>


                    </div>
                    <FaArrowsAltH color={'black'} size={40} className={'xl:hidden shadow-xl absolute bottom-[1rem] inset-x-0 mx-auto'} />
                </div> </div>
            <div className="md:hidden block relative z-[10] w-full mx-auto mt-6 px-4">


                <Link href={"/ponuka-apartmanov"} className="relative bg-[url('/img/ponuka.jpeg')] bg-cover bg-center text-white  flex flex-col justify-between  items-start gap-2  text-[18px] w-full md:w-[395px] h-[220px] mb-4  ">
                    <div className="absolute z-[5] w-full h-full bg-black opacity-50"></div>
                    {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                    <div className="z-[10] mt-8 ml-8"><ArrowLink fill="white" /></div>

                    <p className="text-[22px] mb-8 ml-8 z-[10] font-medium leading-[18px]">{translate("filter-heading")}</p>

                    <div className="absolute z-[10] top-0 right-[-10px]"><OverButtonBigIcon /></div>

                </Link>
                <Link href={'/stretnutie'} className="relative bg-yellow text-[#0E3F3B] flex flex-row justify-between  items-center gap-2 px-[32px] py-[22px] w-full text-[18px] max-h-[96px] h-[96px]">
                    {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                    <p className="text-[22px] font-medium leading-[18px]">{translate("button-meeting")}</p><Booking />
                    <div className="absolute z-[10] top-0 right-0"><OverButtonIcon height="96" width="158" /></div>
                </Link>
            </div>
        </>
    );
};

export default Negotiation;
