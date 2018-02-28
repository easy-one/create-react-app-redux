import React from 'react';


class Menu extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 col-sm-3 col-lg-2">
            <nav className="nav navbar-light navbar-toggleable-sm">
              <button className="navbar-toggler d-sm-none mt-2" data-toggle="collapse" data-target="#navbar" aria-expanded="true">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse show width flex-column pt-2" id="navbar">
                <a href="" className="nav-link">Linnk</a>
                <a href="" className="nav-link">Linnk</a>
                <a href="" className="nav-link">Linnk</a>
              </div>
            </nav>
          </div>
          <div className="col-8 col-sm-9 col-lg-10">
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;