import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logger from 'redux-logger'

//import layouts
import LandingLayout from './layouts/LandingLayout'

//import containers
import Home from './containers/Home'

//import reducers
import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore (
    reducer,
    middleware,
	applyMiddleware(logger)
);

render(
	<Provider store={ store }>
		<Router>
			<div>
				<Switch>
					<Route exact path='/' render={ () => <LandingLayout><Home/></LandingLayout> } />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);