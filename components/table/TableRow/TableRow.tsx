import Link from "next/link";

export interface TableRowProps {
    id: number;
    apartmentNumber: string;
    floor: number;
    numberOfRooms: number;
    totalArea: number;
    availability: 'voľný' | 'rezervovaný' | 'predaný'
    price: string;
    additionalRoom: number
}

const TableRow = ({apartmentNumber, numberOfRooms, availability, price, totalArea, floor, additionalRoom, id}: TableRowProps) => {
    return (
        <Link href={`/apartman/${id}`}>
            <div className={'cursor-pointer w-full flex items-center justify-between py-[20px] hover:bg-[#0E3F3B33]'}>
                <div className={'xl:w-[130px] font-bold text-[18px] leading-[28px]'}>
                    {apartmentNumber}
                </div>
                <div className={'xl:w-[130px]'}>
                    {floor}
                </div>
                <div className={'xl:w-[130px] xl:text-[32px] xl:leading-[38px] font-bold'}>
                    {numberOfRooms}
                </div>
                <div className={'xl:w-[130px] hidden xl:flex'}>
                    {totalArea}
                </div>
                <div className={'xl:w-[130px] hidden xl:flex'}>
                    {additionalRoom}
                </div>
                <div className={'xl:w-[130px] hidden xl:flex'}>
                    {price} €
                </div>
                <div className={'xl:w-[130px]'}>
                    <div className={'bg-[#476761] w-[55px] h-[30px] flex items-center justify-center font-medium text-white text-[14px] leading-[20px] ml-auto'}>
                        {availability}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TableRow;
