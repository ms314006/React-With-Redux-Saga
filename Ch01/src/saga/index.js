import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA, FETCH_DATA_SUCCESS } from '../reducer';

function* fetchData() {
  const response = yield call(fetch, 'https://httpbin.org/get');
  const data = yield response.json();
  /*
  const data = yield call(
    () => fetch('https://httpbin.org/get')
      .then(response => response.json()),
  );
  */
  yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

function* mySaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}

export default mySaga;
