import React from 'react';
import {Link} from 'react-router-dom';

const ReposList = (props) => {
  return props.repos.map((repo, index) => {
    const activeClass = (index === props.activeRepoIndex) ? ' active' : '';
    return <Link
      key={repo.name}
      to={repo.name}
      onClick={() => props.changeActiveRepo(index)}
      className={'nav-link pl-0 pr-0' + activeClass}>
        {repo.name}
      </Link>;
  })
};

export default ReposList;