import React, { useContext, createContext, useReducer } from 'react';

export default function useCreateContext<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
  const stateCtx = createContext(initialState);
  const dispatchCtx = createContext(defaultDispatch);

  function useStateCtx<K extends keyof StateType>(property?: K) {
    const state = useContext(stateCtx);

    return property ? state[property] : state;
  }

  function useDispatchCtx() {
    return useContext(dispatchCtx);
  }

  const Provider = (props: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
      reducer,
      initialState
    );

    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  };

  return [useStateCtx, useDispatchCtx, Provider];
}
