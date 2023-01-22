import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
// import notFoundImg from "./assets/img/not-found-page.png";
import SinglePizza from "./pages/SinglePizza";
import MainLayout from "./layouts/MainLayout";


export default function App() {
  return (
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
              img={"./assets/img/not-found-page.png"}
              button={{ link: "/", text: "Back To Main Page" }}
            />
          }
        />
      </Route>
    </Routes>
  );
}
