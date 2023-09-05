import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti
        expedita natus. Mollitia ea autem iusto veniam cupiditate dignissimos
        dolorem iste. Aliquid nisi mollitia reprehenderit aperiam ab, asperiores
        ullam quia?
      </div>
    </>
  );
}

export default App;
