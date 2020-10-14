/* eslint-disable */
import React from 'react';
/*eslint-enable*/
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './organisms/homepage';
import { Helmet } from 'react-helmet-async';
import UserState from '../context/user/userState';
import LanguageState from 'app/localization/languageState';

export default function Routes() {
  return (
    <>
      <UserState>
        <LanguageState>
          <BrowserRouter>
            <Helmet
              titleTemplate="%s - Tarang"
              defaultTitle="React Boilerplate"
            >
              <meta name="description" content="Tarang" />
            </Helmet>
          </BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </LanguageState>
      </UserState>
    </>
  );
}
