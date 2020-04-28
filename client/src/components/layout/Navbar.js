import React from "react";
import {Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
   
  </div>
</div>
  );
};

Navbar.defaultProps = {
  title: "Contact Manager",
};
export default Navbar;
