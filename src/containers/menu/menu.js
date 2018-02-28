import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { getRepos } from "src/modules/misc";

class Menu extends React.Component {
  componentDidMount() {
    getRepos();
  }

  render() {
    return (
      <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 col-sm-3 col-lg-2">
            <nav className="nav navbar-light navbar-toggleable-sm">
              <button className="navbar-toggler d-sm-none mt-2" data-toggle="collapse" data-target="#navbar" aria-expanded="true">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse show width flex-column pt-2" id="navbar">
                {
                  repos.map((repo) => {
                    return <Link to={repo.name} className="nav-link">{repo.name}</Link>;
                  })
                }
              </div>
            </nav>
          </div>
          <div className="col-8 col-sm-9 col-lg-10">
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default Menu;