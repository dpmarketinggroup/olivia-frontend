import {useState} from 'react';
import {Checkbox, RangeSlider} from "@mantine/core";
import House from './House'
import {Table} from "@components/table";
import {FilterButton} from "@components/ui/";
import {BasketCrossed, TwoArrows, Basket} from "@components/icons";
import axios, {AxiosResponse} from "axios";

const Building = () => {
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
        let query = ''
        Object.entries(clicked).forEach(([key, value]) => {
            if (value)  clickedButtons.push({[key]: value})
        })
        if (clickedButtons.length) {
            clickedButtons.forEach((button, i) => {
                if (button.room1Clicked) query += `${i === 0 ? '?' : '&'}filters[pocet_izieb][$eq]=jedno-izbový`
                if (button.room2Clicked) query += `${i === 0 ? '?' : '&'}filters[pocet_izieb][$eq]=dvoj-izbový`
                if (button.room15Clicked) query += `${i === 0 ? '?' : '&'}filters[pocet_izieb][$eq]=jeden a pol-izbový`
                if (button.room3Clicked) query += `${i === 0 ? '?' : '&'}filters[pocet_izieb][$eq]=troj-izbový`
                if (button.room4Clicked) query += `${i === 0 ? '?' : '&'}filters[pocet_izieb][$eq]=štvor-izbový`
            })
        }

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
                                className={'font-bold pl-[1rem]'}>70k - 380k</span></h5>
                            <RangeSlider min={70} step={10} max={380} size={2} sx={{
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
                                className={'font-bold pl-[1rem]'}>3-14</span></h5>
                            <RangeSlider size={2} min={3} minRange={2} max={14} sx={{
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
                                className={'font-bold pl-[1rem]'}>34 - 130 m²</span></h5>
                            <RangeSlider min={34} step={5} max={130} size={2} sx={{
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
                                <FilterButton clicked={clicked.withBalcony} onClick={() => setClicked({...clicked, withBalcony: !clicked.withBalcony})} icon={<Basket width={'22'} height={'22'} fill={clicked.withBalcony ? '#0E3F3B' : 'white'}/>}
                                              variant={'rectangle'}>
                                    s balkónom
                                </FilterButton>
                                <FilterButton clicked={clicked.withoutBalcony} onClick={() => setClicked({...clicked, withoutBalcony: !clicked.withoutBalcony})} icon={<BasketCrossed/>} variant={'rectangle'}>
                                    bez balkónu
                                </FilterButton>
                            </div>
                            <div className={'flex gap-[30px]'}>
                                <Checkbox label={'nezobrazovať predané'} size={'md'} sx={{
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
                                <Checkbox label={'nezobrazovať predané'} size={'md'} sx={{
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
