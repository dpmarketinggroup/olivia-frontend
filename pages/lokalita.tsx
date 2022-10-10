import {Description, Hero, MapFooter, Negotiation} from "@components/common";
import {MapPoint} from "@components/icons";
import Head from "next/head";
import KitchenIcon from "@components/icons/Kitchen";
import SinkIcon from "@components/icons/Sink";
import GlassStarIcon from "@components/icons/GlassStar";
import BasketIcon from "@components/icons/Basket";
import ElectricPanelIcon from "@components/icons/ElectricPanel";
import TwoArrowsIcon from "@components/icons/TwoArrows";
import BagIcon from "@components/icons/Bag";
import SmilingHouseIcon from "@components/icons/SmilingHouse";
import ScooterIcon from "@components/icons/Scooter";
import FlagIcon from "@components/icons/Flag";
import RollerIcon from "@components/icons/Roller";
import RingRoadArrowIcon from "@components/icons/RingRoadArrow";
import ManIcon from "@components/icons/Man";
import PlaygroundIcon from "@components/icons/Playground";
import TrainIcon from "@components/icons/Train";
import WeightIcon from "@components/icons/Weight";
import TennisIcon from "@components/icons/Tennis";
import FootballIcon from "@components/icons/Football";
import {CustomDescription} from "@components/common/Description/Description";

type Bulletpoint = {
    icon:JSX.Element, label: string
}

interface CustomDescriptionProps{
    src:string;
    title:string;
    description:string;
    bulletPoints: Bulletpoint[],
    reverse?:boolean
}

const Lokalita = () => {
    const customDescriptionList : CustomDescriptionProps[] = [
        {
            src: "twoGirls.png",
            title: "Občianska vybavenosť",
            description:"Rozmanitý výber potravín a obchodov v tesnej blízkosti, kultúrne podujatia vo Fresh Market, banka, pošta, klientské centrum a mnoho iných služieb v okolí, ktoré urobia z Vášho bývania komfortný zážitok.",
            bulletPoints:[
                {icon: <BasketIcon/>, label: "Fresh Market, Yeme a Kaufland v tesnej blízkosti"},
                {icon: <BagIcon/>, label: "Nákupné centrum OC Vivo 7 min pešo"},
                {icon: <SmilingHouseIcon/>, label: "Množstvo škôl a skôlok v okolí"},
                {icon: <PlaygroundIcon/>, label: "Detské ihriská v blízkosti"},
            ],
            reverse: true
        },
        {
            src:"bus.png",
            title: "Výhodné logistické pripojenie",
            description: "Lokalita, z ktorej máte všade blízko. Či chete ísť do centra mesta, von z mesta, alebo vlakom za hranice Slovenska.",
            bulletPoints:[
                {icon: <ScooterIcon/>, label: "Elektrickou kolobežkou do mesta 10 min"},
                {icon: <FlagIcon/>, label: "3 zastávky MHD v blízkosti do 500m"},
                {icon: <RingRoadArrowIcon/>, label: "Obchvat D4 8 min autom"},
                {icon: <TrainIcon/>, label: "Vlaková stanica Nové Mesto 10 min pešo"},
            ],
        },
        {
            src:"sportPeople.png",
            title: "Aktivity a voľný čas",
            description: "Miesto, ktoré splýva s Vašim aktívnym životným štýlom. Rekreačné aktivity a športoviská tu máte na dosah ruky.",
            bulletPoints:[
                {icon: <WeightIcon/>, label: "Fitness centrá v blízkom okolí"},
                {icon: <ManIcon/>, label: "Bežecká trať Kuchajda 5 min pešo"},
                {icon: <TennisIcon/>, label: "Tenisové kurty, bowling a iné športové centrá v blízkom okolí"},
                {icon: <FootballIcon/>, label: "Futbalové a basketbalové ihriská v blízkosti"},
            ],
            reverse: true
        }
    ]
    return (
        <>
            <Head>
                <title>Lokalita | Olivia Residence</title>
            </Head>
            <Hero imgName="lokalitaHero" icon={<MapPoint fill="#89A6A2" size={45}/>} title="Lokalita"
                  description="Dynamická lokalita so skvelými možnosťami.Rožňavská 8, Bratislava"/>
            {customDescriptionList.map((props, k) =>(
                <CustomDescription key={k} {...props} />
            ))}
            <Negotiation title="Rožňavská 1A, Bratislava" subtitle="Lokalita, v ktorej máte všetko na dosah."
                         centerText={true}/>
            <MapFooter/>
        </>
    )
}
export default Lokalita;
