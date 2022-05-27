import React from "react";

const TableBody = ({ tableData }) => {
  return tableData?.map((item, index) => (
    <tr key={`${item.userId}_${item.logId}`}>
      <td>{index}</td>
      <td>{item.logId}</td>
      <td>{item.applicationType}</td>
      <td>{item.applicationId}</td>
      <td>
        {item.applicationId ? "Submit Application" : "Initiate Application"}
      </td>
      <td>{item.actionType}</td>
      <td>{item.creationTimestamp}</td>
    </tr>
  ));
};

export default TableBody;
