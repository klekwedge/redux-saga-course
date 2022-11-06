import { INCREASE_COUNT, DECREASE_COUNT, GET_LATESST_NEWS } from '../constants';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const getLatestNews = () => ({
  type: GET_LATESST_NEWS,
});
