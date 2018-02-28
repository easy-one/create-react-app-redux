import React from 'react';
import {Link} from 'react-router-dom';

class ReposList extends React.Component {
  renderList(repos) {
    if (!repos) {
      return <i>Loading...</i>
    }
    if (repos.length === 0) {
      return <b>Can't load any Facebook repo</b>
    }
    return repos.map((repo, index) => {
      let className = 'nav-link pl-0 pr-0';
      if (index === this.props.activeRepoIndex) {
        className += ' active';
      }
      return <Link
        key={repo.name}
        to={repo.name}
        onClick={() => this.props.onClick(index)}
        className={className}>{repo.name}</Link>;
    })
  }

  render() {
    return (
      <nav className="nav navbar-light">
        <button className="navbar-toggler d-sm-none position-fixed mt-2"
            data-toggle="collapse" data-target="#navbar" aria-expanded="true">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show fast-transition flex-column pt-2 mt-5 mt-sm-0" id="navbar">
          {this.renderList(this.props.repos)}
        </div>
      </nav>
    );
  }
}

export default ReposList;