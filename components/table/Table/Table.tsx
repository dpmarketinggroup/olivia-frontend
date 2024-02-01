import TableRow, {TableRowProps} from "@components/table/TableRow/TableRow";

interface TableProps {
    rows: TableRowProps[]
}

const Table = ({rows}: TableProps) => {
    return (
        <div className={'w-full max-w-[1200px] mx-auto'}>
            <div>
                {rows.map((row, index) => (
                    <TableRow key={index} {...row}/>
                ))}
            </div>
        </div>
    );
};

export default Table;
