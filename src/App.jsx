import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import notFoundImg from "./assets/img/not-found-page.png";

export const SearchContext = React.createContext("");

export default function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
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
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}
