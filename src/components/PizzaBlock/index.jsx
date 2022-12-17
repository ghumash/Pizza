import React from "react";

import { typeNames } from "../../js/const";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PizzaBlock(props) {
  const { title, price, imageUrl, sizes, types } = props;

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, i) => (
              <li
                key={type}
                onClick={() => setActiveType(i)}
                className={activeType === i ? "active" : null}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : null}
              >
                {size} cm
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">From {price} $</div>
          <div className="button button--outline button--add">
            <FontAwesomeIcon icon={faPlus} /><span>Add</span>
            <i>2</i>
          </div>
        </div>
      </div>
    </div>
  );
}
