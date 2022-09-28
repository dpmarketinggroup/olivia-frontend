import React, { FunctionComponent } from "react";
import { FilterProps } from "react-table";

const ColumnFilter: FunctionComponent<FilterProps<{}>> = ({ column }) => {
    const { filterValue, setFilter } = column;
    return (
        <span>
      Search:{" "}
            <input
                value={filterValue || ""}
                onChange={(e) => setFilter(e.target.value)}
                type="text"
            />
    </span>
    );
};

export default ColumnFilter;