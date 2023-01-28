import { CartItem } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  const items = cart ? JSON.parse(cart) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items: items as CartItem[],
    totalPrice,
  };
};
