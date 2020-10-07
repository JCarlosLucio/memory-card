import React, { useEffect, useState } from 'react';
import useShuffleState from './hooks/useShuffleState';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import seedCards from './seedCards';

function App() {
  const [cards, shuffleCards] = useShuffleState(seedCards);
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
    shuffleCards(seedCards);
  };

  return (
    <div>
      <Header score={score.length} topScore={topScore} />
      <CardGrid cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
