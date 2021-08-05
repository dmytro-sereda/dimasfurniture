import ShopActionTypes from "./shop.types";
import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollections() {
  try {
    const querySnapshot = yield firestore.collection("collections").get();
    const collections = yield call(
      convertCollectionsSnapshotToMap,
      querySnapshot
    );
    yield put(fetchCollectionsSuccess(collections));
  } catch (err) {
    yield put(fetchCollectionsFailure(err));
  }
}

export function* onFetchCollections() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export function* ShopSagas() {
  yield all([call(onFetchCollections)]);
}
