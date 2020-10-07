import React from 'react';
import styles from './Header.module.scss';

function Header({ score, topScore }) {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Memory Card</h1>
      <div className={styles.score}>
        <h3>Score</h3>
        <h2>{score}</h2>
      </div>
      <div className={styles.score}>
        <h3>Top Score</h3>
        <h2>{topScore}</h2>
      </div>
    </header>
  );
}

export default Header;
