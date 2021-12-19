import React, { createContext, useContext } from 'react';

// import { IContext } from '@/ts/interfaces';

// const GlobalContext = createContext<Partial<IContext>>({});
const GlobalContext = createContext({} as any);

export function GlobalProvider({ children, value }: any) {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}
