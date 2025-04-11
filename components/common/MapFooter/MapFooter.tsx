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
        <div className="flex justify-center my-20">
            <div className="bg-white w-full ">
                <div className="flex flex-col xl:flex-row justify-between w-full max-w-[1200px] xl:mx-auto relative ">
                    <div className="flex flex-col items-start gap-[28px]  lg:py-[150px] px-8 w-full md:w-[400px] lg:w-[650px] z-[10] ">
                        <h2 className="text-[32px] xl:text-[48px] leading-[40px] xl:leading-[48px] text-black ">{translate("map-footer-heading-first-part")}
                            <span className="underline decoration-primary underline-offset-[2px]"> {translate("map-footer-heading-second-part")}</span> {translate("map-footer-heading-third-part")}</h2>
                        <p className="text-[20px] sm:leading-[24px] text-[16px] sm:text-[20px] text-[#676766] w-[80%]">{translate("map-footer-description")}</p>
                        <p className="font-bold text-[18px] sm:text-[24px] leading-[32px] text-black xl:w-auto self-start">Rožňavská
                            1B, Bratislava</p>
                        <div className="block md:hidden">

                            <Image
                                quality={100}
                                objectFit="cover"
                                width={5760}
                                height={2980}
                                alt="Mapa"
                                src={"/img/small_map_mobile.png"}
                                loading={'eager'}

                            />
                        </div>
                        <div className="flex flex-col mx-auto w-full md:mx-0 sm:flex-row gap-8 md:mt-4">

                            <Link href='/stretnutie'>
                                <button className="hover:bg-primary hover:text-white text-[16px] font-medium leading-[24px] tracking-[0.1px] text-primary border h-[62px] max-h-[62px] w-full sm:w-[190px] bg-[#F4F4F4] border-none">
                                    {translate("button-meeting")}
                                </button>
                            </Link>
                            <Link href="https://www.google.com/maps/dir//Ro%C5%BE%C5%88avsk%C3%A1+1a,+831+04+Nov%C3%A9+Mesto/@48.1675611,17.1520738,143m/data=!3m1!1e3!4m18!1m8!3m7!1s0x476c8edad89e5d75:0xe415d86edbc1a2ae!2zUm_FvsWIYXZza8OhIDFhLCA4MzEgMDQgTm92w6kgTWVzdG8!3b1!8m2!3d48.1675602!4d17.1527175!16s%2Fg%2F11lktct9kn!4m8!1m0!1m5!1m1!1s0x476c8edad89e5d75:0xe415d86edbc1a2ae!2m2!1d17.1527175!2d48.1675602!3e3?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                <button className="relative hover:bg-white bg-primary hover:text-primary text-white flex flex-row justify-center items-center gap-2 px-[32px] py-[22px] max-h-[62px] min-w-fit text-[18px] w-full sm:w-fit group drop-shadow-md hover:scale-105 transform transition-transform duration-300 ease-in-out">
                                    {/* {loading ? <Loader size={15} /> : <PaperPlaneIcon />} */}
                                    <p className="text-[18px] leading-[18px]">{translate("button-direction")}</p>
                                    <div className="group-hover:hidden">

                                        <ArrowLink fill="#ffffff" />
                                    </div>
                                    <div className="group-hover:block hidden">

                                        <ArrowLink fill="#087168" />
                                    </div>
                                    <div className="absolute z-[10] top-0 right-0"> <div className="absolute z-[10] top-0 right-0">
                                        <div className="group-hover:block hidden">
                                            <OverButtonIcon fill="#087168" />
                                        </div>

                                        <div className="group-hover:hidden">
                                            <OverButtonIcon />
                                        </div>
                                    </div></div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block mb-[-10px] absolute xl:my-auto w-full mx-auto xl:mx-0 right-0 top-[100px]">

                        <Image
                            quality={100}
                            objectFit="cover"
                            width={5760}
                            height={2980}
                            alt="Mapa"
                            src={"/img/small_map.png"}
                            loading={'eager'}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MapFooter;
