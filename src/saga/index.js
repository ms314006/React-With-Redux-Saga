import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_COUNT, FETCH_SUCCESS } from '../reducer';

// 工作的 Saga：當 action 是 USER_FETCH_REQUESTED 時被觸發
function* fetchUser() {
  const user = yield call(() => { return fetch('https://httpbin.org/get'); });
  console.log(user)
  yield put({ type: FETCH_SUCCESS, user });
}

/*
  在每次 dispatch `USER_FETCH_REQUESTED` action 時，啟動 fetchUser。
  允許同時取得使用者。
*/
function* mySaga() {
  yield takeEvery(FETCH_COUNT, fetchUser);
}

export default mySaga;
