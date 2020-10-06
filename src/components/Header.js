import React from 'react';

function Header({ score }) {
  return (
    <header>
      <h1>Memory Card</h1>
      <h3>Score: {score}</h3>
      {/* topscore goes here */}
    </header>
  );
}

export default Header;
