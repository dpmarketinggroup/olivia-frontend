import {Hero, MapFooter, Negotiation} from "@components/common";
import {MapPoint} from "@components/icons";
import Head from "next/head";
import {
    Basket,
    Bag,
    SmilingHouse,
    Scooter,
    Flag,
    RingRoadArrow,
    Man,
    PlaygroundIcon,
    TrainIcon,
    WeightIcon,
    TennisIcon,
    FootballIcon
} from "@components/icons";
import {ApartmentEquipmentDescription, CustomDescription} from "@components/common/Description/Description";
import {Button} from "@components/ui";

type Bulletpoint = {
    icon: JSX.Element, label: string
}

interface CustomDescriptionProps {
    src: string;
    title: string;
    description: string;
    bulletPoints: Bulletpoint[],
    reverse?: boolean
}

const Lokalita = () => {
    const customDescriptionList: CustomDescriptionProps[] = [
        {
            src: "twoGirls.png",
            title: "Občianska vybavenosť",
            description: "Rozmanitý výber potravín a obchodov v tesnej blízkosti, kultúrne podujatia vo Fresh Market, banka, pošta, klientské centrum a mnoho iných služieb v okolí, ktoré urobia z Vášho bývania komfortný zážitok.",
            bulletPoints: [
                {icon: <Basket/>, label: "Fresh Market, Yeme a Kaufland v tesnej blízkosti"},
                {icon: <Bag/>, label: "Nákupné centrum OC Vivo 7 min pešo"},
                {icon: <SmilingHouse/>, label: "Množstvo škôl a skôlok v okolí"},
                {icon: <PlaygroundIcon/>, label: "Detské ihriská v blízkosti"},
            ],
            reverse: true
        },
        {
            src: "bus.png",
            title: "Výhodné logistické pripojenie",
            description: "Lokalita, z ktorej máte všade blízko. Či chete ísť do centra mesta, von z mesta, alebo vlakom za hranice Slovenska.",
            bulletPoints: [
                {icon: <Scooter/>, label: "Elektrickou kolobežkou do mesta 10 min"},
                {icon: <Flag/>, label: "3 zastávky MHD v blízkosti do 500m"},
                {icon: <RingRoadArrow/>, label: "Obchvat D4 8 min autom"},
                {icon: <TrainIcon/>, label: "Vlaková stanica Nové Mesto 10 min pešo"},
            ],
        },
        {
            src: "sportPeople.png",
            title: "Aktivity a voľný čas",
            description: "Miesto, ktoré splýva s Vašim aktívnym životným štýlom. Rekreačné aktivity a športoviská tu máte na dosah ruky.",
            bulletPoints: [
                {icon: <WeightIcon/>, label: "Fitness centrá v blízkom okolí"},
                {icon: <Man/>, label: "Bežecká trať Kuchajda 5 min pešo"},
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
            {customDescriptionList.map((props, k) => (
                <CustomDescription key={k} {...props} />
            ))}
            <Negotiation title="Rožňavská 1A, Bratislava" subtitle="Lokalita, v ktorej máte všetko na dosah."
                         centerText={true} lokalita={true}/>
            <h2 className={'mt-[175px] font-bold text-[40px] leading-[48px] tracking-[-0.5] text-[#0E3F3B] mx-4 xl:mx-0 xl:text-center'}>Vybavenie
                apartmánov</h2>
            <ApartmentEquipmentDescription/>
            <div className={'flex flex-col xl:flex-row gap-[10px] justify-center mt-[-50px] mb-[175px] mx-4 '}>
                <Button variant={'outlined'}>
                    Vybavenie apartmánov
                </Button>
                <Button variant={'filled'}>
                    Nezáväzné stretnutie
                </Button>
            </div>
            <MapFooter/>
        </>
    )
}
export default Lokalita;
