import {SET_ACTIVE_REPO} from '../constants/action-types';

export const setActiveRepo = activeRepo => {
   return dispatch => dispatch({
    type: SET_ACTIVE_REPO,
    activeRepo
  });
};