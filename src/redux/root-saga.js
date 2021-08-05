import { all, call } from "redux-saga/effects";

import { UserSagas } from "./user/user.sagas";
import { ShopSagas } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(UserSagas), call(ShopSagas)]);
}
