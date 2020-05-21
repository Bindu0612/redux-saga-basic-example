import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);//setTimeout
  yield put({ type: "AGE_UP_ASYNC", value: 1 });//dispatch
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
  yield takeLatest("AGE_DOWN");

}
