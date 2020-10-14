/* eslint-disable */

import React, { useReducer, FC, ReactNode } from 'react';
/*eslint-enable*/
import { UserContext } from '../context';
import userReducer from './userReducer';
import { LOGIN, LOGOUT } from '../types';
import axios from 'axios';
interface LangStateProps {
  children: ReactNode;
}

const UserState: FC<LangStateProps> = ({ children }) => {
  const initialState = {
    userInfo: {},
    isAuthenticated: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (email: string, password: string) => {
    console.log(email, password);
    // API CALL

    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      console.log(res);
    });

    return dispatch({
      type: LOGIN,
      payload: { userInfo: { id: 123, name: 'Narinder' } },
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
      payload: { data: null },
    });
  };

  return (
    <UserContext.Provider value={{ state, dispatch: { login, logout } }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
