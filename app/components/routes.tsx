import * as React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Homepage from './organisms/homepage';
import { Helmet } from 'react-helmet-async';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Helmet titleTemplate="%s - Tarang" defaultTitle="React Boilerplate">
          <meta name="description" content="Tarang"/>
        </Helmet>
      </BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  )};

