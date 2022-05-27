import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";
import css from "./pagination.module.scss";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.length
    ? paginationRange[paginationRange?.length - 1]
    : 1;
  return (
    <ul className={css.paginationContainer}>
      <li
        className={classnames(css.paginationItem, {
          [css.disabled]: currentPage === 1,
        })}
        onClick={(e) =>
          currentPage === 1 ? e.stopPropagation() : onPrevious()
        }
      >
        <div className={classnames(css.left, css.arrow)} />
      </li>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className={classnames(css.paginationItem, css.dots)}
              key={index}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classnames(css.paginationItem, {
              [css.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(css.paginationItem, {
          [css.disabled]: currentPage === lastPage,
        })}
        onClick={(e) =>
          currentPage === lastPage ? e.stopPropagation() : onNext()
        }
      >
        <div className={classnames(css.right, css.arrow)} />
      </li>
    </ul>
  );
};

export default Pagination;
