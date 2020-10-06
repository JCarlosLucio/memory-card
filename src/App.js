import React, { useState } from 'react';
import CardGrid from './components/CardGrid';
import { shuffle } from './helpers/helpers';

function App() {
  const initialCards = [
    { id: 0, img: 'dpb-qhtcA0A' },
    { id: 1, img: 'tFiXn-Rjmb4' },
    { id: 2, img: 'qNJpGSCv_Jc' },
    { id: 3, img: 'v0_MCllHY9M' },
    { id: 4, img: '2glK9ao5jYI' },
    { id: 5, img: '11lRpYcvbrk' },
    { id: 6, img: 'KZv7w34tluA' },
    { id: 7, img: '09iA8GzINiI' },
    { id: 8, img: 'IE2Z11zKsso' },
    { id: 9, img: '7WF-9GaU-cM' },
    { id: 10, img: 'xZ5E9H5DIi0' },
    { id: 11, img: '80e_Gtz58Ks' },
  ];

  const [cards, setCards] = useState(shuffle(initialCards));
  const [score, setScore] = useState([]);

  const handleClick = (id) => {
    if (score.includes(id)) {
      setScore([]);
    } else {
      setScore([...score, id]);
    }
    setCards(shuffle(initialCards));
  };

  return (
    <div>
      <header>
        <h1>Memory Card</h1>
        <h3>Score: {score.length}</h3>
        {/* topscore goes here */}
      </header>
      <CardGrid cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
