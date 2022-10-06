import Hero from "../components/sections/Hero/Hero";
import HouseIcon from "../components/svg/House";
import WholeProcess from "../components/sections/Process/WholeProcess";
import Link from "next/link";
import Description, {DescriptionProps} from "../components/sections/Descriptions/Description";
import KitchenIcon from "../components/svg/Kitchen";
import SinkIcon from "../components/svg/Sink";
import BlockIcon from "../components/svg/Block";
import BasketIcon from "../components/svg/Basket";
import TwoArrowsIcon from "../components/svg/TwoArrows";
import ElectricPanelIcon from "../components/svg/ElectricPanel";
import ManIcon from "../components/svg/Man";
import ParkingIcon from "../components/svg/Parking";
import CameraIcon from "../components/svg/Camera";
import NewsSubscription from "../components/sections/News/NewsSubscription";
import NewsSection from "../components/sections/News/NewsSection";
import FinancingConditions from "../components/sections/UniCredit/FinancingConditions";
import MapFooter from "../components/ui/MapFooter";
import Head from "next/head";

const OProjekte = () => {
    const descriptions: DescriptionProps[] = [
        {
            imgPath: "/img/room3.jpg",
            title: "Vysoký štandard vrátane komplentej kuchyne a sanity",
            description: "Kompletne zariadené byty vo vysokom štandarde a kvalitnom prevedení, aby ste si ušetrili starosti a čas a mohli si naplno užívať svoj nový domov.",
            bulletPoints: [
                {icon: <KitchenIcon/>, text: "Skvelá dynamická lokalita"},
                {icon: <SinkIcon/>, text: "Vysoký štandard vybavenia"},
                {icon: <BlockIcon/>, text: "Štýlové a kvalitné prevedenie"},
            ],
            twoButtons: false
        },
        {
            imgPath: "/img/balcony.jpg",
            title: "Priestranné balkóny a terasy s exterierovým slnečným tienením",
            description: "Veľko-metrážne balkóny a terasy s exterierovými slnečným tienením sprevádzané výhľadmi na panorámu Bratislavy.",
            bulletPoints: [
                {icon: <BasketIcon width="28" height="29"/>, text: "Balkón ako štandard pre každý byt"},
                {icon: <ElectricPanelIcon/>, text: "Elektrické exteriérové slnečné tienenie ako štandard"},
                {icon: <TwoArrowsIcon width="24" height="28px"/>, text: "Veľko-metrážne terasy"},
            ],
            twoButtons: false,
            reverseFlex: true,
        },
        {
            imgPath: "/img/car.png",
            title: "Garážové parkovanie",
            description: "Olivia Residence ponúka garážové státia na prenájom, vďaka ktorým bude parkovanie komfortný a bezproblémový zážitok.",
            bulletPoints: [
                {icon: <ManIcon/>, text: "Prechod do Vášho bytu suchou nohou"},
                {icon: <ParkingIcon/>, text: "Dlhodobý prenájom garážových státí"},
                {icon: <CameraIcon/>, text: "Zabezpečené kamerovým systémom"},
            ],
            twoButtons: false,
        },
    ]
    return (
        <div className={'flex flex-col'}>
            <Head>
                <title>O projekte | Olivia Residence</title>
            </Head>
            <Hero imgName={"oProjekteHero"} icon={<HouseIcon/>} title={"O projekte"}
                  description="Všetky podstatné informácie o Vašom novom bývaní na jednom mieste."/>
            <WholeProcess/>
            <div className={'px-[1rem] xl:px-0'}>
                <Link href="/stretnutie">
                    <button
                        className="mx-auto hover:bg-primary bg-[#476761] w-full xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] mb-[90px] xl:mb-[185px]">
                        Nezáväzné stretnutie
                    </button>
                </Link>
            </div>
            {descriptions.map((props, i) => {
                if (i === 2) {
                    return <div key={i} id="garazove-parkovanie">
                        <Description {...props}/>
                    </div>
                } else {
                    return <Description key={i} {...props}/>
                }
            })}
            <FinancingConditions/>
            <NewsSection news={[
                {
                    path: "/img/room.jpg",
                    date: "12.09.2021",
                    title: "Medium length title",
                    description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                },
                {
                    path: "/img/room.jpg",
                    date: "12.09.2021",
                    title: "Medium length title",
                    description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                },
                {
                    path: "/img/room.jpg",
                    date: "12.09.2021",
                    title: "Medium length title",
                    description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                },
                {
                    path: "/img/room.jpg",
                    date: "12.09.2021",
                    title: "Medium length title",
                    description: "Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean"
                },
            ]}
            />
            <NewsSubscription/>
            <MapFooter/>
        </div>
    )
}

export default OProjekte;
