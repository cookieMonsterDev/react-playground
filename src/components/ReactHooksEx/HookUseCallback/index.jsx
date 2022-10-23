import React, { useState, useCallback } from 'react';
import Button from './Button';
import Display from './Display';
import Title from './Title';

// React.memo() - use to prevent render in case if props has not changed;

// useCallback - use to remeber function in case of re-render of parent element;

const HookUseCallback = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Title text="useCallback Hook" />
      <Display name="counter1" value={counter1} />
      <Button name="counter1 inc" action={handleClick1} />
      <Display name="counter2" value={counter2} />
      <Button name="counter2 inc" action={handleClick2} />
    </div>
  );
};

export default HookUseCallback;
