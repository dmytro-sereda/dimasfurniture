import UserActionTypes from "./user.types";
import { call, all, put, takeLatest } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";
import {
  auth,
  provider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ userId: userSnapshot.id, ...userSnapshot }));
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
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

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* UserSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onUserSignOut),
    call(onCheckUserSession),
  ]);
}
