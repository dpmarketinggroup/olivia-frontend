import {Description, MapFooter} from "@components/common";
import {Man, Parking, Camera, FloorPlan, ArrowDownNotFilledIcon, RightArrow, Severka} from "@components/icons";
import {Select} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import HouseAndFilter from "@components/sections/Interactive/HouseAndFilter";

const PonukaBytov = () => {
    return (
        <>
            <Head>
                <title>Ponuka bytov | Olivia Residence</title>
            </Head>
            <div className="flex justify-center building">
                <div className="w-full xl:w-full">
                    <div className="flex justify-center my-[70px]">
                        <div className="mx-4 xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] w-[250px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Ponuka
                                    apartmánov</h1>
                            </div>
                            <div
                                className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                                <div
                                    className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px] z-10">
                                    <Select
                                        className="w-[120px] floor-num"
                                        data={[
                                            "4. podlažie", "5. podlažie", "7. podlažie", "8. podlažie", "9. podlažie", "10. podlažie", "11. podlažie", "12. podlažie",
                                        ]}
                                        placeholder="7. podlažie"
                                        variant="unstyled"
                                        rightSection={<ArrowDownNotFilledIcon/>}
                                        rightSectionWidth={-70}
                                        styles={{rightSection: {pointerEvents: 'none'}}}
                                        transitionDuration={80}
                                    />
                                </div>
                                <div
                                    className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px] z-10">
                                    <Link href="/pages/ponuka-bytov">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Výber
                                            podlažia</a>
                                    </Link>
                                    <RightArrow stroke="#476761"/>
                                    <span
                                        className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber apartmánu</span>
                                    <RightArrow stroke="#00000033"/>
                                    <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <Severka/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HouseAndFilter/>
                    <Description src="/img/car.png">Kokot</Description>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default PonukaBytov;
