import React from 'react';
import Card from './Card';

function CardGrid({ cards, handleClick }) {
  return (
    <div>
      {cards.map((card) => (
        <Card id={card.id} img={card.img} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default CardGrid;
