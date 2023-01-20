import React from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { sortList } from "../js/const";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import ErrorPage from "./ErrorPage";
import notFoundImg from '../assets/img/not-found-page.png'

export default function Home() {
  const { searchValue } = React.useContext(SearchContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filterReducer
  );
  const { items, status } = useSelector((state) => state.pizzaReducer);

  const getPizzas = async () => {
    const URL = "https://637f4b1e2f8f56e28e86f2b5.mockapi.io/pizzas";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const page = `?page=${currentPage}&limit=4&`;

    dispatch(fetchPizzas({ URL, category, sortBy, order, search, page }));
  };

  React.useEffect(() => {
    if (window.location.hash.substring(3).length !== 0) {
      const params = qs.parse(window.location.hash.substring(3));
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scroll(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryStr = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryStr}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const onClickCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  const onClickPagination = (number) => {
    dispatch(setCurrentPage(number));
  };

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sekeletons = [...new Array(6)].map((_, i) => (
    <PizzaBlockSkeleton key={i} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onSelectCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Pizzas</h2>
      {status === "error" ? (
        <ErrorPage
          title={"An error has occurred"}
          text={"Sorry, we couldn't get pizzas, please try again later."}
          img={notFoundImg}
        />
      ) : (
        <div className="content__items">
          {status === "loading" ? sekeletons : pizzas}
        </div>
      )}
      <Pagination onChangePage={onClickPagination} />
    </div>
  );
}
