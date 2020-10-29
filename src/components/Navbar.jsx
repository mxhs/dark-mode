import React, { useState } from 'react';

const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.darkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          // onClick={toggleMode}
          onClick={props.darkMode('')}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
