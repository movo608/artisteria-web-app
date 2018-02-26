import axios from 'axios'

// import api url
import { API } from '../constants/RootURls'

//import action types
import {
	GET_MENTORS,
	GET_MENTOR_INFO,
	CHANGE_NAVBAR,
	REVERT_NAVBAR,
	GET_ARTISTS,
	GET_ARTIST_INFO,
	GET_PARTNERS,
	SUBMIT_FORM,
	GET_TESTIMONIALS
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

export const getMentorInfo = (id) => {
	return async (dispatch) => {
		axios.get(`${API}get-mentor?id=${id}`)
			.then(response => dispatch(dispatchGetMentorInfo(response)));
	}
}

const dispatchGetMentorInfo = (data) => {
	return {
		type: GET_MENTOR_INFO,
		payload: data
	}
}

export const changeNavbar = () => {
	return async (dispatch) => {
		dispatch(dispatchChangeNavbar());
	}
}

const dispatchChangeNavbar = () => {
	return {
		type: CHANGE_NAVBAR,
		payload: null
	}
}

export const revertNavbar = () => {
	return async (dispatch) => {
		dispatch(dispatchRevertNavbar());
	}
}

const dispatchRevertNavbar = () => {
	return {
		type: REVERT_NAVBAR,
		payload: null
	}
}

export const getArtists = () => {
	return async (dispatch) => {
		axios.get(`${API}get-artists`)
			.then((response) => dispatch(dispatchGetArtists(response)));
	}
}

const dispatchGetArtists = (data) => {
	return {
		type: GET_ARTISTS,
		payload: data
	}
}

export const getArtistInfo = (id) => {
	return async (dispatch) => {
		axios.get(`${API}get-artist?id=${id}`)
			.then((response) => dispatch(dispatchGetArtistInfo(response)));
	}
}

const dispatchGetArtistInfo = (data) => {
	return {
		type: GET_ARTIST_INFO,
		payload: data
	}
}

export const getPartners = () => {
	return async (dispatch) => {
		axios.get(`${API}get-partners`)
			.then((response) => dispatch(dispatchGetPartners(response)));
	}
}

const dispatchGetPartners = (data) => {
	return {
		type: GET_PARTNERS,
		payload: data
	}
}

export const submitForm = (values) => {
	return async (dispatch) => {
		axios({
			headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `${API}submit`,
            params: values
		}).then((response) => dispatch(dispatchSubmitForm(response)));
	}
}

const dispatchSubmitForm = (data) => {
	return {
		type: SUBMIT_FORM,
		payload: data
	}
}

export const getTestimonials = () => {
	return async (dispatch) => {
		axios.get(`${API}get-testimonials`)
			.then((response) => dispatch(dispatchGetTestimonials(response)));
	}
}

const dispatchGetTestimonials = (data) => {
	return {
		type: GET_TESTIMONIALS,
		payload: data
	}
}