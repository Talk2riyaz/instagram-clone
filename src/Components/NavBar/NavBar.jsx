import React from "react";
import halfmoon from "halfmoon";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container justify-content-between">
        <span className="navbar-brand">
          <i className="fa fa-instagram"></i>
        </span>

        <div className="navbar-content ">
          <button className="btn btn-primary mr-5">Add Post</button>
          <button
            className="btn btn-action mr-5"
            type="button"
            onClick={() => halfmoon.toggleDarkMode()}
            aria-label="Toggle dark mode"
          >
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
