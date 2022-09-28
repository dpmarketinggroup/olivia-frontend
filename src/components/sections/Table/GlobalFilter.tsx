import React, { FunctionComponent, useState } from "react";
interface FilterProps {
    filter: string;
    setFilter: (val: string) => void;
}

const GlobalFilter: FunctionComponent<FilterProps> = ({
                                                          filter,
                                                          setFilter,
                                                      }) => {
    return(
        <span>
            Search:{' '}
            <input value={filter || ''} onChange={e => setFilter(e.target.value)}/>
        </span>
    )
};

export default GlobalFilter;