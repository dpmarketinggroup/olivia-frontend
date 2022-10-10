import {Articles, MapFooter, Subscription} from "@components/common";
import Head from "next/head";

const Novinky = () => {
    return (
        <>
            <Head>
                <title>Novinky | Olivia Residence</title>
            </Head>
            <Articles classname={'mb-[30px] pt-[100px]'} />
            <Articles withHeading={false} classname={'mb-[30px]'}/>
            <Articles withHeading={false} classname={'mb-[30px]'}/>
            <Articles withHeading={false} classname={'mb-[90px]'}/>
            <Subscription/>
            <MapFooter/>
        </>
    )
}

export default Novinky;
