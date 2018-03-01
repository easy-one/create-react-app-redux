import fetch from 'cross-fetch';
import {getReposListUrl} from '../constants/urls';

export const getReposFromApi = () => {
  return fetch(getReposListUrl)
  .then(response => response.json())
  .then(reposList => {
    reposList.sort((a, b) => b.watchers - a.watchers);    // sort by watchers count descending
    return reposList;
  });
};

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
