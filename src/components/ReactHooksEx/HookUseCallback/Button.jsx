import React from 'react';

const Button = (props) => {
  console.log(`${props.name} button Render`);

  return <button onClick={props.action}>{props.name}</button>;
};

export default React.memo(Button);
