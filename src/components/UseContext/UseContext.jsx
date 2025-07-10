import { createContext, useReducer, useState } from 'react';
import { initialState, reducer } from '../UseReducer/UseReducer';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: 'ADD_USER', payload: newUser });
    },
  };
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
