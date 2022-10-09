import Head from "next/head";
import {Modal, Select} from "@mantine/core";
import {Description, Form, MapFooter} from "@components/common";
import {ArrowDownNotFilledIcon, Bank, FloorPlan, RightArrow, Severka, Star} from "@components/icons";
import Link from "next/link";
import Image from "next/image";
import {CustomSwiper} from "@components/swiper";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useStore} from "../../lib/store/useStore";
import {Button} from "@components/ui";
import {CarDescription} from "@components/common/Description/Description";

const ApartmentDetail = () => {
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);

    const router = useRouter()

    const getApartment = useStore(state => state.getApartment)
    const apartment = useStore(state => state.selectedApartment)

    useEffect(() => {
        if (router.query.id) getApartment(Number(router.query.id));
    }, [router.query])

    if (!apartment || !apartment.data) return <div className={'h-screen'}>No apartment found</div>

    const {
        cena,
        dostupnost,
        kuchynska_miestnostv2_rozloha,
        kupelna_wc_rozloha,
        cislo_bytu,
        celkova_rozloha,
        balkon_rozloha,
        obyvacia_izba_rozloha,
        izba_rozloha,
        izba2_rozloha,
        izba3_rozloha,
        izba4_rozloha,
        predsien_rozloha,
        chodba_rozloha,
        pracovna_rozloha,
        spaci_kut_rozloha,
        kupelna_rozloha,
        wc_rozloha,
        terasa_rozloha
    } = apartment.data.attributes
    return (
        <>
            <Head>
                <title>Detail bytu | Olivia Residence</title>
            </Head>
            <Modal opened={opened} onClose={() => setOpened(false)} centered>
                <Form isGreen={false}/>
            </Modal>
            <Modal className="gallery-modal" opened={opened2} size={770000} onClose={() => setOpened2(false)} centered>
                {/*<CustomSwiper title={} swiperSlides={}/>*/}
            </Modal>
            <div className="flex justify-center">
                <div>
                    <div className="flex justify-center my-[70px]">
                        <div className="mx-4 xl:mx-[165px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] xl:text-[40px] w-[250px] xl:w-auto leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Detail
                                    apartmánu</h1>
                            </div>
                            <div
                                className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between">
                                <div
                                    className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px]">
                                    <Select
                                        className="w-[120px] floor-num"
                                        data={[
                                            "4. podlažie", "5. podlažie", "7. podlažie", "8. podlažie", "9. podlažie", "10. podlažie", "11. podlažie", "12. podlažie",
                                        ]}
                                        placeholder="7. podlažie"
                                        variant="unstyled"
                                        rightSection={<ArrowDownNotFilledIcon/>}
                                        rightSectionWidth={-70}
                                        styles={{rightSection: {pointerEvents: 'none'}}}
                                        transitionDuration={80}
                                    />
                                </div>
                                <div
                                    className="flex gap-[18px] xl:gap-[15px] items-center py-[11px] xl:py-[20px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[270px]">
                                    <Link href="/pages/ponuka-bytov">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber
                                            podlažia</a>
                                    </Link>
                                    <RightArrow stroke="#00000033"/>
                                    <Link href="/pages/vyber-bytu-na-podlazi">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5  text-[#00000033]">Výber
                                            apartmánu</a>
                                    </Link>
                                    <RightArrow stroke="#00000033"/>
                                    <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Detail apartmánu</span>
                                </div>
                                <div className="hidden xl:inline-block">
                                    <Severka/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 xl:mx-[165px]">
                        <h3 className="mb-[25px] font-bold text-[20px] xl:text-[24px] leading-[32px] tracking-[-0.1px] text-center xl:text-left">Apartmán
                            č. {cislo_bytu}</h3>
                        <div onClick={() => setOpened2(true)}
                             className="flex flex-col xl:flex-row gap-[20px] xl:gap-[40px] mb-[70px] items-center xl:items-start justify-center">
                            <div className="w-[290px] xl:w-[780px] h-[126px] xl:h-[460px] xl:flex justify-center">
                                {/*<div className="mx-auto xl:mx-0 h-[126px] xl:h-[380px] w-[100px] xl:w-[300px] relative">*/}
                                {/*    <Image*/}
                                {/*        objectFit="fill"*/}
                                {/*        layout="fill"*/}
                                {/*        alt="hero image"*/}
                                {/*        src="/img/apartment1.png"*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>
                            <div className="flex flex-col gap-[20px] xl:gap-[40px]">
                                <div className="w-[290px] h-[126px] relative">
                                    <Image
                                        objectFit="fill"
                                        layout="fill"
                                        alt="hero image"
                                        src="/img/room2.jpg"
                                    />
                                </div>
                                <div className="w-[290px] h-[126px] relative">
                                    <Image
                                        objectFit="fill"
                                        layout="fill"
                                        alt="hero image"
                                        src="/img/room.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col xl:flex-row gap-[20px] xl:gap-[75px] items-center ml-4 xl:ml-[165px] mb-[85px]">
                        <div className="flex gap-[15px] items-center">
                            <Bank/>
                            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">Financovanie</span>
                            <div className="flex gap-[8px] items-center">
                                <Link href='/pages/o-projekte#financovanie'>
                                    <a className="font-medium text-[14px] leading-5 text-green2">Viac</a>
                                </Link>
                                <RightArrow stroke="#476761"/>
                            </div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <Star/>
                            <span
                                className="font-bold text-[16px] leading-6 tracking-[0.1px]">Nadštandardné vybavenie</span>
                            <div className="flex gap-[8px] items-center">
                                <Link href='/pages'>
                                    <a className="font-medium text-[14px] leading-5 text-green2">Viac</a>
                                </Link>
                                <RightArrow stroke="#476761"/>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto xl:mx-[165px] w-[350px] xl:w-auto">
                        <div className="flex justify-between mb-[25px]">
                            <p className="text-[#676766] font-medium text-[16px] leading-6 tracking-[0.1px]">Číslo
                                apartmánu</p>
                            <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">{cislo_bytu}</span>
                        </div>
                        <div className="flex justify-between mb-[25px] items-center">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Cena</p>
                            <span className="font-bold text-[24px] leading-[32px] tracking-[-0.1px]">{cena} €</span>
                        </div>
                        <div className="flex justify-between mb-[70px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Dostupnosť</p>
                            <span
                                className="font-bold text-[16px] leading-6 tracking-[0.1px] text-[#476761]">{dostupnost}</span>
                        </div>
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">Názov</p>
                            <span
                                className="font-medium text-[14px] leading-5 tracking-[0.1px] opacity-40">Plocha</span>
                        </div>
                        {kuchynska_miestnostv2_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Kuchyňa</p>
                                <span>{kuchynska_miestnostv2_rozloha} m²</span>
                            </div>
                        )}
                        {predsien_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Predsieň</p>
                                <span>{predsien_rozloha} m²</span>
                            </div>
                        )}
                        {obyvacia_izba_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Obývacia izba</p>
                                <span>{obyvacia_izba_rozloha} m²</span>
                            </div>
                        )}
                        {chodba_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Chodba</p>
                                <span>{chodba_rozloha} m²</span>
                            </div>
                        )}
                        {pracovna_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Pracovňa</p>
                                <span>{pracovna_rozloha} m²</span>
                            </div>
                        )}
                        {spaci_kut_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Spací kút</p>
                                <span>{spaci_kut_rozloha} m²</span>
                            </div>
                        )}
                        {izba4_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Šatník</p>
                                <span>{izba4_rozloha} m²</span>
                            </div>
                        )}
                        {izba_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Izba č.1</p>
                                <span>{izba_rozloha} m²</span>
                            </div>
                        )}
                        {izba2_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Izba č.2</p>
                                <span>{izba2_rozloha} m²</span>
                            </div>
                        )}
                        {izba3_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Izba č.3</p>
                                <span>{izba3_rozloha} m²</span>
                            </div>
                        )}
                        {kupelna_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Kúpeľňa</p>
                                <span>{kupelna_rozloha} m²</span>
                            </div>
                        )}
                        {wc_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">WC</p>
                                <span>{wc_rozloha} m²</span>
                            </div>
                        )}
                        {kupelna_wc_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Kúpelňa + WC</p>
                                <span>{kupelna_wc_rozloha} m²</span>
                            </div>
                        )}
                        {terasa_rozloha && (
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Terasa</p>
                                <span>{terasa_rozloha} m²</span>
                            </div>
                        )}
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">Celková výmera</p>
                            <span className="font-bold">{celkova_rozloha} m²</span>
                        </div>
                        {balkon_rozloha && (
                            <>
                                <div className="flex justify-between mb-[25px]">
                                    <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Balkón</p>
                                    <span>7.67 m²</span>
                                </div>
                                <div className="flex justify-between mb-[70px]">
                                    <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">Celková výmera +
                                        Balkón</p>
                                    <span className="font-bold">{(celkova_rozloha - balkon_rozloha - terasa_rozloha).toFixed(2)} m²</span>
                                </div>
                            </>
                        )}
                        <Button onClick={() => setOpened(true)} variant={'filled'} height={50} className={'w-full'}> Mám
                            záujem o apartmán č. {cislo_bytu}</Button>
                    </div>
                    <div className="flex flex-col gap-[30px] items-center mb-[120px] xl:mb-[190px] xl:mt-[160px]">
                        <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                        <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] w-[250px] xl:w-auto text-center xl:text-left">Pôdorys
                            apartmánu na
                            stiahnutie</h1>
                        <Button variant={'filled'} href={'/'}>
                            Stiahnuť pôdorys
                        </Button>
                    </div>
                    <CarDescription/>
                    <CustomSwiper/>
                </div>
            </div>
            <MapFooter/>
        </>
    );
};

export default ApartmentDetail;
