import { FC, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import logoSvg from "../../assets/img/pizza-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/selectors";
import { Search } from "../";

export const Header: FC = () => {
  const location = useLocation();
  const isMounted = useRef(false);
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      window.localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza" />
            <div>
              <h1>Pizzeria</h1>
              <p>The best pizza in the world!</p>
            </div>
          </div>
        </Link>
        {location.pathname !== "/cart" && (
          <>
            <Search />
            <div className="header__cart">
              <Link to="/cart" className="button button--cart">
                <span>{totalPrice} $</span>
                <div className="button__delimiter"></div>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{totalCount}</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
