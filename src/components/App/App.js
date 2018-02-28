import React from 'react';
import fetch from "cross-fetch";
import ReposList from '../ReposLIst/ReposList';
import RepoDetails from '../RepoDetails/RepoDetails';


class App extends React.Component {
  state = {
    repos: null,
    activeRepoIndex: 0
  };

  constructor() {
    super();
    this.getRepos();
  }

  getRepos() {
    const apiUrl = 'https://api.github.com/users/facebook/repos?type=all&sort=name';
    return fetch(apiUrl)
    .then(response => response.json())
    .then(repos => this.setState({
      ...this.state,
      repos: repos
    }));
  };

  changeActiveRepo(newActiveRepo) {
    this.setState({
      ...this.state,
      activeRepoIndex: newActiveRepo
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 col-sm-5 col-lg-4 col-xl-3" id="sidebar">
            <ReposList
              repos={this.state.repos}
              activeRepoIndex={this.state.activeRepoIndex}
              onClick={index => this.changeActiveRepo(index)}/>
          </div>
          <div className="col-12 col-sm-7 col-lg-8 col-xl-9">
            {this.state.repos && this.state.repos.length ?
              <RepoDetails
                repo={this.state.repos[this.state.activeRepoIndex]}/>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
