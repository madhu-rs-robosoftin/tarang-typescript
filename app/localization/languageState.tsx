/* eslint-disable */
/*eslint-enable*/
import React, { useReducer, FC, ReactNode } from 'react';
import LanguageReducer from './languageReducer';
import { LanguageContext } from '../context/context';
import en from './en.json';
import fr from './fr.json';
import axios from 'axios';
import { CHANGE_LANGUAGE } from '../context/types';
interface LangStateProps {
  children: ReactNode;
}

const LanguageState: FC<LangStateProps> = ({ children }) => {
  const initialState = {
    language: en,
  };

  const [state, dispatch] = useReducer(LanguageReducer, initialState);
  const setLanguage = (lang: string) => {
    // API call can be set to get the data for selected language
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      console.log(res);
    });

    switch (lang) {
      case 'en':
        return dispatch({
          type: CHANGE_LANGUAGE,
          payload: en,
        });
      case 'fr':
        return dispatch({
          type: CHANGE_LANGUAGE,
          payload: fr,
        });

      default:
        return dispatch({
          type: CHANGE_LANGUAGE,
          payload: en,
        });
    }
  };

  return (
    <LanguageContext.Provider value={{ state, dispatch: { setLanguage } }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageState;
