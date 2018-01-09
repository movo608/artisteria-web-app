import axios from 'axios'

// import api url
import { API } from '../constants/RootURls'

//import action types
import {
	GET_MENTORS
} from '../constants/ActionTypes'

export const getMentors = () => {
	return async (dispatch) => {
		axios.get(`${API}get-mentors`)
			.then(response => dispatch(dispatchMentors(response)));
	}
}

const dispatchMentors = (data) => {
	return {
		type: GET_MENTORS,
		payload: data
	}
}