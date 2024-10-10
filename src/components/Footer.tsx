// src/components/Footer.tsx
import React from 'react';
import './Navbar.css'; // Import the Navbar styles

const Footer: React.FC = () => {
  return (
    <footer className="navbar-starwars text-center py-3">
      <div className="container">
        <p className="mb-0 text-starwars">
          &copy; {new Date().getFullYear()} Marcial. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
