import React from 'react';
import {Checkbox, RangeSlider} from "@mantine/core";
import Link from "next/link";
import Dom from './Dom'
import {Table} from "@components/table";
import FilterButton from "@components/ui/FilterButton/FilterButton";

const Building = () => {
    return (
        <>
            <div
                className="xl:mx-[-30px] xl:mb-[-80px] xl:mt-[-70px] md:mx-[-25px] md:mb-[-105px] lg:mx-[-20px] lg:mb-[-130px] xl:mr-[-15px] xl:ml-[-15px] xl:mb-[-160px] xl:max-w-[1920px] 2xl:mb-[-195px] xl3">
                <Dom/>
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
                    <div className={'flex mt-[50px]'}>
                        <div>
                            <FilterButton variant={'square'}>
                                1 izb
                            </FilterButton>
                            <FilterButton variant={'rectangle'}>
                                s terasou
                            </FilterButton>
                        </div>
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
