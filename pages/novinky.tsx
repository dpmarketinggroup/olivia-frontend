import {Articles, MapFooter, Subscription} from "@components/common";
import Head from "next/head";

const Novinky = () => {
    return (
        <>
            <Head>
                <title>Novinky | Olivia Residence</title>
            </Head>
            <Articles/>
            <Subscription/>
            <MapFooter/>
        </>
    )
}

export default Novinky;
