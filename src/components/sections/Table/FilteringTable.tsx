import React, {FunctionComponent, useMemo} from "react";
import {useTable, useGlobalFilter, useFilters } from "react-table"
import {COLUMNS} from "./columns";
import {v4 as uuidv4} from 'uuid';
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

interface TableProps {
    apartmentNum?: string
    floorNum?: string
    roomNum?: string
    apartmentM2?: string
    balconyM2?: string
    wholeM2?: string
    priceWithDPH?: string
    availability?: boolean
}

const FilteringTable: FunctionComponent<TableProps>
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

    const table1: TableProps[] = [
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

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => table1, [])
    const defaultColumn = useMemo(()=> {
        return{
            Filter: ColumnFilter
        }
    }, [])

    const {
        getTableBodyProps,
        getTableProps,
        prepareRow,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter
    );

    const { globalFilter } = state;

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
            {
                headerGroups.map((headerGroup, index) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} key={uuidv4()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))
                        }
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} key={uuidv4()}>
                            {
                                row.cells.map(cell => (
                                    <td {...cell.getCellProps()} key={uuidv4()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </>
    )
}

export default FilteringTable;