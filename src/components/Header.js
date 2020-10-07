import React from 'react';
import styles from './Header.module.scss';

function Header({ score }) {
  return (
    <header className={styles.root}>
      <h1>Memory Card</h1>
      <h3>Score: {score}</h3>
      <h3>Top Score: 0</h3>
    </header>
  );
}

export default Header;
