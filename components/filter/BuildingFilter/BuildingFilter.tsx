import {useState} from 'react';
import {Checkbox, RangeSlider} from "@mantine/core";
import House from './House'
import {Table} from "@components/table";
import {FilterButton} from "@components/ui/";
import {BasketCrossed, TwoArrows, Basket} from "@components/icons";
import axios, {AxiosResponse} from "axios";
import {value} from "dom7";

const Building = () => {
    const [price, setPrice] = useState<[number, number]>([70, 380]);
    const [floor, setFloor] = useState<[number, number]>([3, 14]);
    const [area, setArea] = useState<[number, number]>([34, 130]);

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



    async function handleClick() {
        const clickedButtons: { [x: string]: true; }[] = [];
        let query = `?filters[cena][$gte]=${price[0]*1000}&filters[cena][$lte]=${price[1]*1000}&filters[celkova_rozloha][$gte]=${area[0]}&filters[celkova_rozloha][$lte]=${area[1]}&filters[poschodie][$gte]=${floor[0]}&filters[poschodie][$lte]=${floor[1]}&pagination[pageSize]=100`
        Object.entries(clicked).forEach(([key, value]) => {
            if (value)  clickedButtons.push({[key]: value})
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

        const res = await axios.get(`https://floating-scrubland-57360.herokuapp.com/api/byts${query}`)
        console.log(`https://floating-scrubland-57360.herokuapp.com/api/byts${query}`)
        console.log(res.data)

    }

    return (
        <>
            <div
                className="xl:mx-[-30px] xl:mb-[-80px] xl:mt-[-70px] md:mx-[-25px] md:mb-[-105px] lg:mx-[-20px] lg:mb-[-130px] xl:mr-[-15px] xl:ml-[-15px] xl:mb-[-160px] xl:max-w-[1920px] 2xl:mb-[-195px] xl3">
                <House/>
            </div>
            <div className="building bg-primary-pattern w-full mb-[80px]">
                <div className={'w-full max-w-[1200px] mx-auto py-[90px]'}>
                    <div className={'grid grid-cols-3 gap-[50px]'}>
                        <div className={'text-white'}>
                            <h5 className={'mb-[20px] text-[14px] leading-[20px]'}>Cena € <span
                                className={'font-bold pl-[1rem]'}>{price[0]}k - {price[1]}k</span></h5>
                            <RangeSlider onChange={value => setPrice(value)} value={price} min={70} step={10} max={380} size={2} sx={{
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
                            <RangeSlider size={2} onChange={value => setFloor(value)} value={floor} min={3} minRange={2} max={14} sx={{
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
                            <RangeSlider onChange={value => setArea(value)} value={area} min={34} step={5} max={130} size={2} sx={{
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
                    <div className={'flex justify-between'}>
                        <div className="flex flex-col gap-[30px] mt-[50px]">
                            <div className="flex gap-[20px]">
                                <FilterButton clicked={clicked.room1Clicked} onClick={() => setClicked({...clicked, room1Clicked: !clicked.room1Clicked})} variant={'square'}>
                                    1 izb
                                </FilterButton>
                                <FilterButton clicked={clicked.room15Clicked} onClick={() => setClicked({...clicked, room15Clicked: !clicked.room15Clicked})} variant={'square'}>
                                    1.5 izb
                                </FilterButton>
                                <FilterButton clicked={clicked.room2Clicked} onClick={() => setClicked({...clicked, room2Clicked: !clicked.room2Clicked})} variant={'square'}>
                                    2 izb
                                </FilterButton>
                                <FilterButton clicked={clicked.room3Clicked} onClick={() => setClicked({...clicked, room3Clicked: !clicked.room3Clicked})} variant={'square'}>
                                    3 izb
                                </FilterButton>
                                <FilterButton clicked={clicked.room4Clicked} onClick={() => setClicked({...clicked, room4Clicked: !clicked.room4Clicked})} variant={'square'}>
                                    4 izb
                                </FilterButton>
                            </div>
                            <div className="flex gap-[20px] items-end">
                                <div className="flex flex-col">
                                    <span className="text-white">Výbava:</span>
                                    <FilterButton clicked={clicked.withTerrace} onClick={() => setClicked({...clicked, withTerrace: !clicked.withTerrace})} icon={<TwoArrows width={'22'} height={'22'} fill={clicked.withTerrace ? '#0E3F3B' : 'white'}/>}
                                                  variant={'rectangle'}>
                                        s terasou
                                    </FilterButton>
                                </div>
                                <FilterButton clicked={clicked.withBalcony} onClick={() => {
                                    if (clicked.withoutBalcony) clicked.withoutBalcony = false;
                                    setClicked({...clicked, withBalcony: !clicked.withBalcony})
                                }} icon={<Basket width={'22'} height={'22'} fill={clicked.withBalcony ? '#0E3F3B' : 'white'}/>}
                                              variant={'rectangle'}>
                                    s balkónom
                                </FilterButton>
                                <FilterButton clicked={clicked.withoutBalcony} onClick={() => {
                                        if (clicked.withBalcony) clicked.withBalcony = false;
                                        setClicked({...clicked, withoutBalcony: !clicked.withoutBalcony})
                                }} icon={<BasketCrossed fill={clicked.withoutBalcony ? '#0E3F3B' : 'white'}/>} variant={'rectangle'}>
                                    bez balkónu
                                </FilterButton>
                            </div>
                            <div className={'flex gap-[30px]'}>
                                <Checkbox label={'nezobrazovať predané'} size={'md'} checked={isSoldChecked} onChange={(e) => setIsSoldChecked(e.currentTarget.checked)} sx={{
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
                                <Checkbox label={'nezobrazovať rezervované'} checked={isReservatedChecked} onChange={(e) => setIsReservatedChecked(e.currentTarget.checked)}  size={'md'} sx={{
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
                        <button onClick={handleClick} className={'mt-auto bg-[#0E3F3B] h-[50px] px-[30px] text-white font-semibold'}>Hľadať</button>
                    </div>
                </div>
            </div>
            <Table rows={[
                {
                    floor: '2',
                    apartmentNumber: '2.03',
                    id: 1,
                    numberOfRooms: 2,
                    availability: 'voľný',
                    price: 121605,
                    totalArea: 52.47,
                    additionalRoom: 52
                }
            ]} title={'1-izbové byty'}/>
        </>
    );
};

export default Building;
