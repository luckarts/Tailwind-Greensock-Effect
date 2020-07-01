import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

import { devToolsEnhancer } from 'redux-devtools-extension';

const configureStore = () => {
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
};

export default configureStore;
