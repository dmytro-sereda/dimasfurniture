import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: {},
  error: null,
  isLoading: true,
};

export const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isLoading: false };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default ShopReducer;
