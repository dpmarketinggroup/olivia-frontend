import TableRow, {TableRowProps} from "@components/table/TableRow/TableRow";

interface TableProps {
    title: string;
    rows: TableRowProps[]
}

const Table = ({rows, title}: TableProps) => {
    return (
        <div>
            <div className={'w-full max-w-[1200px] mx-auto'}>
                <h3 className={'mb-[35px] font-bold text-[32px] leading-[38px]'}>{title}</h3>
                <div>
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
            </div>
        </div>
    );
};

export default Table;
