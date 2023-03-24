import { createContext, useContext, useState } from 'react';

export const JcjuniorContext = createContext();
export const JcjuniorProvider = ({ children }) => {
  const [getJcjuniorContextValue, setJcjuniorConetxtValue] = useState('');
  return (
    <JcjuniorContext.Provider
      value={{ getJcjuniorContextValue, setJcjuniorConetxtValue }}
    >
      {children}
    </JcjuniorContext.Provider>
  );
};
export const useJcjuniorContex = () => {
  const context = useContext(JcjuniorContext);
  if (context === undefined) {
    throw new Error('JcjuniorContex must be used within a JcjuniorProvider');
  }
  return context;
};
