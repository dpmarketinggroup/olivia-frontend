import React, {FunctionComponent, useMemo} from "react";

//
// interface Table {
//     apartmentNum: string
//     floorNum: string
//     roomNum: string
//     apartmentM2: string
//     balconyM2: string
//     wholeM2: string
//     priceWithDPH: string
//     availability: boolean
// }
//
// const Table: FunctionComponent<Table>
//     = ({
//            apartmentNum,
//            floorNum,
//            roomNum,
//            apartmentM2,
//            balconyM2,
//            wholeM2,
//            priceWithDPH,
//            availability,
//      }) => {
//
//     const data = React.useMemo(
//         () => [
//             {
//                 col1: {apartmentNum},
//                 col2: {floorNum},
//                 col3: {roomNum},
//                 col4: {apartmentM2},
//                 col5: {balconyM2},
//                 col6: {wholeM2},
//                 col7: {priceWithDPH},
//                 col8: {availability},
//             },
//             {
//                 col1: {apartmentNum},
//                 col2: {floorNum},
//                 col3: {roomNum},
//                 col4: {apartmentM2},
//                 col5: {balconyM2},
//                 col6: {wholeM2},
//                 col7: {priceWithDPH},
//                 col8: {availability},
//             },
//             {
//                 col1: {apartmentNum},
//                 col2: {floorNum},
//                 col3: {roomNum},
//                 col4: {apartmentM2},
//                 col5: {balconyM2},
//                 col6: {wholeM2},
//                 col7: {priceWithDPH},
//                 col8: {availability},
//             },
//         ],
//         []
//     );
//
//     const columns = React.useMemo(
//
//         () => [
//             {
//                 Header: 'Číslo apartmánu',
//                 accessor: 'col1', // accessor is the "key" in the data
//             },
//             {
//                 Header: 'Poschodie',
//                 accessor: 'col2',
//             },
//             {
//                 Header: 'Počet izieb',
//                 accessor: 'col3',
//             },
//             {
//                 Header: 'Apartmán m²',
//                 accessor: 'col4',
//             },
//             {
//                 Header: 'Balkón | Terasa m²',
//                 accessor: 'col5',
//             },
//             {
//                 Header: 'Celková výmera',
//                 accessor: 'col6',
//             },
//             {
//                 Header: 'Cena s DPH',
//                 accessor: 'col7',
//             },
//             {
//                 Header: 'Dostupnosť',
//                 accessor: 'col8',
//             },
//         ],
//         []
//     );
//
//     const tableInstance = useTable({ columns, data })
//     return (
//         <>
//             <div>
//
//             </div>
//         </>
//     )
// }