import {NextPage} from "next";
import React from "react";
import MapFooter from "../components/ui/MapFooter";
import TableRow from "../components/sections/Table/TableRow";
import Description from "../components/sections/Descriptions/Description";
import ManIcon from "../components/svg/Man";
import ParkingIcon from "../components/svg/Parking";
import CameraIcon from "../components/svg/Camera";

interface Table {
    apartmentNum: string
    floorNum: string
    roomNum: string
    apartmentM2: string
    balconyM2: string
    wholeM2: string
    priceWithDPH: string
    availability: boolean
}

const PonukaBytov: NextPage = () => {
    const table1: Table[] = [
        {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        },
        {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        }, {
            apartmentNum: "2.03",
            floorNum: "2.NP",
            roomNum: "2",
            apartmentM2: "52.47 m²",
            balconyM2: "52.47 m²",
            wholeM2: "52.47 m²",
            priceWithDPH: "121 605 €",
            availability: true
        },
    ]
    return (
        <div className="flex justify-center">
            <div>
                <p className="mt-[125px] ml-[190px] mb-[35px] font-bold text-[32px] leading-[38px]">1-izbové byty</p>
                <div className="flex justify-center bg-[#F5F5F5] mb-[100px] pb-[75px]">
                <table className="">
                    <thead>
                    <tr>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Číslo apartmánu</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Poschodie</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Počet izieb</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Apartmán m²</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Balkón | Terasa m²</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Celková výmera</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Cena s DPH</th>
                        <th className="w-[130px] font-medium text-[14px] leading-5 opacity-40">Dostupnosť</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table1.map((props, index) => (
                        <TableRow {...props} key={index}/>
                    ))}
                    </tbody>
                </table>
                </div>
                <Description imgPath="/img/car.png"
                             title="Garážové parkovanie"
                             descrip="Olivia Residence ponúka garážové státia na prenájom, vďaka ktorým bude parkovanie komfortný a bezproblémový zážitok."
                             bulletPoints={[
                                 {icon: <ManIcon/>, text: "Prechod do Vášho bytu suchou nohou"},
                                 {icon: <ParkingIcon/>, text: "Dlhodobý prenájom garážových státí"},
                                 {icon: <CameraIcon/>, text: "Zabezpečené kamerovým systémom"},
                             ]}
                             twoButtons={false}
                />
                <MapFooter/>
            </div>
        </div>
    )
}

export default PonukaBytov;