import React from "react";

import style from "./Pagination.module.scss";

import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/slices/filterSlice";

export default function Pagination({ onChangePage }) {
  const { currentPage } = useSelector(selectFilter);

  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
      nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
}
