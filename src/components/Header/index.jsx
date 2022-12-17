import { Link } from "react-router-dom";

import logoSvg from "../../assets/img/pizza-logo.svg";
import Search from "../Search";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
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
            <span>30 $</span>
            <div className="button__delimiter"></div>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
