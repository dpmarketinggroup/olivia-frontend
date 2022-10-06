import {Form, Hero, MapFooter} from "@components/common";
import {Phone, EmailSign, PhoneHero} from "@components/icons";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


const Kontakt = () => {
    return (
        <>
            <Head>
                <title>Kontakt | Olivia Residence</title>
            </Head>
            <Hero imgName="kontaktHero" icon={<PhoneHero/>} title="Kontakt"/>
            <div className="flex justify-center">
                <div className="mx-4 xl:mx-[165px]">
                    <p className="font-medium text-[16px] leading-6 tracking-[0.1px] mb-[20px]">V prípade otázok nás
                        neváhajte kontaktovať</p>
                    <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[135px]">
                        <Form isGreen={true}/>
                        <div>
                            <div className="flex gap-[20px] items-center mb-[20px]">
                                <Image
                                    objectFit="cover"
                                    width={60}
                                    height={60}
                                    alt="Jozef Mrkvička"
                                    src="/img/bozenaNemcova.png"
                                />
                                <div className={'leading-6'}>
                                    <p className="font-bold">Božena Nemcová</p>
                                    <span className="text-[14px]">Sales Assistant</span>
                                </div>
                            </div>
                            <div className="mb-[100px] xl:mb-[20px]">
                                <div className="flex gap-[20px] items-center">
                                    <Phone/>
                                    <Link href={'tel:+421911000000'}>
                                        <a className="font-bold text-[18px] leading-7">+421 911 000 000</a>
                                    </Link>
                                </div>
                                <div className="flex gap-[20px] items-center">
                                    <EmailSign/>
                                    <Link href={'mailto:info@oliviaresidence.sk'}>
                                        <a className="font-bold text-[18px] leading-7">info@oliviaresidence.sk</a>
                                    </Link>
                                </div>
                            </div>
                            <p className="hidden xl:inline-block font-medium text-[#676766] w-full xl:max-w-[335px]">V
                                prípade záujmu o prenájom obchodného priestoru ma neváhajte kontaktovať</p>
                        </div>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    )
}

export default Kontakt;
