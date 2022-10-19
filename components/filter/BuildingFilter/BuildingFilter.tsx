import {useEffect, useState} from 'react';
import {Checkbox, RangeSlider} from "@mantine/core";
import House from './House'
import {Table} from "@components/table";
import {FilterButton} from "@components/ui/";
import {BasketCrossed, TwoArrows, Basket} from "@components/icons";
import axios from "axios";
import {useRouter} from "next/router";
import Link from "next/link";

export type Response = {
    id: number;
    attributes: {
        balkon_rozloha?: number;
        terasa_rozloha?: number;
        celkova_rozloha: number;
        cena: string;
        chodba_rozloha?: number;
        chodba_rozloha2?: number;
        cislo_bytu: string;
        dostupnost: 'voľný' | 'rezervovaný' | 'predaný';
        pocet_izieb: 'jedno-izbový' | 'jeden a pol-izbový' | 'dvoj-izbový' | 'troj-izbový' | 'štvor-izbový';
        poschodie: number;
        primarna_foto: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}

const Building = () => {
    const router = useRouter();
    const [oneRooms, setOneRooms] = useState<Response[]>();
    const [twoRooms, setTwoRooms] = useState<Response[]>();
    const [oneAndHalfRooms, setOneAndHalfRooms] = useState<Response[]>();
    const [threeRooms, setThreeRooms] = useState<Response[]>();
    const [fourRooms, setFourRooms] = useState<Response[]>();

    const [price, setPrice] = useState<[number, number]>([70, 380]);
    const [floor, setFloor] = useState<[number, number]>([3, 14]);
    const [area, setArea] = useState<[number, number]>([20, 130]);

    const [isSoldChecked, setIsSoldChecked] = useState(false);
    const [isReservatedChecked, setIsReservatedChecked] = useState(false);

    const [clicked, setClicked] = useState({
        room1Clicked: false,
        room15Clicked: false,
        room2Clicked: false,
        room3Clicked: false,
        room4Clicked: false,
        withTerrace: false,
        withBalcony: false,
        withoutBalcony: false
    });

    useEffect(() => {
        async function fetch() {
            const res = await axios.get(`https://floating-scrubland-57360.herokuapp.com/api/byts?pagination[pageSize]=200&populate=*`)

            if (router.pathname === '/ponuka-bytov') {
                setOneRooms(res.data.data.filter((val: any) => val.attributes?.pocet_izieb === 'jedno-izbový'))
                setTwoRooms(res.data.data.filter((val: any) => val.attributes?.pocet_izieb === 'dvoj-izbový'))
                setOneAndHalfRooms(res.data.data.filter((val: any) => val.attributes?.pocet_izieb === 'jeden a pol-izbový'))
                setThreeRooms(res.data.data.filter((val: any) => val.attributes?.pocet_izieb === 'troj-izbový'))
                setFourRooms(res.data.data.filter((val: any) => val.attributes?.pocet_izieb === 'štvor-izbový'))
            }
        }
        fetch()
    }, []);

    async function handleClick() {
        const clickedButtons: { [x: string]: true; }[] = [];
        let query = `?filters[cena][$gte]=${price[0] * 1000}&filters[cena][$lte]=${price[1] * 1000}&filters[celkova_rozloha][$gte]=${area[0]}&filters[celkova_rozloha][$lte]=${area[1]}&filters[poschodie][$gte]=${floor[0]}&filters[poschodie][$lte]=${floor[1]}&pagination[pageSize]=200&populate=*`
        Object.entries(clicked).forEach(([key, value]) => {
            if (value) clickedButtons.push({[key]: value})
        })
        if (clickedButtons.length) {
            clickedButtons.forEach((button) => {
                if (button.room1Clicked) query += `&filters[pocet_izieb][$eq]=jedno-izbový`
                if (button.room2Clicked) query += `&filters[pocet_izieb][$eq]=dvoj-izbový`
                if (button.room15Clicked) query += `&filters[pocet_izieb][$eq]=jeden a pol-izbový`
                if (button.room3Clicked) query += `&filters[pocet_izieb][$eq]=troj-izbový`
                if (button.room4Clicked) query += `&filters[pocet_izieb][$eq]=štvor-izbový`
                if (button.withTerrace) query += `&filters[terasa_rozloha][$notNull]=true`
                if (button.withoutBalcony) query += `&filters[balkon_rozloha][$null]=true`
                if (button.withBalcony) query += `&filters[balkon_rozloha][$notNull]=true`
            })
        }
        if (isSoldChecked) query += `filters[dostupnost][$ne]=predaný`
        if (isReservatedChecked) query += `filters[dostupnost][$ne]=rezervovaný`
        let response;

        const res = await axios.get(`https://floating-scrubland-57360.herokuapp.com/api/byts${query}`)
        const res2 = await axios.get(`https://floating-scrubland-57360.herokuapp.com/api/byts?filters[cena][$null]=true&populate=*`)

        response = [...res.data.data, ...res2.data.data]

        setOneRooms(response.filter((val: any) => val.attributes.pocet_izieb === 'jedno-izbový'))
        setTwoRooms(response.filter((val: any) => val.attributes.pocet_izieb === 'dvoj-izbový'))
        setOneAndHalfRooms(response.filter((val: any) => val.attributes.pocet_izieb === 'jeden a pol-izbový'))
        setThreeRooms(response.filter((val: any) => val.attributes.pocet_izieb === 'troj-izbový'))
        setFourRooms(response.filter((val: any) => val.attributes.pocet_izieb === 'štvor-izbový'))
    }

    return (
        <>
            <div
                className="mb-[-38px] w-full xl:mx-[-30px] xl:mb-[-80px] xl:mt-[-70px] md:mx-[-25px] md:mb-[-105px] lg:mx-[-20px] lg:mb-[-130px] xl:mr-[-15px] xl:ml-[-15px] xl:mb-[-150px] xl:max-w-[1920px] 2xl:mb-[-172px] 2xl:mr-[-10px] xl3">
                <House/>
            </div>
            <div className="building bg-primary-pattern w-full mb-[80px] px-[1rem] xl:px-0">
                <div className={'w-full xl:max-w-[1200px] mx-auto py-[45px] xl:py-[90px]'}>
                    <div className={'flex flex-col xl:grid grid-cols-3 gap-[50px]'}>
                        <div className={'text-white'}>
                            <h5 className={'mb-[20px] text-[14px] leading-[20px]'}>Cena € <span
                                className={'font-bold pl-[1rem]'}>{price[0]}k - {price[1]}k</span></h5>
                            <RangeSlider onChange={value => setPrice(value)} value={price} min={70} step={10} max={380}
                                         size={2} sx={{
                                '.mantine-Slider-thumb': {
                                    color: 'white',
                                    border: 'none',
                                    width: 20,
                                    height: 20
                                },
                                '.mantine-Slider-bar': {
                                    backgroundColor: 'white',
                                }
                            }}/>
                        </div>
                        <div className={'text-white'}>
                            <h5 className={'mb-[20px] text-[14px] leading-[20px]'}>Poschodie <span
                                className={'font-bold pl-[1rem]'}>{floor[0]}-{floor[1]}</span></h5>
                            <RangeSlider size={2} onChange={value => setFloor(value)} value={floor} min={3} minRange={2}
                                         max={14} sx={{
                                '.mantine-Slider-thumb': {
                                    color: 'white',
                                    border: 'none',
                                    width: 20,
                                    height: 20
                                },
                                '.mantine-Slider-bar': {
                                    backgroundColor: 'white',
                                }
                            }}/>
                        </div>
                        <div className={'text-white'}>
                            <h5 className={'mb-[20px] text-[14px] leading-[20px]'}>Rozloha <span
                                className={'font-bold pl-[1rem]'}>{area[0]} - {area[1]} m²</span></h5>
                            <RangeSlider onChange={value => setArea(value)} value={area} min={20} step={5} max={130}
                                         size={2} sx={{
                                '.mantine-Slider-thumb': {
                                    color: 'white',
                                    border: 'none',
                                    width: 20,
                                    height: 20
                                },
                                '.mantine-Slider-bar': {
                                    backgroundColor: 'white',
                                }
                            }}/>
                        </div>
                    </div>
                    <div className={'flex flex-col xl:flex-row justify-between'}>
                        <div className="flex xl:flex-row flex-col xl:justify-between gap-[30px] mt-[50px] w-full">
                            <div className={'flex flex-col xl:gap-[30px]'}>
                                <div className="flex justify-between xl:justify-start gap-[5px] xl:gap-[20px]">
                                    <FilterButton clicked={clicked.room1Clicked} onClick={() => setClicked({
                                        ...clicked,
                                        room1Clicked: !clicked.room1Clicked
                                    })} variant={'square'}>
                                        1 izb
                                    </FilterButton>
                                    <FilterButton clicked={clicked.room15Clicked} onClick={() => setClicked({
                                        ...clicked,
                                        room15Clicked: !clicked.room15Clicked
                                    })} variant={'square'}>
                                        1.5 izb
                                    </FilterButton>
                                    <FilterButton clicked={clicked.room2Clicked} onClick={() => setClicked({
                                        ...clicked,
                                        room2Clicked: !clicked.room2Clicked
                                    })} variant={'square'}>
                                        2 izb
                                    </FilterButton>
                                    <FilterButton clicked={clicked.room3Clicked} onClick={() => setClicked({
                                        ...clicked,
                                        room3Clicked: !clicked.room3Clicked
                                    })} variant={'square'}>
                                        3 izb
                                    </FilterButton>
                                    <FilterButton clicked={clicked.room4Clicked} onClick={() => setClicked({
                                        ...clicked,
                                        room4Clicked: !clicked.room4Clicked
                                    })} variant={'square'}>
                                        4 izb
                                    </FilterButton>
                                </div>
                                <div className={'flex gap-[30px] mt-[30px] xl:mt-0'}>
                                    <Checkbox label={'nezobrazovať predané'} size={'md'} checked={isSoldChecked}
                                              onChange={(e) => setIsSoldChecked(e.currentTarget.checked)} sx={{
                                        '.mantine-Checkbox-label': {
                                            color: 'white'
                                        },
                                        '.mantine-Checkbox-input': {
                                            backgroundColor: 'transparent',
                                            border: '1.5px solid #fff',
                                            opacity: 0.3,
                                            borderRadius: 0,
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        '.mantine-Checkbox-input:checked': {
                                            backgroundColor: 'white',
                                            opacity: 1,
                                            border: 0
                                        },
                                        '.mantine-Checkbox-icon': {
                                            color: '#0E3F3B'
                                        }
                                    }}/>
                                    <Checkbox label={'nezobrazovať rezervované'} checked={isReservatedChecked}
                                              onChange={(e) => setIsReservatedChecked(e.currentTarget.checked)}
                                              size={'md'}
                                              sx={{
                                                  '.mantine-Checkbox-label': {
                                                      color: 'white'
                                                  },
                                                  '.mantine-Checkbox-input': {
                                                      backgroundColor: 'transparent',
                                                      border: '1.5px solid #fff',
                                                      opacity: 0.3,
                                                      borderRadius: 0,
                                                      display: 'flex',
                                                      alignItems: 'center'
                                                  },
                                                  '.mantine-Checkbox-input:checked': {
                                                      backgroundColor: 'white',
                                                      opacity: 1,
                                                      border: 0
                                                  },
                                                  '.mantine-Checkbox-icon': {
                                                      color: '#0E3F3B'
                                                  }
                                              }}/>
                                </div>
                            </div>
                            <div className={'xl:flex flex-col xl:items-end'}>
                                <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[20px] xl:items-end">
                                    <div className="flex flex-col">
                                        <span className="text-white">Výbava:</span>
                                        <FilterButton className={'justify-center xl:justify-start'}
                                                      clicked={clicked.withTerrace} onClick={() => setClicked({
                                            ...clicked,
                                            withTerrace: !clicked.withTerrace
                                        })} icon={<TwoArrows width={'22'} height={'22'}
                                                             fill={clicked.withTerrace ? '#0E3F3B' : 'white'}/>}
                                                      variant={'rectangle'}>
                                            s terasou
                                        </FilterButton>
                                    </div>
                                    <FilterButton className={'justify-center xl:justify-start'}
                                                  clicked={clicked.withBalcony} onClick={() => {
                                        if (clicked.withoutBalcony) clicked.withoutBalcony = false;
                                        setClicked({...clicked, withBalcony: !clicked.withBalcony})
                                    }} icon={<Basket width={'22'} height={'22'}
                                                     fill={clicked.withBalcony ? '#0E3F3B' : 'white'}/>}
                                                  variant={'rectangle'}>
                                        s balkónom
                                    </FilterButton>
                                    <FilterButton className={'justify-center xl:justify-start'}
                                                  clicked={clicked.withoutBalcony} onClick={() => {
                                        if (clicked.withBalcony) clicked.withBalcony = false;
                                        setClicked({...clicked, withoutBalcony: !clicked.withoutBalcony})
                                    }} icon={<BasketCrossed fill={clicked.withoutBalcony ? '#0E3F3B' : 'white'}/>}
                                                  variant={'rectangle'}>
                                        bez balkónu
                                    </FilterButton>
                                </div>
                                <Link href={`${router.pathname}#results`}>
                                    <button onClick={handleClick}
                                            className={'bg-[#0E3F3B] h-[50px] px-[30px] text-white font-semibold mt-[30px]'}>Hľadať
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div id={'results'} className={`flex flex-col xl:gap-[120px] px-[1rem] xl:px-0 xl:min-h-[1px] bg-[#F5F5F5] mt-[-80px] ${oneRooms?.length && "pt-[80px]"}`}>
                {oneRooms?.length ? (
                    <div>
                        <h3 className={'w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]'}>1-izbové
                            byty</h3>
                        <div
                            className={'w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]'}>
                            {['Číslo apartmánu', 'Poschodie', 'Počet izieb', 'Apartmán m²', 'Balkón | Terasa m²', 'Cena s DPH', 'Dostupnosť'].map((value, index) => (
                                <h5 className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && 'text-right'} ${(value === 'Balkón | Terasa m²' || value === 'Apartmán m²' || value === 'Cena s DPH') && 'hidden xl:flex'}`}
                                    key={index}>{value}</h5>
                            ))}
                        </div>
                        {
                            oneRooms?.map(({attributes, id}) => (
                                <Table key={id} rows={[
                                    {
                                        floor: attributes.poschodie,
                                        apartmentNumber: attributes.cislo_bytu,
                                        id,
                                        numberOfRooms: 1,
                                        availability: attributes.dostupnost,
                                        price: attributes.cena,
                                        totalArea: attributes.celkova_rozloha,
                                        additionalRoom: (attributes.balkon_rozloha || attributes.terasa_rozloha) || 0,
                                        img: attributes.primarna_foto.data.attributes.url
                                    }
                                ]}/>
                            ))
                        }

                    </div>

                ) : ''}
                {oneAndHalfRooms?.length ? (
                    <div>
                        <h3 className={'w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]'}>1.5-izbové
                            byty</h3>
                        <div
                            className={'w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]'}>
                            {['Číslo apartmánu', 'Poschodie', 'Počet izieb', 'Apartmán m²', 'Balkón | Terasa m²', 'Cena s DPH', 'Dostupnosť'].map((value, index) => (
                                <h5 className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && 'text-right'} ${(value === 'Balkón | Terasa m²' || value === 'Apartmán m²' || value === 'Cena s DPH') && 'hidden xl:flex'}`}
                                    key={index}>{value}</h5>
                            ))}
                        </div>
                        {
                            oneAndHalfRooms?.map(({attributes, id}) => (
                                <Table key={id} rows={[
                                    {
                                        floor: attributes.poschodie,
                                        apartmentNumber: attributes.cislo_bytu,
                                        id,
                                        numberOfRooms: 1.5,
                                        availability: attributes.dostupnost,
                                        price: attributes.cena,
                                        totalArea: attributes.celkova_rozloha,
                                        additionalRoom: (attributes.balkon_rozloha || attributes.terasa_rozloha) || 0,
                                        img: attributes.primarna_foto.data.attributes.url
                                    }
                                ]}/>
                            ))
                        }

                    </div>

                ) : ''}
                {twoRooms?.length ? (
                    <div>
                        <h3 className={'w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]'}>2-izbové
                            byty</h3>
                        <div
                            className={'w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]'}>
                            {['Číslo apartmánu', 'Poschodie', 'Počet izieb', 'Apartmán m²', 'Balkón | Terasa m²', 'Cena s DPH', 'Dostupnosť'].map((value, index) => (
                                <h5 className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && 'text-right'} ${(value === 'Balkón | Terasa m²' || value === 'Apartmán m²' || value === 'Cena s DPH') && 'hidden xl:flex'}`}
                                    key={index}>{value}</h5>
                            ))}
                        </div>
                        {
                            twoRooms?.map(({attributes, id}) => (
                                <Table key={id} rows={[
                                    {
                                        floor: attributes.poschodie,
                                        apartmentNumber: attributes.cislo_bytu,
                                        id,
                                        numberOfRooms: 2,
                                        availability: attributes.dostupnost,
                                        price: attributes.cena,
                                        totalArea: attributes.celkova_rozloha,
                                        additionalRoom: (attributes.balkon_rozloha || attributes.terasa_rozloha) || 0,
                                        img: attributes.primarna_foto.data.attributes.url
                                    }
                                ]}/>
                            ))
                        }

                    </div>

                ) : ''}
                {threeRooms?.length ? (
                    <div>
                        <h3 className={'w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]'}>3-izbové
                            byty</h3>
                        <div
                            className={'w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]'}>
                            {['Číslo apartmánu', 'Poschodie', 'Počet izieb', 'Apartmán m²', 'Balkón | Terasa m²', 'Cena s DPH', 'Dostupnosť'].map((value, index) => (
                                <h5 className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && 'text-right'} ${(value === 'Balkón | Terasa m²' || value === 'Apartmán m²' || value === 'Cena s DPH') && 'hidden xl:flex'}`}
                                    key={index}>{value}</h5>
                            ))}
                        </div>
                        {
                            threeRooms?.map(({attributes, id}) => (
                                <Table key={id} rows={[
                                    {
                                        floor: attributes.poschodie,
                                        apartmentNumber: attributes.cislo_bytu,
                                        id,
                                        numberOfRooms: 3,
                                        availability: attributes.dostupnost,
                                        price: attributes.cena,
                                        totalArea: attributes.celkova_rozloha,
                                        additionalRoom: (attributes.balkon_rozloha || attributes.terasa_rozloha) || 0,
                                        img: attributes.primarna_foto.data.attributes.url
                                    }
                                ]}/>
                            ))
                        }

                    </div>

                ) : ''}
                {fourRooms?.length ? (
                    <div>
                        <h3 className={'w-full xl:max-w-[1200px] xl:mx-auto font-bold xl:text-[32px] xl:leading-[38px] mb-[30px] xl:mb-[95px]'}>4-izbové
                            byty</h3>
                        <div
                            className={'w-full xl:max-w-[1200px] mx-auto flex justify-between text-black/40 font-medium text-[14px] leading-[20px]'}>
                            {['Číslo apartmánu', 'Poschodie', 'Počet izieb', 'Apartmán m²', 'Balkón | Terasa m²', 'Cena s DPH', 'Dostupnosť'].map((value, index) => (
                                <h5 className={`text-[14px] xl:text-[16px] xl:w-[130px] ${index === 6 && 'text-right'} ${(value === 'Balkón | Terasa m²' || value === 'Apartmán m²' || value === 'Cena s DPH') && 'hidden xl:flex'}`}
                                    key={index}>{value}</h5>
                            ))}
                        </div>
                        {
                            fourRooms?.map(({attributes, id}) => (
                                <Table key={id} rows={[
                                    {
                                        floor: attributes.poschodie,
                                        apartmentNumber: attributes.cislo_bytu,
                                        id,
                                        numberOfRooms: 4,
                                        availability: attributes.dostupnost,
                                        price: attributes.cena,
                                        totalArea: attributes.celkova_rozloha,
                                        additionalRoom: (attributes.balkon_rozloha || attributes.terasa_rozloha) || 0,
                                        img: attributes.primarna_foto.data.attributes.url
                                    }
                                ]}/>
                            ))
                        }
                    </div>

                ) : ''}
            </div>
        </>
    );
};

export default Building;
