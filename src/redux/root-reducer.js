import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from "./cart/cart.reducer";
import ShopReducer from "./shop/shop.reducer";
import UserReducer from "./user/user.reducer";
import MenuReducer from "./menu/menu.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: CartReducer,
  shop: ShopReducer,
  user: UserReducer,
  menu: MenuReducer,
});

export default persistReducer(persistConfig, rootReducer);
