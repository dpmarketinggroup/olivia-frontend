
import Link from "next/link";
import { LeftArrow } from "@components/icons";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PhoneBig, PencilIcon } from "@components/icons";

function Dakujeme() {
    const { t: translate } = useTranslation('home');
    return (
        <>
            <Head>
                <title>Niečo sa pokazilo | Olivia Residence</title>
            </Head>
            <p className="font-bold text-[56px] leading-[60px] text-center tracking-[-1px] mt-[185px] text-green2 mb-[50px]">{translate("error")}</p>
            <p className="text-center font-bold leading-[32px] text-[24px] tracking-[-0.1px]">{translate("error-text-1")}<a className="text-green2" href="tel:+421901923324">+421 901 923 324</a></p>
            <p className="text-center font-bold leading-[32px] text-[24px] tracking-[-0.1px] mb-[50px]">{translate("error-text-2")}<a className="text-green2" href="mailto:info@oliviaresidence.sk">info@oliviaresidence.sk</a></p>
            <div className='flex gap-[10px] items-center justify-center mb-[185px]'>
                <LeftArrow stroke="#476761" />
                <Link href='/' legacyBehavior>
                    <a className="font-medium text-[18px] leading-7 text-[#476761]">{translate("home-page")}</a>
                </Link>
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

export default Dakujeme;
