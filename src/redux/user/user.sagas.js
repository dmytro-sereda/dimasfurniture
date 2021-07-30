import { call, all, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "./user.types";

import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";
import { auth, provider } from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield put(signInSuccess(user));
  } catch (err) {
    console.log(err);
    yield put(signInFailure(err));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithGoogle);
}

export function* onUserSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* UserSagas() {
  yield all([call(onGoogleSignInStart), call(onUserSignOut)]);
}
