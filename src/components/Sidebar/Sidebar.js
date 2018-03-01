import React from 'react';
import ReposList from '../ReposLIst/ReposList';

const Sidebar = (props) => {
  return (
    <nav className="nav navbar-light">
      <button className="navbar-toggler d-sm-none position-fixed mt-2"
        data-toggle="collapse" data-target="#navbar" aria-expanded="true">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse show fast-transition flex-column pt-2 mt-5 mt-sm-0" id="navbar">
        <ReposList
          repos={props.repos}
          activeRepoIndex={props.activeRepoIndex}
          changeActiveRepo={props.changeActiveRepo} />
      </div>
    </nav>
  );
};

export default Sidebar;