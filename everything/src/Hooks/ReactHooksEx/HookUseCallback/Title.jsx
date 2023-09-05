import React from 'react';

const Title = (props) => {
  console.log(`title Render`);

  return <h1>{props.text}</h1>;
};

export default React.memo(Title);
