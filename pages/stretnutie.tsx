import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import {Form} from "@components/common/";
import {Phone, EmailSign, MapPoint2} from "@components/icons";

const Stretnutie = () => {
    return (
        <>
            <Head>
                <title>Stretnutie | Olivia Residence</title>
            </Head>
            <div className="flex justify-center bg-[#0E3F3B]">
                <div className="relative">
                    <div className="flex flex-col items-center pt-[50px] xl:pt-[80px]">
                        <MapPoint2/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[48px] tracking-[-0.5px] text-white w-[380px] xl:w-[600px] text-center mb-[55px] xl:mb-[120px] mt-[40px]">Nezáväzné
                            stretnutie v Predajnom mieste</h1>
                    </div>
                    <div
                        className="hidden xl:inline-block absolute top-[28%] left-0 w-[1090px] h-[2px] bg-white opacity-30"></div>
                    <div className="">
                        <p className="mb-[70px] xl:mb-[40px] text-[18px] leading-7 text-white w-[350px] xl:w-auto mx-auto xl:mx-0">Vyplňte
                            formulár a zvoľte si
                            preferovaný dátum a
                            čas stretnutia.<br/> Náš predajca Vás bude
                            následne kontaktovať a potvrdí Vám termín stretnutia.
                        </p>
                        <div className="flex flex-col xl:flex-row xl:gap-[135px] items-center xl:items-start">
                            <div>
                                <div className="xl:mb-[125px]">
                                    <Form meeting={true} isGreen={true}/>
                                </div>
                            </div>
                            <div className="mt-[50px] xl:mt-[70px]">
                                <div className="flex gap-[20px] items-center mb-[20px]">
                                    <div className="h-[60px] w-[60px] relative">
                                        <Image
                                            objectFit="cover"
                                            layout="fill"
                                            alt="Jozef Mrkvicka"
                                            src="/img/bozenaNemcova.png"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[16px] leading-6 tracking-[0.1px] text-white">Božena
                                            Nemcová</p>
                                        <span className="text-[14px] leading-5 text-white">Sales Assistant</span>
                                    </div>
                                </div>
                                <div className="mb-[90px] xl:mb-[20px]">
                                    <div className="flex gap-[20px] items-center">
                                        <Phone/>
                                        <Link href={'tel:+421911000000'}>
                                            <a className="font-bold text-[18px] leading-7 text-white">+421 911 000
                                                000</a>
                                        </Link>
                                    </div>
                                    <div className="flex gap-[20px] items-center">
                                        <EmailSign/>
                                        <Link href={'mailto:info@oliviaresidence.sk'}>
                                            <a className="font-bold text-[18px] leading-7 text-white">info@oliviaresidence.sk</a>
                                        </Link>
                                    </div>
                                </div>
                                <p className="hidden xl:inline-block font-medium text-[14px] leading-5 tracking-[0.1px] w-[305px] text-white pb-[40px] xl:pb-0">V
                                    prípade otázok sa na mňa neváhajte obrátiť.
                                    Rada Vám poradím a zodpoviem Vaše otázky.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center bg-[#F5F5F5]'>
                <div>
                    <div className={`flex flex-col xl:flex-row xl:gap-[85px] w-full items-center xl:items-start`}>
                        <div>
                            <div className="flex flex-col gap-[20px] mt-[55px] xl:mt-[75px] mx-[165px] mb-[45px]">
                                <p className="font-medium text-[14px] leading-5 text-[#999999] xl:w-[455px]">Dohodnite
                                    si
                                    nezáväzné stretnutie alebo sa u nás zastavte v čase otváracej doby. Radi Vás
                                    privítame a zodpovieme Vaše otázky.</p>
                                <div className="flex flex-col">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">PO - PIA</span>
                                    <span
                                        className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">10.00 - 18.00</span>
                                </div>
                                <div className="flex flex-col">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">SO - NE</span>
                                    <span
                                        className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Zatvorené</span>
                                </div>
                                <div className="flex flex-col">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">Adresa</span>
                                    <span
                                        className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Rožňavská 1A, Bratislava</span>
                                    <div className="flex gap-[12px] items-center">
                                        <MapPoint2 width="16" height="20" fill="000000"/>
                                        <p className="font-medium text-[18px] leading-7">Fresh Market | Prízemie</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="https://goo.gl/maps/CVbzvKFDCXY9aeaK6">
                                <button
                                    className="hover:bg-primary font-medium text-[16px] leading-6 tracking-[0.1px] text-white py-[12px] px-[45px] bg-[#476761] ml-[165px] mb-[55px] xl:mb-[75px]">Navigovať
                                </button>
                            </Link>
                        </div>
                        <div className={`h-[385px] w-[400px] xl:w-[540px] relative xl:top-[75px]`}>
                            <Image
                                objectFit="cover"
                                layout="fill"
                                alt="hero image"
                                src={"/img/smallMap.jpg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[240px] items-center">
                    <div
                        className="h-[250px] xl:h-[385px] w-[340px] xl:w-[540px] max-w-full relative mt-[200px] mb-[25px] xl:my-[115px]">
                        <Image
                            objectFit="cover"
                            layout="fill"
                            alt="hero image"
                            src={"/img/map3d.png"}
                        />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span
                            className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">Tu sa nachádzame</span>
                        <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Rožňavská 1A, Bratislava</span>
                        <div className="flex gap-[12px] items-center mb-[200px] xl:mb-0">
                            <MapPoint2 width="16" height="20" fill="000000"/>
                            <p className="font-medium text-[18px] leading-7">Fresh Market | Prízemie</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stretnutie;