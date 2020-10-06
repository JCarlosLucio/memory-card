import React from 'react';

function Card({ id, img }) {
  return (
    <div>
      <img
        src={`https://source.unsplash.com/${img}/250x350`}
        alt={`dog-${id}`}
      />
    </div>
  );
}

export default Card;
