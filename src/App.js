import React, { useState } from 'react';

function App() {
  const initialCards = [
    { id: 0, imgSrc: '' },
    { id: 1, imgSrc: '' },
    { id: 2, imgSrc: '' },
    { id: 3, imgSrc: '' },
    { id: 4, imgSrc: '' },
    { id: 5, imgSrc: '' },
    { id: 6, imgSrc: '' },
    { id: 7, imgSrc: '' },
    { id: 8, imgSrc: '' },
    { id: 9, imgSrc: '' },
    { id: 10, imgSrc: '' },
    { id: 11, imgSrc: '' },
  ];

  const [cards, setCards] = useState(initialCards);

  return (
    <div>
      <header>
        <h1>Memory Card</h1>
        {/* score/topscore go here */}
      </header>
      <main>{cards.map((card) => <div>{card.id}</div>)}</main>
    </div>
  );
}

export default App;
