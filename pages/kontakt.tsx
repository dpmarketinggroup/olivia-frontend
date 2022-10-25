import {Form, Hero, MapFooter} from "@components/common";
import { EmailSign, PhoneHero} from "@components/icons";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Kontakt = () => {
    return (
        <div className={'flex flex-col '}>
            <Head>
                <title>Kontakt | Olivia Residence</title>
            </Head>
            <Hero imgName="kontaktHero" icon={<PhoneHero/>} title="Kontakt"/>
            <div className="mx-auto flex flex-col">
                <p className="font-medium text-[16px] leading-6 mb-[20px] text-center xl:text-start">V prípade
                    otázok nás neváhajte kontaktovať</p>
                <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[135px]">
                    <div className="xl:mb-[125px]">
                        <Form isGreen={false}/>
                    </div>
                    <div className="mx-auto xl:mx-0">
                        <div className="flex gap-[20px] items-center mb-[20px]">
                            <Image
                                objectFit="cover"
                                width={60}
                                height={60}
                                alt="Jozef Mrkvička"
                                src="/img/Oval.png"
                                loading={'eager'}
                            />
                            <div className={'leading-6'}>
                                <p className="font-bold">JUDr. Ivan Jurík</p>
                                <span className="text-[14px]">Sales Assistant</span>
                            </div>
                        </div>
                        <div className="flex gap-[20px] items-center mb-[100px] xl:mb-[20px]">
                            <EmailSign/>
                            <Link href={'mailto:info@oliviaresidence.sk'}>
                                <a className="font-bold text-[18px] leading-7">info@oliviaresidence.sk</a>
                            </Link>
                        </div>
                        <p className="hidden xl:inline-block text-[#999999] w-full xl:max-w-[335px]">
                            V prípade otázok sa na mňa neváhajte obrátiť.
                            Rád Vám poradím a zodpoviem Vaše otázky.
                        </p>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </div>
    )
}

export default Kontakt;
