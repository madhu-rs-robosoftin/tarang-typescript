/* eslint-disable */
import React from 'react';
/*eslint-enable*/

import '@babel/polyfill';
// Import all the third party stuff

import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

// Using this instead of history object
// import { BrowserRouter } from 'react-router-dom';

import 'sanitize.css/sanitize.css';
import { HelmetProvider } from 'react-helmet-async';
// Import root app
import App from './components/index';
import UserState from './context/user/userState';
import LanguageState from './localization/languageState';

// Load the favicon and the .htaccess file
// TODO
// import '!file-loader?name=[name].[ext]!./assets/favicon.ico';

// TODO htacess later
// import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <HelmetProvider>
    <React.StrictMode>
      <UserState>
        <LanguageState>
          <Component />
        </LanguageState>
      </UserState>
    </React.StrictMode>
  </HelmetProvider>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time

  module.hot.accept(['components/index'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const App = require('./components/index.tsx');
    render(App);
  });
}

render(App);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
