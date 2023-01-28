import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Loadable from "react-loadable";

import Home from "./pages/Home";
import notFoundImg from "./assets/img/not-found-page.png";
import MainLayout from "./layouts/MainLayout";
import "./scss/index.scss";
import { Loading } from "./components";

const Cart = Loadable({
  loader: () => import(/* webpack: "Cart" */ "./pages/Cart"),
  loading: () => <Loading />,
});

const ErrorPage = lazy(
  () => import(/* webpack: "ErrorPage" */ "./pages/ErrorPage")
);

const SinglePizza = lazy(
  () => import(/* webpack: "SinglePizza" */ "./pages/SinglePizza")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route
            path="pizza/:id"
            element={
              <Suspense fallback={<Loading />}>
                <SinglePizza />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <ErrorPage
                  title={"Page not found"}
                  text={"Bad Request."}
                  img={notFoundImg}
                  button={{ link: "/", text: "Back To Main Page" }}
                />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Provider>
  </HashRouter>
);
