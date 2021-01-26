import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducer';

const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return store;
};

export default configureStore;
