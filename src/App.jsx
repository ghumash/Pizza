import "./scss/app.scss";
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFound/>
        </div>
      </div>
    </div>
  );
}
