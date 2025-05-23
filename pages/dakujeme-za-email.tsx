import Link from "next/link";
import { LeftArrow } from "@components/icons";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function DakujemeZaEmail() {
    const { t: translate } = useTranslation('home');
    return (
        <>
            <Head>
                <title>Ďakujeme za email | Olivia Residence</title>
            </Head>
            <p className="font-bold text-[56px] leading-[60px] text-center tracking-[-1px] mt-[185px] text-green2 mb-[50px]">{translate("thank-you")}</p>
            <p className="text-center mx-auto font-bold text-[24px] leading-[32px] tracking-[-0.1px] mb-[50px] w-[300px] xl:w-[500px]">{translate("subscription")}</p>
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

export default DakujemeZaEmail;
