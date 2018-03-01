import {SET_REPOS_LIST} from '../constants/action-types';

export const setReposList = reposList => {
  return dispatch => dispatch({
    type: SET_REPOS_LIST,
    payload: reposList
  });
};