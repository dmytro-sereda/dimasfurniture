import CartActionTypes from "./cart.types";

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const decreaseItemCount = (item) => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item,
});

export const deleteItemFromCart = (item) => ({
  type: CartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item,
});
