import React from 'react';
import styles from './Header.module.scss';

function Header({ score, topScore }) {
  return (
    <header className={styles.root}>
      <h1>Memory Card</h1>
      <h3>Score: {score}</h3>
      <h3>Top Score: {topScore}</h3>
    </header>
  );
}

export default Header;
