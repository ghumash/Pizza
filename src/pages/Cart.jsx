import React from "react";
import { Link } from "react-router-dom";

import {
  faCartShopping,
  faTrash,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem/CartItem";
import { clearItems } from "../redux/slices/cartSlice";
import ErrorPage from "./ErrorPage";
import emptyCartImg from "../assets/img/empty-cart.png";

export default function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cartReducer);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("are you sure?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return (
      <ErrorPage
        title={"Cart is empty"}
        text={
          "You probably haven't ordered pizza yet. To order a pizza, go to the main page."
        }
        button={{ link: "/", text: "Back To Pizzas" }}
        img={emptyCartImg}
      />
    );
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <FontAwesomeIcon icon={faTrash} />
            <span>Empty the trash</span>
          </div>
        </div>
        <div className="content__items">
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Your pizzas. <b>{totalCount} piece</b>
            </span>
            <span>
              Order price. <b>{totalPrice} $</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Back</span>
            </Link>
            <div className="button pay-btn">
              <span>Pay Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
