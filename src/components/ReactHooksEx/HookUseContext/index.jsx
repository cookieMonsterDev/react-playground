import React from 'react';
import { Context } from './Context';
import Element from './Element';

const HookUseContext = () => {
  return (
    <Context>
      {/* <button onClick={action}> change state</button>
      <div>{state ? 'true' : 'false'}</div> */}
      <Element />
    </Context>
  );
};

export default HookUseContext;
