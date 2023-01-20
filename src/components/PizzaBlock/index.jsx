import React from "react";

import { typeNames } from "../../js/const";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

export default function PizzaBlock({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartReducer.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

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
          <div
            className="button button--outline button--add"
            onClick={onClickAdd}
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
}
