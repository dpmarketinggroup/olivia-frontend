import TableRow, {TableRowProps} from "@components/table/TableRow/TableRow";

interface TableProps {
    rows: TableRowProps[]
}

const Table = ({rows}: TableProps) => {
    return (
        <div className={'w-full max-w-[1200px] mx-auto'}>
            <div className={'flex justify-between text-black/40 font-medium text-[14px] leading-[20px]'}>
                {['Číslo apartmánu', 'Poschodie', 'Počet izieb', 'Apartmán m²', 'Balkón | Terasa m²', 'Cena s DPH', 'Dostupnosť'].map((value, index) => (
                    <h5 className={`w-[130px] ${index === 6 && 'text-right'}`} key={index}>{value}</h5>
                ))}
            </div>
            <div>
                {rows.map((row, index) => (
                    <TableRow key={index} {...row}/>
                ))}
            </div>
        </div>
    );
};

export default Table;
