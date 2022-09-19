import {NextPage} from "next";
import Hero from "../components/sections/Hero/Hero";
import HouseIcon from "../components/svg/House";
import WholeProcess from "../components/sections/Process/WholeProcess";
import Link from "next/link";
import React from "react";
import Description from "../components/sections/Descriptions/Description";
import KitchenIcon from "../components/svg/Kitchen";
import SinkIcon from "../components/svg/Sink";
import BlockIcon from "../components/svg/Block";
import BasketIcon from "../components/svg/Basket";
import ElectricPanel from "../components/svg/ElectricPanel";
import TwoArrowsIcon from "../components/svg/TwoArrows";
import ElectricPanelIcon from "../components/svg/ElectricPanel";
import ManIcon from "../components/svg/Man";
import ParkingIcon from "../components/svg/Parking";
import CameraIcon from "../components/svg/Camera";
import NewsSubscription from "../components/sections/News/NewsSubscription";
import NewsSection from "../components/sections/News/NewsSection";
import FinancingConditions from "../components/FinancingConditions";


const OProjekte: NextPage = () => {
    return (
        <>
            <Hero imgName={"oProjekteHero"} icon={<HouseIcon/>} title={"O projekte"}
                  description="Všetky podstatné informácie o Vašom novom bývaní na jednom mieste."/>
            <WholeProcess/>
            <div className="flex justify-center">
                <Link href="/">
                    <button
                        className="bg-[#476761] w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] tracking-[-0.1px] mt-[-60px] mb-[185px]">
                        Nezáväzné stretnutie
                    </button>
                </Link>
            </div>
            <Description imgPath="/img/room3.jpg"
                         title="Vysoký štandard vrátane komplentej kuchyne a sanity"
                         descrip="Kompletne zariadené byty vo vysokom štandarde a kvalitnom prevedení, aby ste si ušetrili starosti a čas a mohli si naplno užívať svoj nový domov."
                         bulletPoints={[
                             {icon: <KitchenIcon/>, text: "Skvelá dynamická lokalita"},
                             {icon: <SinkIcon/>, text: "Vysoký štandard vybavenia"},
                             {icon: <BlockIcon/>, text: "Štýlové a kvalitné prevedenie"},
                         ]}
                         buttons={[
                             {path: "/", text: ""},
                             {path: "/", text: "Nezáväzné stretnutie"},
                         ]}
            />
            <Description imgPath="/img/balcony.jpg"
                         title="Priestranné balkóny a terasy s exterierovým slnečným tienením"
                         descrip="Veľko-metrážne balkóny a terasy s exterierovými slnečným tienením sprevádzané výhľadmi na panorámu Bratislavy."
                         bulletPoints={[
                             {icon: <BasketIcon/>, text: "Balkón ako štandard pre každý byt"},
                             {icon: <ElectricPanelIcon/>, text: "Elektrické exteriérové slnečné tienenie ako štandard"},
                             {icon: <TwoArrowsIcon/>, text: "Veľko-metrážne terasy"},
                         ]}
                         buttons={[
                             {path: "/", text: ""},
                             {path: "/", text: "Nezáväzné stretnutie"},
                         ]}
                         reverseFlex={true}
            />
            <Description imgPath="/img/car.png"
                         title="Garážové parkovanie"
                         descrip="Olivia Residence ponúka garážové státia na prenájom, vďaka ktorým bude parkovanie komfortný a bezproblémový zážitok."
                         bulletPoints={[
                             {icon: <ManIcon/>, text: "Prechod do Vášho bytu suchou nohou"},
                             {icon: <ParkingIcon/>, text: "Dlhodobý prenájom garážových státí"},
                             {icon: <CameraIcon/>, text: "Zabezpečené kamerovým systémom"},
                         ]}
                         buttons={[
                             {path: "/", text: ""},
                             {path: "/", text: "Nezáväzné stretnutie"},
                         ]}
            />
            <FinancingConditions/>
            <NewsSection news={[
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
                {path: "/img/room.jpg", date: "12.09.2021", title: "Medium length title", description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"},
            ]}
            />
            <NewsSubscription/>
        </>
    )
}

export default OProjekte;