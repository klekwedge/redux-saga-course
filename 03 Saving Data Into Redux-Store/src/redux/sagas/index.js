import { takeEvery, put, call } from '@redux-saga/core/effects';
import { GET_LATEST_NEWS } from '../constants';
import { getLatestNews } from '../../api';
import { setLatestNews } from '../actions/actionsCreator';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
