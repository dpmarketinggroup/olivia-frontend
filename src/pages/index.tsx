import type {NextPage} from "next";
import Link from "next/link";
import Description2 from "../components/sections/Descriptions/Description2";
import KeyIcon from "../components/svg/Key";
import Description from "../components/sections/Descriptions/Description";
import GlassStarIcon from "../components/svg/GlassStar";
import MapPointIcon from "../components/svg/MapPoint";
import StarIcon from "../components/svg/Star";
import WholeProcess from "../components/sections/Process/WholeProcess";
import Map from "../components/sections/Maps/Map";
import NewsSection from "../components/sections/News/NewsSection";
import NewsSubscription from "../components/sections/News/NewsSubscription";
import SwiperGallery from "../components/sections/Swipers/SwiperGallery";
import SwiperPastProjects from "../components/sections/Swipers/SwiperPastProjects";
import SwiperApartments from "../components/sections/Swipers/SwiperApartments";
import MapFooter from "../components/ui/MapFooter";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import HouseAndFilter from "../components/sections/Interactive/HouseAndFilter";
import FloorPlanIcon from "../components/svg/FloorPlan";
import {Select} from "@mantine/core";
import ArrowDownNotFilled from "../components/svg/ArrowDownNotFilled";
import RightArrowIcon from "../components/svg/RightArrow";
import SeverkaIcon from "../components/svg/Severka";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Moderné mestské bývanie | Olivia Residence</title>
            </Head>
            <section className="flex justify-center">
                <div className="h-[650px] w-full max-w-[1920px] mb-[90px] xl:mb-[140px] relative">
                    <div className="absolute w-full xl:max-w-[1920px] h-[650px] border -z-20">
                    <Image objectFit="cover" layout="fill" alt="hero image" src={'/img/hero.jpg'}/>
                    </div>
                    <div className="w-[350px] xl:w-[600px] ml-4 xl:ml-[165px]  pt-[185px] mb-[40px]">
                        <h1 className="font-bold text-[34px] xl:text-[56px] leading-[40px] xl:leading-[60px] tracking-[-1px] text-white">
                            Moderný štýl bývania v dynamickej lokalite so skvelými možnosťami
                        </h1>
                    </div>
                    <div className="flex gap-[10px] ml-4 xl:ml-[165px] mr-4 xl:mr-0">
                        <Link href="/stretnutie">
                            <button
                                className="hover:bg-[#0E3F3B] bg-[#89A6A2] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px]">
                                Nezáväzné stretnutie
                            </button>
                        </Link>
                        <Link href="/ponuka-bytov">
                            <button
                                className="hover:bg-[#476761] hover:border-[#476761] font-medium text-[16px] leading-[24px] tracking-[-0.1px] w-[210px] h-[50px] border border-white text-white">
                                Ponuka apartmánov
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <WholeProcess/>
            <Description
                imgPath="/img/room.jpg"
                title="Moderné mestské bývanie"
                descrip="Olivia je určená pre ľudí, ktorí chcú, aby ich domov presahoval za steny ich bytu. Pre ľudí, ktorí chcú mať ich obľúbené aktivity na dosah ruky. Pre ľudí, ktorí chcú svoj čas využívať efektívne. A pre ľudí, ktorí chcú mať z bývania zážitok. Olivia nie je len bývanie, je to životný štýl."
                bulletPoints={[
                    {icon: <MapPointIcon/>, text: "Skvelá dynamická lokalita"},
                    {icon: <StarIcon/>, text: "Vysoký štandard vybavenia"},
                    {icon: <GlassStarIcon/>, text: "Štýlové a kvalitné prevedenie"},
                ]}
            />
            <div className="flex justify-center my-[70px]">
                <div className="mx-4 xl:mx-[165px]">
                    <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                        <FloorPlanIcon classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                        <h1 className="font-bold text-[32px] w-[250px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Ponuka apartmánov</h1>
                    </div>
                    <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                        <div className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px] z-10">
                            <Select
                                className="w-[120px] floor-num"
                                data={[
                                    "3. podlažie",
                                    "4. podlažie","5. podlažie", "7. podlažie","8. podlažie","9. podlažie","10. podlažie","11. podlažie","12. podlažie",
                                ]}
                                placeholder="7. podlažie"
                                variant="unstyled"
                                rightSection={ <ArrowDownNotFilled/>}
                                rightSectionWidth={-70}
                                styles={{ rightSection: { pointerEvents: 'none' } }}
                                transitionDuration={80}
                            />
                        </div>
                        <div className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px] z-10">
                            <Link href="/ponuka-bytov">
                                <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Výber podlažia</a>
                            </Link>
                            <RightArrowIcon stroke="#476761"/>
                            <span
                                className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber apartmánu</span>
                            <RightArrowIcon stroke="#00000033"/>
                            <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                        </div>
                        <div className="hidden xl:inline-block">
                            <SeverkaIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="building">
                <HouseAndFilter/>
            </div>
            <SwiperApartments/>
            <Map title="Lokalita v centre diania" subtitle="Rožňavská 1A, Bratislava"/>
            <Description2 imgPath="/img/room2.jpg"/>
            <div className="flex justify-center">
            <SwiperGallery/>
            </div>
            <NewsSection news={[
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
            ]}
            />
            <NewsSubscription/>
            <SwiperPastProjects/>
    <MapFooter/>
    </>
    );
};

export default Home;
