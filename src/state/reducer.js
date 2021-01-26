import { combineReducers } from 'redux';

import * as types from './types';

const foo = (state = null, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.CHANGE_FOO:
      return action.payload;
    default:
      return state;
  }
};

const bar = (state = null, action) => {
  switch (action.type) {
    case types.CHANGE_BAR:
      return action.payload;
    default:
      return state;
  }
};

const baz = combineReducers({
  foo,
  bar,
});

export default combineReducers({
  baz,
});
