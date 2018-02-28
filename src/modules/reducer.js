import fetch from 'cross-fetch';
import {apiUrl, parseGithubResponse} from 'src/modules/misc';


const initialState = {
  repos: [],
  activeRepo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REPOS':
      return {
        ...state,
        repos: action.data
      };

    case 'SET_ACTIVE_REPO':
      return {
        ...state,
        activeRepo: action.data
      };

    default:
      return state;
  }
};
