import { takeEvery } from '@redux-saga/core/effects';
import { GET_LATESST_NEWS } from '../constants';
import { getLatestNews } from '../../api';

// const delay = (time) =>
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, time * 1000);
//   });

// export function* workerSaga() {
//   const count = yield select(({ counter }) => counter.count);
//   yield delay(2);
//   console.log(`request ${count}`);
// }

// export function* watchClickSaga() {
//   yield takeLatest(INCREASE_COUNT, workerSaga);
//   yield takeLeading(INCREASE_COUNT, workerSaga);
// }

export function* workerSaga() {
  const data = yield getLatestNews();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATESST_NEWS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
