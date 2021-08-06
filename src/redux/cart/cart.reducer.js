import CartActionTypes from "./cart.types";
import { addItem, decreaseItemCount } from "./cart.utils";

const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      return { ...state, cartItems: addItem(action.payload, state.cartItems) };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemCount(action.payload, state.cartItems),
      };
    case CartActionTypes.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    default:
      return { ...state };
  }
};

export default CartReducer;
