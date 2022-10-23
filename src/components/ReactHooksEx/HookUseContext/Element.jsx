import React from 'react';
import { useUpdateTheState, useTheState } from './Context';

const Element = () => {
  const state = useTheState();
  const action = useUpdateTheState();

  return (
    <div>
      <button onClick={action}> change state</button>
      <div>{state ? 'true' : 'false'}</div>
    </div>
  );
};

export default Element;
