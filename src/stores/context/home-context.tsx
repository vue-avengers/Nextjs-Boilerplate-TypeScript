import useCreateContext from '@/hooks/use-create-context';

type StateType<T, K> = {
  menuData?: Array<T>;
  sidebarData?: Array<K>;
};

const initialState: StateType<string, object> = {
  menuData: [''],
  sidebarData: [
    {
      id: 1,
      name: '',
      description: '',
      img: '',
    },
  ],
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_MENU_DATA':
      return {
        ...state,
        menuData: action.payload,
      };
    case 'SET_SIDEBAR_DATA':
      return {
        ...state,
        sidebarData: action.payload,
      };

    default: {
      return state;
    }
  }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, dispatch, provider] = useCreateContext(reducer, initialState);
export const useHomeState = state;
export const useHomeDispatch = dispatch;
export const HomeProvider = provider;
