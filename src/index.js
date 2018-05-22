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
import Mentor from './containers/Mentor'
import AboutUs from './containers/AboutUs'
import AboutFestival from './containers/AboutFestival'
import Mentors from './containers/Mentors'
import Artist from './containers/Artist'
import Artists from './containers/Artists'
import Admin from './containers/Admin'

//import reducers
import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore (
    reducer,
	middleware,
	//applyMiddleware(logger)
);

render(
	<Provider store={ store }>
		<Router 
			forceRefresh={ false }>
			<div id="$_REACT_ROUTER __%PUBLIC%__">
				<Switch>
					<Route exact path='/' render={ () => <LandingLayout><Home/></LandingLayout> } />

					<Route exact path='/about/us' render={ () => <LandingLayout><AboutUs/></LandingLayout> } />
					<Route exact path='/about/festival' render={ () => <LandingLayout><AboutFestival/></LandingLayout> } />

					<Route path='/mentor/:id' render={ (props) => <LandingLayout><Mentor {...props}/></LandingLayout> } />
					<Route exact path='/mentors' render={ () => <LandingLayout><Mentors/></LandingLayout> } />

					<Route path='/artist/:id' render={ (props) => <LandingLayout><Artist {...props}/></LandingLayout> } />
					<Route exact path='/artists' render={ () => <LandingLayout><Artists /></LandingLayout> } />
					<Route exact path='/admin' render={ (props) => <LandingLayout><Admin {...props}/></LandingLayout> } />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);