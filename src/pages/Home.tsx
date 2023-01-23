import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate, Link } from "react-router-dom";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/PizzaBlock/PizzaBlockSkeleton";
import Pagination from "../components/Pagination";
import {
  selectFilter,
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { sortList } from "../ts/const";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizzaSlice";
import ErrorPage from "./ErrorPage";
import notFoundImg from "../assets/img/not-found-page.png";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const getPizzas = async () => {
    const URL = "https://637f4b1e2f8f56e28e86f2b5.mockapi.io/pizzas";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const page = `?page=${currentPage}&limit=4&`;

    dispatch(
      // @ts-ignore
      fetchPizzas({
        URL,
        category,
        sortBy,
        order,
        search,
        page,
      })
    );
  };

  useEffect(() => {
    if (window.location.hash.substring(3).length !== 0) {
      const params = qs.parse(window.location.hash.substring(3));
      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );
      dispatch(setFilters({ ...params, sort }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
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

  const onClickCategory = (i: number) => {
    dispatch(setCategoryId(i));
  };

  const onClickPagination = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const pizzas = items.map((obj: any) => (
    <Link to={`/pizza/${obj.id}`} key={obj.id}>
      <PizzaBlock {...obj} />
    </Link>
  ));
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
          button={null}
        />
      ) : (
        <div className="content__items">
          {status === "loading" ? sekeletons : pizzas}
        </div>
      )}
      <Pagination onChangePage={onClickPagination} />
    </div>
  );
};

export default Home;
