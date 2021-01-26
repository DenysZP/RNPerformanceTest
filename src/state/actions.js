import * as types from './types';

export const changeFoo = (payload) => ({
  type: types.CHANGE_FOO,
  payload,
});

export const changeBar = (payload) => ({
  type: types.CHANGE_BAR,
  payload,
});
