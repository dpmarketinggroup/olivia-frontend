import Link from "next/link";
import {LeftArrow} from "@components/icons";
import Head from "next/head";

function Custom404() {
    return (
        <>
            <Head>
                <title>404 | Olivia Residence</title>
            </Head>
            <div className="h-[400px] xl:h-auto">
                <p className="font-bold text-[56px] leading-[60px] text-center tracking-[-1px] mt-[185px] text-green2 mb-[50px]">404</p>
                <p className="text-center font-bold text-[24px] leading-[32px] tracking-[-0.1px] ">Ľutujeme.</p>
                <p className="text-center font-bold text-[24px] leading-[32px] tracking-[-0.1px] mb-[50px]">Stránku,
                    ktorú ste hľadali sme nenašli.</p>
                <div className='flex gap-[10px] items-center justify-center mb-[185px]'>
                    <LeftArrow stroke="#476761"/>
                    <Link href='/pages'>
                        <a className="font-medium text-[18px] leading-7 text-[#476761]">Späť</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Custom404;