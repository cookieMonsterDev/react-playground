import React, { useCallback, useState } from 'react';
import useFetch from '../Hooks/ReactCustomHooksEx/HookUseFetch';

const TestPage2 = () => {
  const [state, setState] = useState(1);

  const { data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${state}`);

  console.log(data)

  return (
    <div>
       <button onClick={() => setState((prev) => prev + 1)}>plus 1</button>
    </div>
  );
};

export default TestPage2;
