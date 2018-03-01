import React from 'react';
import {Link} from 'react-router-dom';

const ReposList = (props) => {
  return props.repos.map(repo => {
    const activeClass = (repo === props.activeRepo) ? ' active' : '';
    return <Link
      key={repo.name}
      to={repo.name}
      onClick={() => props.changeActiveRepo(repo)}
      className={'nav-link pl-0 pr-0' + activeClass}>
        {repo.name}
      </Link>;
  })
};

export default ReposList;