import React from 'react';
import styles from './Card.module.scss';

function Card({ id, img, handleClick }) {
  return (
    <div className={styles.root} onClick={() => handleClick(id)}>
      <img
        className={styles.image}
        src={`https://source.unsplash.com/${img}/250x350`}
        alt={`dog-${id}`}
      />
    </div>
  );
}

export default Card;
