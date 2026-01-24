import React from 'react';
import './Header.css';

const Header = ({ link }) => {
  return (
    <div className="sub-nav">
      <div className="nav-btn bold">
        <span>☰</span> All
      </div>
      {link.map((item, index) => (
        <a key={index} href="#" className="nav-btn">
          {item}
        </a>
      ))}
    </div>
  );
};

export default Header;