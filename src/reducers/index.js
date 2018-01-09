import { combineReducers } from 'redux'

import test from './testReducer'
import getMentors from './getMentors'

const rootReducer = combineReducers({
	test,
	getMentors
});

export default rootReducer;