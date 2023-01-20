import { Link } from "react-router-dom";

import logoSvg from "../../assets/img/pizza-logo.svg";
import Search from "../Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

export default function Header() {
  const { totalPrice, items } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

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
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} $</span>
            <div className="button__delimiter"></div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
