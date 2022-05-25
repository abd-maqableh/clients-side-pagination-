import { useState, useMemo } from "react";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import Table from "../components/Table/Table";
import useFetch from "../hooks/useFetch";
import styles from "../styles/Home.module.css";
let PageSize = 10;
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, lodaing } = useFetch(
    "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
  );

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.auditLog?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  if (lodaing) return <Loader />;
  return (
    <div className={styles.container}>
      <Table data={currentTableData} />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data?.auditLog?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
