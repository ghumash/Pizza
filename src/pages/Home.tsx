import { FC, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import {
  Pagination,
  Categories,
  Sort,
  PizzaBlock,
  PizzaBlockSkeleton,
} from "../components";

import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizza/asyncActions";
import ErrorPage from "./ErrorPage";
import notFoundImg from "../assets/img/not-found-page.png";
import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizzaData } from "../redux/pizza/selectors";
import { SearchPizzaParams } from "../redux/pizza/types";
import { sortList } from "../ts/const";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const onClickCategory = useCallback((i: number) => {
    dispatch(setCategoryId(i));
  }, []);

  const onClickPagination = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        category,
        order,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  useEffect(() => {
    getPizzas();
    // if (isMounted.current) {
    //   const params = {
    //     categoryId: categoryId > 0 ? categoryId : null,
    //     sortProperty: sort.sortProperty,
    //     currentPage,
    //   };
    //   const queryStr = qs.stringify(params, { skipNulls: true });
    //   navigate(`?${queryStr}`);
    // }

    // if (window.location.hash.substring(3).length !== 0) {
    //   dispatch(fetchPizzas({} as SearchPizzaParams));
    // }
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // useEffect(() => {
  //   if (window.location.hash.substring(3).length !== 0) {
  //     const params = qs.parse(
  //       window.location.hash.substring(3)
  //     ) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);
  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       })
  //     );
  //   }
  //   isMounted.current = true;
  // }, []);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const sekeletons = [...new Array(6)].map((_, i) => (
    <PizzaBlockSkeleton key={i} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onSelectCategory={onClickCategory} />
        <Sort value={sort} />
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
};

export default Home;
