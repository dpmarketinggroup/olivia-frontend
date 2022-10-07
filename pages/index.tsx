import Link from "next/link";
import {FloorPlan, ArrowDownNotFilledIcon, RightArrow, Severka} from "@components/icons/";
import {Timeline, MapFooter, Negotiation, Articles, Subscription} from "@components/common";
import {BuildingFilter} from "@components/filter";
import {ApartmentSwiper, CustomSwiper, DeveloperSwiper} from "@components/swiper";
import Head from "next/head";
import Image from "next/image";
import {Select} from "@mantine/core";
import {ApartmentEquipmentDescription, CommonDescription} from "@components/common/Description/Description";
import {Button} from "@components/ui";
import {useApartment} from "../lib/hooks/useApartment";
import {useStore} from "../lib/store/useStore";
import {useEffect} from "react";

const Home = () => {
    useApartment('04.01', 'Poschodie 3')
    const val = useStore(state => state.selectedApartment)
    console.log(val)
    return (
        <>
            <Head>
                <title>Moderné mestské bývanie | Olivia Residence</title>
            </Head>
            <section className="flex justify-center pt-[115px]">
                <button>Click</button>
                <div className="h-[650px] w-full max-w-[1920px] xl:mb-[140px] relative">
                    <div className="absolute w-full xl:max-w-[1920px] h-[650px] -z-20">
                        <Image objectFit="cover" layout="fill" alt="hero image" src={'/img/hero.jpg'}/>
                    </div>
                    <div className="w-[300px] xl:w-[600px] ml-4 xl:ml-[165px] pt-[185px] mb-[40px]">
                        <h1 className="font-bold text-[34px] xl:text-[56px] leading-[40px] xl:leading-[60px] tracking-[-1px] text-white">
                            Moderný štýl bývania v dynamickej lokalite so skvelými možnosťami
                        </h1>
                    </div>
                    <div className="flex flex-col xl:flex-row gap-[10px] ml-4 xl:ml-[165px] mr-4 xl:mr-0">
                        <Link href="/stretnutie">
                            <button
                                className="w-full hover:bg-[#0E3F3B] bg-[#89A6A2] xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                                Nezáväzné stretnutie
                            </button>
                        </Link>
                        <Link href="/ponuka-bytov">
                            <button
                                className="w-full hover:bg-[#476761] hover:border-[#476761] font-medium text-[16px] leading-[24px] tracking-[-0.1px] xl:w-[210px] h-[50px] border border-white text-white">
                                Ponuka apartmánov
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Timeline/>
            <CommonDescription/>
            <div className="flex justify-center my-[70px]">
                <div className="m xl:mx-[165px]">
                    <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                        <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] text-center xl:text-left">Ponuka
                            apartmánov</h1>
                    </div>
                    <div
                        className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                        <div
                            className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px] z-10">
                            <Select
                                className="w-[120px] floor-num"
                                data={[
                                    "3. podlažie",
                                    "4. podlažie", "5. podlažie", "7. podlažie", "8. podlažie", "9. podlažie", "10. podlažie", "11. podlažie", "12. podlažie",
                                ]}
                                placeholder="7. podlažie"
                                variant={'unstyled'}
                                rightSection={<ArrowDownNotFilledIcon/>}
                                rightSectionWidth={-70}
                                styles={{rightSection: {pointerEvents: 'none'}}}
                                transitionDuration={80}
                            />
                        </div>
                        <div
                            className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px] z-10">
                            <Link href="/pages/ponuka-bytov">
                                <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761] text-center xl:text-left">Výber
                                    podlažia</a>
                            </Link>
                            <RightArrow stroke="#476761"/>
                            <span
                                className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033] text-center xl:text-left">Výber apartmánu</span>
                            <RightArrow stroke="#00000033"/>
                            <span
                                className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033] text-center xl:text-left">Detail apartmánu</span>
                        </div>
                        <div className="hidden xl:inline-block">
                            <Severka/>
                        </div>
                    </div>
                </div>
            </div>
            <BuildingFilter/>
            <ApartmentSwiper/>
            <Negotiation title={"Lokalita v centre diania"} subtitle={"Rožňavská 1A, Bratislava"}/>
            <div className={'flex flex-col mt-[150px]'}>
                <h2 className={'text-[#0E3F3B] font-bold text-[40px] text-center'}>Vybavenie apartmánov</h2>
                <ApartmentEquipmentDescription/>
                <div className={'mx-auto flex flex-col xl:flex-row gap-[15px] w-full xl:w-auto px-[1rem] xl:px-0'}>
                    <Button variant={'outlined'}>
                        Vybavenie apartmánov
                    </Button>
                    <Button variant={'filled'}>
                        Nezáväzné stretnutie
                    </Button>
                </div>
            </div>
            <CustomSwiper/>
            <Articles/>
            <Subscription/>
            <DeveloperSwiper/>
            <MapFooter/>
        </>
    );
};

export default Home;
