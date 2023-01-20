import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage(props) {
  const { title, text, button, img } = props;
  return (
    <div>
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>{title}</h2>
          <p>{text}</p>
          {img ? <img src={img} alt="" /> : null}
          {button ? (
            <Link to={button.link} className="button button--black">
              <span>{button.text}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
