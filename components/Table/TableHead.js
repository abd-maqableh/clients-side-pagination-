import React, { useState } from "react";
import css from "./Table.module.scss";
const columns = [
  { label: " ", header_key: "number", sortable: false },
  { label: "Log ID", header_key: "logId", sortable: true },
  { label: "Application Type", header_key: "applicationType", sortable: true },
  { label: "Application ID", header_key: "applicationId", sortable: true },
  { label: "Action", header_key: "action", sortable: false },
  { label: "Action Detail", header_key: "actionType", sortable: true },
  { label: "Date : Time", header_key: "creationTimestamp", sortable: true },
];
const TableHead = ({ handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (header_key, sortable) => {
    if (!sortable) return;
    const sortOrder =
      header_key === sortField && order === "asc" ? "desc" : "asc";
    setSortField(header_key);
    setOrder(sortOrder);
    handleSorting(header_key, sortOrder);
  };
  return (
    <>
      <tr>
        {columns.map(({ label, header_key, sortable }) => {
          const cl = sortable
            ? sortField && sortField === header_key && order === "asc"
              ? css.up
              : sortField && sortField === header_key && order === "desc"
              ? css.down
              : css.up
            : "";
          return (
            <th
              key={header_key}
              onClick={() => handleSortingChange(header_key, sortable)}
              className={cl}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </>
  );
};

export default TableHead;
