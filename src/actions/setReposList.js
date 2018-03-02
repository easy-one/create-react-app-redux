import fetch from 'cross-fetch';
import {SET_REPOS_LIST, SET_ACTIVE_REPO} from '../constants/action-types';
import {getReposListUrl} from '../constants/urls';

export const findRepoByName = (reposList, repoName) => {
  if (repoName) {
    const matchingRepo = reposList.find(repo => repo.name === repoName);
    if (matchingRepo) {
      return matchingRepo;
    }
    else {
      alert(`Facebook does not have ${repoName} repo`);
    }
  }
  // in case repoName is not valid, pick the topmost repo
  if (reposList.length) {
    return reposList[0];
  }
  return null;
};

export const setReposList = (repoNameFromRoute) => {
  return (dispatch) => {
    fetch(getReposListUrl)
    .then(response => response.json())
    .then(reposList => reposList.sort((a, b) => b.watchers - a.watchers)) // sort descending
    .then(reposList => {
      const activeRepo = findRepoByName(reposList, repoNameFromRoute);
      // unfortunately router v4 doesn't support setting route inside an action
      window.history.pushState(null, null, '/' + activeRepo.name);

      dispatch({
        type: SET_ACTIVE_REPO,
        activeRepo
      });
      dispatch({
        type: SET_REPOS_LIST,
        reposList
      });
    });
  }
};