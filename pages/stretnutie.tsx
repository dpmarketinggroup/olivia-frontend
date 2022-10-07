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
                <div className="relative w-full xl:max-w-[1920px]">
                    <div className="flex flex-col items-center pt-[100px] xl:pt-[80px]">
                        <MapPoint2/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[48px] tracking-[-0.5px] text-white xl:w-[600px] text-center mb-[55px] xl:mb-[px] mt-[40px] mx-4">Nezáväzné
                            stretnutie v Predajnom mieste</h1>
                    </div>
                    <div className="hidden xl:flex h-[2px] bg-white opacity-30 max-w-[1090px] mx-auto"></div>
                    <p className="mb-[70px] xl:mb-[40px] text-[18px] leading-7 text-white xl:w-auto mx-4 xl:mx-0 text-center mt-[30px]">Vyplňte
                        formulár a zvoľte si
                        preferovaný dátum a
                        čas stretnutia.<br/> Náš predajca Vás bude
                        následne kontaktovať a potvrdí Vám termín stretnutia.
                    </p>
                    <div className="xl:flex justify-center">
                        <div className="flex flex-col xl:flex-row xl:gap-[135px] xl:items-start">
                            <div>
                                <div className="xl:mb-[125px]">
                                    <Form meeting={true} isGreen={true}/>
                                </div>
                            </div>
                            <div className="mt-[100px] xl:mt-[70px] mx-auto xl:mx-0">
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
            <div className='xl:flex bg-[#F5F5F5] w-full xl:max-w-[1920px]'>
                <div className={'xl:mx-auto'}>
                    <div className={`flex flex-col xl:flex-row  xl:gap-[85px]`}>
                        <div>
                            <div className="flex flex-col gap-[20px] mt-[55px] xl:mt-[75px] mx-4 mb-[45px]">
                                <p className="font-medium text-[14px] leading-5 text-[#999999] xl:w-[455px] text-center xl:text-start">Dohodnite
                                    si
                                    nezáväzné stretnutie alebo sa u nás zastavte v čase otváracej doby. Radi Vás
                                    privítame a zodpovieme Vaše otázky.</p>
                                <div className="flex flex-col items-center xl:items-start">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">PO - PIA</span>
                                    <span
                                        className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">10.00 - 18.00</span>
                                </div>
                                <div className="flex flex-col items-center xl:items-start">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">SO - NE</span>
                                    <span
                                        className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Zatvorené</span>
                                </div>
                                <div className="flex flex-col items-center xl:items-start">
                                <span
                                    className="font-medium text-[14px] leading-5 text-[#999999] opacity-[96]">Adresa</span>
                                    <span
                                        className="font-bold text-[24px] leading-[32px] tracking-[-0.1px] opacity-[96]">Rožňavská 1A, Bratislava</span>
                                    <div className="flex gap-[12px] items-center">
                                        <MapPoint2 width="16" height="20" fill="000000"/>
                                        <p className="font-medium text-[18px] leading-7">Fresh Market | Prízemie</p>
                                    </div>
                                </div>
                                <Link href="https://goo.gl/maps/CVbzvKFDCXY9aeaK6">
                                    <button
                                        className="hover:bg-primary font-medium text-[16px] leading-6 tracking-[0.1px] text-white py-[12px] px-[45px] bg-[#476761] mb-[55px] xl:mb-[75px]">Navigovať
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center xl:my-auto">
                            <Image
                                quality={100}
                                objectFit="cover"
                                width={540}
                                height={385}
                                alt="Mapa"
                                src={"/img/smallMap.jpg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mx-4 xl:mx-0'>
                <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[240px] items-center">
                    <div className="flex justify-center mt-[200px] xl:my-[115px]">
                        <Image
                            quality={100}
                            objectFit="cover"
                            width={540}
                            height={385}
                            alt="3d map"
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
