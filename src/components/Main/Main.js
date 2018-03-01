import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getReposFromApi, findRepoByName} from '../../utils/getReposFromApi'
import {setReposList} from '../../actions/setReposList';
import {setActiveRepo} from '../../actions/setActiveRepo';
import Sidebar from '../Sidebar/Sidebar';
import RepoDetails from '../RepoDetails/RepoDetails';

class Main extends React.Component {
  constructor() {
    super();
    getReposFromApi()
    .then(reposList => {
      const activeRepo = findRepoByName(reposList, this.props && this.props.match.params.repoName);
      this.props.setActiveRepo(activeRepo);
      this.props.history.push('/' + activeRepo.name); // router v4 doesn't support setting route inside an action
      this.props.setReposList(reposList);
    });
  }

  render() {
    if (!this.props.reposList) {
      return <i>Loading...</i>
    }
    if (this.props.reposList.length === 0) {
      return <i>Strange, but Facebook has no public repos on Github...</i>
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 col-sm-5 col-lg-4 col-xl-3" id="sidebar">
            <Sidebar />
          </div>
          <div className="col-12 col-sm-7 col-lg-8 col-xl-9">
            <RepoDetails />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reposList: state.repos.reposList,
  activeRepo: state.repos.activeRepo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      setReposList,
      setActiveRepo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Main);