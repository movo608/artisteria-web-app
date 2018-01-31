import { combineReducers } from 'redux'

import test from './testReducer'
import getMentors from './getMentors'
import getOneMentor from './getMentorInfo'
import adaptNavbar from './changeNavbar'
import getArtists from './getArtists'
import getArtistInfo from './getArtistInfo'
import getPartners from './getPartners'
import submittedForm from './submittedForm'

const rootReducer = combineReducers({
	test,
	getMentors,
	getOneMentor,
	adaptNavbar,
	getArtists,
	getArtistInfo,
	getPartners,
	submittedForm
});

export default rootReducer;