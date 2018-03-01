import React from 'react';
import ReposList from '../ReposLIst/ReposList';

const Sidebar = () => {
  return (
    <nav className="nav navbar-light">
      <button className="navbar-toggler d-sm-none position-fixed mt-2"
        data-toggle="collapse" data-target="#navbar" aria-expanded="true">
        <span className="navbar-toggler-icon"/>
      </button>
      <div className="navbar-collapse collapse show fast-transition flex-column pt-2 mt-5 mt-sm-0" id="navbar">
        <ReposList />
      </div>
    </nav>
  );
};

export default Sidebar;