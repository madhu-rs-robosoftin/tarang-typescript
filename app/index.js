import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import App from './routes';
import configureStore from './store';
import GlobalStyle from './GlobalStyle';
import ErrorBoundary from './/ErrorBoundary';


// Initial State can be passed here
const store = configureStore(preloadedState); 
Loadable.preloadReady().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<React.Fragment>
					<GlobalStyle />
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</React.Fragment>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root')
	);
});

