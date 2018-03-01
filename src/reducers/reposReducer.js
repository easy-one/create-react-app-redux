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
        reposList: action.payload
      };

    case SET_ACTIVE_REPO:
      return {
        ...state,
        activeRepo: action.payload
      };

    default:
      return state;
  }
};

export default reposReducer;