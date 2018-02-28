import React from 'react';
import {Link} from 'react-router-dom';

class ReposList extends React.Component {
  renderList(repos) {
    if (repos.length === 0) {
      return <i>Can't load any Facebook repo</i>
    }
    return repos.map((repo) => {
      return <Link to={repo.name} className="nav-link">{repo.name}</Link>;
    })
  }

  render() {
    return (
      <nav className="nav navbar-light navbar-toggleable-sm">
        <button className="navbar-toggler d-sm-none mt-2" data-toggle="collapse" data-target="#navbar" aria-expanded="true">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show width flex-column pt-2" id="navbar">
          {this.renderList(this.props.repos)}
        </div>
      </nav>
    );
  }
}

export default ReposList;