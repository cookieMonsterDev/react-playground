import React from 'react';

const Display = (props) => {
  console.log(`${props.name} display Render`);
  return (
    <>
      <h3>{props.name}</h3>
      <span>{props.value}</span>
    </>
  );
};

export default React.memo(Display);
