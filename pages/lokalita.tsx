import {Description, Hero, MapFooter, Negotiation} from "@components/common";
import {MapPoint} from "@components/icons";
import Head from "next/head";

const Lokalita = () => {
    //TODO: Oliver -> Mobil rozjebany
    //TODO: Me -> Pridat descriptions
    return (
        <>
            <Head>
                <title>Lokalita | Olivia Residence</title>
            </Head>
            <Hero imgName="lokalitaHero" icon={<MapPoint fill="#89A6A2" size={35}/>} title="Lokalita"
                  description="Dynamická lokalita so skvelými možnosťami.Rožňavská 8, Bratislava"/>
            {/*{descriptions.map((props, k) =>(*/}
            {/*    <Description key={k} {...props}/>*/}
            {/*))}*/}
            <Negotiation title="Rožňavská 1A, Bratislava" subtitle="Lokalita, v ktorej máte všetko na dosah."
                         centerText={true}/>
            <MapFooter/>
        </>
    )
}
export default Lokalita;
