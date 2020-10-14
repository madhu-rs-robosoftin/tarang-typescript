/* eslint-disable */
import { createContext } from 'react';
import { userContextProps, languageContextProps } from './interface.model';
/*eslint-enable*/
interface Product {
  id: string;
  name: string;
}

export const UserContext = createContext<userContextProps>(
  {} as userContextProps,
);
export const ProductContext = createContext<Product | null>(null);
export const LanguageContext = createContext<languageContextProps>(
  {} as languageContextProps,
);
