import React from 'react';
import ReposList from '../ReposLIst/ReposList';
import RepoDetails from '../RepoDetails/RepoDetails';
import {getRepos} from '../../utils/utils';


class App extends React.Component {
  state = {
    repos: [],
    activeRepoIndex: null
  };

  componentDidMount() {
    getRepos();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <ReposList repos={this.state.repos}/>
          </div>
          <div className="col-6 col-sm-8 col-lg-9 col-xl-10">
            <RepoDetails repo={this.state.repos[this.state.activeRepoIndex]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
