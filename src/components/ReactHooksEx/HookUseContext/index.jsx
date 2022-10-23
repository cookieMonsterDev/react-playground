import React from 'react';
import { Context } from './Context';
import Element from './Element';

// Use context allows to reach prop from context in each element in context

const HookUseContext = () => {
  return (
    <Context>
      <Element />
    </Context>
  );
};

export default HookUseContext;
