import _ from 'lodash'

export default function(state = {}, action) {
	switch (action.type) {
		case 'GET_MENTORS':
			state.mentors = _.mapKeys(action.payload.data.data, 'id');
			return { ...state };
		default:
			return state;
	}
}