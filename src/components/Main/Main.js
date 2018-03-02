import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setReposList} from '../../actions/setReposList';
import Sidebar from '../Sidebar/Sidebar';
import RepoDetails from '../RepoDetails/RepoDetails';

class Main extends React.Component {
  componentDidMount() {
    this.props.setReposList(this.props.match.params.repoName);
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
      setReposList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Main);