import React, { useCallback, useState } from 'react';
import useAxios from '../components/ReactCustomHooksEx/HookUseAxios/index';

const TestPage = () => {
  const [state, setState] = useState(1);

  const { data, error, loading } = useAxios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts/${state}`,
  });

  return (
    <div>
      <div>{loading ? 'loading...' : data.title}</div>
      <button onClick={() => setState((prev) => prev + 1)}>plus 1</button>
    </div>
  );
};

export default TestPage;
