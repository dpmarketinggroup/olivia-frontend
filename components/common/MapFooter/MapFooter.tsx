import Link from "next/link";
import Image from "next/image";
import { OverButtonIcon } from "@components/icons";
import { useTranslation } from "next-i18next";
import ArrowLink from "@components/icons/ArrowLink";
import PointerIcon from "@components/icons/Pointer";
import ParkingPointIcon from "@components/icons/ParkingPoint";
const MapFooter = () => {
    const { t: translate } = useTranslation('home');
    return (
        <div className="flex justify-center">
            <div className="bg-white w-full xl:px-[165px]">
                <div className="flex flex-col xl:flex-row justify-between w-full xl:max-w-[1200px] xl:mx-auto relative ">
                    <div className="flex flex-col items-center xl:items-start gap-[28px] pt-[80px] pb-[70px] xl:py-[150px] px-[1rem] xl:px-4 xl:w-[650px] z-[10] ">
                        <h2 className="text-[32px] xl:text-[48px] leading-[40px] xl:leading-[48px] text-black ">{translate("map-footer-heading-first-part")}
                            <span className="underline decoration-primary underline-offset-[2px]"> {translate("map-footer-heading-second-part")}</span> {translate("map-footer-heading-third-part")}</h2>
                        <p className="leading-[28px] text-[#676766] w-[80%]">{translate("map-footer-description")}</p>
                        <p className="font-bold text-[24px] leading-[32px] text-black xl:w-auto self-start">Rožňavská
                            1A, Bratislava</p>
                        <div className="flex flex-row gap-8">

                            <Link href='/stretnutie'>
                                <button className="hover:bg-primary hover:text-white text-[16px] font-medium leading-[24px] tracking-[0.1px] text-primary border h-[62px] max-h-[62px] w-full xl:w-[190px] bg-[#F4F4F4] border-none">
                                    {translate("button-meeting")}
                                </button>
                            </Link>
                            <Link href="" >
                                <button className="relative bg-primary text-white flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] max-h-[62px] text-[18px]">
                                    {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                                    <p className="text-[18px] leading-[18px]">Získať trasu</p>
                                    <ArrowLink fill="#ffffff" />
                                    <div className="absolute z-[10] top-0 right-0"><OverButtonIcon /></div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="mb-[-10px] absolute xl:my-auto w-1/2 mx-auto xl:mx-0 right-0">
                        <div className="absolute z-[10] top-[150px] right-[150px]"
                        >
                            <PointerIcon />
                        </div>
                        <div className="absolute z-[10] top-[230px] right-[90px]">
                            <ParkingPointIcon />
                        </div>
                        <div className="absolute z-[10] top-[310px] right-[120px]">
                            <ParkingPointIcon />
                        </div>
                        <div className="absolute z-[10] top-[300px] right-[300px]">
                            <ParkingPointIcon />
                        </div>
                        <div className="absolute z-[10] top-[200px] right-[320px]">
                            <ParkingPointIcon />
                        </div>
                        <div className="absolute z-[10] top-[380px] right-[150px] rotate-[-32.5deg]">
                            <p className="opacity-[30%] text-black text-[12px]">Rožňavská</p>
                        </div>
                        <Image
                            quality={100}
                            objectFit="cover"
                            width={9696}
                            height={9012}
                            alt="Mapa"
                            src={"/map.png"}
                            loading={'eager'}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MapFooter;
