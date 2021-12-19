import React, { createContext, useContext } from 'react';

// import { IContext } from '@/ts/interfaces';

// const GlobalContext = createContext<Partial<IContext>>({});
const GlobalContext = createContext({} as any);

export function GlobalProvider({ children, ...props }: any) {
  return (
    <GlobalContext.Provider value={{ ...props }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}
