import { useState, useMemo } from "react";
import Form from "../components/From/Form";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import Table from "../components/Table/Table";
import useFetch from "../hooks/useFetch";
import styles from "../styles/Home.module.css";
let PageSize = 10;
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, lodaing } = useFetch(
    "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
  );
  const applictionType = useMemo(
    () => data?.auditLog?.map((item) => item?.applicationType),
    [data]
  );
  const actionType = useMemo(
    () => data?.auditLog?.map((item) => item?.actionType),
    [data]
  );
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.auditLog?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  if (lodaing) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> Applications Logger</h1>
      </div>
      <Form
        applictionType={[...new Set(applictionType)]}
        actionType={[...new Set(actionType)]}
      />
      <Table data={currentTableData} />
      <Pagination
        currentPage={currentPage}
        totalCount={data?.auditLog?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
