import React from 'react';

const NavBar = (props) => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>

        <button className="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="navbar-end">
        <a href="#" className="navbar-item">Events</a>
        <a href="#" className="navbar-item">Create</a>
      </div>
    </nav>
  );
}

export default NavBar;
