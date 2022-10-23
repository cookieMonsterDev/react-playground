import React, { useReducer } from 'react';

// useReducer - is a very useful hook for manage many states instage usage lot of useState hooks

const initState = {
  count1: 0,
  count2: 0,
};

const reducer = (state, actionType) => {
  switch (actionType) {
    case 'inc1':
      return { ...state, count1: state.count1 + 1 };
    case 'dec1':
      return { ...state, count1: state.count1 - 1 };
    case 'inc2':
      return { ...state, count2: state.count2 + 1 };
    case 'dec2':
      return { ...state, count2: state.count2 - 1 };
    default:
      throw new Error('No such option');
  }
};

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h2>count-1: {state.count1}</h2>
      <button onClick={() => dispatch('inc1')}>inc1</button>
      <button onClick={() => dispatch('dec1')}>dec1</button>
      <h2>count-2: {state.count2}</h2>
      <button onClick={() => dispatch('inc2')}>inc1</button>
      <button onClick={() => dispatch('dec2')}>dec1</button>
    </div>
  );
};

export default HookUseReducer;
