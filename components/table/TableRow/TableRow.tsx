
export interface TableRowProps {
    id: number;
    apartmentNumber: string;
    floor: string;
    numberOfRooms: number;
    totalArea: number;
    availability: 'voľný' | 'rezervovaný' | 'predaný'
    price: number;
    additionalRoom: number
}

const TableRow = ({apartmentNumber, numberOfRooms, availability, price, totalArea, floor, additionalRoom}: TableRowProps) => {
    return (
        <div className={'w-full flex items-center justify-between py-[20px] hover:bg-[#0E3F3B33]'}>
            <div className={'w-[130px] font-bold text-[18px] leading-[28px]'}>
                {apartmentNumber}
            </div>
            <div className={'w-[130px]'}>
                {floor}
            </div>
            <div className={'w-[130px] text-[32px] leading-[38px] font-bold'}>
                {numberOfRooms}
            </div>
            <div className={'w-[130px]'}>
                {totalArea}
            </div>
            <div className={'w-[130px]'}>
                {additionalRoom}
            </div>
            <div className={'w-[130px]'}>
                {price}
            </div>
            <div className={'w-[130px]'}>
                <div className={'bg-[#476761] w-[55px] h-[30px] flex items-center justify-center font-medium text-white text-[14px] leading-[20px] ml-auto'}>
                    {availability}
                </div>
            </div>
        </div>
    );
};

export default TableRow;
