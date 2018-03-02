import { SET_ACTIVE_REPO, SET_REPOS_LIST } from '../constants/action-types';

const initialState = {
  reposList: null,
  activeRepo: null
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS_LIST:
      return {
        ...state,
        reposList: action.reposList
      };

    case SET_ACTIVE_REPO:
      return {
        ...state,
        activeRepo: action.activeRepo
      };

    default:
      return state;
  }
};

export default reposReducer;