import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: {},
  error: null,
  isFetching: false,
};

export const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default ShopReducer;
