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
    className,
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
    <ul
      className={classnames(css.paginationContainer, {
        [className]: className,
      })}
    >
      <li
        className={classnames(css.paginationItem, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
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
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(css.paginationItem, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={classnames(css.right, css.arrow)} />
      </li>
    </ul>
  );
};

export default Pagination;
