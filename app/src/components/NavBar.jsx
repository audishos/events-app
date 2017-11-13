import React from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
        Bootstrap
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Create</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
