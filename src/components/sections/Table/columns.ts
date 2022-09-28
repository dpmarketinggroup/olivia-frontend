import {Column} from "react-table";
import ColumnFilter from "./ColumnFilter";

export const COLUMNS: Column[] = [
    {
        Header: 'Číslo apartmánu',
        accessor: 'apartmentNum',
        disableFilters: true,
    },
    {
        Header: 'Poschodie',
        accessor: 'floorNum',
    },
    {
        Header: 'Počet izieb',
        accessor: 'roomNum',
    },
    {
        Header: 'Apartmán m²',
        accessor: 'apartmentM2',
        disableFilters: true,
    },
    {
        Header: 'Balkón | Terasa m²',
        accessor: 'balconyM2',
    },
    {
        Header: 'Celková výmera',
        accessor: 'wholeM2',
    },
    {
        Header: 'Cena s DPH',
        accessor: 'priceWithDPH',
    },
    {
        Header: 'Dostupnosť',
        accessor: 'availability',
    },

]