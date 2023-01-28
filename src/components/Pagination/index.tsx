import { FC } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "./Pagination.module.scss";
import { IPaginationProps } from "../../ts/type";
import { selectFilter } from "../../redux/filter/selectors";

export const Pagination: FC<IPaginationProps> = ({ onChangePage }) => {
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
    />
  );
};

 
