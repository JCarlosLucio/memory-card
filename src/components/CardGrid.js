import React from 'react';
import Card from './Card';
import styles from './CardGrid.module.scss';

function CardGrid({ cards, handleClick }) {
  return (
    <div className={styles.root}>
      {cards.map((card) => (
        <Card id={card.id} img={card.img} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default CardGrid;
