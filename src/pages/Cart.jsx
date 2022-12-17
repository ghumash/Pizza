import React from "react";
import { Link } from "react-router-dom";

import {
  faCartShopping,
  faTrash,
  faMinus,
  faPlus,
  faXmark,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart() {
  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </h2>
          <div className="cart__clear">
            <FontAwesomeIcon icon={faTrash} />
            <span>Empty the trash</span>
          </div>
        </div>
        <div className="content__items">
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Cheese Pizza</h3>
              <p>Thin, 30 cm</p>
            </div>
            <div className="cart__item-count">
              <div className="button button--outline button--circle cart__item-count-minus">
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <b>2</b>
              <div className="button button--outline button--circle cart__item-count-plus">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div className="cart__item-price">
              <b>803 $</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
          </div>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Your pizzas. <b>1 piece</b>
            </span>
            <span>
              Order price. <b>803 $</b>
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
