import fetch from "cross-fetch";


const apiUrl = 'https://api.github.com/users/facebook/repos?type=all&sort=updated';

export const getRepos = () => {
  return dispatch => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(json =>
      dispatch({
        type: 'SET_REPOS',
        data: parseGithubResponse(json)
      })
    );
  };
};

export const parseGithubResponse = (json) => {
  debugger;
};