import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';


import App from './routes';
import configureStore from './store';
import "./normalizestyles.css"
import ErrorBoundary from './shared/components/errorboundary'


// Initial State can be passed here
const store = configureStore(preloadedState); 
Loadable.preloadReady().then(() => {
	ReactDOM.render(
			<BrowserRouter>
				<React.Fragment>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</React.Fragment>
			</BrowserRouter>,
		document.getElementById('root')
	);
});

