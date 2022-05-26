import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";

import css from "./Table.module.scss";
import isObjectValueEmpty from "../../utils/isEmptyObject";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
const Table = ({ data }) => {
  const formFilter = useSelector((state) => state.FormData.formFilter);
  const [tableData, setTableData] = useState();

  useEffect(() => {
    if (!isEmpty(data) && !isObjectValueEmpty(formFilter)) {
      const filterTableData = data?.filter(
        (item) =>
          item.applicationType === formFilter.applicationType ||
          item.actionType === formFilter.actionType ||
          item.applicationId === formFilter.applicationID ||
          item.userId == formFilter.employeeID
      );
      setTableData(!isEmpty(filterTableData) ? filterTableData : []);
    } else {
      setTableData(data);
    }
  }, [data, formFilter]);

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return isEmpty(tableData) ? (
    <div>
      No Data found ,if you filtering from Form please clear Inputs to get all
      data
    </div>
  ) : (
    <table className={css.table}>
      <tbody>
        <TableHead handleSorting={handleSorting} />
        <TableBody tableData={tableData} />
      </tbody>
    </table>
  );
};

export default Table;
