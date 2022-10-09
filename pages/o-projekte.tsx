import Link from "next/link";
import {MapFooter, Articles, Subscription, Timeline, Hero, Description} from "@components/common";
import {
    House,
    UniCredit,
    Phone,
    EmailSign
} from "@components/icons";
import Head from "next/head";
import Image from "next/image";

const OProjekte = () => {
    return (
        <div className={'flex flex-col'}>
            <Head>
                <title>O projekte | Olivia Residence</title>
            </Head>
            <Hero imgName={"oProjekteHero"} icon={<House/>} title={"O projekte"}
                  description="Všetky podstatné informácie o Vašom novom bývaní na jednom mieste."/>
            <Timeline/>
            <div className={'px-[1rem] xl:px-0 xl:mx-auto'}>
                <Link href="/stretnutie">
                    <button
                        className="hover:bg-primary bg-[#476761] w-full xl:w-[210px] h-[50px] text-white font-medium text-[16px] leading-[24px] mb-[90px] xl:mb-[185px]">
                        Nezáväzné stretnutie
                    </button>
                </Link>
            </div>
            <Description src={'/img/room3.jpg'}>
                <p>kkt</p>
            </Description>
            <div className="flex justify-center" id="financovanie">
                <div className="w-full">
                    <div className="relative mb-[100px] xl:mb-[200px] flex flex-col">
                        <div className="bg-black w-full px-[1rem] xl:px-0">
                            <div
                                className="flex flex-col gap-[30px] justify-center items-center pt-[130px] pb-[350px] xl:pb-[270px]">
                                <h2 className="font-bold text-[32px] xl:text-[40px] leading-[48px] text-[#F5F5F5] text-center xl:text-left">Podmienky
                                    financovania</h2>
                                <span
                                    className="text-[16px] leading-6 tracking-[0.1px] text-[#89A6A2]">Financujúca banka</span>
                                <UniCredit classname="w-full h-[44px] xl:-h-[65] xl:-w-[492px]"/>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-[30px] xl:justify-center bg-[background: #F5F5F5] -translate-y-1/2">
                            {[
                                {step: "1. krok", title: "Rezervačná zmluva", offer: "1 500 €"},
                                {step: "2. krok", title: "Zmluva o budúcej zmluve", offer: "20% z ceny bytu"},
                                {step: "3. krok", title: "Kúpna zmluva", offer: "80% z ceny bytu"},
                            ].map(({step, title, offer}, index) => (
                                <div key={index}
                                     className="flex flex-col gap-[20px] py-[25px] px-[30px] text-center items-center drop-shadow-[0_0_60px_rgba(0,0,0,0.1)] bg-white mx-[1rem] xl:mx-0">
                                    <span
                                        className="font-medium text-[16px] leading-6 tracking-[0.1px] text-[#C6C6C6]">{step}</span>
                                    <h4 className="font-bold text-[18px] leading-7 ">{title}</h4>
                                    <span
                                        className="font-bold text-[24px] leading-8 tracking-[-0.1px] text-[#476761]">{offer}</span>
                                    <p className="hidden xl:inline-block w-[220px] text-[16px] leading-6 tracking-[0.1px] text-[#676766]">Zostaňte
                                        informovaný. Najnovšie informácie o projekte Karpatská Smart Residence.</p>
                                </div>
                            ))}
                        </div>
                        <div className=" w-[full] -mt-[250px]">
                            <div
                                className="flex flex-col xl:flex-row gap-[50px] xl:gap-[100px] xl:pt-[270px] xl:pb-[145px] pb-[50px] xl:mx-[165px] items-center justify-center">
                                <div className="hidden xl:inline-block">
                                    <h4 className="font-bold text-[18px] leading-7 mb-[10px]">Finančný poradca UniCredit
                                        Bank</h4>
                                    <p className="text-[14px] leading-[20px] text-[#999999] w-[350px]">Neváhajte ma
                                        kontaktovať. Predstavím Vám detailný model financovania a zodpoviem všetky Vaše
                                        otázky.</p>
                                </div>
                                <div className="flex gap-[20px] items-center">
                                    <div className="h-[60px] w-[60px] relative">
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            alt="Jozef Mrkvička"
                                            src="/img/jozefOndercok.png"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[16px] leading-6 tracking-[0.1px] ">Jozef Onderčo</p>
                                        <span className="text-[14px] leading-5">Fin. poradca | UniCredit Bank</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[20px]">
                                        <Phone/>
                                        <Link href={'tel:+421918501835'}>
                                            <a className="font-bold text-[18px] leading-7">+421 918 501 835</a>
                                        </Link>
                                    </div>
                                    <div className="flex gap-[20px]">
                                        <EmailSign/>
                                        <Link href={'mailto:jozef.onderco@unicreditgroup.sk'}>
                                            <a className="font-bold text-[18px] leading-7">jozef.onderco@unicreditgroup.sk</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Articles/>
            <Subscription/>
            <MapFooter/>
        </div>
    )
}

export default OProjekte;
