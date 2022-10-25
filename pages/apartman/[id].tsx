import Head from "next/head";
import {Checkbox, Loader, Modal, Textarea, TextInput} from "@mantine/core";
import {MapFooter} from "@components/common";
import {ArrowDownNotFilledIcon, Bank, FloorPlan, RightArrow, Severka, Star} from "@components/icons";
import Link from "next/link";
import Image from "next/image";
import {CustomSwiper} from "@components/swiper";
import {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useStore} from "../../lib/store/useStore";
import {Button} from "@components/ui";
import {CarDescription} from "@components/common/Description/Description";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import {E164Number} from "libphonenumber-js";

const ApartmentDetail = () => {
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);
    const [isFloorDropDownCLicked, setIsFloorDropDownCLicked] = useState(false)
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState<E164Number>();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        terasa_rozloha,
        primarna_foto,
        dodatocna_foto1,
        dodatocna_foto2,
        podorys
    } = apartment.data.attributes

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        if (!name || !surname || !email) return;

        try {
            setLoading(true)
            await axios.post('/api/enquiry', {
                body: JSON.stringify({
                    type: 'dopyt',
                    name,
                    surname,
                    email,
                    message,
                    phone,
                    apartment: `Byt č.${cislo_bytu}`
                })
            })
        } catch (e) {
            console.error(e)
        }
        setLoading(false)
        await router.push('/dakujeme')
    }

    function getAvailabilityTextColor(availability: 'voľný' | 'rezervovaný' | 'predaný') {
        switch (availability) {
            case "predaný":
                return 'text-[#EE4C36]'
            case "rezervovaný":
                return 'text-[#E4B80B]'
            case "voľný":
                return 'text-[#476761]'
        }
    }

    return (
        <>
            <Head>
                <title>Detail bytu | Olivia Residence</title>
            </Head>
            <Modal
                sx={{
                    '.mantine-Modal-modal': {
                        width: '100%',
                        maxWidth: '770px',
                        paddingBottom: '80px'
                    }
                }}
                opened={opened}
                onClose={() => setOpened(false)}
                centered
            >
                <h3 className={'text-[32px] leading-[38px] text-center font-bold text-primary'}>Mám záujem o apartmán
                    č. {cislo_bytu}</h3>
                <form onSubmit={handleSubmit}
                      className={'flex flex-col gap-[15px] xl:w-full xl:max-w-[540px] xl:mx-auto font-pr'}>
                    <div className={'flex flex-col xl:grid grid-cols-2 gap-[15px] mt-[40px]'}>
                        <CustomInput value={name} required={true} onChange={(e) => setName(e.target.value)}
                                     name={'name'}
                                     placeholder={'Meno'}/>
                        <CustomInput value={surname} required={true} onChange={(e) => setSurname(e.target.value)}
                                     name={'surname'}
                                     placeholder={'Priezvisko'}/>
                    </div>
                    <CustomInput value={email} required={true} onChange={(e) => setEmail(e.target.value)} name={'email'}
                                 placeholder={'E-mailová adresa'}/>
                    <PhoneInput
                        style={{
                            height: '50px'
                        }}
                        international={false}
                        countries={["SK"]}
                        value={phone}
                        defaultCountry={"SK"}
                        onChange={(val) => setPhone(val)}
                        placeholder={"Telefónne číslo"}
                    />
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} name={'message'}
                              placeholder={'Vaša správa ...'} sx={{
                        '.mantine-Textarea-input': {
                            border: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.07)',
                            borderRadius: 0,
                            height: '145px'
                        },
                        '.mantine-Checkbox-input': {}
                    }}/>
                    <Checkbox
                        required={true}
                        label={'Súhlasím so spracovaním osobných údajov'}
                        size={'md'}
                        sx={{
                            '.mantine-Checkbox-label': {
                                color: '#999999',
                                fontFamily: 'Jost, sans-serif',
                                fontSize: '14px',
                                lineHeight: '20px',
                            },
                            '.mantine-Checkbox-input': {
                                backgroundColor: 'transparent',
                                border: '1.5px solid #0E3F3BCC',
                                opacity: 0.8,
                                borderRadius: 0,
                                display: 'flex',
                                alignItems: 'center'
                            },
                            '.mantine-Checkbox-input:checked': {
                                backgroundColor: '#476761',
                                opacity: 1,
                                border: 0
                            },
                            '.mantine-Checkbox-icon': {
                                color: 'white'
                            }
                        }}/>
                    <Checkbox
                        label={'Chcem aby ste mi zasielali novinky o projekte'}
                        size={'md'}
                        sx={{
                            '.mantine-Checkbox-label': {
                                color: '#999999',
                                fontFamily: 'Jost, sans-serif',
                                fontSize: '14px',
                                lineHeight: '20px',
                            },
                            '.mantine-Checkbox-input': {
                                backgroundColor: 'transparent',
                                border: '1.5px solid #0E3F3BCC',
                                opacity: 0.8,
                                borderRadius: 0,
                                display: 'flex',
                                alignItems: 'center'
                            },
                            '.mantine-Checkbox-input:checked': {
                                backgroundColor: '#476761',
                                opacity: 1,
                                border: 0
                            },
                            '.mantine-Checkbox-icon': {
                                color: 'white'
                            }
                        }}
                    />
                    <button
                        disabled={loading}
                        className={`py-[12px] bg-[#476761] hover:bg-primary text-white flex items-center justify-center gap-[10px]`}>Odoslať {loading && <Loader size={20}/>}
                    </button>
                </form>
            </Modal>
            <Modal className="gallery-modal" sx={{
                '.mantine-Modal-modal': {
                    width: '1500px'
                }
            }} opened={opened2} onClose={() => setOpened2(false)} centered>
                <div className={'w-full h-[70vh] relative'}>
                    <Image src={url} objectFit={'contain'} layout={'fill'}/>
                </div>
            </Modal>
            <div className="flex flex-col justify-center w-full xl:max-w-[1200px] mx-auto">
                <div className="my-[100px]">
                    <div className="xl:mx-auto w-full xl:max-w-[1200px]">
                        <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                            <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                            <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Detail
                                apartmánu</h1>
                        </div>
                        <div
                            className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
                            <div
                                className="dropdown px-[30px] py-[15px] bg-[#F5F5F5] rounded-[33px] apartment absolute cursor-pointer"
                                onClick={() => setIsFloorDropDownCLicked((prevState) => !prevState)}>
                                <span
                                    className="drop-span font-bold text-[18px] leading-7 text-[#476761]">{apartment.data.attributes.poschodie}. poschodie</span>
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
                                className="flex gap-[10px] xl:gap-[15px] items-center py-[11px] xl:py-[23px] px-[16px] xl:px-[25px] bg-[#F5F5F5] rounded-[33px] xl:mr-[380px] xl:w-[450px] xl:justify-center">
                                <Link href="/ponuka-bytov">
                                    <a className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber
                                        podlažia</a>
                                </Link>
                                <RightArrow stroke="#00000033"/>
                                <span
                                    className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#00000033]">Výber apartmánu</span>
                                <RightArrow stroke="#00000033"/>
                                <span className="font-medium text-[12px] xl:text-[14px] leading-5 text-[#476761]">Detail apartmánu</span>
                            </div>
                            {/*<div className="hidden xl:inline-block">*/}
                            {/*    <Severka/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="mb-[25px] font-bold text-[20px] xl:text-[24px] leading-[32px] tracking-[-0.1px] text-center xl:text-left">Apartmán
                        č. {cislo_bytu}</h3>
                    <div
                        className="flex flex-col xl:flex-row gap-[20px] xl:gap-[40px] mb-[70px] items-center xl:items-start justify-center">
                        <div className={'border border-b-0 xl:border-b-[1px] border-black mb-[-50px] xl:mb-0'}>
                            <Image
                                onClick={() => {
                                    setOpened2(true)
                                    setUrl(primarna_foto.data.attributes.url)
                                }}
                                objectFit="cover"
                                width={primarna_foto.data.attributes.width}
                                height={primarna_foto.data.attributes.height}
                                alt="hero image"
                                src={primarna_foto.data.attributes.url}
                                loading={'eager'}
                            />
                        </div>
                        <div className="flex flex-col w-[100%] xl:w-1/3 shrink-0 justify-between h-[510px]">
                            <div className="w-full h-[300px] xl:h-[250px] relative border border-black">
                                <Image
                                    onClick={() => {
                                        setOpened2(true)
                                        setUrl(dodatocna_foto1.data.attributes.url)
                                    }}
                                    objectFit="contain"
                                    layout="fill"
                                    alt="hero image"
                                    src={dodatocna_foto1.data.attributes.url}
                                    loading={'eager'}
                                />
                            </div>
                            <div
                                className="w-full h-[300px] xl:h-[250px] relative border border-t-0 xl:border-t-[1px] border-black">
                                <Image
                                    onClick={() => {
                                        setOpened2(true)
                                        setUrl(dodatocna_foto2.data.attributes.url)
                                    }}
                                    objectFit="contain"
                                    layout="fill"
                                    objectPosition={'center'}
                                    alt="hero image"
                                    src={dodatocna_foto2.data.attributes.url}
                                    loading={'eager'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col xl:flex-row gap-[20px] xl:gap-[75px] items-center mb-[85px]">
                    <div className="flex gap-[15px] items-center">
                        <Bank/>
                        <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">Financovanie</span>
                        <div className="flex gap-[8px] items-center">
                            <Link href='/o-projekte#financovanie'>
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
                            <Link href={'/o-projekte#vybavenie'}>
                                <a className="font-medium text-[14px] leading-5 text-green2">Viac</a>
                            </Link>
                            <RightArrow stroke="#476761"/>
                        </div>
                    </div>
                </div>
                <div className="px-4 xl:mx-auto w-full mb-[100px] xl:mb-0">
                    <div className="flex justify-between mb-[25px]">
                        <p className="text-[#676766] font-medium text-[16px] leading-6 tracking-[0.1px]">Číslo
                            apartmánu</p>
                        <span className="font-bold text-[16px] leading-6 tracking-[0.1px]">{cislo_bytu}</span>
                    </div>
                    <div className="flex justify-between mb-[25px] items-center">
                        <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Cena</p>
                        <span
                            className="font-bold text-[24px] leading-[32px] tracking-[-0.1px]">{cena ? `${cena} €` : '-'}</span>
                    </div>
                    <div className="flex justify-between mb-[70px]">
                        <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Dostupnosť</p>
                        <span
                            className={`font-bold text-[16px] leading-6 tracking-[0.1px] ${getAvailabilityTextColor(dostupnost)}`}>{dostupnost}</span>
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
                    <div className="flex justify-between mb-[25px]">
                        <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">Celková výmera</p>
                        <span className="font-bold">{celkova_rozloha} m²</span>
                    </div>
                    {terasa_rozloha && (
                        <div className="flex justify-between mb-[25px]">
                            <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Terasa</p>
                            <span>{terasa_rozloha} m²</span>
                        </div>
                    )}
                    {balkon_rozloha && (
                        <>
                            <div className="flex justify-between mb-[25px]">
                                <p className="font-medium text-[16px] leading-6 tracking-[0.1px]">Balkón</p>
                                <span>{balkon_rozloha} m²</span>
                            </div>
                            <div className="flex justify-between mb-[70px]">
                                <p className="font-bold text-[16px] leading-6 tracking-[0.1px]">Celková
                                    výmera {balkon_rozloha && '+ Balkón'} {terasa_rozloha && '+ Terasa'}
                                </p>
                                <span
                                    className="font-bold">{(celkova_rozloha + balkon_rozloha + terasa_rozloha).toFixed(2)} m²</span>
                            </div>
                        </>
                    )}
                    <button onClick={() => setOpened(true)} className={'w-full h-[50px] bg-primary text-white'}> Mám
                        záujem o apartmán č. {cislo_bytu}</button>
                </div>
                <div className="flex flex-col gap-[30px] items-center mb-[120px] xl:mb-[190px] xl:mt-[160px]">
                    <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                    <h1 className="font-bold text-[32px] xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] w-[250px] xl:w-auto text-center xl:text-left">Pôdorys
                        apartmánu na
                        stiahnutie</h1>
                    <Button variant={'filled'} href={podorys.data.attributes.url} target={'_blank'}>
                        Stiahnuť pôdorys
                    </Button>
                </div>
                <CarDescription/>
                <CustomSwiper/>
            </div>
            <MapFooter/>
        </>
    );
};

interface CustomInputProps {
    placeholder: string;
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string
    withAsterisk?: boolean
    required?: boolean
}

export const CustomInput = (props: CustomInputProps) => {
    return (
        <TextInput sx={{
            '.mantine-TextInput-input': {
                border: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.07)',
                borderRadius: 0,
                height: '50px',
                paddingLeft: '15px'
            },
        }} {...props} />
    )
}

export default ApartmentDetail;
