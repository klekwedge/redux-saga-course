import {
  takeEvery,
  put,
  call,
  fork,
  all,
  race,
} from '@redux-saga/core/effects';
import { GET_NEWS } from '../constants';
import { getLatestNews, getPopularNews } from '../../api';
import { setLatestNews, setPopulartNews } from '../actions/actionsCreator';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(setPopulartNews(hits));
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);

  // yield all([call(handleLatestNews), call(handlePopularNews)]);
  //  yield race([call(handleLatestNews), call(handlePopularNews)]);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
