import {useRouter} from "next/router";
import Head from "next/head";
import {ArrowDownNotFilledIcon, FloorPlan, RightArrow, Severka} from "@components/icons";
import Link from "next/link";
import {MapFooter} from "@components/common";
import {useStore} from "../../lib/store/useStore";
import {Button} from "@components/ui";
import {
    Floor10,
    Floor11,
    Floor12,
    Floor13,
    Floor14,
    Floor3,
    Floor4,
    Floor5,
    Floor6,
    Floor7,
    Floor8,
    Floor9
} from "@components/floors";
import React, {useState} from "react";

const FloorDetail = () => {
    const router = useRouter()
    const fetch = useStore(state => state.setSelectedApartment)
    const apartment = useStore(state => state.selectedApartment)
    console.log(apartment)

    const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false)


    function currentApartmentRenderSvg() {
        switch (router.query.id) {
            case "3": {
                return <Floor3/>
            }
            case "4": {
                return <Floor4/>
            }
            case "5": {
                return <Floor5/>
            }
            case "6": {
                return <Floor6/>
            }
            case "7": {
                return <Floor7/>
            }
            case "8": {
                return <Floor8/>
            }
            case "9": {
                return <Floor9/>
            }
            case "10": {
                return <Floor10/>
            }
            case "11": {
                return <Floor11/>
            }
            case "12": {
                return <Floor12/>
            }
            case "13": {
                return <Floor13/>
            }
            case "14": {
                return <Floor14/>
            }
            default: {
                return <Floor10/>
            }
        }
    }

    function renderBalcony() {
        const {
            balkon_rozloha,
            terasa_rozloha
        } = apartment[0].attributes || null

        if (balkon_rozloha && terasa_rozloha) {
            return (
                <>
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Terasa m²</span>
                    <span
                        className="pr-[70px] text-right font-bold text-[14px] leading-5">{terasa_rozloha} m²</span>
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Balkon m²</span>
                    <span
                        className="pr-[70px] text-right font-bold text-[14px] leading-5">{balkon_rozloha} m²</span>
                </>
            )
        }
        if (balkon_rozloha || terasa_rozloha) {
            return (
                <>
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Balkón | Terasa m²</span>
                    <span
                        className="pr-[70px] text-right font-bold text-[14px] leading-5">{balkon_rozloha || terasa_rozloha} m²</span>
                </>
            )
        }
    }

    function getApartmentNumber(pocet_izieb: string): number {
        switch (pocet_izieb) {
            case "jedno-izbový":
                return 1;
            case "jeden a pol-izbový":
                return 1.5;
            case "dvoj-izbový":
                return 2;
            case "troj-izbový":
                return 3;
            case "štvor-izbový":
                return 3;
        }
        return 0;
    }
    function getAvailabilityBgColor(availability: 'voľný' | 'rezervovaný' | 'predaný') {
        switch (availability) {
            case "voľný":
                return "bg-[#476761]"
            case "rezervovaný":
                return "bg-[#E4B80B]"
            case "predaný":
                return "bg-[#EE4C36]"
        }
    }
    function renderDetail() {
        if (!apartment || !apartment.length) {
            return <p className="pb-[420px] w-[300px] mx-auto text-[18px] font-bold text-center">Kliknutím na
                interaktívnu mapu zobrazíte informácie o apartmáne</p>
        }
        const {
            cislo_bytu,
            dostupnost,
            celkova_rozloha,
            pocet_izieb,
            balkon_rozloha,
            terasa_rozloha
        } = apartment[0].attributes || null
        const {id} = apartment[0]

        return (
            <div className={'flex flex-col'}>
                <div className="grid grid-cols-2 gap-y-[30px] mb-[40px]">
                    {pocet_izieb ? (
                        <>
                            <span
                                className="pl-[70px] font-bold text-[16px] leading-6 tracking-[0.1px]">{getApartmentNumber(pocet_izieb)}-izbový apartmán</span>
                        </>
                    ) : <span></span>}
                    <span
                        className="pr-[70px] font-bold text-[16px] leading-6 tracking-[0.1px] text-right">č. {cislo_bytu}</span>
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Dostupnosť</span>
                    <div className="pr-[70px] text-[14px] font-medium leading-5 text-white ml-[75px] w-[53px]">
                        <span className={`px-[10px] py-[5px] ${getAvailabilityBgColor(dostupnost)}`}>{dostupnost}</span>
                    </div>
                    {pocet_izieb && (
                        <>
                            <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Počet izieb</span>
                            <span className="pr-[70px] text-right font-bold text-[14px] leading-5">{getApartmentNumber(pocet_izieb)}</span>
                        </>
                    )}
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Apartmán m²</span>
                    <span className="pr-[70px] text-right font-bold text-[14px] leading-5">{celkova_rozloha} m²</span>
                    {renderBalcony()}
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Celková výmera</span>
                    <span
                        className="pr-[70px] text-right font-bold text-[14px] leading-5">{(celkova_rozloha + balkon_rozloha + terasa_rozloha).toFixed(2)} m²</span>
                </div>
                <Button className={'mx-auto'} variant={'filled'} href={`/apartman/${id}`}>
                    Detail apartmánu
                </Button>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Výber apartmánu na podlaží | Olivia Residence</title>
            </Head>
            <div className="mx-auto mt-[60px]">
                <div>
                    <div className="my-[100px]">
                        <div className="xl:mx-auto w-full xl:max-w-[1200px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Výber
                                    apartmánu na podlaží</h1>
                            </div>
                            <div
                                className="relative flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
                                <div
                                    className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute cursor-pointer self-start xl:self-auto mx-4"
                                    onClick={() => setIsFloorDropDownCLicked((prevState) => !prevState)}>
                                    <span
                                        className="drop-span font-bold text-[18px] leading-7 text-[#476761]">{router.query.id}. poschodie</span>
                                    <div className={`${isFloorDropDownCLicked ? "dropdown-content" : "hidden"}`}>
                                        <div
                                            className=" flex flex-col px-[30px] text-[18px] leading-7 text-[#476761] font-medium">
                                            <Link href={'/podlazie/3'}>
                                                <a className="py-[7px]">3. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/4'}>
                                                <a className="py-[7px]">4. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/5'}>
                                                <a className="py-[7px]">5. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/6'}>
                                                <a className="py-[7px]">6. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/7'}>
                                                <a className="py-[7px]">7. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/8'}>
                                                <a className="py-[7px]">8. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/9'}>
                                                <a className="py-[7px]">9. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/10'}>
                                                <a className="py-[7px]">10. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/11'}>
                                                <a className="py-[7px]">11. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/12'}>
                                                <a className="py-[7px]">12. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/13'}>
                                                <a className="py-[7px]">13. poschodie</a>
                                            </Link>
                                            <Link href={'/podlazie/14'}>
                                                <a className="py-[7px]">14. poschodie</a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ml-[10px] inline-block">
                                        <ArrowDownNotFilledIcon/>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-[10px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[130px] xl:w-[450px] xl:justify-center">
                                    <Link href="/ponuka-bytov">
                                        <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber
                                            podlažia</a>
                                    </Link>
                                    <RightArrow stroke="#00000033"/>
                                    <span
                                        className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Výber apartmánu</span>
                                    <RightArrow stroke="#476761"/>
                                    <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Detail apartmánu</span>
                                </div>
                                <div className="absolute bottom-0 left-[300px] xl:static inline-block">
                                    <Severka/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col xl:flex-row flex-col-reverse xl:justify-between items-center xl:items-start xl:max-w-[1200px] xl:mx-auto">
                        <div className="bg-[#F5F5F5] max-h-[520px] w-full xl:w-[400px]">
                            <div className="py-[60px]">
                                {renderDetail()}
                            </div>
                        </div>
                        <div
                            className="w-full max-w-[450px] xl:w-full xl:max-w-[690px] h-[265px] xl:h-[555px] xl:mb-[125px]">
                            {currentApartmentRenderSvg()}
                        </div>
                    </div>
                </div>
            </div>
            <MapFooter/>
        </>
    );
};

export default FloorDetail;
