import React from "react";
import css from "./Table.module.scss";
const Table = ({ data }) => {
  return (
    <table className={css.table}>
      <tbody>
        <tr>
          <th>Log ID </th>
          <th>Application Type </th>
          <th>Application ID </th>
          <th>Action </th>
          <th>Action Details </th>
          <th>Date : Time </th>
        </tr>
        {data?.map((item) => (
          <tr key={`${item.userId}_${item.logId}`}>
            <td>{item.logId}</td>
            <td>{item.applicationType}</td>
            <td>{item.applicationId}</td>
            <td>
              {item.applicationId
                ? "Submit Application"
                : "Initiate Application"}
            </td>
            <td>{item.actionType}</td>
            <td>{item.creationTimestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
