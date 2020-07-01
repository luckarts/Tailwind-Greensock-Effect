import { combineReducers } from 'redux';
import navbar from './navbar/reducer';
const reducers = {
  navbar: navbar
};

export default combineReducers(reducers);
