import React from "react";
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
      <div className="container">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#wanderlustNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="wanderlustNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              {" "}
              <Link className="nav-link" to="/home">
                {" "}
                <i className="fa fa-home fa-lg"></i> Home
              </Link>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link" to="/aboutus">
                <i className="fa fa-info fa-lg"></i>About Us
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link" to="/vendors">
                <i className="fa fa-list fa-lg"></i> Vendor Sites
              </Link>
            </li>
            <li className="nav-item">
              {" "}
              <Link className="nav-link" to="/reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
