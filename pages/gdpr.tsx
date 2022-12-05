import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const GDPR = () => {
    return (
        <>
            <Head>
                <title>GDPR | Olivia Residence</title>
            </Head>
            <div className="flex justify-center">
                <div className="mx-4 mb-[210px] w-full xl:max-w-[1200px]">
                    <h1 className="text-center mb-[40px] mt-[85px] font-bold text-[40px] leading-[48px] tracking-[-0.5px]">Ochrana <br/> osobných
                        údajov</h1>
                    <h3 className="font-bold text-center">Informovanie</h3>
                    <p className="text-center font-bold">
                        dotknutej osoby s informáciami potrebnými k spracúvaniu osobných údajov podľa článku 13
                        Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. mája 2016 o ochrane fyzických osôb
                        pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov, ktorým sa zrušuje smernica
                        95/46/ES (všeobecné nariadenie o ochrane údajov), resp. podľa § 19 ods. 1 a 2 zákona č. 18/2018
                        Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov

                    </p>
                    <hr/>
                    <div className={'py-[15px]'}>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Prevádzkovateľ:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto '}>EURO INVEST spol. s r.o.</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Adresa prevádzkovateľa:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto '}>Tomášikova 50/E 831 04 Bratislava</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>IČO prevádzkovateľa:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto '}>31359426</span>
                        </div>
                    </div>
                    <hr className={'border'}/>
                    <div className={'flex flex-col gap-[25px] mt-[15px]'}>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Spracúvané osobné údaje:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto '}>meno a priezvisko, e-mailová adresa a/alebo telefónne číslo</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Osobitné kategórie spracúvaných osobných údajov:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>osobitná kategória osobných údaj sa nespracúva</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Účel spracúvania:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>zasielanie marketingových správ</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Kategórie dotknutých osôb:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>fyzické osoby, ktoré vyplnili dotazník na webovej stránke: www.oliviaresidence.sk</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Právny základ spracúvania:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>čl. 6 ods. 1 písm. a) všeobecného nariadenia o ochrane údajov – súhlas dotknutej osoby</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Doba spracovania:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>3 roky</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Poskytovanie osobných
                                údajov tretím stranám:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>
                                zákonom oprávnené subjekty dpMarketingGroup, s. r. o., Námestie sv. Egídia 55, 058 01 Poprad, IČO:52526071
                            </span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Cezhraničný prenos a
                                automatizované rozhodovanie
                                vrátane profilovania:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>neuskutočňuje sa</span>
                        </div>
                        <div className={'flex flex-col xl:flex-row justify-between'}>
                            <h4 className={'font-bold'}>Práva dotknutej osoby:</h4>
                            <span className={'w-full xl:max-w-[500px] ml-auto'}>
                                právo požadovať od prevádzkovateľa prístup k osobným údajom týkajúcim sa dotknutej osoby, právo na opravu alebo vymazanie, alebo obmedzenie spracúvania osobných údajov, právo namietať proti spracúvaniu osobných údajov, právo na prenosnosť osobných údajov, právo podať sťažnosť alebo návrh na začatie konania dozornému orgánu, ktorým je Úrad na ochranu osobných údajov.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface StaticProps{
    locale: string
}

export async function getStaticProps({locale}:StaticProps){
    return{
        props:{
            ...(await serverSideTranslations(locale, ['home']))
            //Will be passed to the page component as props
        }
    }
}

export default GDPR;
