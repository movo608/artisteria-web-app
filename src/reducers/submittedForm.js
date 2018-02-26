export default function (state = {}, action) {
	switch (action.type) {
		case 'SUBMIT_FORM':
			state.submittedForm = action.payload.data;
			return { ...state }
		default: return state;
	}
}