import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reposReducer from './reposReducer';

export default combineReducers({
  router: routerReducer,
  repos: reposReducer
});