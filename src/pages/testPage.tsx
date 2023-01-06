import React, { useState } from 'react';
import useAxios from '../components/ReactCustomHooksEx/HookUseAxios/index';

interface Data {
  title: string
}

const TestPage = () => {
  const [state, setState] = useState(100);

  const { data, error, loading } = useAxios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts/${state}`,
  });

  return (
    <div>
      <div>{loading ? 'loading...' : (data as Data).title}</div>
      <br />
      <div>{error ? 'some error' : 'no error'}</div>
      <br />
      <button onClick={() => setState((prev) => prev + 1)}>+1</button>
      <button onClick={() => setState((prev) => prev - 1)}>-1</button>
    </div>
  );
};

export default TestPage;
