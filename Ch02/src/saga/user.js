import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_SUCCESS } from '../reducer';

function* fetchUser() {
  const data = yield call(
    () => fetch('https://httpbin.org/ip')
      .then(response => response.json()),
  );
  yield put({ type: FETCH_USER_SUCCESS, payload: { data } });
}

function* mySaga() {
  yield takeEvery(FETCH_USER, fetchUser);
}

export default mySaga;
