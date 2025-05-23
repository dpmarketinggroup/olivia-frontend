import Link from "next/link";
import { LeftArrow } from "@components/icons";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Router from "next/router";
import { useEffect } from "react";

function Custom404() {
    useEffect(() => {
        Router.push("/404"); // redirect (ale pozor: nekonečná slučka ak ostaneš na /404)
    }, []);
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
                    <LeftArrow stroke="#476761" />
                    <Link legacyBehavior href='/'>
                        <a className="font-medium text-[18px] leading-7 text-[#476761]">Späť</a>
                    </Link>
                </div>

            </div>
        </>
    )
}

interface StaticProps {
    locale: string
}

export async function getStaticProps({ locale }: StaticProps) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['home']))
            //Will be passed to the page component as props
        }
    }
}

export default Custom404;
