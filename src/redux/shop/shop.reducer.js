import { SHOP_DATA } from "./shop.data";

const INITIAL_STATE = {
  collections: Object.values(SHOP_DATA),
};

export const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ShopReducer;
