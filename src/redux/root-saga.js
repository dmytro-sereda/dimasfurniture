import { all, call } from "redux-saga/effects";

import { UserSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(UserSagas)]);
}
