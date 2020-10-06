import React from 'react';
import styles from './Card.module.scss';

function Card({ id, img }) {
  return (
    <div className={styles.root}>
      <img
        src={`https://source.unsplash.com/${img}/250x350`}
        alt={`dog-${id}`}
      />
    </div>
  );
}

export default Card;
