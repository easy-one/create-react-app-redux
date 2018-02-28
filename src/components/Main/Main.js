import React from 'react';
import fetch from "cross-fetch";
import ReposList from '../ReposLIst/ReposList';
import RepoDetails from '../RepoDetails/RepoDetails';


class Main extends React.Component {
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
    .then(repos => {
      this.setState({
        repos: repos,
        activeRepoIndex: this.findRepoByName(repos, this.props && this.props.match.params.repoName)
      });
    });
  };

  findRepoByName(repos, repoName) {
    if (repoName) {
      const found = repos.find(repo => repo.name === repoName);
      if (found) {
        return repos.indexOf(found);
      }
      else {
        alert('The repo you link to does not exist any more');
      }
    }
    return 0;
  }

  changeActiveRepo(activeRepoIndex) {
    this.setState({
      ...this.state,
      activeRepoIndex: activeRepoIndex
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
              onClick={index => this.changeActiveRepo(index)} />
          </div>
          <div className="col-12 col-sm-7 col-lg-8 col-xl-9">
            {this.state.repos && this.state.repos.length ?
              <RepoDetails
                repo={this.state.repos[this.state.activeRepoIndex]} />
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
