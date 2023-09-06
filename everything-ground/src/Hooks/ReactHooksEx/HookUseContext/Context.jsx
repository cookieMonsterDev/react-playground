import { useContext, createContext, useState } from 'react';

const StateContext = createContext();
const UpdateStateContext = createContext();

export const useTheState = () => useContext(StateContext);
export const useUpdateTheState = () => useContext(UpdateStateContext);

export const Context = ({ children }) => {
  const [isOn, setOn] = useState(true);

  const handleChange = () => {
    setOn((prev) => !prev);
  };

  return (
    <StateContext.Provider value={isOn}>
      <UpdateStateContext.Provider value={handleChange}>
        {children}
      </UpdateStateContext.Provider>
    </StateContext.Provider>
  );
};
