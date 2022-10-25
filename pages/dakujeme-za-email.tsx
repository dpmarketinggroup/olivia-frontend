import Link from "next/link";
import {LeftArrow} from "@components/icons";
import Head from "next/head";

function DakujemeZaEmail() {
    return (
        <>
            <Head>
                <title>Ďakujeme za email | Olivia Residence</title>
            </Head>
            <p className="font-bold text-[56px] leading-[60px] text-center tracking-[-1px] mt-[185px] text-green2 mb-[50px]">Ďakujeme</p>
            <p className="text-center mx-auto font-bold text-[24px] leading-[32px] tracking-[-0.1px] mb-[50px] w-[300px] xl:w-[500px]">Úspešne ste sa prihlásili k odberu noviniek.</p>
            <div className='flex gap-[10px] items-center justify-center mb-[185px]'>
                <LeftArrow stroke="#476761"/>
                <Link href='/'>
                    <a className="font-medium text-[18px] leading-7 text-[#476761]">Domovská stránka</a>
                </Link>
            </div>
        </>
    )
}

export default DakujemeZaEmail;
