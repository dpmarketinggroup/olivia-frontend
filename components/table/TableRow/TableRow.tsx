interface TableRowProps {
    id: number;
    apartmentNumber: string;
    floor: string;
    numberOfRooms: number;
    totalArea: number;
    availability: 'voľný' | 'rezervovaný' | 'predaný'
    price: number;
}

const TableRow = ({}: TableRowProps) => {
    return (
        <div className={'w-full'}>

        </div>
    );
};

export default TableRow;
