import {NextPage} from "next";
import Hero from "../components/sections/Hero/Hero";
import MapPointIcon from "../components/svg/MapPoint";
import Description from "../components/sections/Descriptions/Description";
import BasketIcon from "../components/svg/Basket";
import BagIcon from "../components/svg/Bag";
import SmilingHouseIcon from "../components/svg/SmilingHouse";
import ScooterIcon from "../components/svg/Scooter";
import FlagIcon from "../components/svg/Flag";
import RingRoadArrowIcon from "../components/svg/RingRoadArrow";
import Map from "../components/Map";
import Description2 from "../components/sections/Descriptions/Description2";
import MapFooter from "../components/ui/MapFooter";

interface Descritpions{
    imgPath: string;
    title: string;
    descrip: string;
    bulletPoints: [
        { icon: JSX.Element; text: string },
        { icon: JSX.Element; text: string },
        { icon: JSX.Element; text: string }
    ];
    twoButtons?: boolean
    reverseFlex?: boolean;
}

const Lokalita: NextPage = () => {
    const descriptions: Descritpions[] = [
        {
            imgPath: "/img/twoGirls.png",
            title: "Občianska vybavenosť",
            descrip: "Rozmanitý výber potravín a obchodov v tesnej blízkosti, kultúrne podujatia vo Fresh Market, banka, pošta, klientské centrum a mnoho iných služieb v okolí, ktoré urobia z Vášho bývania komfortný zážitok.",
            bulletPoints: [
                { icon: <BasketIcon/>, text: "Fresh Market, Yeme a Kaufland v tesnej blízkosti" },
                { icon: <BagIcon/>, text: "Nákupné centrum OC Vivo 7 min pešo" },
                { icon: <SmilingHouseIcon/>, text: "Množstvo škôl a skôlok v okolí" }
            ],
            twoButtons : false,
            reverseFlex : true,
        },
        {
            imgPath: "/img/bus.png",
            title: "Výhodné logistické pripojenie",
            descrip: "Lokalita, z ktorej máte všade blízko. Či chete ísť do centra mesta, von z mesta, alebo vlakom za hranice Slovenska.",
            bulletPoints: [
                { icon: <ScooterIcon/>, text: "Elektrickou kolobežkou do mesta 10 min" },
                { icon: <FlagIcon/>, text: "3 zastávky MHD v blízkosti do 500m" },
                { icon: <RingRoadArrowIcon/>, text: "Obchvat D4 8 min autom" }
            ],
            twoButtons : false,
            reverseFlex : false,
        },
        {
            imgPath: "/img/sportPeople.png",
            title: "Aktivity a voľný čas",
            descrip: "Miesto, ktoré splýva s Vašim aktívnym životným štýlom.\n" +
                "Rekreačné aktivity a športoviská tu máte na dosah ruky.",
            bulletPoints: [
                { icon: <ScooterIcon/>, text: "Fitness centrá v blízkom okolí" },
                { icon: <FlagIcon/>, text: "Bežecká trať Kuchajda 5 min pešo" },
                { icon: <RingRoadArrowIcon/>, text: "Tenisové kurty, bowling a iné športové centrá v blízkom okolí" }
            ],
            twoButtons : false,
            reverseFlex : true,
        },
    ]
    return (
        <>
            <Hero imgName="lokalitaHero" icon={<MapPointIcon fill="#89A6A2" height="35" width="35"/>} title="Lokalita" description="Dynamická lokalita so skvelými možnosťami.Rožňavská 8, Bratislava"/>
            {descriptions.map((d, k) =>(
                <Description key={k} imgPath={d.imgPath} title={d.title} descrip={d.descrip} bulletPoints={d.bulletPoints} reverseFlex={d.reverseFlex} twoButtons={d.twoButtons}/>
            ))}
            <Map title="Rožňavská 1A, Bratislava" subtitle="Lokalita, v ktorej máte všetko na dosah." centerText={true}/>
            <Description2 imgPath="/img/room4.jpg"/>
            <MapFooter/>
        </>
    )
}
 export default Lokalita;