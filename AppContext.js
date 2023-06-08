import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const value = {
    count,
    incrementCount,
    decrementCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
