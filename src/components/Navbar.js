import React from "react";
import PropTypes from "prop-types";
// import { link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-a" href="/about">
                  About
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggle}
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Togglemode
          </label>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title Here",
};
