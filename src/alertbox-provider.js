import React, {useContext, useReducer} from 'react';
import Alertbox from './alertbox';
import {generateRandomInt} from './utils/index';

export const Context = React.createContext();

export const AlertBoxProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_ALERT':
        return [...state, {...action.payload}];
      case 'REMOVE_ALERT':
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);
  return (
    <Context.Provider value={dispatch}>
      {children}
      {state?.map((item) => (
        <Alertbox
          key={item.id}
          title={item?.title}
          paragraph={item?.message}
          actions={item?.actions}
          fields={item?.fields}
          dispatchRemove={() => dispatch({type: 'REMOVE_ALERT', id: item.id})}
        />
      ))}
    </Context.Provider>
  );
};

export const useAlertBox = () => {
  const dispatch = useContext(Context);
  return {
    fire: (props) => {
      dispatch({
        type: 'ADD_ALERT',
        payload: {id: generateRandomInt(), ...props},
      });
    },
  };
};
