import React from "react";
import Link from "next/link";
import LeftArrowIcon from "../components/svg/LeftArrow";
import Head from "next/head";

function Dakujeme() {
    return (
        <>
            <Head>
                <title>Ďakujeme | Olivia Residence</title>
            </Head>
            <p className="font-bold text-[56px] leading-[60px] text-center tracking-[-1px] mt-[185px] text-green2 mb-[50px]">Ďakujeme</p>
            <p className="text-center font-bold leading-[32px] text-[24px] tracking-[-0.1px]">Vaša správa bola úspešne doručená.</p>
            <p className="text-center font-bold leading-[32px] text-[24px] tracking-[-0.1px] mb-[50px]">Budeme Vás kontaktovať čo najskôr.</p>
            <div className='flex gap-[10px] items-center justify-center mb-[185px]'>
                <LeftArrowIcon stroke="#476761"/>
                <Link href='/'>
                    <a className="font-medium text-[18px] leading-7 text-[#476761]">Späť</a>
                </Link>
            </div>
        </>
    )
}

export default Dakujeme;