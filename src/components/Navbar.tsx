import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css"; // Custom CSS for Star Wars theme

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-starwars">
      <div className="container-fluid">
        <a className="navbar-brand text-starwars" href="/">
          SWars
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-starwars" href="/characters">
                Characters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-starwars" href="/planets">
                Planets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-starwars" href="/movies">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-starwars" href="/starships">
                Starships
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
