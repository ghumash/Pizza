import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import notFoundImg from "./assets/img/not-found-page.png";
import SinglePizza from "./pages/SinglePizza";
import MainLayout from "./layouts/MainLayout";
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<SinglePizza />} />
          <Route
            path="*"
            element={
              <ErrorPage
                title={"Page not found"}
                text={"Bad Request."}
                img={notFoundImg}
                button={{ link: "/", text: "Back To Main Page" }}
              />
            }
          />
        </Route>
      </Routes>
    </Provider>
  </HashRouter>
);
