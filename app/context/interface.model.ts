/* eslint-disable */
export interface actionInterface {
  type: string;
  payload: Record<string, any>;
}

///////////     User Context start  /////////////
export interface userState {
  userInfo: Record<string, any>;
  isAuthenticated: boolean;
}
export interface userContextProps {
  state: userState;
  dispatch: {
    login: (email: string, password: string) => void;
    logout: () => void;
  };
}

/////////////   User Context end   /////////////////

///////////     Language Context start  /////////////
export interface languageState {
  language: Record<string, any>;
}
export interface languageContextProps {
  state: languageState;
  dispatch: {
    setLanguage: (lang: string) => void;
  };
}

/////////////   Language Context end   /////////////////
/*eslint-enable*/
