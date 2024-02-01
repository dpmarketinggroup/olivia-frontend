import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";

const MapFooter = () => {
    const {t: translate} = useTranslation('home');
    return (
        <div className="flex justify-center">
                <div className="bg-primary-pattern w-full xl:px-[165px]">
                    <div className="flex flex-col xl:flex-row justify-between w-full xl:max-w-[1200px] xl:mx-auto ">
                        <div className="flex flex-col items-center xl:items-start gap-[28px] pt-[80px] pb-[70px] xl:py-[150px] px-[1rem] xl:px-0 xl:w-[455px]">
                            <h2 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-white ">{translate("map-footer-heading-first-part")}
                                <span className="underline underline-offset-[6px]"> {translate("map-footer-heading-second-part")}</span> {translate("map-footer-heading-third-part")}</h2>
                            <p className="leading-[28px] text-white">{translate("map-footer-description")}</p>
                            <p className="font-bold text-[24px] leading-[32px] text-white xl:w-auto self-start">Rožňavská
                                1A, Bratislava</p>
                            <Link href='/stretnutie'>
                                <button className="hover:bg-primary text-[16px] font-medium leading-[24px] tracking-[0.1px] text-white border h-[50px] w-full xl:w-[190px] bg-[#89A6A2] border-none">
                                    {translate("button-meeting")}
                                </button>
                            </Link>
                        </div>
                        <div className="mb-[-10px] xl:my-auto mx-auto xl:mx-0">
                            <Image
                                quality={100}
                                objectFit="cover"
                                width={540}
                                height={385}
                                alt="Mapa"
                                src={"/map.jpg"}
                                loading={'eager'}
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default MapFooter;
