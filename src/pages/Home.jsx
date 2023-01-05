import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
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

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filterReducer
  );

  const fetchPizzas = () => {
    setIsLoading(true);
    const URL = "https://637f4b1e2f8f56e28e86f2b5.mockapi.io/pizzas";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const page = `?page=${currentPage}&limit=4&`;

    axios
      .get(`${URL}${page}${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
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
      fetchPizzas();
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
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? sekeletons : pizzas}</div>
      <Pagination onChangePage={onClickPagination} />
    </div>
  );
}
