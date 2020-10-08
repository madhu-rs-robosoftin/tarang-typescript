
import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const HomePage = Loadable({
	loader: () => import('./components/pages/homepage'),
	loading: () => <p>Loading...</p>
});

const App = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
	</Switch>
);

export default hot(module)(App);