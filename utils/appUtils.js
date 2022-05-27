import moment from "moment";

export const handleSorting = (sortField, sortOrder, tableData) => {
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
    return sorted;
  }
};

export const filterDate = (data, formFilter) => {
  const newData = data?.filter((item) => {
    const splitDate = item.creationTimestamp?.split(" ")[0];
    const createdAt = moment(splitDate);
    return (
      item.applicationType === formFilter.applicationType ||
      item.actionType === formFilter.actionType ||
      item.applicationId === formFilter.applicationID ||
      item.userId == formFilter.employeeID ||
      createdAt.isBetween(formFilter.fromDate, formFilter.fromDate)
    );
  });
  return newData;
};

export const isObjectValueEmpty = (obj) => {
  for (const key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
};
