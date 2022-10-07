import {MapFooter} from "@components/common";
import {FloorPlan, RightArrow, Severka, ArrowDownNotFilledIcon} from "@components/icons";
import Link from "next/link";
import {Select} from "@mantine/core";
import Head from "next/head";
import Floor8 from "@components/floors/Floor8/Floor8";

const VyberBytuNaPodlazi = () => {
    return (
        <>
            <Head>
                <title>Výber bytu na podlaží | Olivia Residence</title>
            </Head>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center my-[70px]">
                        <div className="mx-4 xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] w-[250px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Výber apartmánu na podlaží</h1>
                            </div>
                            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                                <div className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px]">
                                    <Select
                                        className="w-[120px] floor-num"
                                        data={[
                                            "4. podlažie","5. podlažie", "7. podlažie","8. podlažie","9. podlažie","10. podlažie","11. podlažie","12. podlažie",
                                        ]}
                                        placeholder="7. podlažie"
                                        variant="unstyled"
                                        rightSection={ <ArrowDownNotFilledIcon/>}
                                        rightSectionWidth={-70}
                                        styles={{ rightSection: { pointerEvents: 'none' } }}
                                        transitionDuration={80}
                                    />
                                </div>
                                <div className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px]">
                                    <Link href="/pages/ponuka-bytov">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber podlažia</a>
                                    </Link>
                                    <RightArrow stroke="#00000033"/>
                                    <span
                                        className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Výber apartmánu</span>
                                    <RightArrow stroke="#476761"/>
                                    <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                                </div>
                                <div className="hidden xl:inline-block">
                                <Severka/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row flex-col-reverse xl:gap-[32px] items-center xl:items-start xl:ml-[165px]">
                        <div className="bg-[#F5F5F5] max-h-[520px] w-[400px]">
                            <div className="pt-[50px]">
                                <div className="grid grid-cols-2 gap-y-[30px] mb-[40px]">
                                    <span className="pl-[70px] font-bold text-[16px] leading-6 tracking-[0.1px]">3 - izbový apartmán</span>
                                    <span className="pr-[70px] font-bold text-[16px] leading-6 tracking-[0.1px] text-right">č. 9.10</span>
                                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Dostupnosť</span>
                                    <div className="pr-[70px] text-[14px] font-medium leading-5 text-white ml-[75px] w-[53px]">
                                        <span className="px-[10px] py-[5px] bg-[#476761]">voľný</span>
                                    </div>
                                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Počet izieb</span>
                                    <span className="pr-[70px] text-right font-bold text-[14px] leading-5">3</span>
                                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Apartmán m²</span>
                                    <span className="pr-[70px] text-right font-bold text-[14px] leading-5">73.27 m²</span>
                                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Balkón | Terasa m²</span>
                                    <span className="pr-[70px] text-right font-bold text-[14px] leading-5">73.27 m²</span>
                                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Celková výmera</span>
                                    <span className="pr-[70px] text-right font-bold text-[14px] leading-5">73.27 m²</span>
                                </div>
                                <div className="flex justify-center pb-[60px]">
                                    <Link href="/pages">
                                        <button
                                            className="hover:bg-primary font-medium text-[16px] leading-6 tracking-[0.1px] text-white px-[20px] py-[6px] bg-[#476761]">
                                            Detail bytu
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-[400px] xl:w-[690px] h-[265px] xl:h-[555px] xl:mb-[125px]">
                            <Floor8/>
                        </div>

                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default VyberBytuNaPodlazi;
