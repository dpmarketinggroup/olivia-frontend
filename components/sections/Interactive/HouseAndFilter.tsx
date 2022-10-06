import {Checkbox, RangeSlider} from "@mantine/core";

import Dom from './flat/Dom'
import Link from "next/link";

// interface ButtonsRoomsProps {
//     num: string
// }

const HouseAndFilter = () => {
    // const buttonsRooms: ButtonsRoomsProps[] = [
    //     {num: "1"},
    //     {num: "1.5"},
    //     {num: "2"},
    //     {num: "3"},
    //     {num: "4"},
    // ]
    //TODO: Oliver -> Na desktop ukazujú šípky červeno, uprav abz bol desktop ako v dizajne, zatiaľ nerob buttons
    return (
        <>
            <div className="building xl:mx-[-30px] xl:mb-[-80px] xl:mt-[-70px] md:mx-[-25px] md:mb-[-105px] lg:mx-[-20px] lg:mb-[-130px] xl:mr-[-15px] xl:ml-[-15px] xl:mb-[-160px] xl:max-w-[1920px] 2xl:mb-[-195px] xl3">
                <Dom/>
            </div>
            <div className="bg-primary-pattern w-full mb-[80px]">
                <div className="mx-4 xl:mx-auto xl:w-[1020px] ">
                    <div
                        className="flex flex-col xl:flex-row gap-[25px] xl:gap-0 justify-between items-center xl:items-center pt-[90px] mb-[40px]">
                        <div>
                            <p className="mb-[10px] text-[14px] leading-5 text-white">Cena €</p>
                            <RangeSlider
                                className="w-[320px]"
                                color="red"
                                size="xs"
                            />
                        </div>
                        <div>
                            <p className="mb-[10px] text-[14px] leading-5 text-white">Poschodie</p>
                            <RangeSlider
                                className="w-[320px]"
                                color="red"
                                size="xs"
                            />
                        </div>
                        <div>
                            <p className="mb-[10px] text-[14px] leading-5 text-white">Rozloha</p>
                            <RangeSlider
                                className="w-[320px]"
                                color="red"
                                size="xs"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:items-center mb-[35px] xl:mb-[70px]">
                        <div className="flex xl:gap-[20px] mb-[25px] xl:mb-0">
                            {/*{buttonsRooms.map((p, i) => (*/}
                            {/*    // <ButtonBuildingNumFilter key={i} num={p.num}/>*/}
                            {/*))}*/}
                        </div>
                        {/*<div className="flex xl:gap-[20px] items-end">*/}
                        {/*    <div>*/}
                        {/*        <p className="text-[14px] leading-5 text-white mb-[10px]">Výbava:</p>*/}
                        {/*        <ButtonBuildingVybavaFilter text={'s terasou'}/>*/}
                        {/*    </div>*/}
                        {/*    <ButtonBuildingVybavaFilter2 text={'s balkónom'}/>*/}
                        {/*    <ButtonBuildingVybavaFilter3 text={'bez balkónu'}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between xl:items-center pb-[90px]">
                        <div className="flex flex-col xl:flex-row gap-[30px] items-center xl:items-center mb-[55px]">
                            <Checkbox label={
                                <>
                                    <p className="font-medium text-[14px] leading-5 text-white">nezobrazovať
                                        predané</p>
                                </>
                            } radius="xs" color="#476761"/>
                            <Checkbox label={
                                <>
                                    <p className="font-medium text-[14px] leading-5 text-white">nezobrazovať
                                        rezervované</p>
                                </>
                            } radius="xs" color="green"/>
                        </div>
                        <Link href="/pages/ponuka-bytov">
                            <button className="text-white bg-primary px-[30px] py-[12px]">Hľadať</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HouseAndFilter;
