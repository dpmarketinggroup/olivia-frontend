import Head from "next/head";
import {Checkbox, Modal, Select, Textarea, TextInput} from "@mantine/core";
import { MapFooter} from "@components/common";
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

const ApartmentDetail = () => {
    const [opened, setOpened] = useState(false);
    const [opened2, setOpened2] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
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
        if (!name || !surname || !email || !message || !phone) return;
        await axios.post('/api/enquiry', {
            body: JSON.stringify({
                name,
                surname,
                email,
                message,
                phone,
                cislo_bytu
            })
        })
    }

    return (
        <>
            <Head>
                <title>Detail bytu | Olivia Residence</title>
            </Head>
            <Modal sx={{
                '.mantine-Modal-modal': {
                    width: '100%',
                    maxWidth: '770px',
                    paddingBottom: '80px'
                }
            }} opened={opened} onClose={() => setOpened(false)} centered>
                <h3 className={'text-[32px] leading-[38px] text-center font-bold text-primary'}>Mám záujem o byt
                    č. {cislo_bytu}</h3>
                <form onSubmit={handleSubmit} className={'flex flex-col gap-[15px] xl:w-full xl:max-w-[540px] xl:mx-auto font-pr'}>
                    <div className={'flex flex-col xl:grid grid-cols-2 gap-[15px] mt-[40px]'}>
                        <CustomInput value={name} onChange={(e) => setName(e.target.value)} name={'name'} placeholder={'Meno'}/>
                        <CustomInput value={surname} onChange={(e) => setSurname(e.target.value)} name={'surname'} placeholder={'Priezvisko'}/>
                    </div>
                    <CustomInput value={phone} onChange={(e) => setPhone(e.target.value)} name={'phone'} placeholder={'Tel. č.'}/>
                    <CustomInput value={email} onChange={(e) => setEmail(e.target.value)} name={'email'} placeholder={'E-mailová adresa'}/>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} name={'message'} placeholder={'Vaša správa ...'} sx={{
                        '.mantine-Textarea-input': {
                            border: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.07)',
                            borderRadius: 0,
                            height: '145px'
                        },
                        '.mantine-Checkbox-input': {
                        }
                    }}/>
                    <Checkbox label={'Súhlasím so spracovaním osobných údajov'}
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
                    <Checkbox label={'Chcem aby ste mi zasielali novinky o projekte'}
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
                    <button className={'bg-[#476761] h-[50px] text-white'}>
                        Odoslať
                    </button>
                </form>
            </Modal>
            <Modal className="gallery-modal" opened={opened2} size={770000} onClose={() => setOpened2(false)} centered>
                {/*<CustomSwiper title={} swiperSlides={}/>*/}
            </Modal>
            <div className="flex flex-col justify-center w-full xl:max-w-[1200px] mx-auto">
                <div className="my-[100px]">
                    <div className="xl:mx-auto w-full xl:max-w-[1200px]">
                        <div className="flex flex-col gap-[30px] items-center mb-[50px]">
                            <FloorPlan classname="w-[37px] xl:w-[42px] h-[39px] xl:h-[44px]"/>
                            <h1 className="font-bold text-[32px] xl:w-auto xl:text-[40px] leading-[40px] xl:leading-[48px] tracking-[-0.5px] text-center xl:text-left">Výber
                                apartmánu na podlaží</h1>
                        </div>
                        <div
                            className="flex flex-col xl:flex-row flex-col-reverse gap-[25px] xl:gap-0 items-center xl:items-start xl:justify-between xl:max-w-[1200px]">
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
                <div>
                    <h3 className="mb-[25px] font-bold text-[20px] xl:text-[24px] leading-[32px] tracking-[-0.1px] text-center xl:text-left">Apartmán
                        č. {cislo_bytu}</h3>
                    <div onClick={() => setOpened2(true)}
                         className="flex flex-col xl:flex-row gap-[20px] xl:gap-[40px] mb-[70px] items-center xl:items-start justify-center">
                        <Image
                            objectFit="cover"
                            width={primarna_foto.data.attributes.width}
                            height={primarna_foto.data.attributes.height}
                            alt="hero image"
                            src={primarna_foto.data.attributes.url}
                        />
                        <div className="flex flex-col w-1/3 shrink-0 justify-between h-[510px]">
                            <div className="w-full h-[250px] relative">
                                <Image
                                    objectFit="contain"
                                    layout="fill"
                                    alt="hero image"
                                    src={dodatocna_foto1.data.attributes.url}
                                />
                            </div>
                            <div className="w-full h-[250px] relative">
                                <Image
                                    objectFit="contain"
                                    layout="fill"
                                    objectPosition={'center'}
                                    alt="hero image"
                                    src={dodatocna_foto2.data.attributes.url}
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
                <div className="px-4 xl:mx-auto w-full mb-[100px] xl:mb-0">
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
                                <span
                                    className="font-bold">{(celkova_rozloha - balkon_rozloha - terasa_rozloha).toFixed(2)} m²</span>
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
