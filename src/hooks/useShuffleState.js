import { useState } from 'react';
import { shuffle } from '../helpers/helpers';

function useShuffleState(initialState) {
  const [state, setState] = useState(shuffle(initialState));

  const shuffleState = () => {
    setState(shuffle(initialState));
  };

  return [state, shuffleState];
}

export default useShuffleState;
