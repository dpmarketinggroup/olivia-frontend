import React, {FunctionComponent} from "react";
import Link from "next/link";


interface TableRowProps {
    apartmentNum: string
    floorNum: string
    roomNum: string
    apartmentM2: string
    balconyM2: string
    wholeM2: string
    priceWithDPH: string
    availability: boolean
}

const TableRow: FunctionComponent<TableRowProps>
    = ({
           apartmentNum,
           floorNum,
           roomNum,
           apartmentM2,
           balconyM2,
           wholeM2,
           priceWithDPH,
           availability,
       }) => {
    return (
        <tr>
            <td className="font-bold text-[18px] leading-[28px] w-[130px]">{apartmentNum}</td>
            <td className="text-[16px] leading-6 tracking-[0.1px] w-[130px]">{floorNum}</td>
            <td className="font-bold text-[32px] leading-[38px] tracking-[-0.4] w-[130px]">{roomNum}</td>
            <td className="text-[16px] leading-6 tracking-[0.1px] w-[130px]">{apartmentM2}</td>
            <td className="text-[16px] leading-6 tracking-[0.1px] w-[130px]">{balconyM2}</td>
            <td className="text-[16px] leading-6 tracking-[0.1px] w-[130px]">{wholeM2}</td>
            <td className="text-[16px] leading-6 tracking-[0.1px] w-[130px]">{priceWithDPH}</td>
            <td className="w-[53px]">
                <Link href="/">
                    <button className="bg-[#476761] text-[14px] font-medium leading-5 text-white px-[10px] py-[5px]">{availability ? "voľný" : "obsadený"}</button>
                </Link>
            </td>
        </tr>
    )
}

export default TableRow