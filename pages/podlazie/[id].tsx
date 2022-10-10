import {useRouter} from "next/router";
import Head from "next/head";
import {ArrowDownNotFilledIcon, FloorPlan, RightArrow, Severka} from "@components/icons";
import {Select} from "@mantine/core";
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

const FloorDetail = () => {
    const router = useRouter()
    const fetch = useStore(state => state.setSelectedApartment)
    const apartment = useStore(state => state.selectedApartment)
    console.log(apartment)

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

    function renderDetail() {

        if (!apartment || !apartment.length) {
            return <p className="pb-[420px] w-[300px] mx-auto text-[18px] font-bold text-center">Kliknutím na
                interaktívnu mapu zobrazíte informácie o byte</p>
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
                            <span className="pl-[70px] font-bold text-[16px] leading-6 tracking-[0.1px]">3 - izbový apartmán</span>
                        </>
                    ) : <span></span>}
                    <span
                        className="pr-[70px] font-bold text-[16px] leading-6 tracking-[0.1px] text-right">č. {cislo_bytu}</span>
                    <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Dostupnosť</span>
                    <div className="pr-[70px] text-[14px] font-medium leading-5 text-white ml-[75px] w-[53px]">
                        <span className="px-[10px] py-[5px] bg-[#476761]">{dostupnost}</span>
                    </div>
                    {pocet_izieb && (
                        <>
                            <span className="pl-[70px] text-[14px] leading-7 text-[#999999]">Počet izieb</span>
                            <span className="pr-[70px] text-right font-bold text-[14px] leading-5">{pocet_izieb}</span>
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
                    Detail bytu
                </Button>
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Výber bytu na podlaží | Olivia Residence</title>
            </Head>
            <div className="mx-auto mt-[60px]">
                <div>
                    <div className="my-[70px]">
                        <div className="xl:mx-auto w-full xl:max-w-[1200px]">
                            <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                                <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                                <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Výber apartmánu na podlaží</h1>
                            </div>
                            <div className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
                                <div
                                    className="flex gap-[8px] xl:gap-[13px] items-center px-[20px] xl:px-[29px] py-[7px] xl:py-[16px] bg-[#F5F5F5] rounded-[15px] xl:rounded-[33px] xl:mr-[155px]">
                                    <Select
                                        className="w-[120px] floor-num"
                                        data={[
                                            "4. podlažie", "5. podlažie", "7. podlažie", "8. podlažie", "9. podlažie", "10. podlažie", "11. podlažie", "12. podlažie", "13. podlažie", "14. podlažie",
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
                                    className="flex gap-[10px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[285px] xl:w-[450px] xl:justify-center">
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
                                <div className="hidden xl:inline-block">
                                    <Severka/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row flex-col-reverse xl:justify-between items-center xl:items-start xl:max-w-[1200px] xl:mx-auto">
                        <div className="bg-[#F5F5F5] max-h-[520px] w-full xl:w-[400px]">
                            <div className="py-[60px]">
                                {renderDetail()}
                            </div>
                        </div>
                        <div className="w-full max-w-[450px] xl:w-full xl:max-w-[690px] h-[265px] xl:h-[555px] xl:mb-[125px]">
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
