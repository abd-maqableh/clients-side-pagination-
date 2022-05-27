import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import css from "./Table.module.scss";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import {
  filterDate,
  handleSorting,
  isObjectValueEmpty,
} from "../../utils/appUtils";
const Table = ({ data }) => {
  const formFilter = useSelector((state) => state.FormData.formFilter);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    if (!isEmpty(data) && !isObjectValueEmpty(formFilter)) {
      const filterTableData = filterDate(data, formFilter);
      setTableData(!isEmpty(filterTableData) ? filterTableData : []);
    } else {
      setTableData(data);
    }
  }, [data, formFilter]);

  return isEmpty(tableData) ? (
    <div>
      No Data found ,if you filtering from Form please clear Inputs to get all
      data
    </div>
  ) : (
    <table className={css.table}>
      <tbody>
        <TableHead
          handleSorting={(sortField, sortOrder) =>
            setTableData(handleSorting(sortField, sortOrder, tableData))
          }
        />
        <TableBody tableData={tableData} />
      </tbody>
    </table>
  );
};

export default Table;
