import { FC } from "react";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import { CartItem, ICartItemProps } from "../../ts/type";

const CartItemBlock: FC<ICartItemProps> = (props) => {
  const { id, price, size, type, count, imageUrl, title } = props;
  const dispatch = useDispatch();

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };

  const onClickRemove = () => {
    if (window.confirm("are you sure?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type}, {size} cm
        </p>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className={
            "button button--outline button--circle cart__item-count-minus"
          }
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} $</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
    </div>
  );
};
export default CartItemBlock;
