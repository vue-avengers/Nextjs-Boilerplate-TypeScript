import React, { createContext, useContext } from 'react';

import { IContext } from '@/ts/interfaces';

const Context = createContext<Partial<IContext>>({});

export function ContextProvider({ children, ...props }: any) {
  return <Context.Provider value={{ ...props }}>{children}</Context.Provider>;
}

export function useAppContext() {
  const context = useContext(Context);
  return context;
}
