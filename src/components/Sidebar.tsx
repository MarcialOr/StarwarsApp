import React, { useState } from 'react';
import './Sidebar.css'; // Custom CSS for sidebar styles

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex">
      <div className={`sidebar bg-light ${isOpen ? 'open' : 'closed'}`}>
        <h4 className="text-center py-3">SWars</h4>
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/characters">Characters</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/planets">Planets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/starships">Starships</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Log</a>
          </li>
        </ul>
      </div>
      <div className="content flex-grow-1 p-3">
        <button className="btn btn-primary mb-3" onClick={toggleSidebar}>
          {isOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <div>
          <h1>Main Content Area</h1>
          <p>This is where the page content will go.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
