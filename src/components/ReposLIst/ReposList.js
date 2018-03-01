import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setActiveRepo} from '../../actions/setActiveRepo'

const ReposList = (props) => {
  return props.reposList.map(repo => {
    const activeClass = (repo === props.activeRepo) ? ' active' : '';
    return <Link
      to={repo.name}
      key={repo.name}
      onClick={() => props.setActiveRepo(repo)}
      className={'nav-link pl-0 pr-0' + activeClass}>
        {repo.name}
      </Link>;
  })
};

const mapStateToProps = state => ({
  reposList: state.repos.reposList,
  activeRepo: state.repos.activeRepo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      setActiveRepo
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);