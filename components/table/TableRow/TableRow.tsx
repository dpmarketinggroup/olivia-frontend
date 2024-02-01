import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";

export interface TableRowProps {
    id: number;
    apartmentNumber: string;
    floor: number;
    numberOfRooms: number;
    totalArea: number;
    availability: 'voľný' | 'rezervovaný' | 'predaný'
    price: string;
    additionalRoom: number,
    img: string;
}

const TableRow = ({apartmentNumber, numberOfRooms, availability, price, totalArea, floor, additionalRoom, id, img}: TableRowProps) => {
    function getColor() {
        switch (availability) {
            case "voľný":
                return 'bg-[#476761]';
            case "predaný":
                return 'bg-[#EE4C36]';
            case "rezervovaný":
                return 'bg-[#E4B80B]'
        }
    }

    const {t: translate} = useTranslation('home');
    const translateAvailability = (availability: string) => {
        if (availability === 'voľný')
            return translate("filter-available")
        else if(availability === 'rezervovaný')
            return translate("filter-reserved")
        return translate("filter-sold")
    }

    return (
        <Link href={`/apartman/${id}`}>
            <div className={'group cursor-pointer w-full flex items-center justify-between py-[20px] hover:bg-[#0E3F3B33] xl:relative'}>
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
                    {price ? `${price} €` : '-'}
                </div>
                <div className={'xl:w-[130px]'}>
                    <div className={`${getColor()} w-min px-[10px] h-[30px] flex items-center justify-center font-medium text-white text-[14px] leading-[20px] ml-auto`}>
                        {translateAvailability(availability)}
                    </div>
                </div>
                <div className={`absolute w-[200px] h-[180px] hidden group-hover:flex items-center flex-col z-[3] top-[90%] left-[39%]`}>
                    <div style={{
                        width:0,
                        height: 0,
                        borderStyle: 'solid',
                        borderWidth: '0 20px 15px 20px',
                        borderColor: 'transparent transparent #fff transparent'
                    }}></div>
                    <div className={'bg-white w-full max-w-[150px] h-[120px]'}>
                        <Image alt={apartmentNumber} objectFit={'cover'} layout={'fill'} src={img}/>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TableRow;
