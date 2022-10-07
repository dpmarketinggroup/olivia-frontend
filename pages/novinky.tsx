import {Articles, MapFooter, Subscription} from "@components/common";
import Head from "next/head";

const Novinky = () => {
    //TODO: Oliver -> Na mobile navbar zakriva content treba dat prvemu elementu mt-[vyska navbaru]
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
