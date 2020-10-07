import React, { useEffect, useState } from 'react';
import useShuffleState from './hooks/useShuffleState';
import Header from './components/Header';
import CardGrid from './components/CardGrid';

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

  const [cards, shuffleCards] = useShuffleState(initialCards);
  const [score, setScore] = useState([]);
  const [topScore, setTopScore] = useState(0);

  useEffect(
    () => {
      if (score.length > topScore) {
        setTopScore(score.length);
      }
    },
    [score, topScore]
  );

  const handleClick = (id) => {
    if (score.includes(id)) {
      setScore([]);
    } else {
      setScore([...score, id]);
    }
    shuffleCards(initialCards);
  };

  return (
    <div>
      <Header score={score.length} topScore={topScore} />
      <CardGrid cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
