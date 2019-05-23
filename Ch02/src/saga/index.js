import { all } from 'redux-saga/effects';
import data from './data';
import user from './user';

function* rootSaga() {
  yield all([
    data(),
    user(),
  ]);
}

export default rootSaga;
